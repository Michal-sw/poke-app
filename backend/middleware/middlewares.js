const jwt = require('jsonwebtoken');

const authorizeMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader;
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'S3CR3T', (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = { authorizeMiddleware }