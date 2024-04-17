describe('Count down from 10 until launch!', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('testing user flow', () => {

    // Checking if timer text starts at 10
    cy.get('#timer').then((timer) => {
      expect(timer.text()).to.contain(10);
    })

    // Start the countdown
    cy.get('#start').click();

    // Button should be disabled once clicked
    cy.get('#start').should('be.disabled');

    // Simulate countdown of 10 seconds
    cy.wait(10000); // ms

    // Check that the timer text is now 'Launch!'
    cy.get('#timer').then((timer) => { 
      expect(timer.text()).to.contain('Launch!');
    })
  })
})