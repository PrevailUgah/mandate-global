import withPWAInit from "@ducanh273/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swMinify: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withPWA(nextConfig);