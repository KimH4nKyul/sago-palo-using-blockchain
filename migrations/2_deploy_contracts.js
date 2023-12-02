const ECommerceStore = artifacts.require('../ECommerceStore.sol')

module.exports = function (deployer) {
  // deployer.link(ConvertLib, MetaCoin);
  // accounts = web3.eth.getAccounts()
  deployer.deploy(ECommerceStore, web3.eth.accounts[9])
}
