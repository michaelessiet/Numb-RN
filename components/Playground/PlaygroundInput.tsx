import React, { useEffect, useMemo, useState } from "react"
import { Input, Paragraph, Separator, XStack, useTheme } from "tamagui"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import engine from "../../lib"
import { updatePrompt } from "../../store/prompts"
import { placeholderQuestions } from "../../utils/constants"
import * as Clipboard from "expo-clipboard"
import { useToastController } from "@tamagui/toast"

interface Props {
	id: string
	index: number
}

const PlaygroundInput = (props: Props) => {
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const { prompts } = useAppSelector((state) => state.promptsdata)
	const prompt = useMemo(() => prompts[props.index], [prompts])
	const placeholder = useMemo(
		() => placeholderQuestions[Math.floor(Math.random() * 5)],
		[]
	)
	const toast = useToastController()

	const [calculation, setCalculation] = useState(prompt.question)

	async function handleInput(text: string) {
		const answer = await engine(text)
		dispatch(
			updatePrompt({
				answer: answer,
				question: text,
				index: props.index,
			})
		)
	}

	useEffect(() => {
		handleInput(calculation)
	}, [calculation])

	return (
		<XStack separator={<Separator vertical alignSelf="stretch" />}>
			<Input
				style={{ width: "75%", paddingRight: 10 }}
				fontSize={"$5"}
				multiline
				lineHeight={"$4"}
				borderWidth={0}
				placeholder={placeholder}
				backgroundColor={"$colorTransparent"}
				value={calculation}
				onChangeText={setCalculation}
			/>
			<Paragraph
				lineHeight={"$4"}
				fontSize={"$5"}
				style={{
					padding: 16,
					color: theme.blue10.get(),
					flexWrap: "wrap",
					flex: 1,
				}}
				onPress={() => {
					Clipboard.setStringAsync(prompt.answer)
					toast.show("Copied", {native: true})
				}}
			>
				{prompt.answer}
			</Paragraph>
		</XStack>
	)
}

export default PlaygroundInput
