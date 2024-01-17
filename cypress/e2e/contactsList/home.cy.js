/// <reference types="cypress" />

describe('Testes para a home', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('[type="text"]').type('João Teste')
    cy.get('[type="email"]').type('teste@teste.com')
    cy.get('[type="tel"]').type('11999999999')
    cy.get('.adicionar').click()
    cy.get('.sc-beqWaB').last().should('contain', 'teste@teste.com')
  })

  it('Deve editar um contato', () => {
    cy.get('.sc-beqWaB').contains('teste@teste.com').then(() => {
      cy.get('.edit').click()
      cy.get('[type="text"]').clear().type('João Teste Editado')
      cy.get('.alterar').click()
      cy.get('.sc-beqWaB').last().should('contain', 'João Teste Editado')
    })
  })

  it('Deve excluir um contato', () => {
    cy.get('.sc-beqWaB').contains('teste@teste.com').then(() => {
      cy.get('.delete').click()
    })
    cy.get('h2').should('contain',"0" )
  })
})
