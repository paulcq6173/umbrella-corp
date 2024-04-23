import { IUserSchema } from '@/@types/types';
import { Schema, model } from 'mongoose';
// a plugin which adds pre-save validation for unique fields
// within a Mongoose schema.
import uniqueValidator from 'mongoose-unique-validator';

// refers https://mongoosejs.com/docs/typescript.html
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username field is blank'],
    minlength: [4, 'username shorter than 4 characters'],
    unique: true,
  },
  passwordHash: { type: String, required: [true, 'password hash is null'] },
  email: { type: String, minlength: [8, 'Must be at least 8, got {VALUE}'] },
  phone: { type: String, minlength: [8, 'Must be at least 8, got {VALUE}'] },
  fullName: {
    type: String,
    minlength: [6, 'Must be at least 6, got {VALUE}'],
    unique: true,
  },
  // For schema definition
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  createdAt: {
    type: Date,
    required: [true, 'createdAt is null'],
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
  updatedAt: {
    type: Date,
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);

export default model<IUserSchema>('User', userSchema);
