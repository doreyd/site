import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = process.env.DB_URL;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    const { database, collection, condition } = JSON.parse(req.body);

    return db
      .db(database)
      .collection(collection)
      .findOne(condition)
      .then((dt) => {
        res.status(200).json([dt]);
        db.close();
      });
  });
}
