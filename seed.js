import User from "../models/user.js";
import { connectDB } from "../lib/db.js";
import bcrypt from "bcryptjs";

await connectDB()

const hashedPassword = await bcrypt.hash("farhankhan@tr4r3&d", 10);

await User.create({
    name: "Farhan Abid",
    email: "farhankhan080304@gmail.com",
    password: hashedPassword,
    role: "admin"
})

console.log("Admin User Created")
process.exit()