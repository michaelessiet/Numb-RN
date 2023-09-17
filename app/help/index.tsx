import React from "react"
import { View, Text, Paragraph, H2, H4, ScrollView, Spacer } from "tamagui"

const HelpScreen = () => {
	return (
		<ScrollView p="$6">
			<H4>Instructions</H4>
			<Paragraph>
				Here’s how you can format your commands and expressions to ensure you
				get accurate results.
			</Paragraph>
			<Spacer />

			<H4>Calculations</H4>
			<Paragraph>{`1. 1 plus 1
2. -1 plus 1
3. 12 + 23 divided-by 6
4. log(39) plus log(4)
5. pi times pi
6. pi times log(30)
7. log(40) + 3
8. (1+89)/90
9. 3141e-3`}</Paragraph>
			<Spacer />

			<H4>Conversions</H4>
			<Paragraph>{`1. 1cm in inches
2. 2inches in cm
3. 1kb to kib
4. 2gb to kb
5. 5USD to CAD
6. 90eur to gbp
7. 20000jpy in usd
8. 299792458m/s in feet/s
9. 1kg in grams
10. 30ml in litres`}</Paragraph>
		</ScrollView>
	)
}

export default HelpScreen
