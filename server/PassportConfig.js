const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((email, done) => {
      User.findOne({ email: email ,firstname: firstname,lastname:lastname,title:title,company:company}, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(email, user.email, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email,
        firstname:user.firstname,
        lastname:user.lastname,
        title:user.title,
        company:user.company
      };
      cb(err, userInformation);
    });
  });
};