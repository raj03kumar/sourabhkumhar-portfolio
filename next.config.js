// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.+(js|jsx)$/,
//       loader: "babel-loader",
//       options: {
//         presets: ["next/babel"],
//         plugins: ["babel-plugin-styled-components"],
//       },
//       include: [
//         // transpile modules that need to be used in your app
//         /node_modules\/module-to-transpile-1/,
//         /node_modules\/module-to-transpile-2/,
//       ],
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  /* config options here */
};

module.exports = nextConfig;
