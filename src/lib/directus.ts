import { createDirectus, rest } from "@directus/sdk";

const directusInstance = createDirectus("http://0.0.0.0:8055").with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directusInstance;
