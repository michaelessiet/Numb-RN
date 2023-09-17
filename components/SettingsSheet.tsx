import React, { useMemo } from "react"
import {
	Label,
	Sheet,
	Switch,
	Text,
	Theme,
	XStack,
	useThemeName,
} from "tamagui"
import { Sun, Moon } from "@tamagui/lucide-icons"
import { Link } from "expo-router"

interface Props {
	isOpen: boolean
	onOpenChange: () => void
}

const SettingsSheet = (props: Props) => {
	const theme = useThemeName()
	const isDark = useMemo(() => theme === "dark", [theme])

	return (
		<Sheet
			open={props.isOpen}
			modal
			onOpenChange={props.onOpenChange}
			snapPointsMode="fit"
		>
			<Sheet.Handle />
			<Sheet.Overlay />
			<Sheet.Frame padding={30} gap={18}>
				{/* <XStack alignItems="center" justifyContent="space-between" space="$4">
					<Label width={90} htmlFor="notify" style={{ fontSize: 18 }}>
						Theme
					</Label>

					<XStack alignItems="center" gap={8}>
						<Sun size={20} />
						<Switch id="notify" checked={isDark}>
							<Switch.Thumb animation="quick" />
						</Switch>
						<Moon size={20} />
					</XStack>
				</XStack> */}

				<Link
					href={"/help"}
					onPress={props.onOpenChange}
					style={{ fontSize: 18 }}
				>
					<Text>Help/Instructions</Text>
				</Link>
			</Sheet.Frame>
		</Sheet>
	)
}

export default SettingsSheet
