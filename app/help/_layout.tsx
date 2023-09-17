import React from "react"
import { Slot, Stack } from "expo-router"

const HelpLayout = () => {
	return (
		<>
			<Stack.Screen
				options={{ headerTitle: "Help", headerBackTitle: "Back" }}
			/>
			<Slot />
		</>
	)
}

export default HelpLayout
