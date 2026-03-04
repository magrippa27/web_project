import HeroImage from "../../assets/Hero-Image@2x.png";

interface HeroImageIconProps {
  className?: string;
  platform?: string;
  align?: string;
  hasSubtitle?: boolean;
}

export default function HeroImageIcon({
  className = "",
  platform = "Desktop",
  align,
  hasSubtitle,
}: HeroImageIconProps) {
  return (
    <img
      className={`absolute top-[66px] left-0 w-[1440px] h-[535px] object-cover ${className}`}
      alt=""
      src={HeroImage}
    />
  );
}
