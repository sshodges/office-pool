/// <reference types="Cypress" />

import { body } from 'express-validator';

describe('Seasons API', () => {
  let token;

  beforeEach(function() {
    cy.request('POST', '/api/auth', {
      email: Cypress.env('email'),
      password: Cypress.env('password')
    }).then(res => {
      token = res.body.token.token;
    });
  });

  it('returns JSON', () => {
    cy.request({
      url: '/api/seasons/tournamentId/5d8ad6f2db579a6c1f2ff9b7',
      headers: { 'auth-token': token }
    })
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

});
