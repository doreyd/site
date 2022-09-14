import { MongoClient } from "mongodb";

export default function handler(req, res) {
    const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    const { database, collectionToDelete } = JSON.parse(req.body);

    if (err) throw err;
    return db
      .db(database)
      .collection(collectionToDelete)
      .drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) {
          res.status(200).json({ successful: true });
        }
      });
  });
}
