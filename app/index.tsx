import { Settings } from "@tamagui/lucide-icons"
import { Stack } from "expo-router"
import { useTheme } from "tamagui"

import { MyStack } from "../components/MyStack"
import { Text } from "react-native"
import { useState } from "react"
import SettingsSheet from "../components/SettingsSheet"
import Playground from "../components/Playground"

export default function Home() {
	const theme = useTheme()
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	function handleSettingsButtonPress() {
		setIsSettingsOpen((prev) => !prev)
	}

	return (
		<>
			<Stack.Screen
				options={{
					headerRight: () => {
						return <Settings size={24} onPress={handleSettingsButtonPress} />
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
