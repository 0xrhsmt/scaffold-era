import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  // Read message from contract
  console.log(`The message is ${await greeter.greet()}`);

  // send transaction to update the message
  const newMessage = "Hello people!";
  const tx = await greeter.setGreeting(newMessage);

  console.log(`Transaction to change the message is ${tx.hash}`);
  await tx.wait();

  // Read message after transaction
  console.log(`The message now is ${await greeter.greet()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});