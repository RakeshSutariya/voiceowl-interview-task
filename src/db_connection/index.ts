// import mongoose from 'mongoose';
// import { config } from '../config';

// export const startDatabase = () => {
//   const URL = `mongodb://${config.database.userName}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.dbName}`;

//   mongoose
//     .connect(URL)
//     .then(() => console.log("Database connection successfully."))
//     .catch((err) => console.log("Database connection failed", JSON.stringify(err, null, 2)));
// };