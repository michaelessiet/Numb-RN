import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { placeholderQuestions } from "../../utils/constants"
import { randomUUID } from "../../utils/utils"

interface Prompt {
	id: string
	question: string
	answer: string
}

type Prompts = Prompt[]

const initialValue: { prompts: Prompts } = {
	prompts: [
		{
			id: randomUUID(),
			question: placeholderQuestions[0],
			answer: "",
		},
		{
			id: randomUUID(),
			question: placeholderQuestions[1],
			answer: "",
		},
		{
			id: randomUUID(),
			question: placeholderQuestions[2],
			answer: "",
		},
	],
}

const promptsSlice = createSlice({
	initialState: initialValue,
	name: "prompts",
	reducers: {
		addPrompt: (state) => {
			state.prompts = [
				...state.prompts,
				{ answer: "", question: "", id: randomUUID() },
			]
		},
		removePrompt: (state, payload: PayloadAction<string>) => {
			state.prompts = state.prompts.filter(
				(item) => item.id !== payload.payload
			)
		},
		updatePrompt: (
			state,
			payload: PayloadAction<{
				question: string
				answer: string
				index: number
			}>
		) => {
			state.prompts[payload.payload.index] = {
				...state.prompts[payload.payload.index],
				question: payload.payload.question,
				answer: payload.payload.answer,
			}
		},
	},
})

export const { addPrompt, removePrompt, updatePrompt } = promptsSlice.actions
export const promptReducer = promptsSlice.reducer
