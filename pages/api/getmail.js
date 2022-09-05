import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const { username, password } = JSON.parse(req.body);
  const url = process.env.DB_URL;

  const goodUsername = process.env.MAIL_USERNAME;
  const goodPassword = process.env.MAIL_PASSWORD;

  const condition = username === goodUsername && password === goodPassword;

  MongoClient.connect(url, function (err, db) {
    const database = "mail-db";
    const collection = "mail-collection";

    if (err) throw err;
    if (!condition) {
      return res.status(200).json([]);
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
