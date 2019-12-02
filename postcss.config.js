'use strict'

module.exports = {
  map: true,
  plugins: {
    "postcss-prefix-selector": {
      exclude: [
        ':root'
      ],
      prefix: ".form-entry"
    }
  }
}
