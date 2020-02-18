

const db = require("../MongoModels");

module.exports = function(app) {


// db.Users.create({ username: "CibusUser", name: "Paolo"})
//   .then(dbCibusUsers => {
//     console.log(dbCibusUsers);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });
//Look at 12-Blog-CRUD in 14-Full stack
    app.get("/api/auth/login/:username", (req, res) => {
        db.Users.find({username: req.params.username})
        .then(user => {
          res.json(user);
        })
        .catch(err => {
          res.json(err);
        })
      });
}