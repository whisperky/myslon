import React, { useCallback, useEffect, useState } from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import Link from "next/link";
import moment from "moment";
// import { formatDistanceToNow } from "date-fns";

import { StarsIcon } from "@/components/icons";
import CgptText from "@/components/CgptText";
import BoxWithDiagonalCorners from "@/components/BoxWithDiagonalCorners";
import ComicImage from "@/components/ComicImage";
import features from "@/services/features";

interface ComicCollectionCardProps extends BoxProps {
  id: string;
  name: string;
  genre: string;
  description: string;
  chainId: number;
  imageUrl: string;
  amount?: number;
  // tokenId?: string;
  // isMintable?: boolean;
  // isOnSale?: boolean;
  likes?: number;
  views?: number;
  timestamp: number;
  // mintedImages?: any;
  onEnded?: () => void;
  // setIsLikeChange?: (a: boolean) => void;
  // isLikeChange?: any;
  // type?: any;
  isEnded?: boolean;
  // blockUser?: any;
  // setBlockUser?: any;
  // blacklisted?: any;
  // setPage?: any;
}

export default function ComicCollectionCard({
  id,
  name,
  genre,
  description,
  chainId,
  imageUrl,
  amount,
  // tokenId,
  // isMintable,
  // isOnSale = true,
  likes,
  views,
  timestamp,
  onEnded = () => {},
  // setIsLikeChange = () => {},
  // isLikeChange,
  // mintedImages,
  // type,
  isEnded,
  // blockUser,
  // setBlockUser,
  // blacklisted,
  // setPage,
  ...props
}: ComicCollectionCardProps) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLike, setLike] = useState<boolean>(false);
  const [timeAgo, setTimeAgo] = useState("");
  // const toast = useToast();

  const onLikeChange = async () => {
    setLoading(true);
    setLike(!isLike);
    // setIsLikeChange(!isLikeChange);
    setLoading(false);
  };

  const getTimeAgo = useCallback(() => {
    if (timestamp) {
      // const date = moment.utc(timestamp)
      // const timeAgo = date.fromNow()
      const timeAgo = moment(timestamp * 1000).fromNow();
      console.log(timestamp, timeAgo);
      setTimeAgo(timeAgo);
    }
  }, [timestamp]);

  useEffect(() => {
    getTimeAgo();
  }, [timestamp, getTimeAgo]);

  // Remove or comment out the unused logout function
  // const logout = () => {
  //   disconnect();
  //   setResults([]);
  //   localStorage?.clear();
  //   dispatch(clearToken());
  //   dispatch(setAuthState(false));
  //   dispatch(setUser(null));
  //   // window.location.reload()
  //   router.push("/");
  // };

  // const handleBlockCollection = async (status: any) => {
  //   try {
  //     const response = await axios.post(
  //       `${requests.banCollection}`,
  //       {
  //         id,
  //         status,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (response.status === 200) {
  //       toast({
  //         title: "Collection blocked Successfully",
  //         position: "bottom-right",
  //         variant: "left-accent",
  //         status: "success",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       if (setPage) {
  //         setPage(1);
  //       }
  //       setBlockUser(!blockUser);
  //     }
  //   } catch (error: any) {
  //     setBlockUser(false);
  //     if (error?.response?.data?.message === "jwt expired") {
  //       toast({
  //         title: "Token Expired. Please Connect Wallet Again",
  //         position: "top-right",
  //         variant: "left-accent",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //       logout();
  //     } else {
  //       toast({
  //         title: "Collection Update Failed",
  //         position: "bottom-right",
  //         variant: "left-accent",
  //         status: "error",
  //         duration: 2000,
  //         isClosable: true,
  //       });
  //     }
  //   }
  // };

  return (
    <>
      <BoxWithDiagonalCorners
        padding={17}
        props2={{
          position: "relative",
          w: "100%",
          h: "414px",
          p: 0,
          border: "1px solid #ff00bb",
          borderBottomRadius: 5,
          boxShadow:
            // type === "singleItem"
            true
              ? ""
              : "#353539 0px 1px 0px 0px, #121217 0px 10px 0px -4px, #353539 0px 10px 0px -3px,#121217 0px 20px 0px -7.5px, #353539 0px 20px 0px -7px",
          cursor: "pointer",
          ...props,
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url(${imageUrl})`}
          backgroundSize="cover"
          backgroundPosition="center"
          filter="blur(16px) brightness(0.2)"
          zIndex={0}
        />
        <Box position="relative" zIndex={1} h="100%">
          <Link
            href={`/collection/${id}`}
            style={{ textDecoration: "none" }}
            passHref
            legacyBehavior
          >
            <a href="" target="_blank" onClick={onEnded}>
              <Box
                position="relative"
                h="262px"
                borderBottom="1px solid #353539"
              >
                <Box
                  position="relative"
                  h="262px"
                  borderBottom="1px solid #353539"
                >
                  <ComicImage imageUrl={imageUrl} />
                </Box>
                <Box
                  position="absolute"
                  w="100%"
                  h="150px"
                  left={0}
                  bottom={0}
                  background="linear-gradient(181deg, rgba(12, 12, 17, 0.00) 0.66%, #0C0C11ff 84.61%)"
                />
                <Flex
                  position="absolute"
                  w="100%"
                  bottom="29px"
                  px="10px"
                  justifyContent="space-between"
                  alignItems={"end"}
                >
                  <CgptText
                    maxW="160px"
                    fontSize="16px"
                    fontFamily="'Violet Sans', sans-serif"
                    color="#EFEFE5"
                    lineHeight="21px"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {name}
                  </CgptText>
                  &nbsp;
                  <CgptText
                    maxW="90px"
                    fontSize="12px"
                    color="rgba(239, 239, 229, 0.60)"
                    textTransform="uppercase"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {genre && `${genre}`}
                  </CgptText>
                </Flex>
                <Flex
                  position="absolute"
                  w="237px"
                  left="9px"
                  bottom="-15px"
                  alignItems="center"
                >
                  {chainId && (
                    <Flex>
                      {/* <Avatar
                        src={`/chains/${getChainName(chainId)}.png`}
                      size="xs"
                    /> */}
                    </Flex>
                  )}
                  <Box
                    ml="4px"
                    p="6px"
                    borderRadius="4px"
                    background="#131315"
                    border="1px solid"
                    borderColor={isEnded ? "#ff4591" : "#45ff91d9"}
                  >
                    <CgptText
                      fontSize="11px"
                      color={isEnded ? "#ff4591" : "#45ff91d9"}
                      textTransform="uppercase"
                    >
                      {isEnded ? "Ended" : "Not Ended"}
                    </CgptText>
                  </Box>
                  {true && features.NFTCard.onSale && (
                    <Box
                      ml="4px"
                      p="6px"
                      borderRadius="4px"
                      background="#131315"
                      border="1px solid #0E9C87"
                    >
                      <CgptText
                        fontSize="11px"
                        color="#0E9C87"
                        textTransform="uppercase"
                      >
                        On Sale
                      </CgptText>
                    </Box>
                  )}
                  {/* {contractType && (
                    <Box
                      ml="4px"
                      p="6px"
                      borderRadius="4px"
                      background="#131315"
                      border="1px solid #353539"
                    >
                      <CgptText
                        fontSize="11px"
                        color="rgba(239, 239, 229, 0.60)"
                        textTransform="uppercase"
                      >
                        {contractType}
                      </CgptText>
                    </Box>
                  )} */}
                </Flex>
              </Box>

              {/* {type !== "singleItem" && (
                <Flex
                  position="absolute"
                  w="52px"
                  h="28px"
                  top="-1px"
                  right="-1px"
                  justifyContent="center"
                  alignItems="center"
                  background="rgba(0, 0, 0, 0.72)"
                  border="1px solid #313136"
                  borderBottomLeftRadius="3px"
                  borderTopRightRadius="3px"
                >
                  <CgptText
                    p="10px"
                    fontSize="12px"
                    color="rgba(239, 239, 229, 0.60)"
                  >
                    X{amount}
                  </CgptText>
                </Flex>
              )} */}

              <Box p="15px">
                <Flex
                  width="calc(100% - 30px)"
                  position="absolute"
                  justifyContent="between"
                  flexDirection="column"
                  bottom="0"
                  alignItems="center"
                >
                  <Flex width="100%">
                    <CgptText
                      fontSize="12px"
                      color="rgba(239, 239, 229, 0.30)"
                      width="100%"
                      textAlign="start"
                    >
                      <StarIcon w={3} h={3} mr={1} />
                      {likes}
                    </CgptText>

                    {views && (
                      <CgptText
                        width="100%"
                        p="auto"
                        fontSize="12px"
                        color="rgba(239, 239, 229, 0.30)"
                        textAlign="end"
                      >
                        <ViewIcon w={3} h={3} mr={1} />
                        {views}
                      </CgptText>
                    )}
                  </Flex>
                  <CgptText
                    // position="absolute"
                    // top="0"
                    // right="0"
                    p="10px 0px"
                    fontSize="12px"
                    color="rgba(239, 239, 229, 0.30)"
                    textTransform="uppercase"
                  >
                    {timeAgo}
                  </CgptText>
                </Flex>

                <CgptText
                  pt="11px"
                  color="rgba(239, 239, 229, 0.60)"
                  fontSize="12px"
                  textTransform="uppercase"
                ></CgptText>

                <CgptText
                  display="-webkit-box"
                  pt="11px"
                  color="rgba(239, 239, 229, 0.60)"
                  overflow="hidden"
                  whiteSpace="pre-wrap"
                  style={{
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {description?.length > 20
                    ? description?.substring(0, 20) + "..."
                    : description}
                </CgptText>
              </Box>
            </a>
          </Link>
          <Box
            position="absolute"
            w="26px"
            h="26px"
            top="10px"
            left="10px"
            p="5px"
            background="#121217"
            outline="2px solid #353539"
            borderRadius="full"
            transition="all .3s ease-in-out"
            onClick={onLikeChange}
          >
            <StarsIcon
              liked={isLike}
              transform={isLoading ? "rotate(360deg)" : ""}
              transition="all .5s ease-in-out"
            />
          </Box>
          {/* {user?.isAdministrator && setBlockUser && ( */}
          {/* {true && setBlockUser && (
            <Box position={"absolute"} top="170px" left="10px">
              <Flex direction="row" alignItems={"center"} w="full" gap="8px">
                <Switch
                  size="sm"
                  _checked={{
                    "& .chakra-switch__track": {
                      background:
                        "linear-gradient(to right, rgba(57, 237, 172, 1), rgba(71, 178, 255, 1))",
                    },
                  }}
                  _hover={{
                    "& .chakra-switch__track:not([data-checked])": {
                      background: "rgba(239, 239, 229, 0.30)",
                    },
                  }}
                  isChecked={blacklisted}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleBlockCollection(e.target.checked);
                  }}
                />
                <CgptText
                  color="#EFEFE5"
                  fontFamily="'Violet Sans', sans-serif"
                  fontSize="12px"
                  lineHeight="24px"
                >
                  Block Collection
                </CgptText>
              </Flex>
            </Box>
          )} */}
        </Box>
      </BoxWithDiagonalCorners>
      {amount !== 1 && (
        <>
          {/* <Box
            position="absolute"
            w="96%"
            h="100px"
            left="2%"
            bottom="-7px"
            backgroundColor="#121217"
            border="1px solid #353539"
            borderRadius="8px"
            zIndex="1"
          />
          <Box
            position="absolute"
            w="92%"
            h="100px"
            left="4%"
            bottom="-14px"
            backgroundColor="#121217"
            border="1px solid #353539"
            borderRadius="8px"
          /> */}
        </>
      )}
    </>
  );
}
