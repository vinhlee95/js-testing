/**
 * Sandbox JS testing
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */
const sum = (a, b) => a + b
const subtract = (a, b) => a - b

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