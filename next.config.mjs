/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    webpack: (config) => {
        // transform css classes from kebab-case to camelCase for css modules
        // https://stackoverflow.com/a/74149013/10893256
        config.module.rules
            .find(({oneOf}) => !!oneOf).oneOf
            .filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
            .reduce((acc, {use}) => acc.concat(use), [])
            .forEach(({options}) => {
                if (options.modules) {
                    options.modules.exportLocalsConvention = 'camelCase';
                }
            });

        return config;
    },
};

export default nextConfig;
