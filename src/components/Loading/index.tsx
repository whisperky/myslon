import React from "react";
import Lottie from "lottie-react";
import loadingJson from "@/public/nft_loading.json";
import { Flex } from "@chakra-ui/react";
import SmokeEffect from "../SmokeEffect";

interface LoadingProps {
  mode: "dark" | "light";
}

const Loading = ({ mode }: LoadingProps) => {
  return (
    <Flex className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 ">
      {mode === "dark" && (
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
        >
          <SmokeEffect />
        </Flex>
      )}
      <Lottie
        animationData={loadingJson}
        loop={true}
        className="w-72 h-72"
        autoplay={true}
      />
    </Flex>
  );
};

export default Loading;
