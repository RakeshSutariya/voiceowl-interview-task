import rateLimit from "express-rate-limit";
import { errorCode, messageString, responseHandler, statusCode } from "../utils";
import { config } from "../config";

export const expressRateLimitMiddleware = rateLimit({
    windowMs: config.expressRateLimit.windowMs,
    max: config.expressRateLimit.limit,
    handler: (req, res) => {
        responseHandler(
            res, 
            statusCode._TO_MANY_REQUEST,
            messageString.server._TOO_MANY_REQUESTS,
            { code: errorCode._TO_MANY_REQUEST }  
        );
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable `X-RateLimit-*` headers
});
