enum constants {
	pi = 3.142,
}

enum promptType {
	CONVERSION,
	MATHEQUATION,
}

enum conversionType {
	UNITCONVERSION,
	TIMECONVERSION,
	CURRENCYCONVERSION,
}

const currencySymbolToCode = {
	$: "USD", // US Dollar
	"€": "EUR", // Euro
	"£": "GBP", // British Pound Sterling
	"¥": "JPY", // Japanese Yen
	"₹": "INR", // Indian Rupee
	"₽": "RUB", // Russian Ruble
	"₩": "KRW", // South Korean Won
	"₪": "ILS", // Israeli New Shekel
}