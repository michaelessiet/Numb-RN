import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { numbEngine } from "../../lib"
import { placeholderQuestions } from "../../utils/constants"
import { randomUUID } from "../../utils/utils"

interface Prompt {
	id: string
	question: string
	answer: string
}

type Prompts = Prompt[]

const initialValue: Prompts = [
	{
		id: randomUUID(),
		question: placeholderQuestions[0],
		answer: numbEngine(placeholderQuestions[0]),
	},
	{
		id: randomUUID(),
		question: placeholderQuestions[1],
		answer: numbEngine(placeholderQuestions[1]),
	},
	{
		id: randomUUID(),
		question: placeholderQuestions[2],
		answer: numbEngine(placeholderQuestions[2]),
	},
]

const promptsSlice = createSlice({
	initialState: initialValue,
	name: "prompts",
	reducers: {
		addPrompt: (state) => {
			state = [...state, { answer: "", question: "", id: randomUUID() }]
		},
		removePrompt: (state, payload: PayloadAction<string>) => {
			state = state.filter((item) => item.id !== payload.payload)
		},
		updatePrompt: (
			state,
			payload: PayloadAction<{
				question: string
				answer: string
				index: number
			}>
		) => {
			state[payload.payload.index] = {
				...state[payload.payload.index],
				question: payload.payload.question,
				answer: payload.payload.answer,
			}
		},
	},
})

export const { addPrompt, removePrompt, updatePrompt } = promptsSlice.actions
export const promptReducer = promptsSlice.reducer
