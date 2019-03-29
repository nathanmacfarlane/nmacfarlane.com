module.exports = function (api) {
  api.cache(true);

  const presets = [];
  const plugins =["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] ;

  return {
    presets,
    plugins
  };
}
