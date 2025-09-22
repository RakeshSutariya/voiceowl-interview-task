import request from 'supertest';
import { app } from '../src/application';
import { faker } from '@faker-js/faker';
import * as transcriptionService from '../src/services/transcription.service';

describe('Transcription API (no MongoDB)', () => {

    describe('POST /api/transcription', () => {

        it('should create a new transcription', async () => {
            const fakeAudioUrl = faker.internet.url() + '/sample.mp3';

            jest.spyOn(transcriptionService, 'createTranscription').mockResolvedValue({
                _id: 'mock-id',
                audioUrl: fakeAudioUrl,
                transcription: 'transcribed text.',
                createdAt: new Date(),
            });

            const res = await request(app)
                .post('/api/transcription')
                .send({ audioUrl: fakeAudioUrl });

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('status', true);
            expect(res.body).toHaveProperty('message', 'Transcription created successfully.');
            expect(res.body.data).toHaveProperty('id', 'mock-id');
        });

        it('should fail if audioUrl is missing', async () => {
            const res = await request(app)
                .post('/api/transcription')
                .send({});

            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty('message');
            expect(res.body.message).toMatch(/audioUrl is required/);
        });

    });

});
