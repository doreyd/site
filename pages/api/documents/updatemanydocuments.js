import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = process.env.DB_URL;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    const { database, collection, condition, update } = JSON.parse(req.body);

    return db
      .db(database)
      .collection(collection)
      .updateMany(condition, update, function (err, result) {
        if (err) throw err;
        db.db(database) // get back new data
          .collection(collection)
          .find({})
          .limit(200)
          .toArray((err, dt) => {
            res.status(200).json(dt);
            db.close();
          });
      });
  });
}
