import { FC, SVGAttributes } from "react";

export type IconNames =
  | "masbossun_menu"
  | "masbossun_times"
  | "twitter_solid"
  | "instagram_alt_solid"
  | "linkedin_solid"
  | "github_solid";

const Icon: FC<{
  icon: IconNames;
  className?: SVGAttributes<SVGSVGElement>["className"];
}> = ({ icon, className }) => {
  return (
    <svg className={`fill-current ${className}`}>
      <use xlinkHref={`/images/icons.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
