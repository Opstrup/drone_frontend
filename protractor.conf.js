/*
 * Configration file for integration tests.
 * Test framework: Jasmine
 * Driver: Protractor & WebDriver
 * Default browser: Chrome
 */

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['tests/integration/integration_test.js'],
	rootElement: '.container'
}