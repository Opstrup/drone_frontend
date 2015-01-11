/*
 * Integration test file for project: Autonomus Survaliance Drone
 * This file contains all integration test for
 * autonomus survaliance drone project.
 * Framework: Jasmine
 * Driver: WebDriver & Protractor
 */

describe('Drone Control Webapplikation', function() {

	it('login page should have a title', function() {
		browser.get('http://localhost/drone_frontend/#/');

		expect(browser.getTitle()).toEqual('Login');
	});

	it('Correct login should redirect to home', function() {
		browser.get('http://localhost/drone_frontend/#/');

		element(by.model('username')).sendKeys('user');
		element(by.model('password')).sendKeys('user');

		element(by.model('submit')).click();

		expect(browser.getTitle()).toEqual('Home');
	});

	it('Uncorrect login should stay on login', function() {
		browser.get('http://localhost/drone_frontend/#/');

		element(by.model('username')).sendKeys('us');
		element(by.model('password')).sendKeys('us23er');

		element(by.model('submit')).click();

		expect(browser.getTitle()).toEqual('Login');
	});

	it('Clicking a drone from the list and saving to server', function() {
		browser.get('http://localhost/drone_frontend/#/');

		element(by.model('username')).sendKeys('user');
		element(by.model('password')).sendKeys('user');

		element(by.model('submit')).click();

		//Enters the homepage
		element(by.id('drone_1')).click();
		element(by.id('save_event')).click();

		expect(browser.getTitle()).toEqual('Home');
	});

});