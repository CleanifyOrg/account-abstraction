import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import fiorino from "../../../../assets/fiorino.jpeg";
import { useFiorinoBalance } from "../../../../hooks/useFiorinoBalance";

export const BalanceCard = () => {
  const { balance } = useFiorinoBalance();
  return (
    <Card>
      <CardBody>
        <HStack justify="space-between">
          <Text fontSize="lg" fontWeight="bold">
            Balance
          </Text>
          <HStack>
            <Text fontSize="2xl" fontWeight="bold">
              {balance}
            </Text>
            <Image src={fiorino} alt="VET" boxSize="8" />
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};
