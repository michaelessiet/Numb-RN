import { configureStore } from "@reduxjs/toolkit"
import {
	persistCombineReducers, persistStore,
} from "redux-persist"
import FilesystemStorage from "redux-persist-filesystem-storage"
import { promptReducer } from "./prompts"

const persistedReducers = persistCombineReducers(
	{ key: "root", storage: FilesystemStorage },
	{
		promptsdata: promptReducer,
	}
)

export const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ serializableCheck: false })
	},
})

export const persistor = persistStore(store);
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;