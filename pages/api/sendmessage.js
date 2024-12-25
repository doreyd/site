import { MongoClient } from "mongodb";

export default function handler(req, res) {

const url = 'mongodb://localhost:27017';
  MongoClient.connect(url, function (err, db) {
    const { email, message } = JSON.parse(req.body);

    if (err) throw err;
    return db
      .db("mail-db")
      .collection("mail-collection")
      .insertOne({ email, message, site:'doreyd', date:new Date() }, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result);
      });
  });
}
