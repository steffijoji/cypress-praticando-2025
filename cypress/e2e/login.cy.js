/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'


describe('Login', () => {

  beforeEach('Acessar a página de login', () => {
    commum_page.acessarLoginUsuario()
  })

  it('Login com E-mail vazio', () => {
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Login com E-mail inválido', () => {
    login_page.preencherEmail('emailinvalido')
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Login com Senha vazio', () => {
    login_page.preencherEmail(faker.internet.email())
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Login com Senha inválida', () => {
    login_page.preencherEmail(faker.internet.email())
    login_page.preencherSenha('12345')
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Login com sucesso', () => {
    const email = faker.internet.email()

    login_page.preencherEmail(email)
    login_page.preencherSenha('123456')
    login_page.clicarLogin()
    login_page.validarMensagemSucesso(email)
  })

})