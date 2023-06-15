// const ConvertLib = artifacts.require("ConvertLib");
const Database = artifacts.require("Database");

module.exports = function (deployer) {
  deployer.deploy(Database);
};
