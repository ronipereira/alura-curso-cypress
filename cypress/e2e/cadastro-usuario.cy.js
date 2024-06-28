describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click()
    cy.get('input[name="nome"]').type('José Migué')
    cy.get('input[name="email"]').type('migue_jose@soulmigue.com')
    cy.get('input[name="password"]').type('soulMigue12345')
    cy.get('input[name="confirm_password"]').type('soulMigue12345')
    cy.contains('button', 'Cadastrar').click()
  })
})