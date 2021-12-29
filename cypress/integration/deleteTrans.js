import {rub} from "./testCRM";
export const deleteTrans = () => {
    cy.wait(3000);
    cy.get('tbody').find('td').contains(rub).first()
        .parent()
        .find('svg')
        .last()
        .click();
}