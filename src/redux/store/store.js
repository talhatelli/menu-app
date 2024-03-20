// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Başlangıç durumu (initial state)
const initialState = {
  menuItems: [], // Örnek bir durum (state)
};

// Reducer fonksiyonu
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MENU_ITEMS":
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
};

// rootReducer'unuzu import etmeyi unutmayın

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
