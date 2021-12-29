import {rub} from "./testCRM";

export const search = () => {
    cy.get('input[type="search"]')
        .type(rub)
        .type('{enter}');
}