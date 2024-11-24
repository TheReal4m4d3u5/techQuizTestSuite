import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component Tests', () => {
  it('renders the start button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').should('exist');
  });

  it('starts quiz when Start button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start').click();
    cy.get('.question').should('exist'); // Example selector for question
  });
});