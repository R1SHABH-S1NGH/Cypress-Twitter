class loginPAge{

    getUserName() //Method Declaration

{
        return cy.get('#username')
    }
    getPassword(){
        return cy.get('#login')
    }
} export default loginPAge ;