# `eslint-config-strng`

### Install

```sh
npx install-peerdeps eslint-config-strng -Y -d

# Optional - install prettier config
yarn add -D prettier-config-strng
```

Then create an `.eslintrc` or update your `package.json` with an
`"eslintConfig"` key, and add the following:

For React:

```json
// package.json
"eslintConfig": {"extends": "eslint-config-strng"}
"prettier": "prettier-config-strng"

// .eslintrc
{"extends": "eslint-config-strng"}
```

For Node:

```json
// package.json
"eslintConfig": {"extends": "eslint-config-strng/node"}
"prettier": "prettier-config-strng"

// .eslintrc
{"extends": "eslint-config-strng/node"}
```
