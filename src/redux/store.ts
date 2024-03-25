import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/games/gamesSlice";
import genresReducer from "./slices/genres/genresSlice";
import platformsReducer from "./slices/platforms/platformsSlice";
import developersReducer from "./slices/developers/developersSlice";
import gamesStoresReducer from "./slices/gamesStores/gamesStoresSlice";

export const store = configureStore({
   reducer: {
      games: gamesReducer,
      genres: genresReducer,
      platforms: platformsReducer,
      developers: developersReducer,
      gamesStores: gamesStoresReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
