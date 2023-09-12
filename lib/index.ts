export function numbEngine(text: string, precision = 2): string {
	return "1"
}

export async function numbEngineAsync(
	text: string,
	precision = 2
): Promise<string> {
	return "1"
}

export default async function engine(text: string, precision = 2): Promise<string> {
	return text
}
