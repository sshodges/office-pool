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
      url: '/api/seasons',
      headers: { 'auth-token': token }
    })
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

});
