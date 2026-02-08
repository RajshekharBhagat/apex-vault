import { Document, model, Model, models, Schema } from "mongoose";

export interface IUserDocument extends Document {
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export const UserSchema = new Schema<IUserDocument>({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
        lowercase: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [50, "Username must be less than 50 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            }
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [8, "Password must be at least 8 characters long"],
    },
}, { timestamps: true });

export const User: Model<IUserDocument> = models.User || model<IUserDocument>("User", UserSchema);  