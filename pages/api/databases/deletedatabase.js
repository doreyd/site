import { MongoClient } from "mongodb";

export default function handler(req, res) {
    const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    const { databaseToDelete } = JSON.parse(req.body);
    if (err) throw err;
    return db.db(databaseToDelete).dropDatabase(function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  });
}
