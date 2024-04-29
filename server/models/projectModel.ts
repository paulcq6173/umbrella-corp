import { IProjectSchema } from '@/@types/types';
import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const projectSchema = new Schema<IProjectSchema>({
  projectName: {
    type: String,
    required: [true, 'Project must be given a name'],
  },
  description: {
    type: String,
    required: [true, 'Project description field must not be blank'],
  },
  models: [{ type: Schema.Types.ObjectId, ref: 'BOW' }],
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

projectSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

projectSchema.plugin(uniqueValidator);

export default model<IProjectSchema>('Project', projectSchema);
