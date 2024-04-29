import { IBOWSchema } from '@/@types/types';
import { Schema, model } from 'mongoose';

const bowModelSchema = new Schema<IBOWSchema>({
  codeName: {
    type: String,
    required: [true, 'code name field is blank'],
    minlength: [4, 'code name shorter than 4 characters'],
  },
  version: { type: String, required: [true, 'version field is blank'] },
  based: [String],
  height: String,
  mass: String,
  createdVia: [String],
  characteristics: {
    type: String,
    required: [true, 'characteristics field is blank'],
  },
  experimentalType: {
    type: Boolean,
    required: [true, 'experimental type field is blank'],
  },
  massProducted: {
    type: Boolean,
    required: [true, 'mass-producted field is blank'],
  },
  imgUrl: String,
  createdAt: {
    type: String,
    required: [true, 'createdAt is null'],
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
  updatedAt: {
    type: String,
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
});

bowModelSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default model<IBOWSchema>('BOW', bowModelSchema);
