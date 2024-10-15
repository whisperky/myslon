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
} from "@chakra-ui/react";

import { ImageSlider } from "../ImageSlider";
import { TrendList } from "@/containers/TrendList";
import { ComicCardContainer } from "@/containers/ComicCardContainer";
import { TrendingAdContainer } from "@/containers/TrendingAdContainer";
import { GenreArray } from "@/services/tempdata";
// import SmokeEffect from "../SmokeEffect";

export const Banner = () => {
  //   const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("trending");

  useEffect(() => {
    console.log("currentTab", currentTab);
  }, [currentTab]);

  const [isActive, setIsActive] = useState<number>(0);

  return (
    <>
      <Box style={{ background: "linear-gradient(rgb(33 2 2), rgb(0 0 0))" }}>
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
          <Grid
            templateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(9, 1fr)",
            ]}
          >
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
            {GenreArray.map((genre, index) => (
              <Button
                key={index + 1}
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
