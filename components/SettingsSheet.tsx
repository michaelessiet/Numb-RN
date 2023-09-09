import { useColorScheme } from "react-native"
import React from "react"
import { Label, Sheet, Switch, XStack } from "tamagui"
import { Sun, Moon } from "@tamagui/lucide-icons"
import { Link } from "expo-router"

interface Props {
	isOpen: boolean
	onOpenChange: () => void
}

const SettingsSheet = (props: Props) => {
	const colorScheme = useColorScheme()

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
				<XStack alignItems="center" justifyContent="space-between" space="$4">
					<Label width={90} htmlFor="notify" style={{ fontSize: 18 }}>
						Theme
					</Label>

					<XStack alignItems="center" gap={8}>
						<Sun size={20} />
						<Switch id="notify" checked={colorScheme === "dark"}>
							<Switch.Thumb animation="quick" />
						</Switch>
						<Moon size={20} />
					</XStack>
				</XStack>

				<Link href={"/help"} style={{ fontSize: 18 }}>
					Help/Instructions
				</Link>
			</Sheet.Frame>
		</Sheet>
	)
}

export default SettingsSheet
