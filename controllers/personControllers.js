import personModel from "../models/personModel.js"

export const createPersonController = async (req, res) => {
	const { name } = req.body
	try {
		if (!name) {
			throw Error("You are required to provide a name.")
		}

		const exists = await personModel.findOne({ name })

		if (exists) {
			throw Error("Name exists")
		}
		const person = await personModel.create({
			name
		})

		console.log(person)
		res.status(200).json({ success: true, person, message: "Person created successfully." })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ error: error.message, success: false })
	}
}

export const getPersonController = async (req, res) => {
	const { _id } = req.params
	try {
		const person = await personModel.findById(_id)
		if (!person) {
			throw Error("Person not found!")
		}
		return res.status(200).json({ success: true, person, message: "Person found." })
	} catch (error) {
		res.status(400).json({ error: error.message, success: false })
	}
}
