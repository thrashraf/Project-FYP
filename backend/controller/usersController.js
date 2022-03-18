import user from "../model/users.js";
import crypto from "crypto";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //to generate unique id
    const id = crypto.randomBytes(16).toString("hex");

    await user.register(id, firstName, email, password);

    res.status(200).json({message: 'successful create!'})

  } catch (error) {}
};
