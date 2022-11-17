Cypress.Commands.add("login", (url, user, pass) => {

    //cy.log('Login. ' , url, user, pass)
    cy.visit(url, {
        auth: {
            username: user,
            password: pass,
            }
    })
});


// Add to your support folder
Cypress.Commands.add("exist", (selector) => {
    cy.get('body').should('exist').then(($body) => {
        return new Cypress.Promise((resolve, reject) => {
            if ($body.find(selector).length > 0) {
                console.log("cy.exist() - Matching element found in DOM!");
                resolve(true);
            } else {
                console.log("cy.exist() - Element did not exist!");
                resolve(false);
            }
        })
    })
})


//require('@cypress/snapshot').register()


