const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('C:/Users/Lenovo/backend_test/swagger.json');
const memberRoutes = require('C:/Users/Lenovo/backend_test/src/interfaces/http/routes/memberRoutes');
const bookRoutes = require('C:/Users/Lenovo/backend_test/src/interfaces/http/routes/bookRoutes');
const sequelize = require('C:/Users/Lenovo/backend_test/models').sequelize;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/members', memberRoutes);
app.use('/books', bookRoutes);
app.use(express.json());

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server berjalan di port http://localhost:${PORT}`);
});

sequelize.sync()
    .then(async () => {
    console.log('Database tersinkronisasi');
    
    //Data Member
    await sequelize.models.Member.bulkCreate([
        { code: 'M001', name: 'Angga' },
        { code: 'M002', name: 'Ferry' },
        { code: 'M003', name: 'Putri' }
    ], { ignoreDuplicates: true });

    //Data Buku
    await sequelize.models.Book.bulkCreate([
        { code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 },
        { code: 'SHR-1', title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1 },
        { code: 'TW-11', title: 'Twilight', author: 'Stephenie Meyer', stock: 1 },
        { code: 'HOB-83', title: 'The Hobbit, or There and Back Again', author: 'J.R.R. Tolkien', stock: 1 },
        { code: 'NRN-7', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', stock: 1 }
    ], { ignoreDuplicates: true });
    })
    .catch((err) => {
    console.error('Database error tersinkronisasi:', err);
    });


