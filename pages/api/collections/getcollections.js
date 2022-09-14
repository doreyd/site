import { MongoClient } from "mongodb";

export default function handler(req, res) {
    const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    const { database } = JSON.parse(req.body);
    if (err) throw err;

    return db
      .db(database)
      .listCollections()
      .toArray()
      .then((dt) => {
        res
          .status(200)
          .json(dt.filter((coll) => coll.name !== "dummyCollection"));
        db.close();
      });
  });
}
