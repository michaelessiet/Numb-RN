import React, { useEffect, useMemo, useState } from "react"
import { Input, Paragraph, Separator, XStack, useTheme } from "tamagui"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import engine from "../../lib"
import { updatePrompt } from "../../store/prompts"

interface Props {
	id: string
	index: number
}

const PlaygroundInput = (props: Props) => {
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const { prompts } = useAppSelector((state) => state.promptsdata)
	const prompt = useMemo(() => prompts[props.index], [prompts])

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
				placeholder="1+1"
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
			>
				{prompt.answer}
			</Paragraph>
		</XStack>
	)
}

export default PlaygroundInput
