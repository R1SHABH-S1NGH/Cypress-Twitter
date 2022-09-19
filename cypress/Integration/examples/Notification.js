describe('Abc' , function(){



    it('notification', function(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
 cy.visit('https://multi-account.sellernext.com/apps/twitter/panel/')
cy.get(':nth-child(1) > .inte-formElement--Wrap > .inte-formElemet--Inner > .inte-formElement').type("swatantrasrivastava@cedcommerce.com")
    cy.get(':nth-child(2) > .inte-formElement--Wrap > .inte-formElemet--Inner > .inte-formElement').type("Swat123@")
    cy.get(':nth-child(5) > .inte-btn').click()
    cy.get(':nth-child(5) > .inte-btn').contains('Sign In').click()
    








})





})