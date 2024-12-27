import path from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: false,
    sourcemap: false,
    lib: {
      name: "ui",
      entry: Object.fromEntries(
        globSync(["./src/components/**/*.tsx", "./src/lib/**/*.ts"])
          .filter((file) => !file.endsWith(".stories.tsx"))
          .map((file) => [path.parse(file).base, fileURLToPath(new URL(file, import.meta.url))]),
      ),
      formats: ["es"],
      fileName: (_, entryName) => `${path.parse(entryName).name}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.peerDependencies),
        /@phosphor-icons\/react*/,
        "react/jsx-runtime",
        "react-dom/client",
      ],
      output: {
        preserveModules: true,
      },
    },
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.lib.json",
      exclude: ["./src/components/**/*.stories.tsx"],
    }),
  ],
});
