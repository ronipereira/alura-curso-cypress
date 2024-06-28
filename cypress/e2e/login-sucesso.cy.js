describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click()
    })
    
    it('Deve preencher os campos de login corretamente e autenticar usuário', () => {
      cy.login('migue_jose@soulmigue.com','soulMigue12345')
    })
  })