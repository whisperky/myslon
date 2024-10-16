import {
  ArrowRightIcon,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/icons";

export const TrendingAdContainer = () => {
  return (
    <Box py={16} px={[4, 8, 16, 24]} backgroundColor={"#000000"}>
      <Box
        p={10}
        mx={[0, 10, 20, "15%"]}
        borderRadius="lg"
        bgGradient="linear(to-r, purple.900, red.900)"
        // boxShadow="0 0 20px rgba(255, 0, 255, 0.5)"
        zIndex={2}
      >
        <Heading
          as="h2"
          fontSize={["3xl", "4xl", "5xl"]}
          fontWeight="bold"
          textAlign="center"
          color="white"
          textShadow="0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff"
          letterSpacing="wider"
        >
          Mystery Babylon
        </Heading>
        <Text
          px={["2", "4", "16", "32"]}
          mt={4}
          fontSize={["lg", "xl"]}
          textAlign="center"
          color="whiteAlpha.800"
        >
          Mystery Babylon is a dark fantasy set in a fractured world where a
          small guild of outcasts defies the growing corruption of kings and
          demons to bring balance back to the realm. Dive into a tale of power,
          betrayal, and hope against overwhelming odds.
        </Text>
        <Flex justifyContent="center" mt={6}>
          <Link href="/read">
            <Button
              rightIcon={<ArrowRightIcon />}
              colorScheme="pink"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              Explore the Mystery
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
