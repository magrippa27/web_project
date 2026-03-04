interface TextListItemProps {
  className?: string;
  text?: string;
  showTextListItem?: boolean;
}

export default function TextListItem({
  className = "",
  text = "Your age: 23",
  showTextListItem = true,
}: TextListItemProps) {
  if (!showTextListItem) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-center shrink-0 text-left text-body-size-medium text-text-default-secondary font-body-font-family ${className}`}
    >
      <div className="relative leading-[140%]">{text}</div>
    </div>
  );
}
