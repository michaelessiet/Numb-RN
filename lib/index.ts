import convert from "convert"
import { evaluate } from "mathjs"
import { convert12HrTo24Hr, getTimezoneOffset } from "../utils/utils"
import { getTimeInDifferentTimezone } from "./getTime"

export function numbEngine(text: string, precision = 2): string {
	try {
		if (/^(\d+(\.\d+)?)\s*(\w+)\s+(to|in)\s+(\w+)/gi.test(text)) {
			try {
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
			} catch (error) {
				return ""
			}
		}

		if (
			/^([€£$¥₹₽₩₪]?[\d,.]+)\s*([a-zA-Z]+)*\s*(to|in)\s*(([a-zA-Z]+)|[€£$¥₹₽₩₪])/i.test(
				text
			)
		) {
			return "N/A"
		}

		if (
			/(\d{1,2}:?\d{0,2}(?:am|pm)?)\s+([\w/]+)\s+(to|in)\s+([\w/]+)/i.test(text)
		) {
			try {
				const matches = text.match(
					/(\d{1,2}:?\d{0,2}(?:am|pm)?)\s+([\w/]+)\s+(to|in)\s+([\w/]+)/i
				)
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

		return evaluate(text.toLowerCase()).toFixed(precision)
	} catch (error) {
		console.log(error)
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
