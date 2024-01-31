const linter = require("solhint");
const fs = require("fs");
const assert = require("assert");

const settings = {
  plugins: ["euler-swap"],
  rules: {
    "euler-swap/explicit-return-types-safe-check": "warn",
  },
};
describe("ExplicitReturnTypesSafeCheck", () => {
  it("should test the unchecked blocks in example contract", () => {
    const uncheckedContract = fs.readFileSync(
      "test/contracts/UncheckedReturn.sol",
      "utf8"
    );
    const result = linter.processStr(uncheckedContract, settings);
    assert.equal(result.reports.length, 0);
  });

  it("should return an error if no return is detected", () => {
    const noReturnContract = fs.readFileSync(
      "test/contracts/NoReturn.sol",
      "utf8"
    );
    const result = linter.processStr(noReturnContract, settings);
    assert.equal(
      result.reports[0].message,
      `Return statements must be written and must explicitly return something; consider "return uint256;"?`
    );
  });

  it("should return an error if no return is detected", () => {
    const explicitTypeMissingContract = fs.readFileSync(
      "test/contracts/ExplicitTypeMissing.sol",
      "utf8"
    );
    const result = linter.processStr(explicitTypeMissingContract, settings);
    assert.equal(
      result.reports[0].message,
      `Return statements must explicitly return something; consider "returns (uint256)"?`
    );
  });

  it("should return an error if no return is detected", () => {
    const explicitTypeMissingContract = fs.readFileSync(
      "test/contracts/NamedReturnTypeMistake.sol",
      "utf8"
    );
    const result = linter.processStr(explicitTypeMissingContract, settings);
    assert.equal(
      result.reports[0].message,
      `Named return values should be avoided; consider "returns (uint256)"?`
    );
  });
});
