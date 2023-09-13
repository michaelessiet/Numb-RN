const timeRegex = new RegExp("time(?!w) | time(?= in )")
const convertRegex = new RegExp(" in | to ")
const currencyConversionRegex =
	/([€£$¥₹₽₩₪]?[\d,.]+)\s*([a-zA-Z]+)*\s*(to|in)\s*(([a-zA-Z]+)|[€£$¥₹₽₩₪])/i
const currencySymbolRegex = /[€£$¥₹₽₩₪]/g

