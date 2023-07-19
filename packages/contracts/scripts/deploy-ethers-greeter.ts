import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");

  const greeting = "Hi there!";
  const greeter = await Greeter.deploy(greeting);

  await greeter.deployed();

  console.log(`deployed to ${greeter.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});