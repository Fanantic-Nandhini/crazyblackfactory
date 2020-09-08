const User = require("../models/user");
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

//signup
exports.signup = (req, res) => {

  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array() [0].msg
    })
  }

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  });
};

//signin
exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array() [0].msg
    });
  }

  User.findOne({email},(err, user) => {
    //to check whether email exists
    if (err || !user) {
      return res.status(400).json({
        error: "User E-mail doesnot exists"});
    }

    //to check given password matches with the db password
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }

    //if authenticated place jwt in cookie

    //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });
    //return response to frontend

    const {_id, email, role, name} = user;
    return res.json({token,user:{_id, email, role, name}});
  });
};



//signout
exports.signout = (req, res) => {
  //clear cookie
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth"
});

//custom middlewares

exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    res.status(403).json({
      error: "You are not Admin, Access Denied"
    })
  }
  next();
}