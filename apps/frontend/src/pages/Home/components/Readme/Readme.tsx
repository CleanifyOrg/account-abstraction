import {
  Image,
  Text,
  VStack,
  Link,
  List,
  ListItem,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import logo from "../../../../assets/logo.png";

export const Readme = () => {
  return (
    <Card w={"full"}>
      <CardBody>
        <VStack align="stretch" gap={4} px={20}>
          <VStack align="center">
            <Image
              src={logo}
              alt="logo"
              w={"150px"}
              // h="400px"
              rounded="full"
            />
            <Text mt={4}>Account Abstraction for the vechain ecosystem.</Text>
          </VStack>

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
