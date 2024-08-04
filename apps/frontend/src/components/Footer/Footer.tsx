import { VStack, Container, Box, Image, Heading, Link } from "@chakra-ui/react";
import logo from "../../assets/cleanify.png";

export const Footer = () => {
  return (
    <Container
      maxW={"container.xl"}
      display={"flex"}
      alignItems={"stretch"}
      justifyContent={"flex-start"}
      flexDirection={"column"}
    >
      <VStack
        justifyContent={"space-between"}
        w="full"
        spacing={4}
        my={10}
        align={"center"}
      >
        <Heading size={"md"}>Supported by</Heading>
        <Box>
          <Link href="https://cleanify.vet" isExternal>
            <Image
              src={logo}
              alt="logo"
              w={"100px"}
              // h="400px"
              rounded="full"
            />
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};
