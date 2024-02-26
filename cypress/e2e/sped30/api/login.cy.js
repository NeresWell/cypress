describe('login', () => {
    it('login', () => {
        cy.request({
            method: 'POST',
            url: '/api/login',
            form: true,
            body: {
                nomeLogin: 'admin',
                senha: 'sigadex123',
            },
        }).its('headers.authorization').should('not.be.empty')
        .then(response => console.log(response))
    })
})