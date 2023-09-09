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
