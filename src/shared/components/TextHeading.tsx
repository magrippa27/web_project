import { CSSProperties, useMemo } from "react";

interface TextHeadingProps {
  className?: string;
  text?: string;
  textHeadingMargin?: CSSProperties["margin"];
}

export default function TextHeading({
  className = "",
  text = "Title",
  textHeadingMargin,
}: TextHeadingProps) {
  const textHeadingStyle: CSSProperties = useMemo(
    () => ({
      margin: textHeadingMargin,
    }),
    [textHeadingMargin]
  );

  return (
    <div
      className={`w-num-149 h-num-29 flex items-start text-center text-heading-size-base text-icon-default-default font-heading-font-family ${className}`}
    >
      <h3
        className="m-0 flex-1 relative text-[length:inherit] tracking-num--0_02 leading-[120%] font-heading-font-weight font-inherit"
        style={textHeadingStyle}
      >
        {text}
      </h3>
    </div>
  );
}
