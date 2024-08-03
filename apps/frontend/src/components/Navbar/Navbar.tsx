import { HStack, Heading, Tag, useBreakpointValue } from "@chakra-ui/react";
import { getConfig } from "@repo/config";
import { WalletButton, useWallet } from "@vechain/dapp-kit-react";

export const Navbar = () => {
  const config = getConfig(import.meta.env.VITE_APP_ENV);
  const isMainnet = config.network.name === "mainnet";
  const { account } = useWallet();
  return (
    <HStack justify={"space-between"} p={2} borderBottom={"1px solid #EEEEEE"}>
      <Heading size={"sm"}>Cleanify AA Factory</Heading>

      <HStack spacing={4}>
        {account && (
          <Tag
            size={"lg"}
            variant="solid"
            colorScheme={isMainnet ? "teal" : "cyan"}
          >
            {config.network.name.toUpperCase()}
          </Tag>
        )}
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
