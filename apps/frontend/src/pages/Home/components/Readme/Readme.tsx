import {
  Image,
  Text,
  VStack,
  List,
  ListItem,
  Card,
  CardBody,
  Heading,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../../../assets/privy-aa-fee.png";

export const Readme = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  return (
    <Card w={"full"}>
      <CardBody>
        <VStack align="stretch" gap={4} px={isDesktop ? 20 : 4} spacing={4}>
          <VStack align="center" spacing={4}>
            <Heading size={"lg"} mt={4}>
              Readme
            </Heading>
            <Image
              mt={8}
              src={logo}
              alt="logo"
              w={"full"}
              // h="400px"
              rounded="full"
            />
            {/* <Text mt={4}>Account Abstraction for the vechain ecosystem.</Text> */}
          </VStack>

          <HStack justify="space-between">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0px",
                paddingBottom: "56.250%",
              }}
            >
              <iframe
                allow="fullscreen;autoplay"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/yuzm44?autoplay=1&muted=1"
                width="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                }}
              ></iframe>
            </div>
          </HStack>

          <Heading size={"md"}>Tech</Heading>
          <Text>There are 2 contracts:</Text>

          <List spacing={3} styleType="disc">
            <ListItem>
              <Text as="b">SimpleAccount</Text>: Is the abstracted account of
              the user.
            </ListItem>
            <ListItem>
              <Text as="b">SimpleAccountFactory</Text>: Factory contract to
              create SimpleAccount contracts on demand.
            </ListItem>
          </List>

          <Text>
            You can fork the contracts and deploy them on your own, but we
            recommend using the contracts deployed by us for a better cross-app
            compatibility.
          </Text>

          <Text>
            Owner of the Simple Account can execute transactions called directly
            from him or authorized via signatures and broadcasted by a third
            party.
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
