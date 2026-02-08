import { connectDB } from "@/lib/connectDB";
import { IUserDocument, User } from "@/model/user.model";
import { RegisterInput } from "@/schema/auth.schema";
import { ApiResponse, IUser } from "@/types";
import bcrypt from "bcryptjs";


const SALT_ROUNDS = 12;

export const registerUser = async (payload: Omit<RegisterInput, 'confirmPassword'>): Promise<ApiResponse<{userId: string}>> => {
    await connectDB();

    const existingUser = await User.findOne({
        $or: [
            { username: payload.username },
            { email: payload.email },
        ]
    });

    if(existingUser) {
        return {
            success: false,
            message: "User already exists",
        }
    }

    const hashedPassword = await bcrypt.hash(payload.password, SALT_ROUNDS);

    const newUser = await User.create({
        email: payload.email,
        username: payload.username,
        password: hashedPassword,
    });

    return {
        success: true,
        message: "User registered successfully",
        data: {
            userId: newUser._id.toString(),
        }
    }
}

export const findUserByUsername = async (username: string): Promise<IUserDocument | null> => {
    await connectDB();
    return await User.findOne({ username}).select("-password");
}

export const validateUserCredentials = async (username: string, password: string): Promise<ApiResponse<{ id: string; username: string; email: string }>> => {
    await connectDB();
    const user = await User.findOne({ username })
    if(!user) {
        return {
            success: false,
            message: "Invalid username or password",
        };
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        return {
            success: false,
            message: "Invalid username or password",
        };
    }
    return {
        success: true,
        message: "User authenticated successfully",
        data: {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
        },
    };
}