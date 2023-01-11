/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#61afef',
                accent: '#89ca78',
                main: '#2d2e32',
                dark: '#25262a'
            }
        }
    },
    variants: {
        display: [
            'children',
            'default',
            'children-first',
            'children-last',
            'children-odd',
            'children-even',
            'children-not-first',
            'children-not-last',
            'children-hover',
            'hover',
            'children-focus',
            'focus',
            'children-focus-within',
            'focus-within',
            'children-active',
            'active',
            'children-visited',
            'visited',
            'children-disabled',
            'disabled',
            'responsive'
        ]
    },
    plugins: [require('tailwindcss-children')]
};
