# VoiceOwl Transcription Service

## Overview

```bash
A minimal Node.js + TypeScript API that accepts an audio file URL, mocks transcription, and stores results in MongoDB.
```

## Features

```bash
    - POST /transcription — submit an audio file URL and receive a transcription ID
    - MongoDB integration to store audio URLs, transcriptions, and timestamps
    - Retry mechanism for downloading audio files
    - Request validation using Joi
```

## Node Version

```bash
22.11.0
```

## NPM Version

```bash
10.9.0
```

## .env File Setup

```bash
    - Create a new file named .env in the root directory of your project.
    - Open the existing simple_env file.
    - Copy all the contents from simple_env.
    - Paste the copied content into the newly created .env file.
    - Save the .env file.
```

## Setup Instructions

Commands :
```bash
npm install
```

## Run Project

Commands :
```bash
npm run dev       # for development with nodemon
npm start         # for production build
```

## Run Test Cases

Commands :
```bash
npm run test
```

## Description of Task Logic

```bash
    * Transcription Flow:
        1. Receive POST request with JSON body { "audioUrl": "https://example.com/sample.mp3" }
        2. Validate the request using Joi to ensure a valid audio URL.
        3. Download the audio file (mocked in the demo).
        4. Retry up to 3 times if download fails.
        5. Generate a dummy transcription, e.g., "transcribed text".
        6. Save audioUrl, transcription, and createdAt timestamp into MongoDB.
        7. Return the MongoDB record’s _id as the response.

    * Assumptions:
        - Audio download and transcription are mocked for demo purposes.
        - Only basic validation and storage are implemented.
        - Real transcription services would require external APIs or ML models.
```

## Explanation of any assumptions or tradeoffs

```bash
    1. Simplified transcription logic to focus on backend structure, TypeScript types, validation, and MongoDB integration.
    2. Retry mechanism implemented for robustness in file download.
    3. Tradeoff: No actual audio processing, so the transcription is always mocked.
```