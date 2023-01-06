const request = require('supertest');
var assert = require('assert');

describe('Tickets API', () => {
    const API_BASE_URL = 'https://localhost:7190';
    const req = request(API_BASE_URL);

    it('should create a new ticket', async () => {
        const createdTicket = await req
            .post('/api/ticket')
            .trustLocalhost(true)
            .send({
                title: 'Test Ticket'
            })
            .expect(201);

        const fetchedTicket = await req
            .get(createdTicket.headers.location.replace(API_BASE_URL, ''))
            .trustLocalhost(true)
            .expect(200);

        assert.equal(fetchedTicket.body.id, createdTicket.body.id);
    });

    describe('Error cases', () => {
        it('should return 404 if ticket was not found', async () => {
            await req
                .get('/api/ticket/0')
                .trustLocalhost(true)
                .expect(404);
        });

        it('should return 400 for invalid request body', async () => {
            const res = await req
                .post('/api/ticket')
                .trustLocalhost(true)
                .send({})
                .expect(400);

            assert.ok(res.body.errors.Title, 'The field "title" should be required');
        });
    });
});