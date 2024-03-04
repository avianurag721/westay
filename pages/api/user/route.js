import connectDB from "@/DBconnect";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function POST(request,res) {
  console.log("request ki body", request.body)
  try {
    if (request.method === "POST") {
      await connectDB();
      console.log("into login route");
      const { email, password } = request.body;
      if (!email || !password) {
        return res.status(400).json({ msg: "Email and password requestuired !" });
      }
      const emailExists = await User.findOne({ email });
      if (!emailExists) {
        console.log("user doesnt exist");
        return res.status(400).json({ msg: "Please Register first !" });
      }
      const passwordMatched = await bcrypt.compare(
        password,
        emailExists.password
      );
      if (passwordMatched) {
        const token = jwt.sign(
          { token: emailExists._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
          );
          console.log("passwords matched and sending data")
        return res.json({ msg: "Logged in successfully !",success:true, token });
      }
      console.log("passwords dudnt  matched and sending data")
      return res.json({ msg: "Invalid Credentitials !",success:false },{status:401});
    }
  } catch (error) {
    console.log("error in login",error)
  }
}

// export default function handler(req, res) {
//   console.log("sending res");
//   res.status(200).json({ message: "Hello from Next.js!" });
// }
