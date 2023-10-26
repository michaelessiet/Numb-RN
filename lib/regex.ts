export const timeConversionRegex =
	/(\d{1,2}:?\d{0,2}(?:am|pm)?)\s+([\w/]+)\s+(to|in)\s+([\w/]+)\s*/i
export const currencyConversionRegex =
	/^([€£$¥₹₽₩₪]?[\d,.]+)\s*([a-zA-Z]+)*\s*(to|in)\s*(([a-zA-Z]+)|[€£$¥₹₽₩₪])\s*/i
export const currencySymbolRegex = /[€£$¥₹₽₩₪]/g
export const mathEquationRegex = /^([-+/*(^]*(\s)*\d+(\.\d+)?(%)?(\))?(\s)*)*/g
export const unitConversionRegex =
	/^(\d+(\.\d+)?)\s*(\w+)\s+(to|in)\s+(\w+)\s*/gi
