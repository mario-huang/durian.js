module.exports = {
  name: "app",
  script: "src/main.ts",
  interpreter: "bun",
  env: {
    PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}`,
  },
};