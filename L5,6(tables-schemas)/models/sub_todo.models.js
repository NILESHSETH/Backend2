import moongoos from "moongoose"
//mooongoose help us to make schemas 
cosnt userschemas = new moongoos.Schema({})
// we need to export this schema -- wthout exporting we cannot do anything
// shmema -> mongodb me bnayayaga
import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
