export default {
  databases: [],
  collections: {},
  documents: {},
  databaseSelected: "database-one",
  collectionSelected: "employees",
  documentSelected: {},
  documentSearched: [],
  modalOn: false,
  databaseMenu: null,
  collectionMenu: null,
  controlMode: null,

  allKeys: [],
  projection: {},
  projectionFull: true,

  insertExtraFieldsList: [],
  insertFieldsData: {},

  queryMany: true,
  queryFieldsList: [],
  queryFieldsData: {},
  searchOn: false,

  updateFieldsList: [],
  updateFieldsData: {},

  newTableList: [1, 2, 3],
  newTableData: {
    1: {
      id: 1,
      name: "",
      type: "VARCHAR(255)",
    },
    2: {
      id: 2,
      name: "",
      type: "VARCHAR(255)",
    },
    3: {
      id: 3,
      name: "",
      type: "VARCHAR(255)",
    },
  },

  newColumnList: [1],
  newColumnData: {
    1: {
      id: 1,
      name: "",
      type: "VARCHAR(255)",
    },
  },

  newCollectionName: "",
  columnToAdd: "",
  columnToAddType: "VARCHAR(255)",
  columnToDelete: null,

  newKeysTypes: [],
};
