import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { TrendList } from "@/containers/TrendList";
import { ComicCardContainer } from "@/containers/ComicCardContainer";
import { TrendingAdContainer } from "@/containers/TrendingAdContainer";
import { ImageSlider } from "../ImageSlider";

import { GenreArray } from "@/services/tempdata";
import { TypewriterText, glowAnimation } from "@/services/functions";
import SmokeEffect from "../SmokeEffect";

export const Banner = () => {
  //   const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("trending");

  useEffect(() => {
    console.log("currentTab", currentTab);
  }, [currentTab]);

  const [isActive, setIsActive] = useState<number>(0);

  return (
    <>
      <Box position={"relative"} overflow="hidden">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="-300px"
          zIndex="-1"
        >
          <SmokeEffect />
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Flex maxW="90%" mx={"auto"} direction={"column"}>
            <Box pt="80px" fontSize="16px" zIndex={1}>
              <ImageSlider />
            </Box>
            <Box
              position="relative"
              py={5}
              px={["5", "10", "10%", "15%", "20%"]}
              mt={[2, 3, 4]}
              mx={"5%"}
              zIndex={-1}
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.6)"
                backdropFilter="blur(10px)"
                borderRadius="lg"
                animation={`${glowAnimation} 3s infinite`}
              />
              <Text
                position="relative"
                fontSize={["md", "lg", "xl"]}
                textAlign="center"
                color="white"
                className="mar-font"
                textShadow="0 0 10px rgba(255, 0, 187, 0.5)"
                fontWeight="bold"
                letterSpacing="wide"
              >
                <TypewriterText
                  text="Mystery Babylon is a dark fantasy set in a fractured world where a
              small guild of outcasts defies the growing corruption of kings and
              demons to bring balance back to the realm. Dive into a tale of
              power, betrayal, and hope against overwhelming odds."
                  speed={30}
                />
              </Text>
            </Box>
          </Flex>
        </motion.div>
        <Flex
          direction="row"
          mt={9}
          overflowX="auto"
          py={3}
          bgColor={"rgba(0, 0, 0, 0.8)"}
          backdropFilter="blur(5px)"
          justifyContent={"center"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
          className="mar-font"
        >
          <Grid
            templateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(9, 1fr)",
            ]}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                key={0}
                variant="ghost"
                fontSize="16px"
                color={isActive === 0 ? "#ff00bb" : "white"}
                fontWeight="700"
                textTransform="initial"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={() => setIsActive(0)}
              >
                All
              </Button>
            </motion.div>
            {GenreArray.map((genre, index) => (
              <motion.div
                key={index + 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  fontSize="16px"
                  color={isActive === index + 1 ? "#ff00bb" : "white"}
                  fontWeight="700"
                  textTransform="initial"
                  _hover={{ bg: "whiteAlpha.200" }}
                  minW="auto"
                  onClick={() => setIsActive(index + 1)}
                >
                  {genre.name}
                </Button>
              </motion.div>
            ))}
          </Grid>
        </Flex>
      </Box>

      <Box w={"100%"}>
        <ComicCardContainer />
        <TrendingAdContainer />

        <Flex
          position="relative"
          direction={"column"}
          px={["10%", "10%", "15%", "15%"]}
          py={24}
          bgImage={"/img/page-background.jpg"}
          bgSize="cover"
        >
          <Image
            position="absolute"
            top="0"
            left="0"
            w="100%"
            zIndex="0"
            src="/img/border-top.png"
          />
          {/* <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="0"
          >
            <SmokeEffect />
          </Box> */}

          <Box>
            <Tabs
              colorScheme={"pink"}
              onChange={(index) =>
                setCurrentTab(index === 0 ? "trending" : "top")
              }
              color="white"
            >
              <TabList ml={2}>
                <Tab>Trending</Tab>
                <Tab>Top</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <TrendList />
                </TabPanel>
                <TabPanel>
                  <TrendList />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
