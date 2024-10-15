import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type BoxWithDiagonalCornersProps = {
  padding: number;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;
  parentColor?: string;
  hasTopLeftCorner?: boolean;
  hasTopRightCorner?: boolean;
  hasBottomLeftCorner?: boolean;
  hasBottomRightCorner?: boolean;
  props1?: any;
  props2?: any;
  children?: React.ReactNode;
};

export default function BoxWithDiagonalCorners({
  padding,
  borderColor = "#121217",
  borderWidth = 1,
  backgroundColor = "#121217",
  parentColor = "#09090E00",
  hasTopLeftCorner,
  hasTopRightCorner,
  hasBottomLeftCorner,
  hasBottomRightCorner,
  props1,
  props2,
  children,
}: BoxWithDiagonalCornersProps) {
  return (
    <Box
      background={borderColor}
      position="relative"
      padding={`${borderWidth}px`}
      borderRadius="5px"
      {...props1}
      // ml={{ md: 'unset', base: 'auto' }}
    >
      {hasTopLeftCorner && (
        <Box
          content={`''`}
          position="absolute"
          top={0}
          left={0}
          borderTop={`${padding}px solid ${borderColor}`}
          borderRight={`${padding}px solid transparent`}
          width={0}
          zIndex={1}
        />
      )}
      {hasTopRightCorner && (
        <Box
          content={`''`}
          position="absolute"
          top={0}
          right={0}
          borderTop={`${padding}px solid ${borderColor}`}
          borderLeft={`${padding}px solid transparent`}
          borderBottomLeftRadius={5}
          width={0}
          zIndex={1}
        />
      )}
      {hasBottomLeftCorner && (
        <Box
          content={`''`}
          position="absolute"
          bottom={0}
          left={0}
          borderBottom={`${padding}px solid ${borderColor}`}
          borderRight={`${padding}px solid transparent`}
          width={0}
          zIndex={1}
        />
      )}
      {hasBottomRightCorner && (
        <Box
          content={`''`}
          position="absolute"
          bottom={0}
          right={0}
          borderBottom={`${padding}px solid ${borderColor}`}
          borderLeft={`${padding}px solid transparent`}
          width={0}
          zIndex={1}
        />
      )}
      <Box
        background={backgroundColor}
        position="relative"
        p={`${padding}px`}
        borderRadius="5px"
        {...props2}
      >
        {hasTopLeftCorner && (
          <Box
            content={`''`}
            position="absolute"
            top={`-${borderWidth}px`}
            left={`-${borderWidth}px`}
            borderTop={`${padding - 2 * borderWidth}px solid ${parentColor}`}
            borderRight={`${padding - 2 * borderWidth}px solid transparent`}
            width={0}
            zIndex={2}
          />
        )}
        {hasTopRightCorner && (
          <Box
            content={`''`}
            position="absolute"
            top={`-${borderWidth}px`}
            borderTopRightRadius="3px"
            right={`-${borderWidth}px`}
            borderTop={`${padding - 2 * borderWidth}px solid ${parentColor}`}
            borderLeft={`${padding - 2 * borderWidth}px solid transparent`}
            width={0}
            zIndex={2}
          />
        )}
        {hasBottomLeftCorner && (
          <Box
            content={`''`}
            position="absolute"
            bottom={`-${borderWidth}px`}
            left={`-${borderWidth}px`}
            borderBottom={`${padding - 2 * borderWidth}px solid ${parentColor}`}
            borderRight={`${padding - 2 * borderWidth}px solid transparent`}
            width={0}
            zIndex={2}
          />
        )}
        {hasBottomRightCorner && (
          <Box
            content={`''`}
            position="absolute"
            bottom={`-${borderWidth}px`}
            right={`-${borderWidth}px`}
            borderBottom={`${padding - 2 * borderWidth}px solid ${parentColor}`}
            borderLeft={`${padding - 2 * borderWidth}px solid transparent`}
            width={0}
            zIndex={2}
          />
        )}
        {children}
      </Box>
    </Box>
  );
}
