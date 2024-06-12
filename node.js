module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier", "unicorn"],
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier"
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
    "import/prefer-default-export": 0,
    "import/no-default-export": 2,
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    'import/extensions': 0,
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
