import adapter from '@sveltejs/adapter-static'
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        paths: {
            base: process.env.BASE_PATH
        }
    }
};

export default config;