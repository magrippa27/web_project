import CoverImage from "../../assets/widget-cover@2x.png";
import LogoImage from "../../assets/logo@2x.png";
import PlayerControlImage from "../../assets/player-control@2x.png";
import MoreIcon from "../../assets/more-icon.svg";
import PlayButton from "../../assets/widget-play-button.svg";

interface SpotifyPodcastWidgetProps {
  className?: string;
}

export default function SpotifyPodcastWidget({
  className = "",
}: SpotifyPodcastWidgetProps) {
  return (
    <div
      className={`h-40 flex-1 rounded-xl bg-gray-100 overflow-hidden flex flex-col items-start p-2 box-border z-[0] text-left text-[13px] text-background-default-default font-helvetica-neue ${className}`}
    >
      <div className="self-stretch flex items-start gap-2">
        <div className="h-[104px] w-[104px] relative shadow-[0px_0px_29px_rgba(0,0,0,0.1),0px_9px_9px_rgba(0,0,0,0.1)] rounded-num-4 flex items-center justify-center">
          <img
            className="h-full w-full shadow-[0px_0px_29px_rgba(0,0,0,0.1),0px_9px_9px_rgba(0,0,0,0.1)] object-contain absolute left-0 top-0 scale-[1.558]"
            alt=""
            src={CoverImage}
          />
        </div>
        <div className="h-[104px] flex-1 flex flex-col items-start gap-2.5">
          <img
            className="self-stretch h-5 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={LogoImage}
          />
          <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-col items-start py-0 pl-0 pr-1 box-border gap-1">
              <b className="w-[388px] relative tracking-[-0.01em] leading-[16px] hidden">
                Episode Title
              </b>
              <div className="relative leading-[16px] hidden">Podcast Name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-start gap-4 text-right text-[14px]">
        <div className="self-stretch flex-1 relative">
          <div className="absolute inset-x-0 bottom-[-7px] h-7 flex items-end">
            <img
              className="flex-1 max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src={PlayerControlImage}
            />
            <div className="flex items-start py-1 px-4">
              <div className="relative tracking-[-0.02em] leading-[16px]">
                00:00
              </div>
            </div>
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src={MoreIcon}
            />
          </div>
        </div>
        <button className="h-[30px] w-[30px] relative shadow-[0px_2px_4px_rgba(0,0,0,0.25)] rounded-[20px]">
          <img
            className="h-full w-full"
            alt=""
            src={PlayButton}
          />
        </button>
      </div>
    </div>
  );
}
