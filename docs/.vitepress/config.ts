import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared.config";
import { id } from "./id";
import { en } from "./en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,
  locales: {
    root: { label: 'Indonesia', ...id },
    en: { label: "English", ...en }
  },
});
