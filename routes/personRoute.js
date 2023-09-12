import express from "express"
import { createPersonController, deletePersoController, getPersonController, updatePersoController } from "../controllers/personControllers.js"

const router = express.Router()

//Create
router.post("/", createPersonController)

//Read
router.get("/", getPersonController)

//Update
router.put("/", updatePersoController)

//Delete
router.delete("/", deletePersoController)

export default router
/*

const registerController = async (req, res) => {
	// console.log("Sign in logic here")
	const { email, password } = req.body

	try {
		// validation
		if (!email || !password) {
			throw Error("All fields must be filled!")
		}
		if (!validator.isEmail(email)) {
			throw Error("Email is not valid")
		}
		if (!validator.isStrongPassword(password)) {
			throw Error("Password is not strong enough. Password should have at least a symbol, Uppercase and lowercase letters, a number")
		}

		const exists = await UserModel.findOne({ email })

		if (exists) {
			throw Error("Email exists")
		}

		const saltRound = 10

		const salt = await bcrypt.genSalt(saltRound)
		const hash = await bcrypt.hash(password, salt)

		const user = await UserModel.create({
			email,
			password: hash
		})

		//create token
		const token = createToken(user._id)
		const userData = { email, id: user._id }
		res.status(200).json({ userData, token, success: true, message: "Registered successfuly!" })
	} catch (error) {
		res.status(400).json({ error: error.message, success: false })
	}
}
*/
