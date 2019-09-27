/// <reference types="Cypress" />

import { body } from 'express-validator';

describe('Matches API', () => {
  let token;

  beforeEach(function() {
    cy.request('POST', '/api/auth', {
      email: Cypress.env('email'),
      password: Cypress.env('password')
    }).then(res => {
      token = res.body.token.token;
    });
  });

  it('returns JSON', () => {
    cy.request({
      url: '/api/matches/seasonId/5d8d73e024ec4276b546e11d',
      headers: { 'auth-token': token }
    })
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

});

