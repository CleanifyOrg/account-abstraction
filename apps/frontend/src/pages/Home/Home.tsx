import { Grid, VStack } from "@chakra-ui/react";
import { ContractInfo } from "./components/ContractInfo";
import { getConfig } from "@repo/config";
import { AbstractedAccounts } from "./components/AbstractedAccounts/AbstractedAccounts";
import { Readme } from "./components/Readme";
import { SupportedProject } from "../../components";

export const Home = () => {
  return (
    <VStack align="stretch" gap={4}>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
        <ContractInfo
          title="Mainnet"
          address={getConfig("mainnet").simpleAccountFactoryContractAddress}
          env="mainnet"
        />
        <ContractInfo
          title="Testnet"
          address={getConfig("testnet").simpleAccountFactoryContractAddress}
          env="testnet"
        />
      </Grid>

      <AbstractedAccounts />

      <SupportedProject />

      <Readme />
    </VStack>
  );
};
