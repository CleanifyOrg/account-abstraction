import { ContractsConfig } from "@repo/config/contracts";
import { ethers, network } from "hardhat";

export async function deployAll(config: ContractsConfig): Promise<{
  simpleAccountFactory: string;
  // feeDelegation: string;
}> {
  const [deployer, owner] = await ethers.getSigners();

  //TODO: add (${networkConfig.network.defaultNodeUrl})
  console.log(
    `Deploying on ${network.name}  with account ${deployer.address}...`
  );

  console.log(`Deploying mock SimpleAccountFactory...`);
  const SimpleAccountFactory = await ethers.getContractFactory(
    "SimpleAccountFactory"
  );
  const simpleAccountFactory =
    await SimpleAccountFactory.connect(deployer).deploy();
  await simpleAccountFactory.waitForDeployment();
  const sfTx = await simpleAccountFactory.deploymentTransaction();
  const sfReceipt = await ethers.provider.getTransactionReceipt(sfTx!.hash);
  console.log(`SimpleAccountFactory deployed to ${sfReceipt?.contractAddress}`);
  if (!sfReceipt?.contractAddress)
    throw new Error("SimpleAccountFactory deployment failed");

  // console.log("Deploy fee delegation contract...");
  // const FeeDelegation = await ethers.getContractFactory("FeeDelegation");
  // const feeDelegation = await FeeDelegation.connect(deployer).deploy();
  // await feeDelegation.waitForDeployment();
  // const fdTx = await feeDelegation.deploymentTransaction();
  // const fdReceipt = await ethers.provider.getTransactionReceipt(fdTx!.hash);
  // console.log(`FeeDelegation deployed to ${fdReceipt?.contractAddress}`);

  console.log(`Done`);
  // console.log("Testing SimpleAccountFactory");

  // const SimpleAccountFactoryDeployed = await ethers.getContractAt(
  //     "SimpleAccountFactory",
  //     sfReceipt?.contractAddress
  // );

  // await SimpleAccountFactoryDeployed.createAccount(
  //     owner.address,
  //     BigInt(owner.address)
  // );

  // console.log(
  //     "Owner Address",
  //     owner.address,

  //     await SimpleAccountFactoryDeployed.getAccountAddress(
  //         owner.address,
  //         BigInt(owner.address)
  //     )
  // );
  // console.log(
  //     "Owner Address",
  //     owner.address,
  //     await SimpleAccountFactoryDeployed.getAccountAddress(owner.address, 0)
  // );

  // await SimpleAccountFactoryDeployed.createAccount(
  //     deployer.address,
  //     BigInt(deployer.address)
  // );
  // console.log(
  //     "Deployer Address",
  //     deployer.address,
  //     await SimpleAccountFactoryDeployed.getAccountAddress(
  //         deployer.address,
  //         BigInt(deployer.address)
  //     )
  // );
  // console.log(
  //     "Deployer Address",
  //     deployer.address,
  //     await SimpleAccountFactoryDeployed.getAccountAddress(
  //         deployer.address,
  //         0
  //     )
  // );

  return {
    simpleAccountFactory: await simpleAccountFactory.getAddress(),
  };
}
