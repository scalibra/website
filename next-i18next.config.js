module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "no",
    locales: ["no", "en"],
  },
  localePath:
    typeof window === "undefined"
      ? // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("path").resolve("./lib/locales")
      : "./lib/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
