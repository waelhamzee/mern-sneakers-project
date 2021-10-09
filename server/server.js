const express = require("express");
const app = express();
const cors = require("cors");
const userSchema = require("./user");
const User = userSchema;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const session = require("express-session");
const validator = require("email-validator");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const randString = require("./helpers");
const jwt = require("jsonwebtoken");

const {
  SESS_NAME = "sid",
  SESS_SECRET = "subscribe",
  SESS_KEY = "userId",
} = process.env;

const TWO_HOURS = 1000 * 60 * 60 * 2;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser("subscribe"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    name: SESS_NAME,
    key: SESS_KEY,
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/",
      maxAge: TWO_HOURS,
      httpOnly: false,
    },
  })
);

const dbURI = "mongodb://localhost:27017/";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

const uniqueString = randString();

app.post("/create", (req, res) => {
  const { email, password, confirmPassword } = req.body;
  User.findOne({ email: email }, async (err, result) => {
    if (err) throw err;
    if (result) {
      return res.json({ message: "Email is already in use" });
    } else if (!validator.validate(email)) {
      return res.json({
        status: "error",
        message: "Invalid email address.",
      });
    } else if (password !== confirmPassword) {
      return res.json({
        status: "error",
        message: "Passwords do not match. Please try again.",
      });
    } else if (password === "" && confirmPassword === "" && email === "") {
      return res.json({ status: "error", message: "Form cannot be empty" });
    } else if (password === "" && confirmPassword === "") {
      return res.json({
        status: "error",
        message: "Please enter a password.",
      });
    } else if (password.length < 6) {
      res.json({ message: "Password should be greater then 6 characters." });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);
      const isValid = false;
      const user = new User({
        email: email,
        password: hashedPassword,
        isValid: isValid,
        uniqueString: uniqueString,
      });
      await user.save();
      res.json({ message: "Verification code sent.", verification: true });
      sendEmail(email, uniqueString);
    }
  });
});

const sendEmail = async (email, uniqueString) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b7cc26e27cee87",
      pass: "31a76bbc742529",
    },
  });
  var mailOptions;
  mailOptions = {
    from: "waelhamzee0@gmail.com",
    to: email,
    subject: "Email confirmation",
    html: `Your code : ${uniqueString}`,
  };

  await User.updateOne(
    { email: email },
    {
      $set: {
        uniqueString: uniqueString,
      },
    }
  );
  transport.sendMail(mailOptions, (err, response) => {
    if (err) throw err;
    else console.log("message sent");
  });
};

app.post("/verify-code", async (req, res) => {
  const { uniqueString } = req.body;
  const user = await User.findOne({ uniqueString: uniqueString });
  if (user) {
    user.isValid = true;
    await user.save();
    res.json({ user: user });
  } else {
    res.json({ message: "Code does not match." });
  }
});

const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("please we need to be authenticated");
  } else {
    jwt.verify(token, "JwtSecret", (err, decoded) => {
      if (err) {
        res.send(err);
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/userAuth", verifyJwt, (req, res) => {
  res.send("Yo, you are indeed authenticated");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, (err, result) => {
    if (err) throw err;
    if (result) {
      bcrypt.compare(password, result.password, (err, response) => {
        if (err) throw err;
        if (response) {
          const id = result.id;
          const token = jwt.sign({ id }, "JwtSecret", {
            expiresIn: "2h",
          });
          req.session.user = result;
          req.session.save();
          console.log(req.session);
          res.json({ auth: true, token: token, user: result });
        } else {
          res.json({
            auth: false,
            message: "Wrong password or email",
          });
        }
      });
    } else {
      res.json({ auth: false, message: "Email does not exist" });
    }
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => console.log(err));
  res.clearCookie(SESS_NAME);
});

app.post("/forget-pass", (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }, (err, result) => {
    if (err) throw err;
    if (result) {
      sendEmail(email, uniqueString);
      res.json({ message: "Verification code sent.", sent: true });
    } else {
      res.json({ message: "Please enter an existing email" });
    }
  });
});

app.post("/set-password", async (req, res) => {
  const { email, password } = req.body;
  if (password.length < 6) {
    res.json({ message: "Password should be greater then 6 characters." });
  }
  let hashedPassword = await bcrypt.hash(password, 10);
  User.updateOne(
    { email: email },
    {
      $set: {
        password: hashedPassword,
      },
    }
  ).then((response) => {
    if (response) {
      res.json({ message: "Password has been changed." });
    }
  });
});

app.post("/contact-us", (req, res) => {
  const { name, message, email, number } = req.body;
  if (email && message) {
    sendEmailContactUs(name, message, email, number);
    res.json({ message: "You have contacted us successfully." });
  } else {
    res.json({ status: true });
  }
});

const sendEmailContactUs = (name, message, email, number) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b7cc26e27cee87",
      pass: "31a76bbc742529",
    },
  });
  var mailOptions;
  mailOptions = {
    from: email,
    to: "waelhamzee0@gmail.com",
    subject: "Email confirmation",
    html: `<h2>Name : ${name}</h2>
    <p>email : ${email}</p>
    <p>number : ${number}</p>
    <p>message : ${message}</p>
    `,
  };
  transport.sendMail(mailOptions, (err, response) => {
    if (err) throw err;
    else console.log("message sent");
  });
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(4000, (err) => {
  if (err) throw err;
  else console.log("Succesfully listening on port 4000");
});
