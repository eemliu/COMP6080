// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

context('Count down from 10 to launch', () => {
	beforeEach(() => {
		cy.visit('localhost:3000');
	});

	it('Successfully logs in after entering the correct credentials', () => {
		// Check the timer starts from 10
		cy.get('#timer').then((timer) => {
			expect(timer.text()).to.contain(10);
		});

		// Start the countdown
		cy.get('#start').click();

		// Check the button is disabled before the countdown ends
		cy.get('#start').should('be.disabled');

		// Wait for 10 seconds
		cy.wait(10000);

		cy.get('#timer').then((timer) => {
			expect(timer.text()).to.contain('Launch!');
		});
	});
});
