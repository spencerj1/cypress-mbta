const fs = require('fs-extra')
const path = require('path')
const webpack = require('@cypress/webpack-preprocessor')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},
  }
  on('file:preprocessor', webpack(options))
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--start-maximized')
      return launchOptions
    }
    if (browser.name === 'electron') {
      launchOptions.args.maximizable = true
      return launchOptions
    }
  })

  const file = config.env.configFile || '../../cypress'
  return getConfigurationByFile(file)
}
