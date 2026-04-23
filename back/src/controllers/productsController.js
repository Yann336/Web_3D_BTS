const db = require('../config/db');

const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Erreur survenue', error });
  }
};

module.exports = { getAllProducts };
