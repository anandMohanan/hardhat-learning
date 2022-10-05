const { ethers, run, network } = require("hardhat");

const main = async () => {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  const SimpleStorage = await SimpleStorageFactory.deploy();
  console.log("Deploying");
  await SimpleStorage.deployed();
  console.log("Deploing done");
  // console.log(network.config);
  // console.log(SimpleStorage.address);
  await SimpleStorage.deployTransaction.wait(4);
  // await verify(SimpleStorage.address, []);

  const curVal = await SimpleStorage.retrieve();
  console.log(curVal);
  let upVal = await SimpleStorage.store(10);
  await upVal.wait(1);
  const newVal = await SimpleStorage.retrieve();
  console.log(newVal);
};

// const verify = async (contractAddress, args) => {
//   console.log("Verifying");
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguements: args,
//     });
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already verified");
//     } else {
//       console.log(e);
//     }
//   }
// };
main()
  .then(() => process.exit(0))
  .catch((e) => {
    process.exit(1);
    console.log(e);
  });
