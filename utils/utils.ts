export function removeTimeAndIn(inputString: string): string {
	return inputString.replace(/(time|in)\s+/g, "")
}

export function generateArrayFromNumber(n: number): number[] {
	const result: number[] = []
	for (let i = 1; i <= n; i++) {
		result.push(i)
	}
	return result
}

export function randomUUID(): string {
	const timestamp = Date.now().toString()
	const randomString = Math.random().toString(36).substring(2, 5)
	return `${timestamp}-${randomString}`
}

export const timezones = {
	WAT: "UTC+1",
	MT: "UTC-7",
	EST: "UTC-5",
	PST: "UTC-8",
	UTC: "UTC+0",
	WET: "UTC+0",
	GMT: "UTC+0",
	IST: "UTC+5:30",
	CET: "UTC+1",
	CEST: "UTC+2",
	EET: "UTC+2",
	EEST: "UTC+3",
}

export const getTimezoneOffset = (key: string) => {
	return timezones[key.toUpperCase()]
}

export function convert12HrTo24Hr(time: string) {
	const notationRemoved = time.replace("pm", "").replace("am", "")

	if (time.toLowerCase().includes("pm")) {
		const timeParts = notationRemoved.split(":")
		const formattedHour = parseFloat(timeParts[0]) + 12

		return `${formattedHour}:${timeParts?.[1] ?? convertToDoubleDigit(0)}`
	}

	return notationRemoved
}

export function convertToDoubleDigit(num: number): string {
	if (num < 10) {
		return `0${num}`
	}
	return num.toString()
}

export function toPrecision(value: number, precision: number) {
	return Intl.NumberFormat("US", { maximumFractionDigits: precision }).format(
		value
	)
}
