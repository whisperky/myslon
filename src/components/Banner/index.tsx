import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ImageSlider } from "../ImageSlider";
import { TrendList } from "@/containers/TrendList";
import { TopList } from "@/containers/TopList";
import ComicCollectionCard from "../ComicCollectionCard";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { ComicArray } from "@/services/tempdata";
import { ComicCardContainer } from "@/containers/ComicCardContainer";
import { TrendingAdContainer } from "@/containers/TrendingAdContainer";
import SmokeEffect from "../SmokeEffect";

export const Banner = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("trending");

  return (
    <>
      <Box style={{ background: "linear-gradient(#181818, #181818" }}>
        <Flex maxW="90%" mx={"auto"} direction={"column"}>
          <Box pt="120px" fontSize="16px">
            {/* <Box
              bgImage="url('img/examples/banner.jpg')"
              bgSize="cover"
              bgPosition="center"
              bgRepeat="no-repeat"
              boxShadow="2px 2px 10px rgba(0, 0, 0, 0.5)"
              h="70vh"
              m={2}
              borderRadius="20px"
              display="flex"
              justifyContent="flex-end"
              position="relative"
              cursor="pointer"
            >
              <Image
                // src='https://i.seadn.io/gcs/files/ddb4eeeb499f36bfd4df94c36d1caf6b.png?auto=format&dpr=1&w=1920'
                _hover={{
                  transform: "scale(1.01)",
                  transition: "transform 0.4s",
                  bgSize: "cover",
                }}
              />
              <Button
                bg="whiteAlpha.500"
                color="white"
                w="15%"
                fontWeight={700}
                mb={5}
                mr={5}
                p={2}
                textAlign="center"
                position="absolute"
                bottom={0}
              >
                View Collection
              </Button>
            </Box> */}
            <ImageSlider />
          </Box>
        </Flex>
        <Flex
          direction="row"
          mt={9}
          overflowX="auto"
          py={3}
          bgColor={"#000000"}
          justifyContent={"center"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
          className="mar-font"
        >
          <Button
            variant="ghost"
            fontSize="16px"
            color="#f0b"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            All
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Action
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Romance
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Comedy
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Drama
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Fantasy
          </Button>
          <Button
            variant="ghost"
            fontSize="16px"
            color="white"
            fontWeight="700"
            textTransform="initial"
            _hover={{ bg: "whiteAlpha.200" }}
            minW="auto"
            px={4}
          >
            Thriller
          </Button>
        </Flex>
      </Box>

      <Box w={"100%"}>
        <ComicCardContainer />
        <TrendingAdContainer />

        <Flex
          position="relative"
          direction={"column"}
          px={[4, 8, 16, 24]}
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
