import { HStack, VStack } from "@chakra-ui/react";
import { ContractInfo } from "./components/ContractInfo";
import { getConfig } from "@repo/config";

export const Home = () => {
  return (
    <VStack align="stretch" gap={4}>
      <HStack spacing={4}>
        <ContractInfo
          title="AA Factory - Testnet"
          address={getConfig("testnet").simpleAccountFactoryContractAddress}
        />
        <ContractInfo
          title="AA Factory - Mainnet"
          address={getConfig("mainnet").simpleAccountFactoryContractAddress}
        />
      </HStack>
    </VStack>
  );
};
