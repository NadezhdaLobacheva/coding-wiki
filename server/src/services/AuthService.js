const { User } = require("../../db/models");

class AuthService {
    static async register({ email, name, password }) {
        // user - найден или создан
        // created - false - user найден 
      const [user, created] = await User.findOrCreate({    // если пользователя не находят в БД его создают
        where: { email },
        defaults: { name, password },
      });
  
      return { user, created };
    }
    
    // находят пользователя по e-mail в БД
    static async getUserByEmail({ email }) {
      const user = await User.findOne({ where: { email } });
      return user;
    }
  }
  
  module.exports = AuthService;