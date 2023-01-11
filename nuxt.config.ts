// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/style/global.scss'],
    build: {
        transpile: ['mdi-vue']
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
});
