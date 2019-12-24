/**
 * Sandbox JS testing
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
// TASK: Create an utility test function that
// test(title, testFn)
// - Have title as title of the test
// - Have testFn as the function that we want to test
// - Logs Success/ Fail message
// - Throw an error when the test fails
const sum = (a, b) => a + b
const subtract = (a, b) => a - b

/**
 * Test utility function
 *
 * @param {String} title of the test
 * @param {Function} testFn
 * @return
 */
const test = (title, testFn) => {
	try {
		testFn()
		console.log(`✅ ${title}`)
	} catch(error) {
		console.error(`❌ ${title}`)
		console.error(error)
	}
}

/**
 * Expect utility
 *
 * @param {any} expectedValue
 * @return Object
 */
const expect = (expectedValue) => ({
	toEqual(result) {
		if(expectedValue === result) return
		throw new Error(`Result is ${result}. Expect ${expectedValue}`)
	}
})

test("Sum 2 numbers correctly", () => {
	const result = sum(1,2)
	const expected = 4
	expect(expected).toEqual(result)
})

test("Subtract 2 numbers correctly", () => {
	const result = subtract(3,1)
	const expected = 4
	expect(expected).toEqual(result)
})