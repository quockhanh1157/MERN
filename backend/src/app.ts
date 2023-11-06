import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

import notesRouter from './routes/notes'

import morgan from 'morgan'
import createHttpError, { isHttpError } from 'http-errors';

const app = express()

app.use(morgan("dev"))

app.use(express.json())

app.use("/api/notes", notesRouter)

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMes = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMes = error.message;
    }
    res.status(statusCode).json({ error: errorMes })
})

export default app;