import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Values {
	precision: number
	theme: "dark" | "light"
}

const initialValue: Values = {
	precision: 2,
	theme: "dark",
}

const preferencesSlice = createSlice({
	initialState: initialValue,
	name: "preferences",
	reducers: {
		updatePrecision: (state, action: PayloadAction<number>) => {
			state.precision = action.payload
		},
		updateTheme: (state, action: PayloadAction<Values["theme"]>) => {
			state.theme = action.payload
		},
		toggleTheme: (state) => {
			state.theme = state.theme === "dark" ? "light" : "dark"
		},
	},
})

export const { toggleTheme, updatePrecision, updateTheme } =
	preferencesSlice.actions
export const preferencesReducer = preferencesSlice.reducer
