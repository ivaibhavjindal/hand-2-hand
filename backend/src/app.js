const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const graphqlSchema = require("../src/graphqlSchema/schema.js");
const Mongoose = require("./configuration/mongooseConfig.js");
const cors = require("cors");
// const Authenticate = require("./authorization/auth.js");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const LocalStrategy = require("passport-local");
const User = require("../src/mongoSchema/authSchema");
const passportLocalMongoose = require("passport-local-mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: "application/graphql" }));
app.use(cors());
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
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    User.authenticate()
  )
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/app", function (req, res) {
  res.send("server running");
});

app.post("/register", function (req, res) {
  User.register(
    new User({
      username: req.body.email,
    }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.send(false);
      } else {
        passport.authenticate("local")(req, res, function () {
          console.log("registered");
          res.send(true);
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(true);
});

app.get("/logout", function (req, res) {
  req.logOut();
  res.send(true);
});

app.get("/success", function (req, res) {
  console.log("success");
  res.send("success");
});

app.get("/check", function (req, res) {
  if (req.isAuthenticated()) {
    res.send({ loggedIn: true });
    console.log(req.user);
  } else {
    res.send({ loggedIn: false });
  }
});

app.get("/error", function (req, res) {
  console.log("error");
  res.send("error");
});

app.use(
  "/app/graphiql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log("Server started at PORT: " + PORT);
});
