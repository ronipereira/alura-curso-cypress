describe('Página de cadastro com dados de nome em branco', () => {
    it('Deve preencher os campos do formulário corretamente para cadastrar novo usuário', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
      cy.contains('a', 'Cadastrar').click()
      cy.contains('button', 'Cadastrar').click()
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })