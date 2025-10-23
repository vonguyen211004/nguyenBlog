import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', () => console.log("Database Conntected"))
        await mongoose.connect(`${process.env.MONGODB_URI}nguyenBlog`)
    }
    catch (error) {
        console.log(error.message);
    }
}

export default connectDB;