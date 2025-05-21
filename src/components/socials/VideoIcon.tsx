import { IconVideo } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";

interface IIcon {
  link: string;
}

export const VideoIcon: React.FC<IIcon> = ({link}) => (
  <IconWrapper href={link} IconComponent={IconVideo} />
);

export default VideoIcon;
