import express from 'express';
import cors from 'cors';

import './modules/deps';

const app = express();
app.use(cors());

deps.rest.init(app);
