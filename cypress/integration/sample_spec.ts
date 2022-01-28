describe('Home Page', () => {
  it('muestra el home', () => {
    cy.visit('/');

    cy.findByText(/dulces pétalos/i).should('exist');
  });

  it('funciona el buscador', () => {
    cy.visit('/');
    cy.findByRole('searchbox').type('girasol');

    cy.findByText(/girasol/i).should('exist');
    cy.findByText(/petunia/).should('not.exist');
  });

  it('entra en el detalle de una flor', () => {
    cy.visit('/');
    cy.findByRole('link', {
      name: /imagen de una girasol girasol heliantus annuus 5\.25€/i,
    }).click();

    cy.url().should('include', '/qSyO-2wbasdfdrb2waew');
    cy.findByText(/girasol/i).should('exist');
  });
});
