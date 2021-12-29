export const out = () => {
    cy.get('button').contains(/out/i).click();
}