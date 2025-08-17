import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  target: "es2019",
  treeshake: true,
  splitting: false,
});
