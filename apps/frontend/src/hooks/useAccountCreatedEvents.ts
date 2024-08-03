import { useQuery } from "@tanstack/react-query";
import Connex from "@vechain/connex";
import { getAccountsCreatedEvents } from "./getAccountCreatedEvents";
import { EnvConfig } from "@repo/config/contracts";
import { getConfig } from "@repo/config";

export const getAccountCreatedEventsQueryKey = (env: EnvConfig) => [
  "accountsCreated",
  env,
];

export const useAccountCreatedEvents = (env: EnvConfig) => {
  const config = getConfig(env);

  const thor = new Connex.Thor({
    node: config.network.explorerUrl ?? "",
    network: config.network.type,
  });

  return useQuery({
    queryKey: getAccountCreatedEventsQueryKey(env),
    queryFn: async () => await getAccountsCreatedEvents(thor, env),
    enabled: !!thor,
  });
};
