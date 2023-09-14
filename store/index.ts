import { configureStore } from "@reduxjs/toolkit"
import { persistCombineReducers, persistStore } from "redux-persist"
import { promptReducer } from "./prompts"
import { MMKVLoader } from "react-native-mmkv-storage"

const mmkvStorage = new MMKVLoader().withEncryption().initialize()

const persistedReducers = persistCombineReducers(
	{ key: "root", storage: mmkvStorage },
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

export const persistor = persistStore(store)
export type StoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
