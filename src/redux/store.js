import { configureStore } from "@reduxjs/toolkit";

import { usersData } from "./users";

export const store = configureStore({
    reducer: {
        [usersData.reducerPath]: usersData.reducer,
    },
    middleware: (defaultMiddlware) => {
        return defaultMiddlware().concat(usersData.middleware);
    },
});
