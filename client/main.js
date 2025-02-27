// client/main.js
import { Meteor } from 'meteor/meteor';

// Определите шаблоны
import './templates/loginForm.html';
import './templates/adminPanel.html';

// Инициализация данных (можно заменить на загрузку из файла или другого источника)
if (Meteor.isClient) {
  if (Meteor.users.find().count() === 0) {
    Meteor.users.insert({
      username: 'admin',
      password: 'admin123',  // В реальном приложении следует использовать хешированные пароли
      isAdmin: true
    });
  }
}

// Определите события для loginForm
Template.loginForm.events({
  'submit #loginForm': function (event, template) {
    event.preventDefault();

    const username = template.find('#username').value;
    const password = template.find('#password').value;

    const user = Meteor.users.findOne({ username, password });

    if (user) {
      Session.set('isAdmin', user.isAdmin);

      if (user.isAdmin) {
        alert('Welcome, Admin!');
      } else {
        alert('Welcome!');
      }
    } else {
      alert('Invalid username or password.');
    }
  }
});

