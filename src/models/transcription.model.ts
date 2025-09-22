import { Schema, model, Document } from "mongoose";

export interface ITranscription extends Document {
    audioUrl: string;
    transcription: string;
}

const transcriptionSchema = new Schema<ITranscription>({
    audioUrl: {
        type: String,
        required: true
    },
    transcription: {
        type: String, 
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export const TranscriptionModel = model<ITranscription>("Transcription", transcriptionSchema, 'transcription');
