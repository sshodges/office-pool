/// <reference types="Cypress" />

import { body } from 'express-validator';

describe('Tournaments API', () => {
  let token;

  beforeEach(function() {
    cy.request('POST', '/api/auth', {
      email: Cypress.env('email'),
      password: Cypress.env('password')
    }).then(res => {
      token = res.body.token.token;
    });
  });

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
    console.log(token);
    cy.request({
      url: '/api/tournaments',
      headers: { 'auth-token': token }
    })
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('returns JSON', () => {
    cy.request({
      url: '/api/tournaments',
      headers: { 'auth-token': token }
    })
      .its('body')
      .should('deep.eq', initialItems);
  });
});
