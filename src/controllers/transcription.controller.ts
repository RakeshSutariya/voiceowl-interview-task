import { Request, Response } from "express";
import { CreateTranscriptionRequest, CreateTranscriptionResponse } from "../utils";
import { errorCode, messageString, responseHandler, statusCode } from "../utils";
import { TranscriptionService } from "../services";

export const TranscriptionController = {
    async TranscriptionCreate(req: Request, res: Response) {
        try {
            const body = req.body as CreateTranscriptionRequest;
            const record = await TranscriptionService.createTranscription(body.audioUrl);
            if (record && record._id) {
                let response: CreateTranscriptionResponse = { id: record._id.toString() };
                responseHandler(res, statusCode._OK, messageString.transcription._CREATED_SUCCESS, response);
            } else {
                responseHandler(res, statusCode._BAD_REQUEST, messageString.transcription._CREATE_FAILED, { code: errorCode._CREATE_FAILED });
            }
        } catch (err: any) {
            responseHandler(res, statusCode._INTERNAL_ERROR, messageString.server._INTERNAL_SERVER_ERROR, err);
        }
    }
}
