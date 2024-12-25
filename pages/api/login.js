import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const { user, password } = req.body;
  const url = 'mongodb://localhost:27017';

  const goodUsername = "admin";
  const goodPassword = "mnbvmnbv-2020";

  const condition = user === goodUsername && password === goodPassword;

  MongoClient.connect(url, function (err, db) {
    const database = "mail-db";
    const collection = "mail-collection";

    if (err) throw err;
    if (!condition) {
      return res.status(200).json(null);
    }
    return db
      .db(database)
      .collection(collection)
      .find({})
      .limit(200)
      .toArray((err, dt) => {
        res.status(200).json(dt);
        db.close();
      });
  });
}
