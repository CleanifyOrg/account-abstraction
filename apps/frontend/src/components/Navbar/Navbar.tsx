import {
  HStack,
  Heading,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { WalletButton } from "@vechain/dapp-kit-react";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justify={"center"}
      w={"full"}
      borderBottom={"1px solid #EEEEEE"}
    >
      <HStack justify={"space-between"} p={2} maxW={"1000px"} w={"full"}>
        <HStack spacing={2}>
          <Image src={logo} alt="logo" w={"50px"} rounded="full" />
          <Heading size={"sm"}>VeChain Smart Accounts Factory</Heading>
        </HStack>

        <HStack spacing={4}>
          <WalletButton
            mobile={useBreakpointValue({
              base: true,
              md: false,
            })}
          />
        </HStack>
      </HStack>
    </Stack>
  );
};
