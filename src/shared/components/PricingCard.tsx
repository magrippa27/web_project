import { CSSProperties, useMemo } from "react";
import TextHeading from "./TextHeading";
import TextList from "./TextList";

interface PricingCardProps {
  className?: string;
  showTop?: boolean;
  showTextList?: boolean;
  text?: string;
  textHeadingMargin?: CSSProperties["margin"];
  pricingCardFlex?: CSSProperties["flex"];
  pricingCardMinWidth?: CSSProperties["minWidth"];
  pricingCardHeight?: CSSProperties["height"];
}

export default function PricingCard({
  className = "",
  showTop = true,
  showTextList = true,
  text = "Title",
  textHeadingMargin,
  pricingCardFlex,
  pricingCardMinWidth,
  pricingCardHeight,
}: PricingCardProps) {
  const pricingCardStyle: CSSProperties = useMemo(
    () => ({
      flex: pricingCardFlex,
      minWidth: pricingCardMinWidth,
      height: pricingCardHeight,
    }),
    [pricingCardFlex, pricingCardMinWidth, pricingCardHeight]
  );

  return (
    <div
      className={`h-[296px] flex-1 rounded-radius-200 bg-background-default-default border-border-default-default border-solid border-stroke-border box-border overflow-hidden flex flex-col items-center p-space-800 gap-space-600 min-w-[240px] shrink-0 text-left text-heading-size-base text-icon-default-default font-heading-font-family ${className}`}
      style={pricingCardStyle}
    >
      {showTop && (
        <div className="w-full flex flex-col items-center justify-end gap-space-400 max-w-full shrink-0">
          <TextHeading text={text} textHeadingMargin={textHeadingMargin} />
          {showTextList && (
            <TextList hasTitle={false} textListAlignSelf="stretch" />
          )}
        </div>
      )}
      <div className="w-num-236 rounded-radius-200 bg-background-brand-default border-border-brand-default border-solid border-stroke-border box-border overflow-hidden hidden items-center justify-center p-space-300 gap-space-200 shrink-0 text-body-size-medium text-background-default-secondary">
        <div className="relative leading-[100%]">Button</div>
      </div>
    </div>
  );
}
