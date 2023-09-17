import React from "react"
import PlaygroundInput from "./PlaygroundInput"
import { Button, ScrollView, View, YStack } from "tamagui"
import Dismissible from "../Dismissible"
import { Dimensions, KeyboardAvoidingView, Platform } from "react-native"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { addPrompt, removePrompt } from "../../store/prompts"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const Playground = () => {
	const dispatch = useAppDispatch()
	const { prompts } = useAppSelector((state) => state.promptsdata)

	function handleDismiss(id: string) {
		dispatch(removePrompt(id))
	}

	return (
		<View height={Dimensions.get("screen").height - 150} flex={1}>
			<KeyboardAwareScrollView
				keyboardDismissMode="on-drag"
				extraHeight={Platform.OS === "ios" ? 200 : null}
			>
				<YStack gap={8}>
					{prompts.map((v, i) => (
						<Dismissible id={v.id} key={v.id} onDismiss={handleDismiss}>
							<PlaygroundInput index={i} id={v.id} />
						</Dismissible>
					))}
				</YStack>
			</KeyboardAwareScrollView>
		</View>
	)
}

export default Playground
