import { useMemo } from "react";
import DragIcon from "../../assets/Drag.svg";

interface TextareaFieldProps {
  className?: string;
  error?: string;
  description?: string;
  label?: string;
  hasDescription?: boolean;
  hasError?: boolean;
  hasLabel?: boolean;
  state?: string;
  valueType?: string;
  textareaFieldTop?: string;
  textareaFieldLeft?: string;
  textareaFieldHeight?: string;
}

export default function TextareaField({
  className = "",
  error = "Hint",
  description = "Description",
  label = "Age",
  hasDescription = false,
  hasError = false,
  hasLabel = true,
  state: _state,
  valueType: _valueType,
  textareaFieldTop,
  textareaFieldLeft,
  textareaFieldHeight,
}: TextareaFieldProps) {
  const textareaFieldStyle = useMemo(
    () => ({
      top: textareaFieldTop,
      left: textareaFieldLeft,
      height: textareaFieldHeight,
    }),
    [textareaFieldTop, textareaFieldLeft, textareaFieldHeight]
  );

  return (
    <div
      className={`absolute top-[990px] left-[202px] w-[374px] h-[88px] flex flex-col items-start gap-space-200 text-left text-body-size-medium text-text-default-secondary font-body-font-family ${className}`}
      style={textareaFieldStyle}
    >
      {!!hasLabel && (
        <label className="self-stretch relative leading-[140%] text-text-default-default shrink-0 font-medium text-[15px]">
          {label}
        </label>
      )}
      {!!hasDescription && (
        <div className="w-60 relative leading-[140%] shrink-0 text-text-default-secondary text-sm">
          {description}
        </div>
      )}
      <div className="self-stretch rounded-lg border-2 border-border-default-default bg-background-default-default shadow-sm transition-colors focus-within:border-border-neutral-secondary focus-within:ring-2 focus-within:ring-border-default-default/25 focus-within:ring-offset-0 box-border overflow-hidden flex items-start py-3 px-4 relative isolate min-w-[120px] min-h-[80px] shrink-0">
        <input
          className="w-[calc(100%-38.6px)] border-none outline-none font-body-font-family text-body-size-medium bg-transparent flex-1 relative leading-[140%] text-text-default-default text-left inline-block z-0 shrink-0 placeholder:text-text-default-secondary"
          placeholder="Testing"
          type="text"
        />
        <img
          className="h-[6.6px] w-[6.6px] absolute right-[6px] bottom-[7px] z-[1] shrink-0 opacity-60 dark:invert"
          alt=""
          src={DragIcon}
        />
      </div>
      {!!hasError && (
        <div className="w-60 relative leading-[140%] shrink-0">{error}</div>
      )}
    </div>
  );
}
