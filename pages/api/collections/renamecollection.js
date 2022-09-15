import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = "mongodb://localhost:27017";

  MongoClient.connect(url, function (err, db) {
    const { database, collection, newName } = JSON.parse(req.body);

    if (err) throw err;
    return db
      .db(database)
      .collection(collection)
      .rename(newName)
      .catch((err) => {
        res.status(200).json({ successful: false, err });
      })
      .then((result) => {
        res.status(200).json({ successful: true });
      });
  });
}
