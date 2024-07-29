import mongoose from "mongoose";

export const connectDB = async  () =>{
    await mongoose.connect('mongodb+srv://monikagour:monit123@cluster0.l9clmik.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}