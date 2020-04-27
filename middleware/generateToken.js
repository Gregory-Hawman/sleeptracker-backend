const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../api/secrets');

const secret = jwtSecret;

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
    const options = {
      expiresIn: '1d'
    };
    return jwt.sign(payload, secret, options)
  };

  module.exports = generateToken;