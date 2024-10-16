import React, { useRef, useState } from "react";
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
import { EffectCreative, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export const ImageSlider = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const [showButton, setShowButton] = useState(false);

  //   const onAutoplayTimeLeft = (
  //     _: SwiperType,
  //     time: number,
  //     progress: number
  //   ) => {
  //     if (progressCircle.current && progressContent.current) {
  //       progressCircle.current.style.setProperty(
  //         "--progress",
  //         (1 - progress).toString()
  //       );
  //       progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //     }
  //   };

  const handleSlideChange = () => {
    setShowButton(false);
    setTimeout(() => setShowButton(true), 500); // Delay button appearance
  };

  return (
    <Flex
      h={["30vh", "40vh", "40vh", "55vh"]}
      className="bg-transparent font-sans text-sm text-black relative rounded-xl"
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
            opacity: 0.5,
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
            shadow: true,
          },
        }}
        pagination={true}
        onSlideChange={handleSlideChange}
        modules={[EffectCreative, Pagination]}
        className="w-full h-full mySwiper"
      >
        <SwiperSlide key={0} className="w-full h-full rounded-xl">
          <Box position="relative" w="100%" h="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bgImage={"/img/mystery_babylon.gif"}
              bgSize="cover"
              filter="blur(16px)"
              transform="scale(1.1)"
            />
            <Image
              src="/img/mystery_babylon.gif"
              alt="Mystery Babylon"
              objectFit="contain"
              width="100%"
              height="100%"
              position="relative"
              zIndex="1"
            />
          </Box>
        </SwiperSlide>
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide key={num} className="w-full h-full rounded-xl">
            <Box position="relative" w="100%" h="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bgImage={`/img/mystery_babylon.gif`}
                bgSize="cover"
                filter="blur(16px)"
                transform="scale(1.1)"
              />
              <Image
                src={`/img/mystery_babylon.gif`}
                alt="Mystery Babylon"
                objectFit="contain"
                width="100%"
                height="100%"
                position="relative"
                zIndex="1"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-1 left-4 z-20"
          >
            <Link href="/read">
              <Button
                colorScheme="blackAlpha"
                color="lightgray"
                fontWeight={700}
                mb={5}
                mr={5}
                p={2}
                textAlign="center"
                position="absolute"
                bottom={0}
              >
                Start Reading
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-[var(--swiper-theme-color)]"
        slot="container-end"
      >
        <svg
          viewBox="0 0 48 48"
          ref={progressCircle}
          className="absolute left-0 top-0 z-10 w-full h-full"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-[var(--swiper-theme-color)] fill-none stroke-[4px] [stroke-dasharray:125.6] [stroke-dashoffset:calc(125.6px*(1-var(--progress)))] rotate-[-90deg]"
          ></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Flex>
  );
};
