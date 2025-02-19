# Testes Automatizados com Cypress e JavaScript

Este repositório contém um projeto básico de testes automatizados utilizando Cypress e JavaScript, desenvolvido como parte do curso **Automação de Teste Web com Cypress**, criado pelo grupo **QAzando**. O projeto segue a abordagem de Page Objects e integra uma pipeline de CI/CD utilizando GitHub Actions.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes automatizados
- JavaScript - Linguagem de programação utilizada nos testes
- [GitHub Actions](https://github.com/features/actions) - Pipeline de integração contínua

## Estrutura do Projeto

A estrutura do projeto segue o padrão de Page Objects, separando a lógica de interação com os elementos da aplicação dos testes propriamente ditos:

```
|-- cypress/
    |-- e2e/                   # Casos de teste
    |-- support/
        |-- pages/             # Page Objects
        |-- commands.js        # Comandos customizados
|-- .github/workflows/         # Configuração do GitHub Actions
|-- cypress.config.js          # Configuração do Cypress
|-- package.json               # Dependências do projeto
|-- README.md                  # Documentação do repositório
```

## CI/CD com GitHub Actions

O repositório está configurado para executar os testes automaticamente em horários e dias específicos ou a cada pull request, garantindo a qualidade do código. Os fluxos de trabalho estão definidos nos arquivos `.github/workflows/cypress-pipeline-scheduler.yml` e `.github/workflows/cypress-pipeline.yml`.
