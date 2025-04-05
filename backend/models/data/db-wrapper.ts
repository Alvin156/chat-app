import { Document } from 'mongoose';

export default abstract class DBWrapper<K, T extends Document> {
    public abstract get(id: K | undefined): Promise<T | null | undefined>;

    save(savedType: T) {
        return savedType?.save();
    }

    async getSafely(identifier: K | undefined) {
        let document: T | undefined | null = null;
        try {
            document = await this.get(identifier);
        } finally {
            return document;
        }
    }
}
