import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        console.log(`MongoDB has been connected successflly on host: ${connectInstance.connection.host}`)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB