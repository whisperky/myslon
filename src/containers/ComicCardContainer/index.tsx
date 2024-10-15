import React from "react";
import { Button, Divider, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ComicCollectionCard from "@/components/ComicCollectionCard";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ComicArray } from "@/services/tempdata";

export const ComicCardContainer = () => {
  return (
    <Flex
      position="relative"
      direction={"column"}
      px={[4, 8, 16, 24]}
      py="24"
      bgImage={"/img/page-background.jpg"}
      bgSize="cover"
    >
      {/* <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex="0">
        <Box position="relative">
          <SmokeEffect />
        </Box>
      </Box> */}
      <Image
        position="absolute"
        top="0"
        left="0"
        w="100%"
        zIndex="0"
        src="/img/border-top.png"
      />
      <Image
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        zIndex="0"
        src="/img/border-bottom.png"
      />

      <Flex justifyContent={"space-between"} alignItems={"end"}>
        <Text pb={3} fontSize={20} fontWeight={700} color="white">
          Trending
        </Text>
        <Button
          variant="ghost"
          fontSize="16px"
          color="#ff00bb"
          fontWeight="700"
          textTransform="initial"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <motion.div
            style={{ display: "inline-block", width: "40px" }}
            initial={{ x: 0 }}
            whileHover={{
              x: [0, 10, 0],
              transition: { repeat: Infinity, duration: 1 },
            }}
          >
            <ArrowRightIcon />
          </motion.div>
          {" View All"}
        </Button>
      </Flex>
      <Divider mb={[4, 4, 8, 8]} borderColor={"#ff00bb"} />
      <Grid
        p={[6, 2, 0, 0]}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={[8, 8, 6, 6]}
      >
        {ComicArray.map((comic, index) => (
          <motion.div
            initial={{ y: 0 }}
            whileHover={{
              y: [0, -10, 0],
              transition: { repeat: Infinity, duration: 1 },
            }}
            key={index}
          >
            <ComicCollectionCard
              id={comic.id}
              name={comic.name}
              genre={comic.genre}
              description={comic.description}
              imageUrl={comic.imageUrl}
              // isOnSale={true}
              timestamp={comic.timestamp}
              chainId={1}
              likes={comic.likes}
              views={comic.views}
              isEnded={comic.isEnded}
              //   isMinted={false}
            />
          </motion.div>
        ))}
      </Grid>

      <Flex justifyContent={"space-between"} alignItems={"end"}>
        <Text
          pt={6}
          pb={3}
          fontSize={20}
          fontWeight={700}
          color="white"
          className="mar-font"
        >
          Top
        </Text>
        <Button
          variant="ghost"
          fontSize="16px"
          color="#ff00bb"
          fontWeight="700"
          textTransform="initial"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <motion.div
            style={{ display: "inline-block", width: "40px" }}
            initial={{ x: 0 }}
            whileHover={{
              x: [0, 10, 0],
              transition: { repeat: Infinity, duration: 1 },
            }}
          >
            <ArrowRightIcon />
          </motion.div>
          {" View All"}
        </Button>
      </Flex>
      <Divider mb={8} borderColor={"#ff00bb"} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={[8, 8, 6, 6]}
      >
        {ComicArray.map((comic, index) => (
          <motion.div
            initial={{ y: 0 }}
            whileHover={{
              y: [0, -10, 0],
              transition: { repeat: Infinity, duration: 1 },
            }}
            key={index}
          >
            <ComicCollectionCard
              id={comic.id}
              name={comic.name}
              genre={comic.genre}
              description={comic.description}
              imageUrl={comic.imageUrl}
              // isOnSale={true}
              timestamp={comic.timestamp}
              chainId={1}
              likes={comic.likes}
              views={comic.views}
              isEnded={comic.isEnded}
              //   isMinted={false}
            />
          </motion.div>
        ))}
      </Grid>
    </Flex>
  );
};
