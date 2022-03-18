import user from "../model/users.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    //get value from frontend
    const { firstName, lastName, email, password } = req.body;

    //create an unique id
    const id = crypto.randomBytes(16).toString("hex");

    //want to check if user exist
    const [checkExistingEmail] = await user.checkEmail(email);

    //if user already thrown an error
    if (checkExistingEmail.length > 0) {
      //console.log('email already exist');
      return res.status(400).json({
        message: "email already exist",
      });
    }

    //hash user password
    const hashPassword = bcrypt.hashSync(password);

    //create user
    await user.register(id, firstName, email, hashPassword);

    //response successful create user 🎉
    res.status(200).json({
      message: "successful create!",
    });
  } catch (error) {
    console.log(error);
  }
};
