import mongoose from "mongoose";
const connectToDb=async()=>{
    await mongoose.connect(`mongodb+srv://rohitkumarroy23498:${process.env.DBPASS}@tution.jkoj4ct.mongodb.net/?appName=Tution`);
    console.log("connected to MonogoDb")
}

export  default connectToDb;