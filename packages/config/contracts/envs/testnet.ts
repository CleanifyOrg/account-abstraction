import { defineConfig } from "../defineConfig";
export function createTestnetConfig() {
  return defineConfig({
    VITE_APP_ENV: "testnet",
  });
}
