import 'cypress-wait-until';

class Intro {
//====================================================================================================

   
//====================================================================================================

    selectIntro(brand) {

        cy.visit(Cypress.env('QA').url)

        cy.get('#L2AGLb > .QS5gu').click()
        // confirm the selected value
        cy.get('.gLFyf', {timeout: 30000}).type(brand).type('{enter}')

        
        return cy.log('selectIntro executed with success! ==============')
    }
   
//====================================================================================================

    selectNetworkData(car) {

        cy.visit(Cypress.env('QA').url)

       // confirm the selected value
       cy.get('.gLFyf', {timeout: 30000}).type(car).type('{enter}')


        return cy.log('selectNetworkData executed with success! ====')
    }
//====================================================================================================

}
export default Intro