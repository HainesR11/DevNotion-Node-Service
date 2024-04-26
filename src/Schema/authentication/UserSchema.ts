import { ObjectId } from "mongodb";
import mongoose from "mongoose";

interface IUser{
  actions: Array<String>;
  userId: typeof ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  image: string;
  _doc?: any;
}


const validateEmail = (email: string) => {
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validate.test(email)
};

const userSchema = new mongoose.Schema<IUser>({
  actions: [{
    type: String,
  }],
  userId: {
    type: ObjectId,
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'User must have a name']
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User must have a Password']
  },
  email:{
    type: String,
    unique: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  image: {
    type: String
  }

});

const User = mongoose.model("User", userSchema);

export default User;
