# Chainlink Solhint Rules

A set of Solhint rules for Chainlink's Solidity Style Guide.

[You can find a working Foundry example here](https://github.com/smartcontractkit/chainlink-solhint-rules-example).

## Install to a new project

```
npm init && npm install -D solhint-plugin-euler-swap@github:@euler-xyz/euler-swap-solhint-rules#master --save
```

Specify explicit commit hash to avoid breaking changes.

```
npm init && npm install -D solhint-plugin-euler-swap@github:@euler-xyz/euler-swap-solhint-rules#<commit-hash> --save
```

Create a `.solhint.json` in your root project directory:

```
{
    "plugins": ["euler-swap"],
    "rules": {
        "euler-swap/explicit-return-types-safe-check": "warn"
    }
}

```

Add the following to your `package.json`:

```
  "scripts": {
    "solhint": "solhint --config .solhint.json \"./**/*.sol\""
  },
```

Then, run:

```
npm run solhint

./src/controllers/ConstantProductCurveController.sol
  154:5  warning  Return statements must be written and must explicitly return something; consider "return uint256;"?  euler-swap/explicit-return-types-safe-check

./src/controllers/MultiTokenConstantSumCurveController.sol
  166:5  warning  Return statements must be written and must explicitly return something; consider "return uint256;"?  euler-swap/explicit-return-types-safe-check
```

## Rules

| Rule Id                                       | Description                                                          |
| --------------------------------------------- | -------------------------------------------------------------------- |
| `euler-swap/explicit-return-types-safe-check` | Check if returns have full types and if they are explicitly returned |

