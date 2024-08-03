import { VStack } from "@chakra-ui/react";
import { ContractInfo } from "./components/ContractInfo";
import { getConfig } from "@repo/config";

export const Home = () => {
  return (
    <VStack align="stretch" gap={4}>
      Hellooooo
      <ContractInfo
        title="AA Factory"
        address={getConfig().simpleAccountFactoryContractAddress}
      />
      {/* <SendCard /> */}
    </VStack>
  );
};
