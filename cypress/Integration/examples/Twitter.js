/// <refrence types = "Cypress" />
describe('App' , function(){before(function() {
      
    cy.fixture('example').then(function(data)
    {
    this.data = data
    })

})
    it('Login' , function(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
    cy.visit("https://multi-account.sellernext.com/apps/twitter/auth/login")
    
    cy.get(':nth-child(1) > .inte-formElement--Wrap > .inte-formElemet--Inner > .inte-formElement').type(this.data.Username)
    cy.get(':nth-child(2) > .inte-formElement--Wrap > .inte-formElemet--Inner > .inte-formElement').type(this.data.Password)
    cy.get(':nth-child(5) > .inte-btn').click
    cy.get(':nth-child(5) > .inte-btn').contains('Sign In').click()

    // Product upload -single , multiple and bulk
    
    cy.get('.inte__AutoComplete > :nth-child(1) > .inte-formElement--Wrap > .inte-formElemet--Inner > .inte-formElement').click()
    .type('title148').type('{enter}')
    
    cy.get('.ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').check({force:true})
    cy.get('.inte-flex--spacing-loose > :nth-child(2) > .inte-btn').click({force:true})
    cy.get('.inte-Modal-Footer__FooterContent > .inte-flex > :nth-child(2) > .inte-btn').click()
    cy.get('.intel-flex--distribute-end > :nth-child(1) > .inte-btn > .inte-btn__icon > svg').click({force:true})
  /*  cy.url().should('include','activities')
    cy.go('back') */



    })








    })



