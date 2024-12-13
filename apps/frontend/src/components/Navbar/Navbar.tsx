import { HStack, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import { WalletButton } from "@vechain/dapp-kit-react";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <HStack justify={"space-between"} p={2} borderBottom={"1px solid #EEEEEE"}>
      <HStack spacing={2}>
        <Image
          src={logo}
          alt="logo"
          w={"50px"}
          // h="400px"
          rounded="full"
        />
        <Heading size={"sm"}>VeChain Smart Accounts Factory</Heading>
      </HStack>

      <HStack spacing={4}>
        {/* {account && (
          <Tag
            size={"lg"}
            variant="solid"
            colorScheme={isMainnet ? "teal" : "cyan"}
          >
            {config.network.name.toUpperCase()}
          </Tag>
        )} */}
        <WalletButton
          mobile={useBreakpointValue({
            base: true,
            md: false,
          })}
        />
      </HStack>
    </HStack>
  );
};
