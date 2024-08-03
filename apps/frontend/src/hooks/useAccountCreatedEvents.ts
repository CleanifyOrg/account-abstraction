import { useQuery } from "@tanstack/react-query";
import { useConnex } from "@vechain/dapp-kit-react";
import { getAccountsCreatedEvents } from "./getAccountCreatedEvents";
import { EnvConfig } from "@repo/config/contracts";

export const getAccountCreatedEventsQueryKey = (env: EnvConfig) => [
  "accountsCreated",
  env,
];

export const useAccountCreatedEvents = (env: EnvConfig) => {
  const { thor } = useConnex();

  return useQuery({
    queryKey: getAccountCreatedEventsQueryKey(env),
    queryFn: async () => await getAccountsCreatedEvents(thor, env),
    enabled: !!thor,
  });
};
