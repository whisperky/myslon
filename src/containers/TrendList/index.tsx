import React from "react";
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

export const TrendList = () => {
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
          </Box>
        </Card>
      </Box>
      <Box>
        <Card flex={1}>
          <Box overflowX="auto">
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
                {ComicArray.slice(6, 10).map((row, index) => (
                  <Tr
                    key={index}
                    bgGradient="linear(to-r, black, black)"
                    _hover={{ bgGradient: "linear(to-r, gray.900, red.700)" }}
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
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
