import initialState from "../initialState";

import * as move from "./functions/move";
import * as create from "./functions/create";
import * as edit from "./functions/edit";
import * as save from "./functions/save";

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "SET_DATABASES":
      return {
        ...state,
        databases: action.payload,
      };
    case "SET_COLLECTIONS":
      return {
        ...state,
        collections: {
          ...state.collections,
          [state.databaseSelected]: action.payload,
        },
       
      };
    case "SET_DOCUMENTS":
      return {
        ...state,
        allKeys: action.payload.newKeys,
        projection: action.payload.projection,
        searchOn: false,
        documents: {
          ...state.documents,
          [state.databaseSelected + "-" + state.collectionSelected]:
            action.payload.data,
        },
        insertExtraFieldsList: [],
        insertFieldsData: {},
        queryFieldsList: [],
        queryFieldsData: {},
        updateFieldsList: [],
        updateFieldsData: {},
      };
    case "SET_NEW_KEYS":
      return {
        ...state,
        allKeys: action.payload.allKeys,
        newKeysTypes: action.payload.newKeysTypes,
        projection: action.payload.projection,
        searchOn: false,
        insertExtraFieldsList: [],
        insertFieldsData: {},
        queryFieldsList: [],
        queryFieldsData: {},
        updateFieldsList: [],
        updateFieldsData: {},
      };
    case "CHANGE_COLUMN_TO_ADD":
      return {
        ...state,
        columnToAdd: action.payload,
      };
    case "CHANGE_COLUMN_TO_ADD_TYPE":
      return {
        ...state,
        columnToAddType: action.payload,
      };
    case "CHANGE_COLUMN_TO_DELETE":
      return {
        ...state,
        columnToDelete: action.payload,
      };
    case "SET_COLLECTION_NEW_NAME":
      return {
        ...state,
        newCollectionName: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        // allKeys: action.payload.newKeys,
        // projection: action.payload.projection,
        searchOn: true,
        documentSearched: action.payload,
        queryFieldsList: [],
        queryFieldsData: {},
      };
    case "TOGGLE_CHECK":
      return {
        ...state,
        projection: {
          ...state.projection,
          [action.payload]: !state.projection[action.payload],
        },
      };
    case "CHECK_ALL":
      return {
        ...state,
        projection: action.payload,
      };
    case "SET_ALL_KEYS":
      return {
        ...state,
        allKeys: action.payload.allKeys,
        projection: action.payload.projection,
      };
    case "RESET_KEYS":
      let newProjection = { ...state.projection };
      action.payload.forEach((key) => {
        newProjection = { ...newProjection, [key]: true };
      });
      return {
        ...state,
        allKeys: [...state.allKeys, ...action.payload],
        projection: newProjection,
      };
    case "ADD_QUERY_FIELD":
      return {
        ...state,
        queryFieldsList: [...state.queryFieldsList, action.payload],
        queryFieldsData: {
          ...state.queryFieldsData,
          [action.payload]: {
            id: action.payload,
            val1: "",
            val2: "$eq",
            val3: "",
            val4: "integer",
          },
        },
      };
    case "ADD_UPDATE_FIELD":
      return {
        ...state,
        updateFieldsList: [...state.updateFieldsList, action.payload],
        updateFieldsData: {
          ...state.updateFieldsData,
          [action.payload]: {
            id: action.payload,
            val1: "",
            val2: "$set",
            val3: "",
            val4: "integer",
          },
        },
      };
    case "CHANGE_QUERY_FIELD":
      return {
        ...state,
        queryFieldsData: {
          ...state.queryFieldsData,
          [action.payload.id]: {
            ...state.queryFieldsData[action.payload.id],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    case "CHANGE_UPDATE_FIELD":
      return {
        ...state,
        updateFieldsData: {
          ...state.updateFieldsData,
          [action.payload.id]: {
            ...state.updateFieldsData[action.payload.id],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    case "CHANGE_INSERT_FIELD":
      return {
        ...state,
        insertFieldsData: {
          ...state.insertFieldsData,
          [action.payload.name]: {
            ...state.insertFieldsData[action.payload.name],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    case "CHANGE_EXTRA_INSERT_FIELD":
      return {
        ...state,
        insertFieldsData: {
          ...state.insertFieldsData,
          [action.payload.id]: {
            ...state.insertFieldsData[action.payload.id],
            [action.payload.name]: action.payload.value,
          },
        },
      };
    case "CHANGE_TABLE_DATA":
      return {
        ...state,
        newTableData: {
          ...state.newTableData,
          [action.payload.id]: {
            ...state.newTableData[action.payload.id],
            [action.payload.name]: action.payload.value,
          },
        },
      };
    case "SET_INSERT_FIELDS":
      return {
        ...state,
        insertFieldsData: action.payload,
      };
    case "CHANGE_INSERT_FIELDS":
      return {
        ...state,
        insertFieldsData: {
          ...state.insertFieldsData,
          [action.payload.id]: {
            ...state.insertFieldsData[action.payload.id],
            value: action.payload.value,
          },
        },
      };
    case "ADD_EXTRA_INSERT_FIELD":
      return {
        ...state,
        insertExtraFieldsList: [
          ...state.insertExtraFieldsList,
          action.payload.id,
        ],
        insertFieldsData: {
          ...state.insertFieldsData,
          [action.payload.id]: action.payload.obj,
        },
      };
    case "ADD_NEW_TABLE_DATA":
      return {
        ...state,
        newTableList: [...state.newTableList, action.payload.id],
        newTableData: {
          ...state.newTableData,
          [action.payload.id]: action.payload.obj,
        },
      };
    case "DELETE_EXTRA_FIELD":
      return {
        ...state,
        insertExtraFieldsList: [
          ...state.insertExtraFieldsList.filter((id) => id !== action.payload),
        ],
      };
    case "DELETE_NEW_TABLE_FIELD":
      return {
        ...state,
        newTableList: [
          ...state.newTableList.filter((id) => id !== action.payload),
        ],
      };
    case "CLEAR_QUERY":
      return {
        ...state,
        queryFieldsList: [],
        queryFieldsData: {},
      };
    case "TOGGLE_QUERY":
      return {
        ...state,
        queryMany: !state.queryMany,
      };
    case "DELETE_QUERY_FIELD":
      let newList = state.queryFieldsList.filter((id) => {
        return id !== action.payload.id;
      });

      return {
        ...state,
        queryFieldsList: newList,
        queryFieldsData: { ...state.queryFieldsData, [action.payload.id]: {} },
      };
    case "DELETE_UPDATE_FIELD":
      let newUpdateList = state.updateFieldsList.filter((id) => {
        return id !== action.payload.id;
      });

      return {
        ...state,
        updateFieldsList: newUpdateList,
        updateFieldsData: {
          ...state.updateFieldsData,
          [action.payload.id]: {},
        },
      };

    case "UPDATE_DOCUMENTS":
      return {
        ...state,
        searchOn: false,
        insertExtraFieldsList: [],
        documents: {
          ...state.documents,
          [state.databaseSelected + "-" + state.collectionSelected]: [
            action.payload,
            ...state.documents[
              state.databaseSelected + "-" + state.collectionSelected
            ],
          ],
        },
      };

    case "SELECT_DATABASE":
      return {
        ...state,
        databaseSelected: action.payload,
        collectionSelected: null,
        databaseMenu: state.databaseMenu === "db" ? null : "db",
      };
    case "SELECT_COLLECTION":
      return {
        ...state,
        collectionSelected: action.payload,
        databaseMenu: state.databaseMenu === "coll" ? null : "coll",
      };
    case "SELECT_DOCUMENT":
      return {
        ...state,
        documentSelected: action.payload,
        modalOn: true,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modalOn: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOn: false,
      };
    case "ADD_DOCUMENT":
      return {
        ...state,
        documents: {
          ...state.documents,
          [state.databaseSelected + "-" + state.collectionSelected]: [
            action.payload,
            ...state.documents[
              state.databaseSelected + "-" + state.collectionSelected
            ],
          ],
        },
      };
    case "TOGGLE_DATABASE_MENU":
      return {
        ...state,
        databaseMenu: state.databaseMenu === "db" ? null : "db",
      };
    case "TOGGLE_COLLECTION_MENU":
      return {
        ...state,
        databaseMenu: state.databaseMenu === "coll" ? null : "coll",
      };
    case "TOGGLE_DOCUMENT_MENU":
      return {
        ...state,
        controlMode: state.databaseMenu === null ? "add" : state.controlMode,
        databaseMenu: state.databaseMenu === "docs" ? null : "docs",
        controlMode: "add",
      };
    case "CONTROL_MODE":
      return {
        ...state,
        controlMode: action.payload,
      };
    case "CLOSE_ALL":
      return {
        ...state,
        databaseMenu: null,
      };
    // Vector Plus
    case "ADD_DOT":
      return {
        ...create.elem(state, action),
        ...save.saveState(state, action),
      };
    case "ADD_ELEM":
      return {
        ...create.elem(state, action),
        ...save.saveState(state, action),
      };
    case "MOVE_ELEM":
      return {
        ...move.elem(state, action),
        ...save.saveState(state, action),
      };

    case "MOVE_DOT":
      return {
        ...move.dot(state, action),
        ...save.saveState(state, action),
      };
    case "MOVE_DOT_PEN":
      return {
        ...move.dotPen(state, action),
        ...save.saveState(state, action),
      };
    case "MOVE_FOCALS":
      return {
        ...move.focals(state, action),
        ...save.saveState(state, action),
      };
    case "DRAG_DOT":
      return {
        ...move.dragDots(state, action),
        ...save.saveState(state, action),
      };
    case "SELECT_ELEM":
      return {
        ...state,
        elemSelected: action.payload,
        ...save.saveState(state, action),
      };
    case "CHANGE_MODE":
      return {
        ...state,
        modeSelected: action.payload,
        ...save.saveState(state, action),
      };
    case "UPDATE_PROP":
      return {
        ...edit.elem(state, action),
        ...save.saveState(state, action), // make sure only works after 100s
      };
    case "ROTATE":
      return {
        ...edit.rotate(state, action),
        ...save.saveState(state, action), // ***********
      };
    case "ROTATE_DOTS":
      return {
        ...edit.rotateDots(state, action),
        ...save.saveState(state, action),
      };
    case "RESCALE":
      return {
        ...edit.rescale(state, action),
        ...save.saveState(state, action),
      };

    case "SET_PROP":
      return {
        ...edit.setProp(state, action),
        ...save.saveState(state, action), //////
      };
    case "SET_COLOR_PROP":
      return {
        ...edit.setColorProp(state, action),
        ...save.saveState(state, action), /////
      };
    case "APPLY_COLOR":
      return {
        elemsState: {
          ...state.elemsState,
          [state.elemSelected]: {
            ...state.elemsState[state.elemSelected],
            lingrad: { ...state.linGrad },
          },
        },

        ...save.saveState(state, action),
      };
    case "CHANGE_GRADIENT":
      return {
        ...create.changeGradient(state, action),
        ...save.saveState(state, action),
      };

    case "CHANGE_OFFSET":
      return {
        ...create.changeOffset(state, action),
        ...save.saveState(state, action),
      };
    case "ADD_OFFSET":
      return {
        ...create.addOffset(state, action),
        ...save.saveState(state, action),
      };

    case "SET_CURSOR":
      return {
        ...state,
        polyDotSelected: action.payload,

        ...save.saveState(state, action),
      };
    case "SET_GRADIENT":
      let newGradients = [...state.gradients];
      newGradients[1] = {
        id: 2,
        type: "linear",
        offSets: [
          { offset: "5%", stopColor: action.payload.value },
          { offset: "95%", stopColor: "black" },
        ],
      };
      return {
        ...state,
        gradients: newGradients,

        ...save.saveState(state, action),
      };
    case "UPDATE_POLYDOT":
      return {
        ...edit.updatePolyDot(state, action),

        ...save.saveState(state, action),
      };
    case "SET_PEN":
      return {
        ...state,
        penSelected: action.payload,

        ...save.saveState(state, action),
      };
    case "UPDATE_PEN":
      return {
        ...edit.updatePen(state, action),
        ...save.saveState(state, action),
      };
    case "REORDER_LIST":
      const oldElemList2 = [...state.elemsList];
      oldElemList2.splice(action.payload.oldIndex, 1);
      oldElemList2.splice(action.payload.newIndex, 0, action.payload.elem);
      let reverse = [...oldElemList2].reverse();
      return {
        ...state,
        elemsList: [...oldElemList2],
        elemsListReverse: [...reverse],
        ...save.saveState(state, action),
      };
    case "SELECT_SHAPE":
      return {
        ...state,
        shapeSelected: action.payload,
        ...save.saveState(state, action),
      };

    case "GO_TO_STATE": {
      let selectedState = {
        ...state.newState["stateHistory"][action.payload.index],
      };
      let newStateHistory = [...state.stateHistory];

      let newStateIndex = action.payload.index;
      return {
        ...selectedState,
        stateHistory: [...newStateHistory],
        stateIndex: newStateIndex,
      };
    }
    case "SET_OFFSET_COLOR": {
      let newOffsets = [...state[action.payload.currentGradient]["offSets"]];

      newOffsets[action.payload.index]["style"] = {
        ...newOffsets[action.payload.index]["style"],
        stopColor: `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`,
      };
      let newLin = { ...state.linGrad };
      newLin["offSets"][action.payload.index]["style"] = {
        stopColor: `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`,
        opacity: 1,
      };

      return {
        ...state,
        linGrad: { ...newLin },
        [action.payload.currentGradient]: {
          ...state[action.payload.currentGradient],
          offSets: [...newOffsets],
        },
        ...save.saveState(state, action),
      };
    }

    case "GO_FORWARD": {
      if (state.stateIndex === state.stateHistory.length - 1) {
        return { ...state };
      }
      let oldStatHistory = [...state.stateHistory];
      let newStateIndex = state.stateIndex + 1;
      return {
        ...oldStatHistory[newStateIndex],
        stateIndex: state.stateIndex + 1,
        stateHistory: [...oldStatHistory],
      };
    }
    case "GO_BACKWARD": {
      let oldStatHistory2 = [...state.stateHistory];
      let newStateIndex2 = state.stateIndex - 1;

      if (state.stateIndex === 0) {
        return { ...state };
      } else if (state.stateIndex === state.stateHistory.length) {
        let newStateHist = [...state.stateHistory, { ...state }];
        return {
          ...save.saveState(state, action),
          // stateHistory: [...state.stateHistory, { ...state }],
          ...newStateHist[state.stateIndex - 1],
          stateIndex: state.stateIndex - 1,
          stateHistory: [...newStateHist],
        };
      } else {
        return {
          ...oldStatHistory2[newStateIndex2],
          stateIndex: state.stateIndex - 1,
          stateHistory: [...oldStatHistory2],
        };
      }

      // let oldStatHistory2 = [...state.stateHistory];
      // let newStateIndex2 = state.stateIndex - 1;
      // return {
      //   ...oldStatHistory2[newStateIndex2],
      //   stateIndex: state.stateIndex - 1,
      //   stateHistory: [...oldStatHistory2],
      // };
    }

    case "SAVE_STATE": {
      return {
        ...state,
        // ...save.saveState(state, action),
      };
    }

    case "CHANGE_DIMENSIONS":
      let { height, width } = action.payload;
      return {
        ...state,
        elemsState: {
          ...state.elemsState,
          "Svg-0": {
            ...state.elemsState["Svg-0"],
            height: height ? height : state.elemsState["Svg-0"].height,
            width: width ? width : state.elemsState["Svg-0"].width,
          },
        },
      };

    case "DELETE_ELEM":
      return {
        ...state,
        elemsList: state.elemsList.filter((id) => id !== action.payload.id),
        elemsState: { ...state.elemsState, [action.payload.id]: {} },
      };
    case "RENAME_ELEM":
      return {
        ...state,
        elemsState: {
          ...state.elemsState,
          [action.payload.id]: {
            ...state.elemsState[action.payload.id],
            name: action.payload.newName,
          },
        },
      };
    case "SAVE_SVG":
      return {
        ...state,
        svgInnerHtml: action.payload,
      };
    // case "SAVE_PROJECT":
    //   let newState = state;
    //   delete newState.filesList;
    //   delete fileSelected.fileSelected;
    //   return {
    //     filesList: [],
    //     fileSelected: null,
    //   };
    case "LOAD_FILE":
      return {
        filesList: state.filesList,
        fileSelected: action.payload.fileSelected,
        ...action.payload.projectState,
      };
    case "GET_ALL_FILES":
      return {
        ...state,
        filesList: action.payload,
      };
    case "SELECT_FILE":
      return {
        ...state,
        fileSelected: action.payload,
      };
    case "RESET_STATE":
      return {
        ...action.payload,
      };
    case "UPDATE_SVG_HTML":
      return {
        ...state,
        updateSvgHtml: !state.updateSvgHtml,
      };
    // mysite

    case "SELECT_SECTION":
      return {
        ...state,
        lastSelected: state.sectionSelected,
        sectionSelected: action.payload,
      };
    case "SHOW_HELP":
      return {
        ...state,
        showHelp: true,
      };
    case "HIDE_HELP":
      return {
        ...state,
        showHelp: false,
      };
    case "MAIL_ON":
      return {
        ...state,
        mailOn: true,
      };
    case "MAIL_OFF":
      return {
        ...state,
        mailOn: false,
      };

    default:
      return state;
  }
}
