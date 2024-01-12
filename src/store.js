import { configureStore } from "@reduxjs/toolkit";
import { gameApiSlice } from "./slices/gameApiSlice";
import { connectionReducer } from "./slices/connectionSlice";
import { pastriesApiSlice } from "./slices/pastriesApiSlice";
import { adminApiSlice } from "./slices/adminApiSlice";

export default configureStore({
  reducer: {
    gameApi: gameApiSlice.reducer,
    adminApi: adminApiSlice.reducer,
    connection: connectionReducer,
    pastriesApi: pastriesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      gameApiSlice.middleware,
      adminApiSlice.middleware,
      pastriesApiSlice.middleware
    );
  },
});
