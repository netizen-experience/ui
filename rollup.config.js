import path from "path";
import { fileURLToPath } from "url";
import typescript from "@rollup/plugin-typescript";
import { globSync } from "glob";
import del from "rollup-plugin-delete";
import preserveDirectives from "rollup-preserve-directives";
import pkg from "./package.json" with { type: "json" };

/** @type {import('rollup').RollupOptions} */
export default {
  input: Object.fromEntries(
    globSync(["./src/components/**/*.tsx", "./src/lib/**/*.ts"])
      .filter((file) => !file.endsWith(".stories.tsx"))
      .map((file) => [path.relative("src", file), fileURLToPath(new URL(file, import.meta.url))]),
  ),
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
    entryFileNames: ({ name }) => {
      return `${name.slice(0, name.length - path.extname(name).length)}.js`;
    },
  },
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    /@phosphor-icons\/react*/,
    "react/jsx-runtime",
    "react-dom/client",
  ],
  plugins: [
    del({ targets: "dist/*" }),
    typescript({
      tsconfig: "./tsconfig.lib.json",
      exclude: ["src/**/*.stories.{ts,tsx}"],
      declaration: true,
      declarationDir: "dist",
      allowImportingTsExtensions: false,
    }),
    preserveDirectives(),
  ],
};
