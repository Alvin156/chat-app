import { Document, Schema, Types, model } from 'mongoose';
import { UserDocument } from './user';

export interface MessageDocument extends Document {
    id: string;
    createdAt: Date;
    author: UserDocument;
    content: string;
}

const messageSchema = new Schema<MessageDocument>({
    id: String,
    content: String,
    author: {
        type: Types.ObjectId,
        ref: 'users',
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default model<MessageDocument>('messages', messageSchema);
