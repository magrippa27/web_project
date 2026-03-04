import { NavLink } from "react-router-dom";

interface NavigationPillProps {
  to: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
}

export default function NavigationPill({ to, label, className = "", onNavigate }: NavigationPillProps) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        `rounded-radius-200 flex items-center justify-center p-space-200 text-left text-body-size-medium font-body-font-family transition-colors hover:bg-background-default-secondary ${isActive ? "bg-background-default-secondary text-text-default-default" : "text-text-default-default"} ${className}`
      }
    >
      <span className="relative leading-[100%]">{label}</span>
    </NavLink>
  );
}
