const URL = process.env.MONGO_URL
import mongoose from "mongoose"

const dbConnect = async () => {
    // console.log("printing URL",URL)
    try {
       await mongoose.connect(URL, {
            family: 4,
        })
        console.log("connected to db successfully")
    } catch (error) {
        console.log("unable to connect to the database")
        console.log(error)
    }

    // await mongoose.connect(URL, {
    //     family: 4,
    // })
    // console.log("connected to db successfully")
    // .then(()=>console.log("connected to db successfully"))
    // .catch(()=>console.log("unable to connect to the database"))
}
export default dbConnect