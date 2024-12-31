export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["lib", "infra"]],
    "subject-case": [2, "always", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
  },
};
