import { MongoClient } from "mongodb";
import { customers, employees, invoices } from "../../data";

export default function handler(req, res) {
  const url = 'mongodb://localhost:27017';

  MongoClient.connect(url, function (err, db) {
    const database = "database-one";

    const buildCollection = (table) => {
      let collection = [];
      table.forEach((record, index) => {
        if (index !== 0) {
          let newDocument = {};
          table[0].forEach((key, i) => {
            // return { [key]: record[i] };
            newDocument[key] = record[i];
          });
          collection.push(newDocument);
        }
      });

      return collection;
    };

    let collection = buildCollection(invoices);

    if (err) throw err;
    // res.status(200).json(newColl);
    return db
      .db(database)
      .collection("invoices")
      .insertMany(collection)
      .then((result) => {
        res.status(200).json({ result: true });
      });
  });
}
