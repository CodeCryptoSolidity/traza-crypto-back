const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TrazaCryptoModule", (m) => {

  const TrazaCrypto = m.contract("TrazaCrypto");

  return { TrazaCrypto };
});
