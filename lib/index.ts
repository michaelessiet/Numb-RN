import convert from "convert"
import stringMath from "string-math"
import wordsToNumbers from "words-to-numbers"
import {
	currencyConversionRegex,
	mathEquationRegex,
	timeConversionRegex,
	unitConversionRegex,
} from "./regex"

export function numbEngine(text: string, precision = 2): string {
	return "1"
}

export async function numbEngineAsync(
	text: string,
	precision = 2
): Promise<string> {
	return "1"
}

export default async function engine(
	text: string,
	precision = 2
): Promise<string> {
	try {
		// if (mathEquationRegex.test(text)) {
		// 	const convertAllWordNumbers = wordsToNumbers(text, {
		// 		fuzzy: true,
		// 	}).toString()
		// 	console.log(convertAllWordNumbers)

		// 	return stringMath(convertAllWordNumbers).toFixed(precision)
		// }

		// if (currencyConversionRegex.test(text)) {
		// 	return "Currency conversion is not available yet"
		// }

		if (timeConversionRegex.test(text)) {
			return "Time conversion is not available yet"
		}

		if (/(\d+(\.\d+)?)\s*(\w+)\s+(to|in)\s+(\w+)/gi.test(text)) {
			const matches = text
				.matchAll(/(\d+(\.\d+)?)\s*(\w+)\s+(to|in)\s+(\w+)/gi)
				.next().value
			const values = {
				value: parseFloat(matches[1]),
				sourceUnit: matches[3],
				targetUnit: matches[5],
			}

			const convertedValue = convert(values.value, values.sourceUnit).to(
				values.targetUnit
			)

			return `${parseFloat(convertedValue.toString()).toFixed(precision)} ${
				values.targetUnit
			}`
		}

		return stringMath(text).toFixed(precision)
	} catch (error) {
		console.log(error)
		return ""
	}
}
