// user-schema.js
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const UserSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Username',
  },
  password: {
    type: String,
    label: 'Password',
  },
  isAdmin: {
    type: Boolean,
    label: 'Is Admin',
  },
});
