import express, { Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
// import { startDatabase } from './db_connection';
import { expressMiddleware, expressRateLimitMiddleware } from './middlewares';
import { transcriptionRoutes } from "./routes";

const app = express();

app.use(
    bodyParser.json({
        limit: '50mb',
        type: 'application/json',
    }),
);

app.use(
    bodyParser.urlencoded({
        limit: '200mb',
        extended: true,
        parameterLimit: 50000,
    }),
);
app.use(cors());
app.use(expressMiddleware);
app.use(expressRateLimitMiddleware);

app.use(clientErrorHandler)
app.use(errorHandler)


function clientErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something wrong..!!!.Please try after some time.' })
    } else {
        next(err)
    }
}
function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(500)
    res.render('error', { error: err })
}

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}

// startDatabase()

app.use("/api", transcriptionRoutes);

export { app };
