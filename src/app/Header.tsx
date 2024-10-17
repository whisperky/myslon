import React, { ReactElement, useEffect } from "react";
import {
  Button,
  Flex,
  IconButton,
  Input,
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
import {
  ViewIcon,
  SearchIcon,
  HamburgerIcon,
  TimeIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Banner } from "@/components/Banner";
import { AccountIcon } from "@/components/icons/AccountIcon";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  // const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const toolbar = document.getElementById("toolbar-menu");
      // const searchBar = document.getElementById("nav-searchbar");
      // const btnAccount = document.getElementById("btn-account");
      if (toolbar) {
        toolbar.style.boxShadow = "none";
        // toolbar.style.border = "1px solid #333333";
        toolbar.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

        // searchBar!.style.border = "none";
        // btnAccount!.style.border = "none";
        if (window.scrollY > 0) {
          toolbar.style.boxShadow = "1px 2px 8px rgba(0, 0, 0, 0.2)";
          toolbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          // toolbar.style.borderBottom = "none";
          // searchBar!.style.border = "1px solid #333333ff";
          // btnAccount!.style.border = "1px solid #333333ff";
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
        px={{ base: 6, sm: 8, md: 16 }}
        py={4}
        gap={[1, 2, 4, 4]}
        bg="rgba(0, 0, 0, 0.3)"
        color="white"
        transition="all 0.3s"
        zIndex={10}
        // borderBottom="1px solid #333333"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Flex direction="row" alignItems="center">
            <Image
              src="/img/logo.png"
              alt="Logo"
              onClick={() => navigate("/")}
              cursor="pointer"
              h={10}
            />
            {/* <Text
            display={{ base: "none", sm: "block" }}
            ml={4}
            fontWeight={900}
            fontSize={23}
            className="mar-font"
            >
            Mystery Babylon
            </Text> */}

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
          </Flex>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex gap={[1, 2, 4, 4]}>
            <Flex
              display={{ base: "none", lg: "flex" }}
              alignItems="center"
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
                display={{ base: "flex", lg: "none" }}
                variant="ghost"
                color="white"
                onClick={onOpen}
              />
              <IconButton
                rounded={"full"}
                aria-label="Menu"
                bg="whiteAlpha.200"
                icon={<HamburgerIcon />}
                display={{ base: "flex", lg: "none" }}
                variant="ghost"
                color="white"
                onClick={onOpen}
              />
            </HStack>
          </Flex>
        </motion.div>
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
    bg="transparent"
    border="1px solid #333333ff"
    borderRadius="full"
    pl={2}
    onSubmit={(e) => e.preventDefault()}
  >
    <Input
      placeholder="Search ..."
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
    color="white"
    bg="transparent"
    border="1px solid #333333ff"
    borderRadius="full"
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
    <DrawerOverlay backdropFilter="blur(5px)" />
    <DrawerContent bg="rgba(0, 0, 0, 0.9)" color="white">
      <DrawerCloseButton
        color="#ff00bb"
        top="25px"
        _hover={{ bg: "whiteAlpha.200" }}
      />
      <DrawerHeader
        borderBottomWidth="1px"
        borderColor="#ff00bb"
        fontSize="xl"
        fontWeight="bold"
        py={6}
      >
        Menu
      </DrawerHeader>
      <DrawerBody pt={8}>
        <VStack spacing={6} align="stretch">
          <SearchBar />
          <Divider borderColor="whiteAlpha.300" />
          <NavButton icon={<AccountIcon width={20} height={20} />}>
            Account
          </NavButton>
          <NavButton icon={<StarIcon />}>Original</NavButton>
          <NavButton icon={<ViewIcon />}>Genres</NavButton>
          <NavButton icon={<TimeIcon />}>Popular</NavButton>
        </VStack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const NavButton = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) => (
  <Button
    variant="ghost"
    color="white"
    justifyContent="flex-start"
    height="50px"
    fontSize="lg"
    leftIcon={icon as ReactElement}
    _hover={{ bg: "whiteAlpha.200" }}
    _active={{ bg: "whiteAlpha.300" }}
  >
    {children}
  </Button>
);
