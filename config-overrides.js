const path = require("path");
const cwd = process.cwd();
const svgDir = path.join(cwd, "./src/icons");
const svgReg = /\.symbol$/;

module.exports = function override(config, env) {
  const params = {
    test: svgReg,
    include: svgDir,
    loader: require.resolve("svg-sprite-loader"),
  };
  const ruleList = config.module.rules[1].oneOf;
  const index = ruleList.findIndex((v) => {
    return typeof v.test === "object" && String(v.test) === String(svgReg);
  });
  if (index > 0) {
    ruleList[index].exclude = svgDir;
    ruleList.splice(index, 0, params);
  }

  return config;
};
