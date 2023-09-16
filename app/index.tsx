import { Settings, Plus, PlusSquare, PlusCircle } from "@tamagui/lucide-icons"
import { Stack } from "expo-router"
import { XStack, useTheme } from "tamagui"

import { MyStack } from "../components/MyStack"
import { Text } from "react-native"
import { useState } from "react"
import SettingsSheet from "../components/SettingsSheet"
import Playground from "../components/Playground"
import { useAppDispatch } from "../store/hooks"
import { addPrompt } from "../store/prompts"

export default function Home() {
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	function handleSettingsButtonPress() {
		setIsSettingsOpen((prev) => !prev)
	}

	function handleAddLine() {
		dispatch(addPrompt())
	}

	return (
		<>
			<Stack.Screen
				options={{
					headerRight: () => {
						return (
							<XStack gap={8}>
								<Settings onPress={handleSettingsButtonPress} />
								<PlusCircle onPress={handleAddLine}/>
							</XStack>
						)
					},
					headerLeft: () => {
						return (
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 24,
									color: theme.blue10.get(),
								}}
							>
								Numb
							</Text>
						)
					},
					headerTitleStyle: { fontSize: 0 },
				}}
			/>
			<MyStack>
				<Playground />
				<SettingsSheet
					isOpen={isSettingsOpen}
					onOpenChange={handleSettingsButtonPress}
				/>
			</MyStack>
		</>
	)
}
