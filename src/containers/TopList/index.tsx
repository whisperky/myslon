import React from "react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const TrendingNFTsFirstData = [
  {
    avatar:
      "https://i.seadn.io/gae/s4Td3KYsUlCblO6lQKAGAWdKwsCuumcxYpebM_YL-Pex-BP886JYAWjKBLeB5StNopAAD6kVx3QHqWm9AmudXyCaCZszHbt8SdteEQ?auto=format&dpr=1&w=256",
    collectionName: "Lil Pudgys",
    floorPrice: "0.38",
    volumn: "1.5",
  },
  {
    avatar:
      "https://i.seadn.io/gae/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA?auto=format&dpr=1&w=256",
    collectionName: "Milady Maker",
    floorPrice: "3.40",
    volumn: "7.5",
  },
  {
    avatar:
      "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&dpr=1&w=256",
    collectionName: "Azuki",
    floorPrice: "15.45",
    volumn: "14.9",
  },
  {
    avatar:
      "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&dpr=1&w=256",
    collectionName: "BEANZ Official",
    floorPrice: "1.28",
    volumn: "45.5",
  },
  {
    avatar:
      "https://i.seadn.io/gcs/files/68d93e599578e31eb8eb433bfa1b0fbd.png?auto=format&dpr=1&w=256",
    collectionName: "BoringPunks",
    floorPrice: "0.06",
    volumn: "1.9",
  },
];

const TrendingNFTsSecondData = [
  {
    avatar:
      "https://i.seadn.io/gcs/files/f3a499dc27479c0c0fd6aaa3f6581561.gif?auto=format&dpr=1&w=256",
    collectionName: "Azuki Elemental",
    floorPrice: "1.18",
    volumn: "6.9",
  },
  {
    avatar:
      "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=256",
    collectionName: "Mutant Ape",
    floorPrice: "5.19",
    volumn: "75.9",
  },
  {
    avatar:
      "https://i.seadn.io/gcs/files/82a7f92df6d60e41327b69cdafea8831.jpg?auto=format&dpr=1&w=256",
    collectionName: "HV-MTL",
    floorPrice: "0.45",
    volumn: "6.2",
  },
  {
    avatar:
      "https://i.seadn.io/gcs/files/2d88d3c5f4fce2bf7294152a06fa2341.png?auto=format&dpr=1&w=256",
    collectionName: "ArcheWorld_Land",
    floorPrice: "0.01",
    volumn: "1.2",
  },
  {
    avatar:
      "https://i.seadn.io/gcs/files/6df4d75778066bce740050615bc84e21.png?auto=format&dpr=1&w=256",
    collectionName: "The Captainz",
    floorPrice: "5.30",
    volumn: "15.7",
  },
];

export const TopList = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
      <Box>
        <Card>
          <Box overflowX="auto">
            <Table minWidth="720px">
              <Thead>
                <Tr bg="gray.100">
                  <Th minWidth="100px" fontWeight="700" fontSize="18px">
                    Rank
                  </Th>
                  <Th minWidth="300px" fontWeight="700" fontSize="18px">
                    Collection
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Floor Price
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Volume
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {TrendingNFTsFirstData.map((row, index) => (
                  <Tr key={index}>
                    <Td>
                      <Text fontWeight="700">{index + 1}</Text>
                    </Td>
                    <Td>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar name={row.collectionName} src={row.avatar} />
                        <Text fontWeight="600">{row.collectionName}</Text>
                      </Stack>
                    </Td>
                    <Td>
                      <Text fontWeight="700">{row.floorPrice} ETH</Text>
                    </Td>
                    <Td>
                      <Text fontWeight="700">{row.volumn} ETH</Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card>
          <Box overflowX="auto">
            <Table minWidth="720px">
              <Thead>
                <Tr bg="gray.100">
                  <Th minWidth="100px" fontWeight="700" fontSize="18px">
                    Rank
                  </Th>
                  <Th minWidth="300px" fontWeight="700" fontSize="18px">
                    Collection
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Floor Price
                  </Th>
                  <Th minWidth="160px" fontWeight="700" fontSize="18px">
                    Volume
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {TrendingNFTsSecondData.map((row, index) => (
                  <Tr key={index}>
                    <Td>
                      <Text fontWeight="700">{index + 6}</Text>
                    </Td>
                    <Td>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar name={row.collectionName} src={row.avatar} />
                        <Text fontWeight="600">{row.collectionName}</Text>
                      </Stack>
                    </Td>
                    <Td>
                      <Text fontWeight="700">{row.floorPrice} ETH</Text>
                    </Td>
                    <Td>
                      <Text fontWeight="700">{row.volumn} ETH</Text>
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
