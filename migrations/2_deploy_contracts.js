const ECommerceStore = artifacts.require('../ECommerceStore.sol')

module.exports = function (deployer) {
  // deployer.link(ConvertLib, MetaCoin);
  accounts = web3.eth.getAccounts()
  deployer.deploy(ECommerceStore, 'USE ONE OF THE 9 ACCOUNTS FROM GANACHE')
}
