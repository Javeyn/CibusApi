const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(cors({
//     origin:["http://localhost:8080"]
// }));

//Sequelize db
// Requiring our models for syncing
var db = require("./SequelizeModels");

//Mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Cibus", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
require("./routes/api-mongo-routes.js")(app);
require("./routes/api-sequelize-routes.js")(app);

db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});

