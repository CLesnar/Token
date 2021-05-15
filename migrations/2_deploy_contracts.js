var Token = artifacts.require("./Token.sol");
var TokenSale = artifacts.require("./TokenSale.sol");

module.exports = functions(deployer) {
		deployer.deploy(Token, 1000000000).then(function() {
			var tokenPrice = 1000000000000000;
			return deployer.deploy(TokenSale, Token.address, tokenPrice);
		});
}
