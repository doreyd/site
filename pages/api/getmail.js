import { MongoClient } from "mongodb";

export default function handler(req, res) {
   
const url = 'mongodb://localhost:27017';

  MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      return db
        .db("mail-db")
        .collection("mail-collection")
        .find()
        .toArray(function (err, result) {
          if (err) throw err;
          res.status(200).json(result);
          db.close();
        });
    });
}
