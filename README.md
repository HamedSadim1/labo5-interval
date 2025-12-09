# ⏱️ Interval Dashboard

Een moderne, responsive React-applicatie voor tijdbeheer met verschillende timer functionaliteiten. Gebouwd met Vite, TypeScript en Tailwind CSS voor optimale prestaties en gebruikerservaring.

![Interval Dashboard Preview](./public/screenshot.png)

## ✨ Features

### Timer Functionaliteiten

- **⏱️ Stopwatch**: Klassieke stopwatch voor tijdmeting
- **⏳ Countdown Timer**: Configureerbare afteltimer met alarm
- **🔄 Interval Timer**: Herhalende intervallen met notificaties
- **🍅 Pomodoro Timer**: Focus/break sessies volgens Pomodoro techniek
- **🕐 Current Time**: Live tijdweergave
- **🎲 Random Values**: Dynamische willekeurige getallen

### Gebruikerservaring

- **📱 Fully Responsive**: Optimaal op alle apparaten
- **🌈 Glasmorphism Design**: Moderne glazen UI effecten
- **🎨 Tailwind CSS**: Utility-first styling
- **⚡ Vite**: Bliksemsnelle development en builds
- **🔧 TypeScript**: Type-safe development
- **🔔 Browser Notifications**: Systeem notificaties voor timers

## 🚀 Live Demo

[🔗 Bekijk de live demo](https://interval-dashboard.vercel.app)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Programming Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (versie 16 of hoger)
- npm of yarn

## 🔧 Installatie

1. **Clone de repository**

   ```bash
   git clone https://github.com/HamedSadim1/labo5-interval.git
   cd labo5-interval
   ```

2. **Installeer dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   [http://localhost:5173](http://localhost:5173)

## 📖 Gebruik

### Stopwatch

- Klik op **Start** om te beginnen met tellen
- Klik op **Stop** om te pauzeren
- Klik op **Reset** om terug te zetten naar 00:00

### Countdown Timer

- Voer de gewenste tijd in seconden in
- Klik op **Start** voor aftellen
- Klik op **Pause** om te pauzeren
- Klik op **Reset** om te herstellen

### Interval Timer

- Stel interval tijd in minuten in
- Start voor herhalende notificaties
- Automatische cycle tracking

### Pomodoro Timer

- 25 minuten focus tijd
- 5 minuten break tijd
- Automatische wisseling tussen sessies

## 🏗️ Project Structuur

```bash
src/
├── components/           # Herbruikbare UI componenten
│   ├── Button.tsx       # Universele button component
│   ├── Card.tsx         # Glasmorphism card container
│   ├── TitleWithIcon.tsx # Titel component met icoon
│   ├── Timer.tsx        # Stopwatch component
│   ├── CountdownTimer.tsx # Afteltimer component
│   ├── IntervalTimer.tsx  # Interval timer component
│   ├── PomodoroTimer.tsx  # Pomodoro timer component
│   ├── CurrentTime.tsx    # Live tijd component
│   ├── RandomValue.tsx    # Random generator component
│   ├── Header.tsx         # App header
│   ├── Footer.tsx         # App footer
│   └── DashboardGrid.tsx  # Responsive grid layout
├── hooks/               # Custom React hooks
│   ├── useTimer.ts      # Stopwatch logica
│   ├── useCountdownTimer.ts # Countdown logica
│   ├── useIntervalTimer.ts  # Interval logica
│   └── usePomodoroTimer.ts  # Pomodoro logica
├── utils/               # Utility functies
│   └── formatTime.ts    # Tijd formatting utility
└── App.tsx              # Hoofdcomponent
```

## 🎯 Scripts

```bash
# Development server starten
npm run dev

# Productie build maken
npm run build

# Preview van productie build
npm run preview

# TypeScript type checking
npm run type-check

# Linting uitvoeren
npm run lint

# Code formatting met Prettier
npm run format
```

## 🎨 Design Systeem

### Kleurenpalet

- **Primaire**: Blauwe gradienten (`from-cyan-400 via-blue-500 to-purple-600`)
- **Accent**: Glasmorphism effecten met `bg-white/10` en `backdrop-blur-lg`
- **Tekst**: Witte tekst met schaduwen voor contrast

### Componenten

- **Cards**: Minimale hoogte 380px, breedte 300px minimum
- **Buttons**: Vaste hoogte 48px, minimum breedte 100px
- **Typography**: Monospace fonts voor timers, sans-serif voor UI

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

### Development Richtlijnen

- Gebruik TypeScript voor type safety
- Volg de DRY principes (Don't Repeat Yourself)
- Gebruik semantische commit messages
- Test je code voordat je commit

## 📄 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 🙏 Erkenningen

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Programming language

## 📞 Contact

Hamed Sadim

- GitHub: [@HamedSadim1](https://github.com/HamedSadim1)
- Project Link: [https://github.com/HamedSadim1/labo5-interval](https://github.com/HamedSadim1/labo5-interval)

---

⭐ **Geef een ster als je dit project nuttig vindt!** ⭐
