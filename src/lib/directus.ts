import { createDirectus, rest } from "@directus/sdk";

const directusInstance = createDirectus(`${process.env.Directus_Url}`).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directusInstance;
