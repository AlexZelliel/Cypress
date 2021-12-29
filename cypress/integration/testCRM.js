import {login} from "./Login";
import {out} from "./out";
import {transplus} from "./+Trans";
import {transminus} from "./-Trans";
import {deleteTrans} from "./deleteTrans";
import {editTrans} from "./editTrans";
import {search} from "./search";

export const rub = Math.random().toString(36).substring(7);


describe('Testing login ', () => {
    it('visit site ', function () {
        cy.viewport(1400, 900);
        cy.visit('http://localhost:3000/');
        cy.intercept('GET', '/transactions/*').as('flagLogin');
        login();
        cy.wait('@flagLogin', {timeout: 2000})

    })

    it('login user and new trans',  () => {
        cy.intercept('GET', '/transactions/*').as('flagLogin');
        transplus();
        cy.intercept('GET', '/transactions/!*').as('flag');
    })
    it ( 'add and delete different trans', function (){
        cy.viewport(1400, 900);
        out();
        cy.intercept('GET', '/transactions/*').as('flagLogin');
        login();
        cy.wait('@flagLogin');
        transplus();
        transminus();
        search();
        editTrans();
        deleteTrans();
        deleteTrans();
        deleteTrans();



    })
})