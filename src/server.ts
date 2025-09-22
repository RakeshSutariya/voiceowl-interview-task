import { app } from './application';
import { config } from './config';
import { startDatabase } from './db_connection';

export const startServer = () => {
  startDatabase();
  const server = app.listen(config.server.port, config.server.host, (err) => {
    if (err) {
        console.error("Server running error", err);
    }
    console.log(`🚀 Server running at http://${config.server.host}:${config.server.port}`);
  });
  return server;
};

startServer();