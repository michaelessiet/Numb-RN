import { View, Text } from "react-native"
import React from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
	FadeInDown,
	FadeInUp,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated"
import { SequencedTransition } from "react-native-reanimated"

interface Props {
	id: number | string
	onDismiss: (id: number | string) => void
	children: React.ReactNode
}

const Dismissible = (props: Props) => {
	const start = useSharedValue({ x: 0 })
	const offset = useSharedValue({ x: 0 })
	const isDragging = useSharedValue(false)

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
		.minVelocity(500)
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
		.onFinalize(() => {
			isDragging.value = false
		})

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View
				entering={FadeInDown}
				layout={SequencedTransition}
				style={animatedStyle}
			>
				{props.children}
			</Animated.View>
		</GestureDetector>
	)
}

export default Dismissible
