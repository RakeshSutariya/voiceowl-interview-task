import joi from 'joi';
import { CreateTranscriptionRequest } from './constants.utils';

export const createTranscriptionSchema = joi.object<CreateTranscriptionRequest>({
    audioUrl: joi
        .string()
        .uri()
        .pattern(/\.(mp3|wav|m4a|aac|ogg)$/i) // only allow audio file extensions
        .required()
        .messages({
            "any.required": `"audioUrl" is required`,
            "string.empty": `"audioUrl" cannot be empty`,
            "string.uri": `"audioUrl" must be a valid URL`,
            "string.pattern.base": `"audioUrl" must be a valid audio file link (.mp3, .wav, .m4a, .aac, .ogg)`,
        }),
});
