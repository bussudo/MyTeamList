const Employee = require("../lib/Employee");

describe('Employee',() => {
test ("Testing to get correct name", () => {
let example = new Employee("Frank",123,"name@email.com")
expect(example.getName()).toBe("Frank")
})
test ("Testing to get correct id", () => {
	let example = new Employee("Frank",123,"name@email.com")
	expect(example.getID()).toBe(123)
	})
	test ("Testing to get correct email", () => {
		let example = new Employee("Frank",123,"name@email.com")
		expect(example.getEmail()).toBe("name@email.com")
		})
	test ("Testing to get correct role", () => {
		let example = new Employee("Frank",123,"name@email.com")
		expect(example.getRole()).toBe("Employee")
	})
})
