import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//persisting state
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);

export const store = createStore(rootReducer, applyMiddleware(thunk));
