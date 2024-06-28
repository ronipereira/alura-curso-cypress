describe('Página de login com erro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
          statusCode:400, }).as('stubPost')
    })
    
    it('Deve deixar os campos de login em branco', () => {
      cy.get('[data-test="submit-button"]').click()
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Insira sua senha').should('be.visible')
    })

    it('Deve falhar mesmo que os campos sejam  preenchidos corretamente', ()=> {
      cy.login('migue_jose@soulmigue.com','soulMigue12345')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.be.visible')
    })
  })