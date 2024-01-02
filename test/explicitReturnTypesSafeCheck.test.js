const linter = require("solhint");
const parser = require("@solidity-parser/parser");

describe("ExplicitReturnTypesSafeCheck", () => {
  it("should test the unchecked blocks in example contract", () => {
    const result = linter.processStr(
      "contract A { function foo() public { return; } }"
    );
    const parsed = parser.parse(
      "contract A { function foo() public { return; } }"
    );
    console.log(JSON.stringify(parsed, null, 2));
    console.log(JSON.stringify(result, null, 2));
  });
});
