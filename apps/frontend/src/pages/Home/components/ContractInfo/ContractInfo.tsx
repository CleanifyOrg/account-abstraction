import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AddressButtonGhostVariant } from "../../../../components";
import { useAccountCreatedEvents } from "../../../../hooks";
import { EnvConfig } from "@repo/config/contracts";
import { useContractVersion } from "../../../../hooks/useContractVersion";

type ContractAddressAndBalanceCardProps = {
  title: string;
  address: string;
  env: EnvConfig;
};

export const ContractInfo = ({
  title,
  address,
  env,
}: ContractAddressAndBalanceCardProps) => {
  const { data: contractVersion } = useContractVersion(address, env);

  const { data: accountsCreatedEvents, isLoading: isLoadingCreatedAccoounts } =
    useAccountCreatedEvents(env);

  return (
    <Card w="full" borderRadius={"2xl"} p={2}>
      <CardHeader>
        <Heading size={"sm"}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4}>
          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
              Contract Factory Address
            </Text>
            <AddressButtonGhostVariant address={address} />
          </HStack>
          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" fontWeight={600}>
              Version
            </Text>
            <Text fontSize="md" fontWeight={600}>
              {contractVersion}
            </Text>
          </HStack>

          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" fontWeight={600}>
              Accounts created
            </Text>
            <Text fontSize="md" fontWeight={600}>
              {isLoadingCreatedAccoounts
                ? "Loading..."
                : accountsCreatedEvents?.created.length}
            </Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
