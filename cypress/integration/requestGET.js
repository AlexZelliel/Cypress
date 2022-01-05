import {login} from "./Login";
import {rub} from "./testCRM";

export const reqGet = () => {
    it('visit site1 ', function () {
        cy.visit('http://localhost:3000')
        login();
        cy.get('button').contains(/add/i).click();
        // cy.get('[name="client"]').type('testTrans').blur();
        cy.get('select[name="currency"]').select('UAH').blur();
        cy.get('[name="amount"]').type('984984984').blur();
        cy.get('select[name="category"]').select('Office').blur();
        cy.get('h1').contains("ADD NEW RECORD").parent()
            .find('input[name="description"]')
            .focus()
            .type(rub);
        cy.get('h1').contains("ADD NEW RECORD").parent()
            .find('button')
            .contains(/add/i)
            .click();
        cy.wait(3000);
        cy.get('table', {timeout: 10000});
        cy.request('http://localhost:8080/transactions')
            .then((response) => {
                console.log(response)
            })
    })
}
