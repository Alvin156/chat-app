import { Document, Schema, model } from 'mongoose';

export interface UserDocument extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const userSchema = new Schema<UserDocument>({
    id: String,
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default model<UserDocument>('users', userSchema);
