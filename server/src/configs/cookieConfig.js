const jwtConfig = require("./jwtConfig");

const cookieConfig = {
  access: {
    maxAge: jwtConfig.access.expiresIn, // время жизни куки
    httpOnly: true, // статус
  },
  refresh: {
    maxAge: jwtConfig.refresh.expiresIn, // время жизни куки
    httpOnly: true, // статус
  },
};

module.exports = cookieConfig;
