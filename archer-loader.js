'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/archer-loader');
} else {
    module.exports = require('./dist/archer-loader');
}
