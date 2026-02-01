import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  console.log("context: ", context);
  console.log("originPathname: ", context.originPathname);
});
