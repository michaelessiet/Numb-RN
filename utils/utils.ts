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
	const timestamp = Date.now().toString(36)
	const randomString = Math.random().toString(36).substring(2, 5)
	return `${timestamp}-${randomString}`
}
