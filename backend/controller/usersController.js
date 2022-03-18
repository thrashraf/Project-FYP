import user from "../model/users.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {

    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    const id = crypto.randomBytes(16).toString("hex");

    const [checkExistingEmail] = await user.checkEmail(email);

    if (checkExistingEmail.length > 0) {
      //console.log('email already exist');
      return res.status(400).json({
        message: "email already exist"
      });
    }

    const hashPassword = bcrypt.hashSync(password);

    await user.register(id, firstName, email, hashPassword);

    res.status(200).json({
      message: "successful create!",
    });

  } catch (error) {
    console.log(error);
  }
};
