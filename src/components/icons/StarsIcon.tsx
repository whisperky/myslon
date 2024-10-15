import { Icon, IconProps } from "@chakra-ui/react";

interface StarsIconProps extends IconProps {
  liked: boolean;
}

export function StarsIcon({ liked, ...props }: StarsIconProps) {
  return (
    <Icon
      position="absolute"
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        strokeWidth="2"
        fill={liked ? "#EFEFE5" : "none"}
        stroke="#EFEFE5"
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      />
    </Icon>
  );
}
