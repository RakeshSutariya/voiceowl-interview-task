import axios from "axios";
import { TranscriptionModel } from "../models";

async function retry<T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> {
    let lastError: any;
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            if (i < retries - 1) {
                // wait before retrying
                await new Promise((res) => setTimeout(res, delay));
            }
        }
    }
    throw lastError;
}

export const createTranscription = async (audioUrl: string) => {
    await retry(async () => {
        console.log(`Downloading: ${audioUrl}...`);
        const response = await axios.get(audioUrl, { responseType: "stream" });
        if (response.status !== 200) throw new Error("Download failed");
    });

    const transcription = "transcribed text.";
    const record = await TranscriptionModel.create({
      audioUrl,
      transcription
    });
    // Mock saving to DB (just return a fake record)
    // const record = {
    //   _id: Date.now().toString(), // unique mock ID
    //   audioUrl,
    //   transcription,
    //   createdAt: new Date(),
    // };
    if(record){
        return record;
    }else{
        return "";
    }
}
