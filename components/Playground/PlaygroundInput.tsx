import { View, Text } from "react-native"
import React, { useEffect, useMemo, useState } from "react"
import { Input, Paragraph, Separator, XStack, useTheme } from "tamagui"

const PlaygroundInput = () => {
	const theme = useTheme()
	const [calculation, setCalculation] = useState("")

	const answer = useMemo(() => {
		return 1
	}, [calculation])

	return (
		<XStack separator={<Separator vertical alignSelf="stretch" />}>
			<Input
				style={{ width: "80%", paddingRight: 10 }}
				fontSize={'$5'}
				multiline
				lineHeight={"$4"}
				borderWidth={0}
				placeholder="1+1"
				backgroundColor={"$colorTransparent"}
				value={calculation}
				onChangeText={setCalculation}
			/>
			<Paragraph
				lineHeight={"$4"}
				fontSize={'$5'}
				style={{ padding: 16, color: theme.blue10.get() }}
			>
				{answer}
			</Paragraph>
		</XStack>
	)
}

export default PlaygroundInput 
