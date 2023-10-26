import { currencyConversionRegex } from "./regex";

export default async function currencyConverter(text: string) {
	const matches = text.match(currencyConversionRegex)
	console.log(matches.toString())
}