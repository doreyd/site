import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = process.env.DB_URL;
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
