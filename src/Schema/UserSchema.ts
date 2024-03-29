import { ObjectId } from "mongodb";
import mongoose from "mongoose";

interface IUser{
  userId: typeof ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  image: string;
  _doc?: any;
}


const validateEmail = (email: string) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema<IUser>({
  userId: {
    type: ObjectId,
  },
  name: {
    type: String,
    trim: true,
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
