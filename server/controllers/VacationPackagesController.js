module.exports = (app) => {

  return {
    read: (req, res, next) => {
      let db = app.get('db');
      db.get_vacations().then(vacations => {
        res.send(vacations);
      }).catch(err => console.error(err))
    },

    create: (req, res) => {
      let db = app.get('db');
      let { location, days, type, description, imageUrl } = req.body;

      db.create_vacation({ location, days, type, description, imageUrl}) //or you can just pass in req.body
        .then(response => {
          res.status(200).send(response);
        }).catch(err => {
          console.error(err);
        });
    },

    update: (req, res) => {

    },

    delete: (req, res) => {
      let db = app.get('db');
      db.delete_vacation({id: req.params.id}).then((response) => {
        res.send(response);
      }).catch(err => {
        console.error(err);
      });
    }
  }
}
