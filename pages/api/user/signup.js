import User from "@/models/user.model";
import bcrypt from "bcrypt";
import connect from "@/DBconnect";
import jwt from "jsonwebtoken"

export default async function signup(req, res) {
  connect();

  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    if (!name || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const user = await User.findOne({ email: email });

    if (user) {
      console.log("user", user);
      return res.status(401).json({
        success: false,
        user,
        message: "User Already Exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const singedInUser = await User.create({
      userName: name,
      password: hashedPassword,
      email,
    });
    const token = jwt.sign(
      { token: singedInUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
      );
    console.log("return resp");
    return res.status(200).json({
      success: true,
      message: "SignUp successfull",
      token,
      // user: singedInUser,
    });
  } catch (error) {
    console.log("error in singup", error);
  }
}
