import { User } from "../model/user.model.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            throw new Error("all field are required")
        }
        const userAlreadyExist = await User.findOne({email})
        
    } catch (error) {

    }
}

export const login = async (req, res) => {
    res.send("login route ")
}

export const logout = async (req, res) => {
    res.send("logout route")
}