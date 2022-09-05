import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = process.env.DB_URL;
  MongoClient.connect(url, function (err, db) {
    const { database, newCollection } = JSON.parse(req.body);

    if (err) throw err;
    return db
      .db(database)
      .collection(newCollection)
      .insertOne({ test: "test" }, function (err, result) {
        if (err) throw err;
        db.db(database)
          .collection(newCollection)
          .deleteMany({}, function (err, obj) {
            if (err) throw err;
            res.status(200).json({ successful: true });
          });
      });
  });
}
