import type { KnipConfig } from "knip";

/**
 * Knip configuration.
 * @see https://knip.dev/overview/configuration
 */
const knipConfig: KnipConfig = {
  entry: ["src/routes/**/*.{ts,tsx}", "src/router.tsx"],
  project: ["src/**/*.{ts,tsx,css}"],
  ignoreExportsUsedInFile: true,
  ignore: ["src/routeTree.gen.ts"],
  ignoreDependencies: [],
  tags: ["-knipignore"],
  rules: {
    unresolved: "off",
  },
};

export default knipConfig;
