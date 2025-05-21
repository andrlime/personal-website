import { IconVideo } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";

interface IIcon {
  link: string;
  bordered?: boolean;
  size?: string;
}

export const VideoIcon: React.FC<IIcon> = ({link, bordered = false, size = "1.9rem"}) => (
  <span className={bordered ? "bordered" : ""}>
    <IconWrapper href={link} IconComponent={IconVideo} size={size} />
  </span>
);

export default VideoIcon;
