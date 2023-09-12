import chai from "chai"
import chaiHttp from "chai-http"

const expect = chai.expect

chai.use(chaiHttp)

describe("Person API", () => {
	let createdPersonId // Store the ID of the person created during testing

	// Test the Create operation
	it("should create a new person", (done) => {
		// chai.request("http://localhost:8080/api")
		chai.request("https://theophilus-hng-task-two.onrender.com/api")
			.post("/")
			.send({ name: "Mark" })
			.end((err, res) => {
				// console.log(res)
				expect(res.body).to.have.property("message").eq("Person created successfully.")
				createdPersonId = res.body.person._id
				done()
			})
	})

	// Test the Read operation
	it("should retrieve person record using unique ID", (done) => {
		// chai.request("http://localhost:8080/api")
		chai.request("https://theophilus-hng-task-two.onrender.com/api")
			.get("/")
			.send({ _id: `${createdPersonId}` })
			.end((err, res) => {
				expect(res.body).to.have.property("message").eq("Person found.")
				done()
			})
	})

	// Test the Update operation
	it("should update a person by ID", (done) => {
		// chai.request("http://localhost:8080/api")
		chai.request("https://theophilus-hng-task-two.onrender.com/api")
			.put("/")
			.send({ newName: "Mark Essien", _id: `${createdPersonId}` })
			.end((err, res) => {
				expect(res.body).to.have.property("message").eq("Person updated successfully!")
				done()
			})
	})

	// Test the Delete operation
	it("should delete a person by ID", (done) => {
		// chai.request("http://localhost:8080/api")
		chai.request("https://theophilus-hng-task-two.onrender.com/api")
			.delete("/")
			.send({ _id: `${createdPersonId}` })
			.end((err, res) => {
				expect(res.body).to.have.property("message").eq("Person deleted successfully!")
				done()
			})
	})
})
