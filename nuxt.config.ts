const cmsUrl = 'https://cms.htt.bitlab.services';

export default defineNuxtConfig({
    srcDir: 'src/',
    css: [
        '@/assets/css/global.css'
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    runtimeConfig: {
        cmsUrl,
    },
    modules: [
        '@nuxt-alt/proxy'
    ],
    proxy: {
        proxies: {
            '/cms-pages/': {
                target: cmsUrl,
                changeOrigin: true,
            },
            '/images/airlines/': {
                target: cmsUrl,
                changeOrigin: true,
            },
            '/api/v1/': {
                target: cmsUrl,
                changeOrigin: true,
            },
            '/media/': {
                target: cmsUrl,
                changeOrigin: true,
            },
            '/emails/': {
                target: cmsUrl,
                changeOrigin: true,
            }
        }
    },
    sourcemap: {
        client: true,
        server: true
    }
})
