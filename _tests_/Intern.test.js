const Intern = require ("../lib/Intern")
describe('Intern',() => {
	test ("Testing to get correct name", () => {
		let example = new Intern("Amy",11,"name@email.com","school")
		expect(example.getName()).toBe("Amy")
		})
	test ("Testing to get correct id", () => {
		let example = new Intern("Amy",11,"name@email.com","school")
		expect(example.getID()).toBe(11)
	})
	test ("Testing to get correct email", () => {
		let example = new Engineer("Amy",11,"name@email.com","school")
		expect(example.getEmail()).toBe("name@email.com")
		})
	test ("Testing to get correct github", () => {
		let example = new Engineer("Amy",11,"name@email.com","school")
		expect(example.getSchool()).toBe("Hillsdale College")
	})
})