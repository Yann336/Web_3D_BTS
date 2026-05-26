const bcrypt = require('bcrypt');
const db = require('../config/db');

const register = async (req, res) => {
  try {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    } = req.body;
    const [userCheck] = await db.query('SELECT email FROM users WHERE email = ?', [email]);
    if (userCheck.length === 0) {
    // 10 est le niveau de complexité du Salt
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await db.query('INSERT INTO users(first_name, last_name, email, password) VALUES(?, ?, ?, ?)', [firstName, lastName, email, hashedPassword]);
      res.json(result);
    } else {
      res.status(400).json({ message: 'cette adresse email est déjà utilisé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur survenue', error });
  }
};

module.exports = {
  register,
};
