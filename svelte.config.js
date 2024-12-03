const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        prerender: {
            default: true,
        },
        trailingSlash: 'always',
        paths: {
            base: process.env.BASE_PATH
        }
    }
};
