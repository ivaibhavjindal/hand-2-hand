const express = require("express");

const app = express();

app.use(
  require("express-session")({
    secret:
      "This is Hand-2-Hand built by Atul and Vaibhav and today is August seventeen",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const register = (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
      }
      passport.authenticate("Local")(req, res, function () {
        console.log("registered");
      });
    }
  );
};

const login = (req, res, next) => {
  passport.authenticate("Local");
  return next();
};

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login",
//   }),
//   function (req, res) {}
// );

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("not logged in");
}

module.exports = {
  register: register,
  login: login,
  isLoggedIn: isLoggedIn,
};
