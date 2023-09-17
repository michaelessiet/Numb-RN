import React, { useMemo } from "react"
import {
	Input,
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
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { updatePrecision } from "../store/preferences"

interface Props {
	isOpen: boolean
	onOpenChange: () => void
}

const SettingsSheet = (props: Props) => {
	const theme = useThemeName()
	const isDark = useMemo(() => theme === "dark", [theme])
	const { precision } = useAppSelector((state) => state.preferencesdata)
	const dispatch = useAppDispatch()

	function handlePrecisionInput(text: string) {
		try {
			const pre = parseInt(text)
			if (isNaN(pre)) dispatch(updatePrecision(0))
			else dispatch(updatePrecision(parseInt(text)))
		} catch (error) {}
	}

	return (
		<Sheet
			open={props.isOpen}
			moveOnKeyboardChange
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

				<XStack alignItems="center" justifyContent="space-between" space="$4">
					<Text width={90} style={{ fontSize: 16 }}>
						Precision
					</Text>

					<Input
						keyboardType="number-pad"
						value={precision?.toString()}
						onChangeText={handlePrecisionInput}
					/>
				</XStack>

				<Link href={"/help"} onPress={props.onOpenChange}>
					<Text style={{ fontSize: 16 }}>Help/Instructions</Text>
				</Link>
			</Sheet.Frame>
		</Sheet>
	)
}

export default SettingsSheet
