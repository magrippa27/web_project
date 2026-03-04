import { useMemo, ReactNode } from "react";

interface StarProps {
  className?: string;
  size?: string;
  state?: string;
  variant?: string;
  label?: string;
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  starPosition?: React.CSSProperties["position"];
  starTop?: string;
  starLeft?: string;
  starWidth?: string;
  starHeight?: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  iconStart1?: ReactNode;
}

export default function Star({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  label = "Button",
  hasIconEnd = false,
  hasIconStart = false,
  starPosition,
  starTop,
  starLeft,
  starWidth,
  starHeight,
  iconEnd,
  iconStart,
  iconStart1,
}: StarProps) {
  const starStyle = useMemo(
    () => ({
      position: starPosition,
      top: starTop,
      left: starLeft,
      width: starWidth,
      height: starHeight,
    }),
    [starPosition, starTop, starLeft, starWidth, starHeight]
  );

  return (
    <button
      type="button"
      className={`rounded-lg border-2 border-neutral-800 bg-neutral-900 text-white shadow-md transition-colors hover:bg-black hover:border-black focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 overflow-hidden flex items-center justify-center px-5 py-3 gap-2 text-left text-body-size-medium font-body-font-family font-medium cursor-pointer ${className}`}
      style={starStyle}
    >
      {iconStart1}
      <span className="relative leading-[100%] shrink-0">{label}</span>
      {iconEnd}
    </button>
  );
}
