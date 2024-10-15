import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import SmokeEffect from "@/components/SmokeEffect";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      className="w-full text-gray-800 pt-12 border-gray-600 bg-[#000000]"
      position="relative"
      overflow="hidden"
      color="white"
    >
      {/* <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex="0">
        <SmokeEffect />
      </Box> */}

      <Flex
        className="container mx-auto px-[15%] flex-wrap"
        position="relative"
        zIndex="1"
      >
        {/* Company Info */}
        <VStack
          className="w-full md:w-1/4 mb-8 md:mb-0"
          align={["center", "center", "start", "start"]}
          spacing={4}
        >
          <Text className="text-2xl font-bold text-pink-600 mar-font">
            Mystery Babylon
          </Text>
          <Text className="text-sm">123 Main Street, City, Country</Text>
          <Text className="text-sm">Phone: (123) 456- 7890</Text>
          <Text className="text-sm">Email: info@yourcompany.com</Text>
        </VStack>

        {/* Quick Links */}
        <VStack
          className="w-full md:w-1/4 mb-8 md:mb-0"
          align={["center", "center", "start", "start"]}
          spacing={2}
        >
          <Text className="text-xl font-semibold mb-2 text-pink-600">
            Quick Links
          </Text>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </VStack>

        {/* Social Media */}
        <VStack
          className="w-full md:w-1/4 mb-8 md:mb-0"
          align={["center", "center", "start", "start"]}
          spacing={4}
        >
          <Text className="text-xl font-semibold text-pink-600">Follow Us</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
            {/* <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link> */}
          </HStack>
        </VStack>

        {/* Newsletter Signup */}
        <VStack
          className="w-full md:w-1/4"
          align={["center", "center", "start", "start"]}
          spacing={4}
        >
          <Text className="text-xl font-semibold text-pink-600">
            Subscribe to Our Newsletter
          </Text>
          <HStack>
            <Input
              placeholder="Enter your email"
              className="bg-white border-gray-600"
            />
            <Button colorScheme="pink">Subscribe</Button>
          </HStack>
        </VStack>
      </Flex>

      {/* Copyright */}
      <Box
        className="mt-12 py-8 border-t border-gray-600"
        position="relative"
        zIndex="1"
      >
        {/* <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="-100"
        >
          <SmokeEffect />
        </Box> */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="#00000044"
          zIndex="-99"
        />
        <Text className="text-center text-sm" zIndex={1}>
          © {currentYear} Mystery Babylon. All rights reserved.
        </Text>
      </Box>

      <Box
        className="py-3 border-t border-gray-600 bg-[#000000]"
        position="relative"
        zIndex="1"
      ></Box>
    </Box>
  );
};
