const linter = require("solhint");
const parser = require("@solidity-parser/parser");
const fs = require("fs");
const path = require("path");

describe("ExplicitReturnTypesSafeCheck", () => {
  it("should test the unchecked blocks in example contract", () => {
    const uncheckedContract = fs.readFileSync(
      "test/contracts/Unchecked.sol",
      "utf8"
    );
    const result = linter.processStr(uncheckedContract, {
      plugins: ["euler-swap"],
      rules: {
        "euler-swap/explicit-return-types-safe-check": "warn",
      },
    });
    console.log(JSON.stringify(result, null, 2));
    // const parsed = parser.parse(uncheckedContract);
    // console.log(JSON.stringify(parsed, null, 2));
    // console.log(JSON.stringify(result, null, 2));
  });
});
