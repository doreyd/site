import { MongoClient } from "mongodb";

const nonDeletableDBs = [
  "admin",
  "config",
  "local",
  "information_schema",
  "mail-db",
];

export default function handler(req, res) {
  const url = process.env.DB_URL;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    return db
      .db()
      .admin()
      .listDatabases()
      .then((dt) => {
        let newDbs = dt.databases.filter(
          (db) => !nonDeletableDBs.includes(db.name)
        );
        res.status(200).json({
          databases: newDbs,
        });
        db.close();
      });
  });
}
