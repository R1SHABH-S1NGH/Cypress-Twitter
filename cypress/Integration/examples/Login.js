describe('TikTokcases' ,function(){
  before(function() {
      
      cy.fixture('example').then(function(data)
      {
      this.data = data
      })

  })
 






  it( 'firsttestcase' , function(){

  cy.visit('https://connector-dev.demo.cedcommerce.com/apps/tiktok/auth/login')
  cy.wait(5000)
  
  
  cy.get(':nth-child(1) > .inte-formElement--Wrap > .inte-formElement').type(this.data.Username)
  
  cy.get(':nth-child(2) > .inte-formElement--Wrap > .inte-formElement').type(this.data.Password)
  cy.get('.inte-btn').click()






      })

  })