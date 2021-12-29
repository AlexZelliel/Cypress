export const login = () => {
    cy.viewport(1200, 900);
    cy.get('[id="email"]').type('alexgmirko@gmail.com');
    cy.get('[id="password"]').type('mak63nil');
    cy.get('[type="submit"]').click();
    cy.wait(3000);
}