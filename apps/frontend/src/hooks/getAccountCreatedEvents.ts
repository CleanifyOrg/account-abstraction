import { abi } from "thor-devkit";
import { getConfig } from "@repo/config";
import { SimpleAccountFactoryJson } from "@repo/contracts";
import { getAllEvents } from "./getEvents";
const simpleAccountFactoryAbi = SimpleAccountFactoryJson.abi;

const simpleAccountFactoryContractAddress = getConfig(
  import.meta.env.VITE_APP_ENV
).simpleAccountFactoryContractAddress;

export type AccountCreatedEvent = {
  address: string;
  owner: string;
  salt: string;
};

export const getAccountsCreatedEvents = async (thor: Connex.Thor) => {
  const accountCreatedAbi = simpleAccountFactoryAbi.find(
    (abi) => abi.name === "AccountCreated"
  );
  if (!accountCreatedAbi) throw new Error("AccountCreated event not found");
  const accountCreatedEvent = new abi.Event(
    accountCreatedAbi as unknown as abi.Event.Definition
  );

  /**
   * Filter criteria to get the events from the governor contract that we are interested in
   * This way we can get all of them in one call
   */
  const filterCriteria = [
    {
      address: simpleAccountFactoryContractAddress,
      topic0: accountCreatedEvent.signature,
    },
  ];

  const events = await getAllEvents({ thor, filterCriteria });

  /**
   * Decode the events to get the data we are interested in (i.e the proposals)
   */
  const decodedCreatedAccountsEvents: AccountCreatedEvent[] = [];

  //   TODO: runtime validation with zod ?
  events.forEach((event) => {
    switch (event.topics[0]) {
      case accountCreatedEvent.signature: {
        const decoded = accountCreatedEvent.decode(event.data, event.topics);
        decodedCreatedAccountsEvents.push({
          address: decoded[0],
          owner: decoded[1],
          salt: decoded[2],
        });
        break;
      }

      default: {
        throw new Error("Unknown event");
      }
    }
  });

  return {
    created: decodedCreatedAccountsEvents,
  };
};
