import mongoose from "mongoose"

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dodo4421:1q2w3e4r@dodo4421.lausdac.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
