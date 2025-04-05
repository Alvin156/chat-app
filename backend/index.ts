import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

import './modules/deps';

mongoose
    .connect(process.env.MONGODB_URL!)
    .then(() => {
        console.log('Connected to MongoDB.');

        const app = express();
        app.use(cors());
        app.use(express.json());

        deps.rest.init(app);
    })
    .catch(console.log);
