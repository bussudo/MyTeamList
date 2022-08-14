const Engineer = require ("../lib/Engineer")
describe('Engineer',() => {
	test ("Testing to get correct name", () => {
		let example = new Engineer("Charlie",12,"name@email.com","githb")
		expect(example.getName()).toBe("Charlie")
		})
	test ("Testing to get correct id", () => {
		let example = new Engineer("Charlie",12,"name@email.com","github")
		expect(example.getID()).toBe(12)
	})
	test ("Testing to get correct email", () => {
		let example = new Engineer("Charlie",12,"name@email.com","github")
		expect(example.getEmail()).toBe("name@email.com")
		})
	test ("Testing to get correct github", () => {
		let example = new Engineer("Charlie",12,"name@email.com","github")
		expect(example.getGithub()).toBe("github")
	})
})

