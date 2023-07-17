/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
// const colors = require('tailwindcss/colors');

module.exports = {
    safelist: [
        {
            pattern: /col-span-/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl']
        },
        'bootstrap-container',
        'shadow-md'
    ],
    content: [
        // "./src/components/**/*.{js,vue,ts}",
        // "./src/layouts/**/*.vue",
        // "./src/pages/**/*.vue",
        // "./src/plugins/**/*.{js,ts}",
        "./src/**/*.{js,vue,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        screens: {
            "2xs": "360px",
            xs: "480px",
            ...defaultTheme.screens,
        },
        container: (theme) => ({
            center: true,
            padding: theme("spacing.5"),
            screens: {
                // xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1800px"
            },
        }),
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        p: {
                            marginBottom: '1rem'
                        },
                        table: {
                            borderColor: theme('colors.brand.text'),
                            th: {
                                padding: '0.8rem',
                                borderColor: theme('colors.brand.text'),
                                verticalAlign: 'middle'
                            },
                            td: {
                                padding: '0.8rem',
                                borderColor: theme('colors.brand.text'),
                                verticalAlign: 'middle'
                            },
                            p: {
                                marginBottom: '0.25rem',
                                lineHeight: '1.3'
                            },
                            'p:last-child': {
                                marginBottom: 0
                            }
                        }
                    }
                }
            }),
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '3xs': '8px',
                '2xs': '10px'
            },
            colors: {
                brand: {
                    turquoise: '#48CDB4',
                    lightTurquoise: '#EFFFFC',
                    sky: '#53B0C0',
                    lightBlue: '#E6F9FF',
                    sunset: '#F18F27',
                    beige: '#FFF3E8',
                    sun: '#F8DE3D',
                    leaf: '#73B154',
                    lightLeaf: '#E6FFD9',
                    coral: '#ED8C84',
                    lightCoral: '#FFF3F2',
                    burgundy: '#951C2B',
                    ocean: '#262850',
                    lightOcean: '#E6E7F5',
                    darkOcean: '#15162F',
                    text: '#242424',
                    rock: '#4D4D4D',
                    midGrey: '#CCCCCC',
                    lightGrey: '#E3E3E3',
                    BG: '#F8F8F8',
                    orange: '#FF9212',
                    teal: '#31ADAD',
                    lightTeal: '#EDF5F5',
                    lavendar: '#6775AC',
                    lightLavendar: '#F0F1F6',
                    approve: '#3CB043',
                    normalSeat: '#71D3FD'
                }
            },
            boxShadow: {
                'brand-lg': '4px 5px 25px 1px rgba(0,0,0,0.05)'
            },
            borderWidth: {
                3: "3px",
                5: "5px",
                10: "10px",
            },
            borderRadius: {
                15: '15px',
                20: '20px',
                30: '30px'
            },
            zIndex: {
                "-1": "-1",
                1: 1,
                2: 2,
            },
            aspectRatio: {
                21: "21",
            },
        },
    },
    plugins: [
        ({ addVariant }) => {
            addVariant("firefox", "@supports (-moz-appearance: none)");
            addVariant("safari", "@supports (background: -webkit-named-image(i))");
            addVariant("chrome", "@supports (-webkit-app-region: inherit)");
            addVariant("webkit", "@supports (-webkit-min-device-pixel-ratio:0)");
        },
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.cms-spacing': {
                    '--cms-padding-top': 0,
                    '--cms-padding-bottom': 0,
                    '--cms-padding-inline-start': 0,
                    '--cms-padding-inline-end': 0,
                    '--cms-margin-top': 'auto',
                    '--cms-margin-bottom': 'auto',
                    '--cms-margin-inline-start': 'auto',
                    '--cms-margin-inline-end': 'auto',
                    paddingTop: 'var(--cms-padding-top)',
                    paddingBottom: 'var(--cms-padding-bottom)',
                    paddingInlineStart: 'var(--cms-padding-inline-start)',
                    paddingInlineEnd: 'var(--cms-padding-inline-end)',
                    marginTop: 'var(--cms-margin-top)',
                    marginBottom: 'var(--cms-margin-bottom)',
                    marginInlineStart: 'var(--cms-margin-inline-start)',
                    marginInlineEnd: 'var(--cms-margin-inline-end)',

                    '@screen md': {
                        '--cms-padding-top-md': 'var(--cms-padding-top)',
                        '--cms-padding-bottom-md': 'var(--cms-padding-bottom)',
                        '--cms-padding-inline-start-md': 'var(--cms-padding-inline-start)',
                        '--cms-padding-inline-end-md': 'var(--cms-padding-inline-end)',
                        '--cms-margin-top-md': 'var(--cms-margin-top)',
                        '--cms-margin-bottom-md': 'var(--cms-margin-bottom)',
                        '--cms-margin-inline-start-md': 'var(--cms-margin-inline-start)',
                        '--cms-margin-inline-end-md': 'var(--cms-margin-inline-end)',
                        paddingTop: 'var(--cms-padding-top-md)',
                        paddingBottom: 'var(--cms-padding-bottom-md)',
                        paddingInlineStart: 'var(--cms-padding-inline-start-md)',
                        paddingInlineEnd: 'var(--cms-padding-inline-end-md)',
                        marginTop: 'var(--cms-margin-top-md)',
                        marginBottom: 'var(--cms-margin-bottom-md)',
                        marginInlineStart: 'var(--cms-margin-inline-start-md)',
                        marginInlineEnd: 'var(--cms-margin-inline-end-md)',
                    },

                    '@screen lg': {
                        '--cms-padding-top-lg': 'var(--cms-padding-top-md)',
                        '--cms-padding-bottom-lg': 'var(--cms-padding-bottom-md)',
                        '--cms-padding-inline-start-lg': 'var(--cms-padding-inline-start-md)',
                        '--cms-padding-inline-end-lg': 'var(--cms-padding-inline-end-md)',
                        '--cms-margin-top-lg': 'var(--cms-margin-top-md)',
                        '--cms-margin-bottom-lg': 'var(--cms-margin-bottom-md)',
                        '--cms-margin-inline-start-lg': 'var(--cms-margin-inline-start-md)',
                        '--cms-margin-inline-end-lg': 'var(--cms-margin-inline-end-md)',
                        paddingTop: 'var(--cms-padding-top-lg)',
                        paddingBottom: 'var(--cms-padding-bottom-lg)',
                        paddingInlineStart: 'var(--cms-padding-inline-start-lg)',
                        paddingInlineEnd: 'var(--cms-padding-inline-end-lg)',
                        marginTop: 'var(--cms-margin-top-lg)',
                        marginBottom: 'var(--cms-margin-bottom-lg)',
                        marginInlineStart: 'var(--cms-margin-inline-start-lg)',
                        marginInlineEnd: 'var(--cms-margin-inline-end-lg)',
                    },

                    '@screen xl': {
                        '--cms-padding-top-xl': 'var(--cms-padding-top-lg)',
                        '--cms-padding-bottom-xl': 'var(--cms-padding-bottom-lg)',
                        '--cms-padding-inline-start-xl': 'var(--cms-padding-inline-start-lg)',
                        '--cms-padding-inline-end-xl': 'var(--cms-padding-inline-end-lg)',
                        '--cms-margin-top-xl': 'var(--cms-margin-top-lg)',
                        '--cms-margin-bottom-xl': 'var(--cms-margin-bottom-lg)',
                        '--cms-margin-inline-start-xl': 'var(--cms-margin-inline-start-lg)',
                        '--cms-margin-inline-end-xl': 'var(--cms-margin-inline-end-lg)',
                        paddingTop: 'var(--cms-padding-top-xl)',
                        paddingBottom: 'var(--cms-padding-bottom-xl)',
                        paddingInlineStart: 'var(--cms-padding-inline-start-xl)',
                        paddingInlineEnd: 'var(--cms-padding-inline-end-xl)',
                        marginTop: 'var(--cms-margin-top-xl)',
                        marginBottom: 'var(--cms-margin-bottom-xl)',
                        marginInlineStart: 'var(--cms-margin-inline-start-xl)',
                        marginInlineEnd: 'var(--cms-margin-inline-end-xl)',
                    },

                    '@screen 2xl': {
                        '--cms-padding-top-2xl': 'var(--cms-padding-top-xl)',
                        '--cms-padding-bottom-2xl': 'var(--cms-padding-bottom-xl)',
                        '--cms-padding-inline-start-2xl': 'var(--cms-padding-inline-start-xl)',
                        '--cms-padding-inline-end-2xl': 'var(--cms-padding-inline-end-xl)',
                        '--cms-margin-top-2xl': 'var(--cms-margin-top-xl)',
                        '--cms-margin-bottom-2xl': 'var(--cms-margin-bottom-xl)',
                        '--cms-margin-inline-start-2xl': 'var(--cms-margin-inline-start-xl)',
                        '--cms-margin-inline-end-2xl': 'var(--cms-margin-inline-end-xl)',
                        paddingTop: 'var(--cms-padding-top-2xl)',
                        paddingBottom: 'var(--cms-padding-bottom-2xl)',
                        paddingInlineStart: 'var(--cms-padding-inline-start-2xl)',
                        paddingInlineEnd: 'var(--cms-padding-inline-end-2xl)',
                        marginTop: 'var(--cms-margin-top-2xl)',
                        marginBottom: 'var(--cms-margin-bottom-2xl)',
                        marginInlineStart: 'var(--cms-margin-inline-start-2xl)',
                        marginInlineEnd: 'var(--cms-margin-inline-end-2xl)',
                    },
                },
            })
        })
    ],
};
