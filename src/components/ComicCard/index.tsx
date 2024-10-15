import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  useCheckbox,
} from "@chakra-ui/react";

interface ComicCardProps {
  name: string;
  symbol: string;
  description: string;
  imageUrl: string;
  traits: [];
  tokenId?: string;
  isEnded?: boolean;
}

export default function ComicCard({
  name,
  symbol,
  description,
  imageUrl,
  traits,
  tokenId,
  isEnded = false,
  ...props
}: ComicCardProps & any) {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  let labeledTrait = "";
  Object.keys(traits).forEach((key) => {
    if (labeledTrait.length > 0) {
      labeledTrait += ", ";
    }
    labeledTrait += `${key} : ${traits[key]}`;
  });

  return (
    <Box as="label">
      <Card
        {...getCheckboxProps()}
        w="256px"
        h="400px"
        borderRadius={8}
        position="relative"
        overflow="hidden"
        variant="outline"
        _checked={{
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "blue.400",
        }}
      >
        <input {...getInputProps()} hidden />
        <Image
          src={imageUrl}
          alt="My NFT Image"
          w="256px"
          h="256px"
          loading="lazy"
        />
        {isEnded && (
          <Badge
            position="absolute"
            variant="solid"
            right="0"
            borderTopRightRadius={8}
            fontSize="0.9rem"
            colorScheme="purple"
          >
            Ended
          </Badge>
        )}

        <CardBody p="15px">
          <Flex>
            <Heading
              maxW="200px"
              size="md"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {name}
            </Heading>
            &nbsp;
            <Heading size="md">#{tokenId}</Heading>
          </Flex>

          <Text
            mt={2}
            overflow="hidden"
            display="-webkit-box"
            style={{
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            whiteSpace="pre-wrap"
            color="whiteAlpha.500"
          >
            {description}
            <br />
            {labeledTrait}
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
