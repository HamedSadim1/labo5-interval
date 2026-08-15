import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    name: "use-at-alias",
    files: ["**/*.{ts,tsx}"],
    plugins: {
      local: {
        rules: {
          "no-relative-parent-imports": {
            meta: {
              type: "problem",
              docs: {
                description:
                  "Disallow relative parent imports (../); use the @ alias instead.",
              },
              schema: [],
            },
            create(context) {
              return {
                ImportDeclaration(node) {
                  const source = node.source.value;
                  if (typeof source === "string" && source.startsWith("../")) {
                    context.report({
                      node: node.source,
                      message: `Use the "@" alias instead of relative imports (found "${source}").`,
                    });
                  }
                },
              };
            },
          },
        },
      },
    },
    rules: {
      "local/no-relative-parent-imports": "error",
    },
  },
);
