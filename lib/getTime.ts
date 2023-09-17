import { DateTime } from "luxon"
import { convertToDoubleDigit } from "../utils/utils"

export function getDateParts() {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1 // Months are zero-based, so add 1
	const day = date.getDate()
	const hour = date.getHours() + 1
	const minute = date.getMinutes()

	return { year, month, day, hour, minute }
}

export function getTimeInDifferentTimezone(
	hour: number,
	minutes = 0,
	inputTimezone: string,
	targetTimezone: string
) {
	const inputTime = DateTime.fromObject({
		hour,
		minute: minutes,
	}).setZone(inputTimezone, { keepLocalTime: true })

	const targetTime = inputTime.setZone(targetTimezone)

	return `${convertToDoubleDigit(targetTime.hour)}:${convertToDoubleDigit(
		targetTime.minute
	)}`
}
