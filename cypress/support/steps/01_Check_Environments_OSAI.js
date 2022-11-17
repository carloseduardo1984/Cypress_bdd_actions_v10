import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Intro from '../pageobjects/Intro'

const Introd = new Intro();


const statusList = [];

Given('an access as {string}', (brand) => {


    cy.viewport(1920,1080)
    cy.log('Screen resized 1920x1080 *')

    
    Introd.selectIntro(brand)

     cy.log('Select Done !!! **********')

});

When('I do the selection on product list for {string}', (car) => {

    Introd.selectNetworkData(car);
  

        cy.log('CAROUSEL LOADED... ');
        cy.log(statusList);

});


Then('check if the recommendation carrousel is available and save the environment status', () => {


    //==============================================
    cy.log('Carousel presented with success ! ');

});




