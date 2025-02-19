import { FlatCompat } from "@eslint/eslintrc";
import importHelpers from "eslint-plugin-import-helpers";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "import-helpers": importHelpers,
    },
    rules: {
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "always",
          groups: [
            ["/^next/", "module"],
            "/^@/styles/",
            "/^@/app/",
            "/^@/models/",
            "/^@/data-access/",
            "/^@/lib/",
            "/^@/providers/",
            "/^@/hooks/",
            "/^@/components/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-console": "warn",
    },
  },
];
export default eslintConfig;
