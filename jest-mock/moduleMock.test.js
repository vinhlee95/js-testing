const utils = require('./utils')
const math = require('./index')

// Jest module mocking
jest.mock('./utils', () => ({
	add: jest.fn((a, b) => a + b)
}))

test('do correct math with module mocking', () => {
	const sum = math.doAdd(1,2)
	math.doAdd(3,4)

	expect(sum).toBe(3)
	expect(utils.add).toHaveBeenCalledWith(1,2)
	expect(utils.add).toHaveBeenCalledTimes(2)
	expect(utils.add).toHaveBeenNthCalledWith(1, 1, 2)
	expect(utils.add).toHaveBeenNthCalledWith(2, 3, 4)

	// clean up
	utils.add.mockReset()
})