import { defineConfig } from "../defineConfig";
export function createMainnetConfig() {
  return defineConfig({
    VITE_APP_ENV: "mainnet",
  });
}
