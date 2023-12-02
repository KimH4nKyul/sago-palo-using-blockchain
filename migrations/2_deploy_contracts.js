const ECommerceStore = artifacts.require('../ECommerceStore.sol')

module.exports = function (deployer) {
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(ECommerceStore, '0x19c80879edef7E6C3206bda97F1A5Bb9B8b0930d')
}
