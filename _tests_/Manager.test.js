const Manager = require ("../lib/Manager")
describe('Manager',() => {
	test ("Testing to get correct name", () => {
		let example = new Manager("Taylor",10,"name@email.com","officeNumber")
		expect(example.getName()).toBe("Taylor")
		})
	test ("Testing to get correct id", () => {
		let example = new Manager("Taylor",10,"name@email.com","officeNumber")
		expect(example.getID()).toBe(10)
	})
	test ("Testing to get correct email", () => {
		let example = new Manager("Taylor",10,"name@email.com","officeNumber")
		expect(example.getEmail()).toBe("name@email.com")
		})
	test ("Testing to get correct officeNumber", () => {
		let example = new Manager("Taylor",10,"name@email.com","officeNumber")
		expect(example.getofficeNumber()).toBe("123-456-7890")
	})
})