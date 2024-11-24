describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('starts the quiz and completes it', () => {
      // Verify Start button and click
      cy.get('button').contains('Start').click();
  
      // Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist');
        cy.get('.answers button').first().click(); // Click the first answer
      }
  
      // Verify quiz completion
      cy.get('.score').should('exist');
      cy.get('button').contains('Start New Quiz').should('exist');
    });
  });