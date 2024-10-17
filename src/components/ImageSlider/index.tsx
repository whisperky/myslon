import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import { glowAnimation } from "../../services/functions";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export const ImageSlider = () => {
  const [showButton, setShowButton] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    "/img/mystery_babylon.gif",
    "/img/mystery_babylon.gif",
    "/img/mystery_babylon.gif",
    "/img/mystery_babylon.gif",
    "/img/mystery_babylon.gif",
  ];

  const titles = [
    "Mystery Babylon",
    "Ancient Secrets",
    "Hidden Truths",
    "Forbidden Knowledge",
    "Unveiling History",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setShowButton(false);
    setTimeout(() => setShowButton(true), 500);
  };

  // console isHovering
  useEffect(() => {}, [isHovering, activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-[30vh] md:h-[40vh] lg:h-[60vh] overflow-hidden bg-transparent"
    >
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
        className="w-[90%] h-[80%] mx-auto mt-[5%]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              position="relative"
              w="100%"
              h="100%"
              animation={`${glowAnimation} 3s infinite`}
            >
              <Image
                src={image}
                alt={titles[index]}
                objectFit="cover"
                width="100%"
                height="100%"
              />
              {/* <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0,0,0,0.5)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  color="white"
                  textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                >
                  {titles[index]}
                </Text>
              </Box> */}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {showButton && (
          <Flex className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/read">
                <Button
                  leftIcon={<FaBookOpen />}
                  bgColor={"#ff00ffaa"}
                  color={"white"}
                  size="lg"
                  fontWeight={700}
                  p={6}
                  borderRadius="full"
                  boxShadow="0 0 20px rgba(128,0,128,0.5)"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0 0 30px rgba(128,0,128,0.7)",
                  }}
                  transition="all 0.3s ease"
                >
                  Read Now
                </Button>
              </Link>
            </motion.div>
          </Flex>
        )}
      </AnimatePresence>

      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pointerEvents="none"
      />

      {/* <motion.div
        className="absolute top-4 right-4 z-20 text-white text-xl font-bold"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {activeIndex + 1} / {images.length}
      </motion.div> */}

      {isHovering && (
        <motion.div
          className="absolute bottom-4 left-4 right-4 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Text color="white" fontSize="lg" textAlign="center">
            Hover over the image to pause the slideshow
          </Text>
        </motion.div>
      )}
    </motion.div>
  );
};
