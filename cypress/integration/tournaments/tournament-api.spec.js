/// <reference types="Cypress" />

import { body } from 'express-validator';

describe('Tournaments API', () => {
  const initialItems = [
    {
      tournamentName: '2usertournament',
      tournamentType: 'Pool',
      user: [
        {
          firstName: 'Sam',
          lastName: 'Hodges'
        }
      ]
    }
  ];

  it('returns JSON', () => {
    cy.request('/api/tournaments')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('returns JSON', () => {
    cy.request('/api/tournaments')
      .its('body')
      .should('deep.eq', initialItems);
  });
});
