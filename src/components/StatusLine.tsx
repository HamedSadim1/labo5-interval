import { ReactNode } from "react";

interface StatusLineProps {
  children: ReactNode;
  /** Optional ARIA live region role, e.g. "status" */
  role?: string;
}

export const StatusLine = ({ children, role }: StatusLineProps) => (
  <div className="mb-6 mt-6 text-center text-sm" role={role}>
    {children}
  </div>
);
