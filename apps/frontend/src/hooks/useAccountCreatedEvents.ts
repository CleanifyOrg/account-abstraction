import { useQuery } from "@tanstack/react-query";
import { useConnex } from "@vechain/dapp-kit-react";
import { getAccountsCreatedEvents } from "./getAccountCreatedEvents";

export const getAccountCreatedEventsQueryKey = () => ["accountsCreated"];

export const useAccountCreatedEvents = () => {
  const { thor } = useConnex();

  return useQuery({
    queryKey: getAccountCreatedEventsQueryKey(),
    queryFn: async () => await getAccountsCreatedEvents(thor),
    enabled: !!thor,
  });
};
