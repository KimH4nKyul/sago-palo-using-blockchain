const ECommerceStore = artifacts.require('../ECommerceStore.sol')

module.exports = function (deployer) {
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(ECommerceStore, '0x19c80879edef7E6C3206bda97F1A5Bb9B8b0930d')
}

/** 아래 트러플 명령으로 테스트 
truffle(development)> contract = await EcommerceStore.deployed()
truffle(development)> contract.addProductToStore('iphone X', 'phones', 'image', 'desc', 1526901233, web3.utils.toWei('1', 'ether'), 0)
truffle(development)> contract.buy(1, {value: web3.utils.toWei('1', 'ether'), from: 'USE ONE OF THE 10 ACCOUNTS EXCEPT FIRST ACCOUNT'})
truffle(development)> contract.escrowInfo.call(1)
truffle(development)> contract.releaseAmountToSeller(1, {from: 'BUYER ACCOUNT'})
truffle(development)> contract.releaseAmountToSeller(1, {from: 'SELLER ACCOUNT'})
*/
