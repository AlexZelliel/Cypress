export const transminus = () => {
    cy.viewport(1400, 900);
    cy.get('button').contains(/add/i).click();
    cy.get('select[name="currency"]').select('UAH').blur();
    cy.get('[name="amount"]').type('-324242525').blur();
    cy.get('select[name="category"]').select('Office').blur();
    cy.wait(500);
    cy.get('h1').contains("ADD NEW RECORD").parent()
        .find('input[name="description"]')
        .focus()
        .type('AutoTest');
    cy.get('h1').contains("ADD NEW RECORD").parent()
        .find('button')
        .contains(/add/i)
        .click();
}