const { Book } = require('c:/Users/Lenovo/backend_test/models');

exports.getAllBooks = async (req, res) => {
    try {
    const books = await Book.findAll();
    res.json(books);
    } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ error: 'Server error' });
    }
};
