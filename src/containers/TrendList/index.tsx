import React, { useRef } from "react";
import {
  Card,
  Grid,
  Box,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ComicArray } from "@/services/tempdata";
import { useInView, motion } from "framer-motion";

export const TrendList = () => {
  const trendingRef = useRef(null);
  const trendingInView = useInView(trendingRef, { once: true, amount: 0.2 });
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, amount: 0.2 });

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap={4}
    >
      <Box>
        <Card flex={1} bg="transparent">
          <Box overflowX="auto">
            <motion.div
              ref={trendingRef}
              initial={{ opacity: 0, x: 50 }}
              animate={trendingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Table>
                <Thead>
                  {/* <Tr bg="gray.100">
                  <Th minWidth="300px" fontWeight="700" fontSize="18px">
                  Collection
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                  Floor Price
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                  Volume
                  </Th>
                  </Tr> */}
                </Thead>
                <Tbody>
                  {ComicArray.slice(0, 5).map((row, index) => (
                    <Tr
                      key={index}
                      bgGradient="linear(to-r, black, black)"
                      _hover={{
                        bgGradient: "linear(to-r, gray.900, red.700)",
                        backdropFilter: "blur(20px)",
                      }}
                      color="whiteAlpha.800"
                      gridColumn={"auto"}
                    >
                      <Td p={0} borderColor="gray.700" borderWidth="1px">
                        <Flex direction="row" alignItems="center" gap={6}>
                          <Image src={row.imageUrl} w={32} h={32} />
                          <Flex direction={"column"} gap={2}>
                            <Text fontSize="16px" fontWeight="500">
                              {row.genre}
                            </Text>
                            <Text
                              fontSize="18px"
                              fontWeight="600"
                              className="mar-font"
                            >
                              {row.name}
                            </Text>
                            <Text fontSize="14px" fontWeight="400">
                              {row.author}
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </motion.div>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card flex={1} bg="transparent">
          <Box overflowX="auto">
            <motion.div
              ref={topRef}
              initial={{ opacity: 0, x: 50 }}
              animate={topInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Table>
                <Thead>
                  {/* <Tr bg="gray.100">
                  <Th minWidth="300px" fontWeight="700" fontSize="18px">
                    Collection
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Floor Price
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Volume
                  </Th>
                </Tr> */}
                </Thead>
                <Tbody>
                  {ComicArray.slice(5, 10).map((row, index) => (
                    <Tr
                      key={index}
                      bgGradient="linear(to-r, black, black)"
                      _hover={{
                        bgGradient: "linear(to-r, gray.900, red.700)",
                        backdropFilter: "blur(20px)",
                      }}
                      color="whiteAlpha.800"
                      gridColumn={"auto"}
                    >
                      <Td p={0} borderColor="gray.700" borderWidth="1px">
                        <Flex direction="row" alignItems="center" gap={6}>
                          <Image src={row.imageUrl} w={32} h={32} />
                          <Flex direction={"column"} gap={2}>
                            <Text fontSize="16px" fontWeight="500">
                              {row.genre}
                            </Text>
                            <Text
                              fontSize="18px"
                              fontWeight="600"
                              className="mar-font"
                            >
                              {row.name}
                            </Text>
                            <Text fontSize="14px" fontWeight="400">
                              {row.author}
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </motion.div>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
