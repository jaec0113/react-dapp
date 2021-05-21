require("@nomiclabs/hardhat-waffle")

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chaidId: 1337,
    },
    // ropsten: {
    //   url: "<url end point>",
    //   accounts: [`0x${process.env.ACCOUNT_KEY}`]
    // }
  },
}
