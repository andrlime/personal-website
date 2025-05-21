import { IconFileCv } from "@tabler/icons-react";
import IconWrapper from "./IconWrapper";
import { RESUME_LINK } from "@/data/navigation.ts";

export const ResumeIcon = () => (
  <IconWrapper href={RESUME_LINK} IconComponent={IconFileCv} />
);

export default ResumeIcon;
