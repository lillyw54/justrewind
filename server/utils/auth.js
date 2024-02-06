const jwt = require('jsonwebtoken');

const secret = 'your-secret-key';
const expiration = '2h';

module.exports = {
  signToken: function (payload) {
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },
}
