import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const { database, collection } = JSON.parse(req.body);
   const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    return (
      db
        .db(database)
        .collection(collection)
        .find({})
        .limit(200)
        .toArray((err, dt) => {
          res.status(200).json(dt);
          db.close();
        })
    );
  });
}
