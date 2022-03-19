import user from "../model/users.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //to generate unique id
    const id = crypto.randomBytes(16).toString("hex");

    await user.register(id, firstName, email, password);

    res.status(200).json({ message: "successful create!" });
  } catch (error) {}
};

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [checkExistingEmail] = await user.checkEmail(email);

    if (!checkExistingEmail) {
      return res.status(400).json({
        message: "Incorrect Email or Password",
      });
    }

    //User info
    const userInfo = checkExistingEmail[0];
    const isValid = bcrypt.compareSync(password, userInfo.password);

    // if(!isValid){
    //   return res.status(400).json({
    //     message: "Incorrect Email or Password"
    //   })
    // }

    const accessToken = jwt.sign(
      { id: userInfo.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    console.log(accessToken);
    const refreshToken = jwt.sign(
      { id: userInfo.id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Not Found" });
  }
};
