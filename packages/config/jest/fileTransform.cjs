'use strict';

module.exports = {
  process(_src, filename) {
    // return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    return { code: 'module.exports = {};'};
  },
  getCacheKey() {
    return 'fileTransformV1';
  },
};
