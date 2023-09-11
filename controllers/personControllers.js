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
export const updatePersoController = async (req, res) => {
	const { _id } = req.params
	const { newName } = req.body

	const exists = await personModel.findOne({ name: newName })

	try {
		const match = await personModel.findById(_id)
		if (!match) {
			throw Error("Error, you must provide a valid id to continue with this operation.")
		}

		if (!newName) {
			throw Error("You must provide a new name to update with.")
		}

		if (exists) {
			throw Error("Cannot Update, name exists by another user.")
		}

		const person = await personModel.findByIdAndUpdate(_id, { name: newName }, { new: true })
		// console.log(person)
		return res.status(200).json({ success: true, person, message: "Person updated successfully!" })
	} catch (error) {
		res.status(400).json({ error: error.message, success: false })
	}
}
export const deletePersoController = async (req, res) => {
	const { _id } = req.params
	try {
		const exists = await personModel.findById(_id)
		if (!exists) {
			throw Error("Error, you must provide a valid id to continue with this operation.")
		}

		const person = await personModel.findByIdAndDelete(_id)
		// console.log(person)
		return res.status(200).json({ success: true, message: "Person deleted successfully!" })
	} catch (error) {
		res.status(400).json({ error: error.message, success: false })
	}
}
