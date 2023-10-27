const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/style')],
  },
  webpack: config => {
    const oneOf = config.module.rules.find(rule => typeof rule.oneOf === 'object');

    if (oneOf) {
      // Find the module which targets *.scss|*.sass files
      const moduleSassRule = oneOf.oneOf.find(rule => regexEqual(rule.test, /\.module\.(scss|sass)$/));

      if (moduleSassRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('/css-loader/'));
        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules),
          };
        }
      }
    }

    return config;
  },
};

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

// css-loader 플러그인 덮어쓰기
function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules;
  return {
    getLocalIdent: (context, _, exportName, options) => {
      const localIndent = getLocalIdent(context, _, exportName, options);
      const hash = localIndent.split('_').pop();
      const name = isProduction ? encodeBase64WithOnlyAlphabets(exportName) : exportName;
      const customIndent = name + '_' + hash;
      return customIndent;
    },
    ...others,
  };
}

const encodeBase64WithOnlyAlphabets = str => {
  const base64 = Buffer.from(str, 'utf8').toString('base64');
  return base64.replace(/\W/g, '');
};
