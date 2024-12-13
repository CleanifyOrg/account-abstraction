import { getConfig } from "@repo/config";
import { SimpleAccountFactory__factory } from "@repo/contracts";
import { useCallback, useMemo } from "react";
import { useBuildTransaction } from "../utils";
import { buildClause } from "../utils/buildClause";
import { getAccountCreatedEventsQueryKey } from "./useAccountCreatedEvents";
import { EnvConfig } from "@repo/config/contracts";
import { getAccountAddressQueryKey } from "./useGetAccountAddress";
import { useWallet } from "@vechain/dapp-kit-react";
import { getIsAccountDeployedQueryKey } from "./useIsAccountDeployed";

const SimpleAccountFactoryInterface =
  SimpleAccountFactory__factory.createInterface();

type Props = { onSuccess?: () => void };

type useCreateAccountParams = {
  owner: string;
  env: EnvConfig;
};

export const useCreateAccount = ({ onSuccess }: Props) => {
  const { account } = useWallet();

  const clauseBuilder = useCallback(
    ({ owner, env }: useCreateAccountParams) => {
      return [
        buildClause({
          to: getConfig(env).simpleAccountFactoryContractAddress,
          contractInterface: SimpleAccountFactoryInterface,
          method: "createAccount",
          args: [owner],
          comment: `Create abstracted account controlled by ${owner}`,
        }),
      ];
    },
    []
  );

  const refetchQueryKeys = useMemo(
    () => [
      getAccountCreatedEventsQueryKey("testnet"),
      getAccountCreatedEventsQueryKey("mainnet"),
      getAccountAddressQueryKey(account ?? "", "testnet"),
      getAccountAddressQueryKey(account ?? "", "mainnet"),
      getIsAccountDeployedQueryKey(account ?? "", "testnet"),
      getIsAccountDeployedQueryKey(account ?? "", "mainnet"),
    ],
    [account]
  );

  return useBuildTransaction({
    clauseBuilder,
    refetchQueryKeys,
    onSuccess,
  });
};
