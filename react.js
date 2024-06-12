module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier", "react-hooks", "unicorn"],
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react-hooks/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".ts", ".tsx", ".js", ".jsx"] }],
    "react/jsx-handler-names": "error",
    "react/boolean-prop-naming": "error",
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "prettier/prettier": "error",
    "react/destructuring-assignment": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'import/extensions': 0,
    "arrow-body-style": "off",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "{}": {
            "message": "Use Record instead",
            "fixWith": "Record<string, any>"
          }
        }
      }
    ]
  }
}
