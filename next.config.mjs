/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "finepinecatlitter.com" }],
        destination: "https://www.finepinecatlitter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
