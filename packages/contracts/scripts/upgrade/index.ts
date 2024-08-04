// We recommend this pattern to be able to use async/await everywhere

import { upgrade } from "./upgrade";

// and properly handle errors.
const execute = async () => {
  await upgrade();
};

execute()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
