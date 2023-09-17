import convert, { Angle } from "convert"
import { evaluate } from "mathjs"
import {
	convert12HrTo24Hr,
	getTimezoneOffset,
	toPrecision,
} from "../utils/utils"
import { getTimeInDifferentTimezone } from "./getTime"
import {
	currencyConversionRegex,
	timeConversionRegex,
	unitConversionRegex,
} from "./regex"

export function numbEngine(text: string, precision = 2): string {
	try {
		if (unitConversionRegex.test(text)) {
			try {
				const matches = text.match(unitConversionRegex.source)
				const values = {
					value: parseFloat(matches[1]),
					sourceUnit: matches[3],
					targetUnit: matches[5],
				}

				const convertedValue = convert(
					values.value,
					values.sourceUnit as Angle
				).to(values.targetUnit as Angle)

				return `${toPrecision(
					parseFloat(convertedValue.toString()),
					precision
				)} ${values.targetUnit}`
			} catch (error) {
				return ""
			}
		}

		if (currencyConversionRegex.test(text)) {
			return "N/A"
		}

		if (timeConversionRegex.test(text)) {
			try {
				const matches = text.match(timeConversionRegex)
				const time = convert12HrTo24Hr(matches[1])
				const inputTimezone = getTimezoneOffset(matches[2])
				const targetTimezone = getTimezoneOffset(matches[4])

				const timeParts = time.split(":")
				const hour = parseFloat(timeParts[0])
				const minute = parseFloat(timeParts?.[1] ?? "0")

				return getTimeInDifferentTimezone(
					hour,
					minute,
					inputTimezone,
					targetTimezone
				)
			} catch (error) {
				return "N/A"
			}
		}

		const result = toPrecision(evaluate(text.toLowerCase()), precision)
		return isNaN(parseFloat(result)) ? "" : result
	} catch (error) {
		return ""
	}
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
	return numbEngine(text, precision)
}
