import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import gamesReducer from "./slices/games/gamesSlice";
import genresReducer from "./slices/genres/genresSlice";
import platformsReducer from "./slices/platforms/platformsSlice";
import developersReducer from "./slices/developers/developersSlice";
import gamesStoresReducer from "./slices/gamesStores/gamesStoresSlice";

const rootReducer = combineReducers({
   games: gamesReducer,
   genres: genresReducer,
   platforms: platformsReducer,
   developers: developersReducer,
   gamesStores: gamesStoresReducer,
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
