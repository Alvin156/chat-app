import DBWrapper from './db-wrapper';
import Message, { MessageDocument } from '../schema/message';
import { Params } from '../../types/api';

export default class Messages extends DBWrapper<string, MessageDocument> {
    public async get(id: string | undefined): Promise<MessageDocument | null> {
        return (await Message.findOne({ id })) ?? null;
    }

    public async create({
        content,
        author,
    }: Params.Message): Promise<MessageDocument | null> {
        return await Message.create({
            content,
            author: await deps.users.secure(author),
        });
    }
}
