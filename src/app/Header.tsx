import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  IconButton,
  Input,
  Text,
  // useColorMode,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Banner } from "@/components/Banner";
import { AccountIcon } from "@/components/icons/AccountIcon";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  // const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const toolbar = document.getElementById("toolbar-menu");
      const searchBar = document.getElementById("nav-searchbar");
      const btnAccount = document.getElementById("btn-account");
      if (toolbar) {
        toolbar.style.boxShadow = "none";
        toolbar.style.border = "none";

        searchBar!.style.border = "none";
        btnAccount!.style.border = "none";
        if (window.scrollY > 0) {
          toolbar.style.boxShadow = "1px 2px 8px rgba(0, 0, 0, 0.2)";
          toolbar.style.borderBottom = "1px solid dimgray";
          searchBar!.style.border = "1px solid dimgray";
          btnAccount!.style.border = "1px solid dimgray";
        }
      }
    });
  }, []);

  return (
    <Flex w="full" direction="column">
      <Flex
        id="toolbar-menu"
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        alignItems="center"
        justifyContent="space-between"
        backdropFilter="blur(20px)"
        px={{ base: 12, md: 16 }}
        py={4}
        gap={[1, 2, 4, 4]}
        bg="transparent"
        color="white"
        transition="all 0.3s"
        zIndex={1000}
      >
        <Flex alignItems="center">
          <Image
            src="/img/icons/favicon.png"
            alt="Logo"
            onClick={() => navigate("/")}
            cursor="pointer"
            boxSize={10}
          />
          <Text
            display={{ base: "none", sm: "block" }}
            ml={4}
            fontWeight={900}
            fontSize={23}
            className="mar-font"
          >
            Mystery Babylon
          </Text>
        </Flex>

        <Divider
          display={{ base: "none", md: "flex" }}
          orientation="vertical"
          height="30px"
          mx="4"
        />

        <Flex display={{ base: "none", md: "flex" }}>
          <Button
            colorScheme="whiteAlpha.200"
            variant="link"
            sx={{
              mr: "15px",
              fontWeight: 700,
              fontSize: 16,
              textTransform: "initial",
            }}
          >
            Original
          </Button>
          <Button
            colorScheme="whiteAlpha.200"
            variant="link"
            sx={{
              mr: "20px",
              fontWeight: 700,
              fontSize: 16,
              textTransform: "initial",
            }}
          >
            Genres
          </Button>
          <Button
            colorScheme="whiteAlpha.200"
            variant="link"
            sx={{
              mr: "20px",
              fontWeight: 700,
              fontSize: 16,
              textTransform: "initial",
            }}
          >
            Popular
          </Button>
        </Flex>

        <Flex
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          flex={1}
          justifyContent="right"
        >
          <SearchBar />
        </Flex>

        <HStack spacing={2}>
          <AccountButton />
          <IconButton
            rounded={"full"}
            aria-label="Search"
            bg="whiteAlpha.200"
            icon={<SearchIcon />}
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            color="white"
            onClick={onOpen}
          />
          <IconButton
            rounded={"full"}
            aria-label="Menu"
            bg="whiteAlpha.200"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            color="white"
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <MobileDrawer isOpen={isOpen} onClose={onClose} />
      <Banner />
    </Flex>
  );
};

const SearchBar = () => (
  <Flex
    id="nav-searchbar"
    as="form"
    flex={1}
    maxW="400px"
    alignItems="center"
    justifyContent="right"
    bg="white"
    borderRadius="full"
    pl={2}
    onSubmit={(e) => e.preventDefault()}
  >
    <Input
      placeholder="Search webtoons, genres, or creators"
      border="none"
      backgroundColor="transparent"
      _focus={{ boxShadow: "none" }}
    />
    <IconButton
      aria-label="Search"
      icon={<SearchIcon />}
      isRound
      variant="ghost"
      type="submit"
      colorScheme="whiteAlpha.200"
    />
  </Flex>
);

const AccountButton = () => (
  <Button
    id="btn-account"
    aria-label="Account"
    variant="ghost"
    borderRadius="full"
    color="white"
    bg="transparent"
    p={2}
    _hover={{ bg: "whiteAlpha.200" }}
  >
    <AccountIcon width={20} height={20} />
  </Button>
);

const MobileDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <VStack spacing={4} align="stretch">
          <SearchBar />
          <Button variant="ghost">Drops</Button>
          <Button variant="ghost">Stats</Button>
          <Button variant="ghost">Account</Button>
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
