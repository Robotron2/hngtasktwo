import mongoose, { mongo } from "mongoose"

const personSchema = new mongoose.Schema({
	name: {
		type: String
	}
})

const personModel = mongoose.model("Person", personSchema)

export default personModel
