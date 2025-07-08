/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E', () => {
    const contato = {
        nome: 'Teste Cypress',
        telefone: '11999999999',
        email: 'cypress@test.com'
    };

    const contatoEditado = {
        nome: 'Cypress Editado',
        telefone: '11888888888',
        email: 'editado@test.com'
    };

    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type(contato.nome);
        cy.get('input[placeholder="E-mail"]').type(contato.email);
        cy.get('input[placeholder="Telefone"]').type(contato.telefone);
        cy.get('button[type="submit"]').click();

        cy.contains(contato.nome).should('exist');
        cy.contains(contato.telefone).should('exist');
        cy.contains(contato.email).should('exist');
    });

    it('Deve editar um contato existente', () => {
        // Adiciona o contato se não existir
        cy.contains(contato.nome).should('exist');
        cy.contains('Editar').first().click();

        cy.get('input[placeholder="Nome"]').clear().type(contatoEditado.nome);
        cy.get('input[placeholder="E-mail"]').clear().type(contatoEditado.email);
        cy.get('input[placeholder="Telefone"]').clear().type(contatoEditado.telefone);
        cy.get('button[type="submit"]').click();

        cy.contains(contatoEditado.nome).should('exist');
        cy.contains(contatoEditado.telefone).should('exist');
        cy.contains(contatoEditado.email).should('exist');
    });

    it('Deve remover um contato', () => {
        cy.contains(contatoEditado.nome).should('exist');
        cy.contains('Deletar').first().click();
        cy.contains(contatoEditado.nome).should('not.exist');
    });
});