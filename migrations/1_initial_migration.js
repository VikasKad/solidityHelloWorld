var Migrations = artifacts.require("./Migrations.sol");
var helloWorld = artifacts.require("./HelloWorld.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(helloWorld);
};
