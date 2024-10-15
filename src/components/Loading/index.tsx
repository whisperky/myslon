import React from "react";
import Lottie from "lottie-react";
import loadingJson from "@/public/nft_loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <Lottie
        animationData={loadingJson}
        loop={true}
        className="w-72 h-72"
        autoplay={true}
      />
    </div>
  );
};

export default Loading;
