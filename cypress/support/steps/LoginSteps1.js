/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site ultima", () => {
    //loginPage.acessarSite();
    cy.log('step given ');
})

When("acesso a pagina de login", () => {
    //loginPage.abraPaginaLogin();
    cy.log('step when ');
})

Then("devo visualizar botao de conecte", () => {
    //loginPage.visualizarBotaoCadastro();
    cy.log('step then ');
})
