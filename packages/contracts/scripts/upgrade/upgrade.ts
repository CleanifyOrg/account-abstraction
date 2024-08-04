import { getConfig } from "@repo/config";
import { ethers } from "hardhat";
import { getInitializerData } from "../deploy/deploy";
import { getImplementationAddress } from "@openzeppelin/upgrades-core";

const config = getConfig();

export const upgrade = async () => {
  // Deploy the implementation contract
  const Contract = await ethers.getContractFactory("SimpleAccountFactory");
  const implementation = await Contract.deploy();
  await implementation.waitForDeployment();

  const currentImplementationContract = await ethers.getContractAt(
    "SimpleAccountFactory",
    config.simpleAccountFactoryContractAddress
  );

  const tx = await currentImplementationContract.upgradeToAndCall(
    await implementation.getAddress(),
    "0x"
  );
  await tx.wait();

  const newImplementationAddress = await getImplementationAddress(
    ethers.provider,
    config.simpleAccountFactoryContractAddress
  );
  if (newImplementationAddress !== (await implementation.getAddress())) {
    throw new Error(
      `The implementation address is not the one expected: ${newImplementationAddress} !== ${await implementation.getAddress()}`
    );
  }

  console.log(`Upgraded implementation to: ${newImplementationAddress}`);
};
