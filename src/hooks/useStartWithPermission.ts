import { useCallback } from "react";
import { startWithPermission } from "@/utils";

/** Memoizes a start action that first requests notification permission and unlocks audio */
export const useStartWithPermission = (start: () => void) =>
  useCallback(() => startWithPermission(start), [start]);
