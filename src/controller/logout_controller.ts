const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    // If token is valid, store the user object in the request for further use
    req.user = user;
    next();
  });
}

//pss