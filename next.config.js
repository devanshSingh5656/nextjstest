module.exports = {
  env: {
    mongodburl:
      "mongodb+srv://devanshsingh18:devanshsingh18@cluster0.qiutz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    SECRET: "asdasdfdjfalkjewjifjvklslkdflsdkjfalkjdlfkqwjoi",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
