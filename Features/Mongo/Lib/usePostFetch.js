import { useSelector } from "react-redux";

const getUrl = {
  getDocuments: "/api/documents/getalldocuments",
  getCollections: "/api/collections/getcollections",
  getDatabases: "/api/databases/getdbs",

  getColumns: "/api/collections/getcolumns",
  addNewColumn: "/api/collections/addnewcolumn",
  deleteColumn: "/api/collections/deletecolumn",

  renameCollection: "/api/collections/renamecollection",
  addNewCollection: "/api/collections/addcollection",
  deleteCollection: "/api/collections/deletecollection",
  renameCollection: "/api/collections/renamecollection",

  addNewDatabase: "/api/databases/adddatabase",
  deleteDatabase: "/api/databases/deletedatabase",

  addNewDocument: "/api/documents/adddocument",
  deleteDocument: "/api/documents/deletedocument",
  deleteManyDocuments: "/api/documents/deletemanydocuments",
  searchDocument: "/api/documents/searchdocument",
  searchManyDocuments: "/api/documents/searchmanydocuments",
  updateDocument: "/api/documents/updatedocument",
  updateManyDocuments: "/api/documents/updatemanydocuments",

  reloadCustomers: "/api/reloadcustomers",
  reloadEmployees: "/api/reloademployees",
  reloadInvoices: "/api/reloadinvoices",

  getMyMail: "/api/getmail",
};

export default (command, setData) => {
  const { databaseSelected, collectionSelected } = useSelector(
    (state) => state
  );

  const url = getUrl[command];

  const fetchNow = (body) => {
    fetch(url, {
      method: "post",
      body: JSON.stringify({
        ...body,
        database: databaseSelected,
        collection: collectionSelected,
      }),
    })
      .then((response) => response.json())
      .then(setData)
      .catch()
      .finally();
  };

  return fetchNow;
};
