import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { EnvConfig } from "@repo/config/contracts";
import { AddressButtonGhostVariant } from "../../../../components";

type UserAccountProps = {
  env: EnvConfig;
  account?: string;
};

export const UserAccount = ({ env, account }: UserAccountProps) => {
  if (!account) {
    return null;
  }

  return (
    <Card w={"full"}>
      <CardBody>
        <HStack w="full" justify={"space-between"}>
          <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
            Network
          </Text>
          <Text fontSize="md">{env}</Text>
        </HStack>

        <HStack w="full" justify={"space-between"}>
          <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
            Address
          </Text>
          <AddressButtonGhostVariant address={account} />
        </HStack>
      </CardBody>
    </Card>
  );
};
