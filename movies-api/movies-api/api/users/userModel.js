import mongoose from 'mongoose'; 
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true}, 
  password: {type: String, required: true }
});

const passwordValidator = (password) => {
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  let result = pattern.test(password);
  return result;
}

UserSchema.path("password").validate(passwordValidator); 

UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
} 

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};


UserSchema.pre('save', async function(next) {
  const saltRounds = 10; // You can adjust the number of salt rounds
  //const user = this;
  if (this.isModified('password') || this.isNew) {
    try {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
  } catch (error) {
     next(error);
  }

  } else {
      next();
  }
}); 

async function registerUser(req, res) {
  // Add input validation logic here
  await User.create(req.body);
  res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
  const user = await User.findByUserName(req.body.username);
  if (!user) {
      return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
  }

  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
      const token = jwt.sign({ username: user.username }, process.env.SECRET);
      res.status(200).json({ success: true, token: 'BEARER ' + token });
  } else {
      res.status(401).json({ success: false, msg: 'Wrong password.' });
  }
} 



export default mongoose.model('User', UserSchema);