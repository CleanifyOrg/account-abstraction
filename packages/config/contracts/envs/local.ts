import { defineConfig } from "../defineConfig";

export function createLocalConfig() {
  return defineConfig({
    VITE_APP_ENV: "local",
  });
}
