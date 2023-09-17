import { equal, match } from "assert"
import { convert12HrTo24Hr, removeTimeAndIn } from "./utils"
import {getDateParts, getTimeInDifferentTimezone} from '../lib/getTime'

describe("Utility tests", () => {
	it("remove time and in from a string", () => {
		const text = "time in washington"
		const text1 = "time in new york"

		equal(removeTimeAndIn(text), "washington")
		equal(removeTimeAndIn(text1), "new york")
	})
})
