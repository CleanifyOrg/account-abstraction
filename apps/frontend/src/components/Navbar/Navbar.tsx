import { HStack, Heading, useBreakpointValue } from "@chakra-ui/react";
import { WalletButton } from "@vechain/dapp-kit-react";

export const Navbar = () => {
  return (
    <HStack justify={"space-between"} p={2} borderBottom={"1px solid #EEEEEE"}>
      <Heading size={"sm"}>Cleanify AA Factory</Heading>
      <WalletButton
        mobile={useBreakpointValue({
          base: true,
          md: false,
        })}
      />
    </HStack>
  );
};
