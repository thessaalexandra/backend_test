const { Member } = require('c:/Users/Lenovo/backend_test/models');

exports.getAllMembers = async (req, res) => {
    try {
    const members = await Member.findAll();
    res.json(members);
    } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ error: 'Server error' });
    }
};
