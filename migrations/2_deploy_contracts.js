const ECommerceStore = artifacts.require('../ECommerceStore.sol')

module.exports = function (deployer) {
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(ECommerceStore)
}
