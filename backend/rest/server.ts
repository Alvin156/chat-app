import { Application } from 'express';
import applyRoutes from './functions/apply-routes';

export default class REST {
    public init(app: Application) {
        applyRoutes(app);

        const port = process.env.SERVER_PORT ?? 8080;
        console.log(port);
        const server = app.listen(port, async () => {
            console.log('Connected to port.');
            await deps.websocket.init(server);
        });
    }
}
