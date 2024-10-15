import { Flex, Image } from "@chakra-ui/react";

export const Container = () => {
  return (
    <Flex position="relative" w="100%" pt="16" backgroundColor={"#0e0e0e"}>
      <Image
        position="absolute"
        bottom="0"
        src="img/footer-corner.png"
        zIndex={1}
      />
    </Flex>
  );
};
