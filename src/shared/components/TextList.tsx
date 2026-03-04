import { CSSProperties, useMemo, useState } from "react";
import TextListItem from "./TextListItem";

interface TextListProps {
  className?: string;
  hasTitle?: boolean;
  textListAlignSelf?: CSSProperties["alignSelf"];
  textListWidth?: CSSProperties["width"];
}

export default function TextList({
  className = "",
  hasTitle = false,
  textListAlignSelf,
  textListWidth,
}: TextListProps) {
  const textListStyle: CSSProperties = useMemo(
    () => ({
      alignSelf: textListAlignSelf,
      width: textListWidth,
    }),
    [textListAlignSelf, textListWidth]
  );

  const [items] = useState([
    { text: "Your age: 23", show: true },
    { text: "List item", show: true },
    { text: "List item", show: true },
    { text: "List item", show: true },
    { text: "List item", show: true },
  ]);

  return (
    <div
      className={`self-stretch flex flex-col items-start gap-space-300 text-left text-body-size-medium text-icon-default-default font-body-font-family ${className}`}
      style={textListStyle}
    >
      {hasTitle && (
        <div className="w-num-89 flex flex-col items-start pt-0 px-0 pb-space-400 box-border shrink-0">
          <div className="self-stretch flex items-start">
            <div className="relative leading-[140%] font-body-font-weight-strong">
              Text Strong
            </div>
          </div>
        </div>
      )}
      {items.map((item, index) => (
        <TextListItem
          key={index}
          text={item.text}
          showTextListItem={item.show}
        />
      ))}
    </div>
  );
}
