/**
 * Global utility for testing modules
 * Available throughout the project
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
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

global.test = test
global.expect = expect