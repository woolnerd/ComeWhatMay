const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles")
const disasterPlans = require("./routes/api/disaster_plans")
const actionSteps = require("./routes/api/action_steps")
const relatives = require("./routes/api/relatives")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => ("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

require('./config/passport')(passport);
app.use(passport.initialize());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/profiles", profiles);

app.use("/api/disaster_plans", disasterPlans)
app.use("/api/action_steps", actionSteps)

app.use("/api/relatives", relatives);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
