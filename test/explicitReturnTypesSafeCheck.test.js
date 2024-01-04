const linter = require("solhint");
const fs = require("fs");
const assert = require("assert");

describe("ExplicitReturnTypesSafeCheck", () => {
  it("should test the unchecked blocks in example contract", () => {
    const uncheckedContract = fs.readFileSync(
      "test/contracts/UncheckedReturn.sol",
      "utf8"
    );
    const result = linter.processStr(uncheckedContract, {
      plugins: ["euler-swap"],
      rules: {
        "euler-swap/explicit-return-types-safe-check": "warn",
      },
    });
    assert.equal(result.reports.length, 0);
  });
});
