import {rub} from "./testCRM";

export const editTrans = () =>{
    cy.get('tbody').find('td').contains(rub)
        .parent()
        .find('button')
        .first()
        .click();
    cy.get('select[name="currency"]').select('UAH').blur();
    cy.get('[name="amount"]').type('-324242525').blur();
    cy.get('select[name="category"]').select('Office').blur();
    cy.wait(500);
    cy.get('h1').contains("EDIT CURRENT RECORD").parent()
        .find('input[name="description"]')
        .focus()
        .type('AutoTest');
    cy.get('h1').contains("EDIT CURRENT RECORD").parent()
        .find('button')
        .contains(/edit/i)
        .click();
}