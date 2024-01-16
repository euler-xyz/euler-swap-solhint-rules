# Euler Solhint Rules

A set of Solhint rules for Euler's Solidity Style Guide.

## Install to a new project

```
npm init && npm install -D solhint-plugin-euler-swap@github:@euler-xyz/euler-swap-solhint-rules#master --save
```
or 

```
npm i -D solhint-plugin-euler-swap@npm:@euler-xyz/solhint-plugin-euler-swap 
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
NOTE: The package should be explicitly in solhint-plugin-[package-name] format since solhint searches for `require('solhint-plugin-<package-name>')` in the node_modules folder.


Add the following to your `package.json`:

```
  "scripts": {
    "solhint": "solhint --config .solhint.json \"./**/*.sol\""
  },
```

Then, run:

```
npm run solhint
```

## Rules

| Rule Id                                       | Description                                                          |
| --------------------------------------------- | -------------------------------------------------------------------- |
| `euler-swap/explicit-return-types-safe-check` | Check if returns have full types and if they are explicitly returned |

