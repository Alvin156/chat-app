import { Application } from 'express';
import applyRoutes from './functions/apply-routes';


export default class Rest {
    public init(app: Application) {

        applyRoutes(app);

        const server = app.listen(3001, async () => {
            console.log('Connected to port.');
            await deps.websocket.init(server);
        });
    }
}