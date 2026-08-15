const SAMPLE_RATE = 44100;

let audioElement: HTMLAudioElement | null = null;

/** Synthesize a short two-tone "ding-dong" chime as a WAV data URI */
const createChimeDataUri = (): string => {
  const duration = 0.45;
  const sampleCount = Math.floor(SAMPLE_RATE * duration);
  const dataSize = sampleCount * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, value: string) => {
    for (let i = 0; i < value.length; i++) {
      view.setUint8(offset + i, value.charCodeAt(i));
    }
  };

  // WAV (PCM, mono, 16-bit) header
  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, SAMPLE_RATE, true);
  view.setUint32(28, SAMPLE_RATE * 2, true); // byte rate
  view.setUint16(32, 2, true); // block align
  view.setUint16(34, 16, true); // bits per sample
  writeString(36, "data");
  view.setUint32(40, dataSize, true);

  const tones = [
    { start: 0.05, frequency: 880, seconds: 0.18 },
    { start: 0.25, frequency: 660, seconds: 0.18 },
  ];

  for (let i = 0; i < sampleCount; i++) {
    const time = i / SAMPLE_RATE;
    let sample = 0;
    for (const tone of tones) {
      const local = time - tone.start;
      if (local >= 0 && local < tone.seconds) {
        const envelope =
          Math.min(1, local / 0.01) * (1 - local / tone.seconds);
        sample += Math.sin(2 * Math.PI * tone.frequency * time) * envelope;
      }
    }
    view.setInt16(44 + i * 2, Math.round(sample * 0.4 * 32767), true);
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:audio/wav;base64,${btoa(binary)}`;
};

const getAudioElement = (): HTMLAudioElement | null => {
  if (typeof window === "undefined") return null;
  if (!audioElement) {
    audioElement = new Audio(createChimeDataUri());
    audioElement.preload = "auto";
  }
  return audioElement;
};

/**
 * Unlock audio playback from a user gesture. Plays the chime muted once so the
 * browser marks the element as allowed to play — later plays work even from a
 * background tab or a non-gesture timer tick.
 */
export const unlockAudio = (): void => {
  const audio = getAudioElement();
  if (!audio) return;
  audio.muted = true;
  void audio
    .play()
    .then(() => {
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    })
    .catch(() => {
      audio.muted = false;
    });
};

/** Play the completion chime */
export const playAlert = (): void => {
  const audio = getAudioElement();
  if (!audio) return;
  audio.muted = false;
  audio.currentTime = 0;
  void audio.play().catch(() => {
    // Playback blocked — the browser notification still fires as a fallback
  });
};
