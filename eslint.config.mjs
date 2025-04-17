import { FlatCompat } from "@eslint/eslintrc";
import importHelpers from "eslint-plugin-import-helpers";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "import-helpers": importHelpers
    },
    rules: {
      // Avoid hardcoded labels - https://next-intl.dev/docs/workflows/linting#avoid-hardcoded-labels-in-component-markup
      "react/jsx-no-literals": "error",
      // Consistently import navigation APIs from `@/i18n/navigation` - https://next-intl.dev/docs/workflows/linting#consistent-usage-of-navigation-apis
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/i18n/navigation` instead."
        },
        {
          name: "next/navigation",
          importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
          message: "Please import from `@/i18n/navigation` instead."
        }
      ],
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "always",
          groups: [
            ["/^next/", "module"],
            "/^@/styles/",
            "/^@/app/",
            "/^@/data/",
            "/^@/models/",
            "/^@/i18n/",
            "/^@/lib/",
            "/^@/providers/",
            "/^@/hooks/",
            "/^@/components/",
            ["parent", "sibling", "index"]
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true
          }
        }
      ]
    }
  }
];

export default eslintConfig;
