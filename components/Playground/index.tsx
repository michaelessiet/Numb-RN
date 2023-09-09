import React, { useMemo, useState } from "react"
import { generateArrayFromNumber } from "../../utils/utils"
import PlaygroundInput from "./PlaygroundInput"
import { Button, ScrollView, View, YStack } from "tamagui"
import Dismissible from "../Dismissible"
import { Dimensions, LayoutAnimation } from "react-native"
import Animated, {
	CurvedTransition,
	EntryExitTransition,
	FadingTransition,
	JumpingTransition,
	SequencedTransition,
	SharedTransition,
} from "react-native-reanimated"

const Playground = () => {
	const [noOfLines, setNoOfLines] = useState(generateArrayFromNumber(4))

	function handleDismiss(id: number) {
		const temp = noOfLines.filter((v, i) => i !== id)
		setNoOfLines(temp)
	}

	function handleAddLine() {
		setNoOfLines((prev) => [...prev, Math.random() * 100000000000000])
	}

	return (
		<View height={Dimensions.get("screen").height - 150}>
			<ScrollView showsVerticalScrollIndicator>
				<YStack gap={8}>
					{noOfLines.map((v, i) => (
						<Dismissible id={i} key={v} onDismiss={handleDismiss}>
							<PlaygroundInput />
						</Dismissible>
					))}
				</YStack>
			</ScrollView>

			<Button pos="absolute" bottom={50} right={20} onPress={handleAddLine}>
				Add line
			</Button>
		</View>
	)
}

export default Playground
