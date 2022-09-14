import { MongoClient } from "mongodb";

export default function handler(req, res) {
   const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    const { database, collection, condition } = JSON.parse(req.body);
    if (err) throw err;

    return db
      .db(database)
      .collection(collection)
      .deleteOne(condition, function (err, obj) {
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
