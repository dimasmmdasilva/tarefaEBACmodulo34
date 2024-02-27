/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it ('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink_DeFkk').click()
    })
})