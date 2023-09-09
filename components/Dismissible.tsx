import { View, Text } from "react-native"
import React from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated"
import { SequencedTransition } from "react-native-reanimated"

interface Props {
	id: number
	onDismiss: (id: number) => void
	children: React.ReactNode
}

const Dismissible = (props: Props) => {
	const start = useSharedValue({ x: 0 })
	const offset = useSharedValue({ x: 0 })

	function handleDismiss() {
		props.onDismiss(props.id)
	}

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: withSpring(offset.value.x),
			},
		],
	}))

	const gesture = Gesture.Pan()
		.runOnJS(true)
		.onUpdate((e) => {
			const movement = e.translationX + start.value.x
			offset.value = {
				x: movement,
			}
		})
		.onEnd(() => {
			if (
				offset.value.x > start.value.x + 200 ||
				offset.value.x < start.value.x - 200
			) {
				handleDismiss()
			}
			offset.value = {
				x: 0,
			}
		})

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View layout={SequencedTransition} style={animatedStyle}>
				{props.children}
			</Animated.View>
		</GestureDetector>
	)
}

export default Dismissible
