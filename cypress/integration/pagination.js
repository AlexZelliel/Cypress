export const pagination = () => {
    cy.get('li').last().prev().then(function ($elem) {
        cy.log($elem.text());
        for (let i = Number($elem.text()); i >= 1; i--) {
            cy.intercept("GET", 'http://localhost:8080/transactions/*').as('flag');
            cy.get('li').contains(i).click();
            cy.wait('@flag');

        }
    })
}

