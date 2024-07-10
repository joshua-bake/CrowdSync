import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: String, required: false, enum: ['admin', 'manager', 'user'], default: 'user' },
    isActive: { type: Boolean, required: false, default: true },
    isDeleted: { type: Boolean, required: false, default: false },
    createdAt: { type: Date, required: false, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now },
})

const User = models.User || model('User', UserSchema);

export default User;