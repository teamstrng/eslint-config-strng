module.exports = {
  "parser": "babel-eslint",
  "plugins": ["prettier", "react-hooks"],
  "extends": [
    "airbnb",
    "prettier"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  },
  "rules": {
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".ts", ".tsx", ".js", ".jsx"] }],
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "react/destructuring-assignment": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'import/extensions': 0
  }
}
