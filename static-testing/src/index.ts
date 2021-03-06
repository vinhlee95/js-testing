const string = 'abc'
// typeof string === 'strng' eslint should complain about this
typeof string === 'string'

const myFunction = () => {
	console.log('Hello world') // should have single quote

	console.log('This line should have tab instead of space')
}

myFunction()

// Check types
const sayHello = (name: string) => {
	console.log(`Hello ${name}`)
}

sayHello('1') // TypeScript should complain about this
