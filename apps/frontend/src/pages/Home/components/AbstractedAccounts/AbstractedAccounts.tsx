import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { UserAccount } from "../UserAccount/UserAccount";
import { useWallet } from "@vechain/dapp-kit-react";
import { useGetAccountAddress } from "../../../../hooks";

export const AbstractedAccounts = () => {
  const { account } = useWallet();
  const { data: testnetAccountAddress } = useGetAccountAddress(
    account ?? "",
    "testnet"
  );
  const { data: mainnetAccountAddress } = useGetAccountAddress(
    account ?? "",
    "mainnet"
  );

  return (
    <Card>
      <CardHeader>
        <Heading size={"sm"}>Your abstracted accounts</Heading>
      </CardHeader>
      <CardBody>
        {!testnetAccountAddress && !mainnetAccountAddress ? (
          <VStack spacing={4}>
            <Heading size={"md"}>No accounts found, create one</Heading>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <HStack w="full" justify={"space-between"}>
              <UserAccount env="testnet" account={testnetAccountAddress} />
              <UserAccount env="mainnet" account={mainnetAccountAddress} />
            </HStack>
          </VStack>
        )}
      </CardBody>
    </Card>
  );
};
