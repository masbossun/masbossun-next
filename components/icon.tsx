import { FC, SVGAttributes } from "react";

export type IconNames =
  | "masbossun_menu"
  | "masbossun_times"
  | "twitter_solid"
  | "instagram_alt_solid"
  | "linkedin_solid"
  | "github_solid"
  | "sun"
  | "moon";

const Icon: FC<{
  icon: IconNames;
  className?: SVGAttributes<SVGSVGElement>["className"];
  width: number;
  height: number;
}> = ({ icon, className, width, height }) => {
  return (
    <svg className={`fill-current ${className}`}>
      <use
        xlinkHref={`/images/icons.svg#${icon}`}
        width={width}
        height={height}
      />
    </svg>
  );
};

export default Icon;
