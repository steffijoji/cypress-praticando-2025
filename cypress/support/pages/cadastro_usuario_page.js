/// <reference types="cypress" />

// elements



// functions
export default {
    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    // validarMensagemErro(mensagem) {
    //     cy.get('.errorLabel')
    //         .then((element) => {
    //             expect(element).to.be.visible
    //             expect(element.text()).eq(mensagem)
    //         })
    // },

    validarMensagemErro(mensagem) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    preencherNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencherEmail(email) {
        cy.get('#email')
            .type(email)
    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(nome) {
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${nome}`)
    }

}