import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
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
        <Heading size={"sm"}>Your smart accounts</Heading>
        <Text fontSize="sm" mt={2}>
          Every wallet on VeChain can own a smart account. The address of your
          smart account is deterministic, and it can be deployed at any time.
        </Text>
      </CardHeader>

      <CardBody>
        {!testnetAccountAddress && !mainnetAccountAddress ? (
          <VStack spacing={4}>
            <Heading size={"md"}>No accounts found, create one</Heading>
          </VStack>
        ) : (
          <VStack spacing={4}>
            <Stack
              direction={["column", "row"]}
              w="full"
              justify={"space-between"}
            >
              <UserAccount env="testnet" account={testnetAccountAddress} />
              <UserAccount env="mainnet" account={mainnetAccountAddress} />
            </Stack>
          </VStack>
        )}
      </CardBody>
    </Card>
  );
};
