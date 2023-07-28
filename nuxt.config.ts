// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-vite-legacy"],
  legacy: {
    targets: ['chrome >= 69'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime', 'systemjs'],
    polyfills: ['esnext.global-this', 'es.object.entries']
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        { src: "/js/globalThis.js" }, //不写pulic是因为路径已经有约定规则了
        { src: "/js/fromEntries.js"},
      ],
    },
  },
  plugins: [{ src: "~/plugins/vconsole", mode: "client" }],
});
