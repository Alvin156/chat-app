import { UpdateQuery } from 'mongoose';
import User, { UserDocument } from '../schema/user';
import DBWrapper from './db-wrapper';
import argon2 from 'argon2';
import { Params } from '../../types/api';
import jwt from 'jsonwebtoken';

export default class Users extends DBWrapper<string, UserDocument> {
    public async get(id: string | undefined): Promise<UserDocument | null> {
        return (await User.findOne({ id })) ?? null;
    }

    public async getByEmail(
        email: string | undefined
    ): Promise<UserDocument | null> {
        const user = await User.findOne({ email });
        if (!user) return null;

        return user;
    }

    public async updateById(
        id: string | undefined,
        updatedUser: UpdateQuery<UserDocument>
    ) {
        const user = await User.updateOne({ id }, updatedUser);
        return user.acknowledged;
    }

    public async validatePassword(
        user: UserDocument,
        password: string | undefined
    ): Promise<boolean> {
        return await argon2.verify(user.password, password ?? '');
    }

    public async createUser(data: Params.User): Promise<UserDocument> {
        const password = await argon2.hash(data.password);
        return await User.create({ ...data, password, createdAt: new Date() });
    }

    public async createToken(user: UserDocument): Promise<string> {
        return await jwt.sign(
            { user: this.secure(user) },
            process.env.JWT_TOKEN!,
            {
                expiresIn: '10 minutes',
            }
        );
    }

    public async verifyToken(token: string): Promise<any> {
        const decoded = (await jwt.verify(token, process.env.JWT_TOKEN!, {
            algorithms: ['RS256'],
        })) as { user: Params.User };
        return decoded?.user._id;
    }

    public secure(user: UserDocument) {
        const u = user as any;
        delete u.email;
        delete u.password;

        return u;
    }
}
