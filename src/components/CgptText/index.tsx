import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface CgptTextProps extends TextProps {
  isGradientText?: boolean;
  uppercase?: boolean;
}

export default function CgptText({
  isGradientText,
  uppercase,
  children,
  ...props
}: CgptTextProps) {
  const textProps = isGradientText
    ? {
        background:
          "linear-gradient(to right, rgba(71, 178, 255, 1), rgba(57, 237, 172, 1))",
        backgroundClip: "text",
        color: "transparent",
      }
    : {};
  return (
    <Text
      fontFamily="'Roboto Mono', monospace"
      fontSize={{ md: "14px", base: "12px" }}
      fontStyle="normal"
      fontWeight="400"
      lineHeight="16px"
      textTransform={uppercase ? "uppercase" : "none"}
      {...textProps}
      {...props}
    >
      {children}
    </Text>
  );
}
