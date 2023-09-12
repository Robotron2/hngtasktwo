import personModel from "../models/personModel.js"
import _ from "lodash"

export const createPersonController = async (req, res) => {
	let { name } = req.body

	// const nameSplit = name.split(" ")
	// console.log(nameSplit)

	try {
		if (!isNaN(name)) {
			throw Error("You are required to provide a name, not a number")
		}

		if (!name) {
			throw Error("You are required to provide a name.")
		}
		const nameSplit = name.split(" ")
		// console.log(nameSplit)
		if (nameSplit.length == 1) {
			name = _.upperFirst(nameSplit[0])
		} else if (nameSplit.length >= 2) {
			name = []
			for (let i = 0; i < nameSplit.length; i++) {
				nameSplit[i] = _.upperFirst(nameSplit[i])
				name.push(nameSplit[i])
			}
			const customSeparator = " "
			name = name.join(customSeparator)
		}

		// console.log(name)

		const exists = await personModel.findOne({ name })

		if (exists) {
			throw Error("Name exists")
		}
		const person = await personModel.create({
			name
		})

		// console.log(person)
		res.status(200).json({ success: true, person, message: "Person created successfully." })
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ error: error.message, success: false })
	}
}

export const getPersonController = async (req, res) => {
	// const { _id } = req.params
	const { _id } = req.body
	try {
		if (!_id) {
			throw Error("You are to provide a valid id in order to get the details of the person")
		}
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
	let { newName, _id } = req.body
	try {
		if (!isNaN(newName)) {
			throw Error("You are required to provide a name, not a number")
		}
		if (!_id) {
			throw Error("You are to provide a valid id to continue with the operation.")
		}

		const nameSplit = newName.split(" ")
		// console.log(nameSplit)
		if (nameSplit.length == 1) {
			newName = _.upperFirst(nameSplit[0])
		} else if (nameSplit.length >= 2) {
			newName = []
			for (let i = 0; i < nameSplit.length; i++) {
				nameSplit[i] = _.upperFirst(nameSplit[i])
				newName.push(nameSplit[i])
			}
			const customSeparator = " "
			newName = newName.join(customSeparator)
		}

		const exists = await personModel.findOne({ name: newName })

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
	const { _id } = req.body
	try {
		if (!_id) {
			throw Error("You are to provide a valid id to continue with the operation.")
		}
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
