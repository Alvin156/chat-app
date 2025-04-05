import { Application } from 'express';
import { router as userRoutes } from '../routes/user-routes';

export default (app: Application) => {
    app.use(userRoutes);
};
