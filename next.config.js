/** @type {import('next').NextConfig} */
module.exports = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

const nextConfig = {
    experimental: {
        appDir : true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images : {
        domains : ['occ-0-3933-116.1.nflxso.net'],

    }
}
module.exports = nextConfig
