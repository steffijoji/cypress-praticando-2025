/// <reference types="cypress" />

// elements

// functions
export default {
    clicarLogin() {
        cy.get('#btnLogin')
            .click()
    },

    validarMensagemErro(mensagem) {
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencherEmail(email) {
        cy.get('#user')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }
}