import admin from "../model/admin.js";

export const updateUser = async (req, res) => {
  try {
    const { id, name, email, role } = req.body;
    const [updateResult] = await admin.updateUser(id, name, email, role);

    if (updateResult.affectedRows === 0) {
      return res.status(400).json({
        message: "something went wrong",
      });
    }

    return res.status(200).json({ message: "successfully update user!" });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      message: "something went wrong",
    });
  }
};
