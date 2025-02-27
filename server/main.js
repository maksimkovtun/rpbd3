// server/main.js
import { Users } from '../collections.js'; // Проверьте путь к файлу collections.js

Meteor.startup(function () {
  // Инициализация данных (можно заменить на загрузку из файла или другого источника)
  if (Users.find().count() === 0) {
    Users.insert({
      username: 'admin',
      password: 'admin123',  // В реальном приложении следует использовать хешированные пароли
      isAdmin: true
    });
  }
});

Meteor.methods({
  login: function (username, password) {
    const user = Users.findOne({ username, password });
    if (user) {
      return { success: true, isAdmin: user.isAdmin };
    } else {
      return { success: false, message: 'Invalid username or password.' };
    }
  }
});

