interface TextContentTitleProps {
  className?: string;
  subtitle?: string;
  title?: string;
  hasSubtitle?: boolean;
}

export default function TextContentTitle({
  className = "",
  subtitle = "Politics doesn't just take your money.\nIt takes your time.",
  title = "Time-Cost",
  hasSubtitle = true,
}: TextContentTitleProps) {
  return (
    <div
      className={`flex flex-col items-center gap-space-200 text-center text-title-hero-size text-text-utilities-text-on-overlay font-title-hero-font-family ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[length:inherit] tracking-num--0_03 leading-[120%] font-title-hero-font-weight font-inherit">
        {title}
      </h1>
      {!!hasSubtitle && (
        <div className="self-stretch relative text-subtitle-size-base tracking-[-0.03px] leading-[120%]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
