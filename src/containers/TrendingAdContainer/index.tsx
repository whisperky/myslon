import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { css, keyframes } from "@emotion/react";

export const TrendingAdContainer = () => {
  const adRef = useRef(null);
  const adInView = useInView(adRef, { once: true, amount: 0.2 });

  const glowAnimation = keyframes`
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  `;

  const glowStyle = css`
    animation: ${glowAnimation} 1s ease-in-out infinite alternate;
  `;

  return (
    <Box py={16} px={[4, 8, 16, 24]} backgroundColor={"#000000"}>
      <motion.div
        ref={adRef}
        initial={{ opacity: 0, x: -50 }}
        animate={adInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Box
          p={10}
          mx={[0, 10, 20, "15%"]}
          borderRadius="lg"
          bgGradient="linear(to-r, purple.900, red.900)"
          // boxShadow="0 0 20px rgba(255, 0, 255, 0.5)"
          zIndex={2}
        >
          <Text
            as="h2"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            textAlign="center"
            color="white"
            letterSpacing="wider"
            className="mar-font"
            css={glowStyle}
          >
            Mystery Babylon
          </Text>
          <Text
            px={["2", "4", "16", "32"]}
            mt={4}
            fontSize={["lg", "xl"]}
            textAlign="center"
            color="whiteAlpha.800"
          >
            Mystery Babylon is a dark fantasy set in a fractured world where a
            small guild of outcasts defies the growing corruption of kings and
            demons to bring balance back to the realm. Dive into a tale of
            power, betrayal, and hope against overwhelming odds.
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
      </motion.div>
    </Box>
  );
};
