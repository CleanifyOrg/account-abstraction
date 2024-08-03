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

type ContractAddressAndBalanceCardProps = {
  title: string;
  address: string;
};

export const ContractInfo = ({
  title,
  address,
}: ContractAddressAndBalanceCardProps) => {
  return (
    <Card w="full" borderRadius={"2xl"} p={2}>
      <CardHeader>
        <Heading size={"sm"}>{title}</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4}>
          <HStack w="full" justify={"space-between"}>
            <Text fontSize="md" wordBreak={"break-word"} fontWeight={600}>
              Address
            </Text>
            <AddressButtonGhostVariant address={address} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
