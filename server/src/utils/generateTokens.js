require('dotenv').config(); // используем переменные из .env
const jwt = require('jsonwebtoken'); // берем методы из модуля jsonwebtoken
const jwtConfig = require('../configs/jwtConfig'); // конфигурация настройки времени жизни токена

// payload = user
const generateTokens = (payload) => ({
  // токен доступа - access
  accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access),
  // токен обновления - refreshs
  refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, jwtConfig.refresh),
});

module.exports = generateTokens;