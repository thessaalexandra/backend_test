const request = require('supertest');
const express = require('express');
const bookRoutes = require('../src/interfaces/http/routes/bookRoutes');

const app = express();
app.use('/books', bookRoutes);

test('GET /books - success', async () => {
    const response = await request(app).get('/books');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});
