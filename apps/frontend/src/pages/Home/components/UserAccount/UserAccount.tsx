import { Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";
import { EnvConfig } from "@repo/config/contracts";
import { AddressButtonGhostVariant } from "../../../../components";
import { useIsAccountDeployed } from "../../../../hooks";

type UserAccountProps = {
  env: EnvConfig;
  account?: string;
};

export const UserAccount = ({ env, account }: UserAccountProps) => {
  const { data: isAccountDeployed } = useIsAccountDeployed(env, account);

  if (!account) {
    return null;
  }

  return (
    <Card w={"full"}>
      <CardBody>
        <VStack spacing={4}>
          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
              Address
            </Text>
            <AddressButtonGhostVariant address={account} />
          </HStack>

          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
              Network
            </Text>
            <Text fontSize="md">
              {env === "mainnet" ? "Mainnet" : "Testnet"}
            </Text>
          </HStack>

          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
              Deployed
            </Text>
            <Text fontSize="md">{isAccountDeployed ? "Yes" : "No"}</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
