import { MongoClient } from "mongodb";

export default function handler(req, res) {
  const url = process.env.DB_URL;
  MongoClient.connect(url, function (err, db) {
    const { newDatabase } = JSON.parse(req.body);

    if (err) throw err;
    return db
      .db(newDatabase)
      .collection("dummyCollection")
      .insertOne({ dummyData: "dummyData" }, function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
      });
  });
}
