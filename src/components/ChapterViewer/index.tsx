import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  VStack,
  Image,
  Button,
  Flex,
  Select,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Loading from "../Loading";

interface ChapterData {
  title: string;
  storyId: string;
  chapters: Chapter[];
}

interface Chapter {
  id: number;
  title: string;
  images: string[];
}

interface ChapterViewerProps {
  storyId: string;
  fetchChapters: (storyId: string) => Promise<ChapterData>;
}

export const ChapterViewer: React.FC<ChapterViewerProps> = ({
  storyId,
  fetchChapters,
}) => {
  const [chapterData, setChapterData] = useState<ChapterData | null>(null);
  const [currentChapter, setCurrentChapter] = useState<number>(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, sm: false });

  useEffect(() => {
    const loadChapters = async () => {
      try {
        const fetchedChapterData = await fetchChapters(storyId);
        setChapterData(fetchedChapterData);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    loadChapters();
  }, [storyId, fetchChapters]);

  const handleChapterChange = (index: number) => {
    setCurrentChapter(index);
    scrollRef.current?.scrollTo(0, 0);
    onClose();
  };

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  if (!chapterData) {
    return <Loading mode="light" />;
  }

  const chapter = chapterData.chapters[currentChapter];

  const ChapterSelector = () => (
    <>
      {isMobile ? (
        <Button
          onClick={onOpen}
          width="full"
          bg="transparent"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.300" }}
          fontWeight="bold"
          className="mar-font"
        >
          {chapter.title}
        </Button>
      ) : (
        <Select
          value={currentChapter}
          onChange={(e) => handleChapterChange(Number(e.target.value))}
          width="auto"
          color="white"
          bg="transparent"
          backdropFilter="blur(10px)"
          border="none"
          _hover={{ bg: "whiteAlpha.200" }}
          fontWeight="bold"
        >
          {chapterData.chapters.map((ch, index) => (
            <option
              key={ch.id}
              value={index}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "#ffffff",
              }}
            >
              {ch.title}
            </option>
          ))}
        </Select>
      )}
    </>
  );

  return (
    <Box position="relative">
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="rgba(0, 0, 0, 0.7)"
        color="white"
        p={4}
        justifyContent="center"
        alignItems="center"
        zIndex={10}
        backdropFilter="blur(10px)"
        transform={showNavBar ? "translateY(0)" : "translateY(-100%)"}
        transition="transform 0.3s ease-in-out"
      >
        <Button
          colorScheme="BlackAlpha"
          onClick={() => {
            if (currentChapter > 0) {
              setCurrentChapter(currentChapter - 1);
              scrollRef.current?.scrollTo(0, 0);
            }
          }}
          isDisabled={currentChapter === 0}
        >
          <ArrowLeftIcon />
        </Button>
        <ChapterSelector />
        <Button
          colorScheme="BlackAlpha"
          onClick={() => {
            if (currentChapter < chapterData.chapters.length - 1) {
              setCurrentChapter(currentChapter + 1);
              scrollRef.current?.scrollTo(0, 0);
            }
          }}
          isDisabled={currentChapter === chapterData.chapters.length - 1}
        >
          <ArrowRightIcon />
        </Button>
      </Flex>
      <Box
        ref={scrollRef}
        height="100vh"
        overflowY="auto"
        onClick={toggleNavBar}
        pt="60px"
      >
        <VStack spacing={0} align="center">
          {chapter.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Chapter ${chapter.id} - Image ${index + 1}`}
              width="100%"
              maxWidth="800px"
            />
          ))}
        </VStack>
      </Box>

      <Flex
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="rgba(0, 0, 0, 0.7)"
        color="white"
        p={4}
        justifyContent="center"
        alignItems="center"
        transform={showNavBar ? "translateY(0)" : "translateY(100%)"}
        transition="transform 0.3s ease-in-out"
        className="mar-font"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          textShadow="0 0 10px #ff00ff, 0 0 10px #ff00ff, 0 0 10px #ff00ff"
        >
          {chapterData.title}
        </Text>
      </Flex>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent maxHeight="calc(56px * 5 + 60px)">
          {" "}
          {/* 5 items + header */}
          <DrawerCloseButton top={"15px"} />
          <DrawerHeader borderBottomWidth="1px" height="60px">
            Select Chapter
          </DrawerHeader>
          <DrawerBody p={0}>
            <List
              spacing={0}
              overflowY="auto"
              maxHeight="calc(56px * 5)"
              className="mar-font"
            >
              {chapterData.chapters.map((ch, index) => (
                <ListItem key={ch.id}>
                  <Button
                    onClick={() => handleChapterChange(index)}
                    variant={index === currentChapter ? "solid" : "ghost"}
                    colorScheme={index === currentChapter ? "pink" : "gray"}
                    width="100%"
                    justifyContent="flex-start"
                    fontWeight={index === currentChapter ? "bold" : "normal"}
                    height="56px"
                    borderRadius={0}
                  >
                    {ch.title}
                  </Button>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
