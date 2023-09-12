import { Suspense, useEffect } from "react"
import { useColorScheme } from "react-native"
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { TamaguiProvider, Text, Theme } from "tamagui"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import config from "../tamagui.config"
import { persistor, store } from "../store"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
	const colorScheme = useColorScheme()

	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) return null

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<TamaguiProvider config={config}>
					<Suspense fallback={<Text>Loading...</Text>}>
						<Theme name={colorScheme}>
							<ThemeProvider
								value={colorScheme === "light" ? DefaultTheme : DarkTheme}
							>
								<Stack screenOptions={{}} />
							</ThemeProvider>
						</Theme>
					</Suspense>
				</TamaguiProvider>
			</PersistGate>
		</Provider>
	)
}
