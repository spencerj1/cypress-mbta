import './keywords/api'
import {replaceMultiple} from 'utils/replace'

require('@bahmutov/cy-api/support')
require('cypress-plugin-tab')
require('cypress-plugin-retries')

const addContext = require('mochawesome/addContext')

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false,
  capture: 'fullPage',
})

const ignoreFolderAPI = 'api'
const currentFile = Cypress.spec.relative
const result = RegExp(ignoreFolderAPI, 'g').test(currentFile)
const isCI = Cypress.env('CI')

afterEach(function () {
  const replaceSpace = replaceMultiple(this.currentTest.title, {' ': '-'})
  if (isCI && !result) {
    cy.screenshot(replaceSpace, {capture: 'runner'})
  }
  // if (isCI && result) {
  //   cy.screenshot(replaceSpace)
  // }
})

Cypress.on('test:after:run', (test, runnable) => {
  const replaceSpace = replaceMultiple(runnable.title, {' ': '-'})
  if (!result) {
    addContext(
      {
        test,
      },
      `assets/screenshots/${Cypress.spec.name}/${replaceSpace}.png`,
    )
  }
  addContext(
    {
      test,
    },
    `assets/videos/${Cypress.spec.name}.mp4`,
  )
})
