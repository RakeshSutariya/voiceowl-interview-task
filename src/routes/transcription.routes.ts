import { Router } from "express";
import { TranscriptionController } from "../controllers";
import { ValidationMiddleware } from "../middlewares";
import { createTranscriptionSchema } from "../utils";

const transcriptionRoutes = Router();

transcriptionRoutes.post("/transcription", ValidationMiddleware(createTranscriptionSchema), TranscriptionController.TranscriptionCreate);

export default transcriptionRoutes;