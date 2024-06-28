describe('Api adopet', () =>{ 
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMjlkNDE0YS0yZDdjLTQ4NjgtYjY4OC00NDJlYTM3YTQ1MjYiLCJhZG9wdGVyTmFtZSI6Ikpvc8OpIE1pZ3XDqSIsImlhdCI6MTcxODQ4NzA3OCwiZXhwIjoxNzE4NzQ2Mjc4fQ.X3e7ACFL-HRspqi6WN_M-lOfM8n-Zvo34sTatTjmrVM'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/329d414a-2d7c-4868-b688-442ea37a4526',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})