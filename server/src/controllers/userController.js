const User  = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.register = async(req,res,next)=>{
    try {
        const { name,mobile, email, password } = req.body;
      const mobileCheck = await User.findOne({ mobile });
      if (mobileCheck)
        return res.json({ msg: "Mobile No. already used", status: false });
      const emailCheck = await User.findOne({ email });
      if (emailCheck)
        return res.json({ msg: "Email already used", status: false });
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        name,
        mobile,
        password: hashedPassword,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
};

module.exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.json({ msg: "Incorrect Email or Password", status: false });
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid)
        return res.json({ msg: "Incorrect Email or Password", status: false });
      delete user.password;
      return res.json({ status: true, user });
    } catch (ex) {
      next(ex);
    }
  };