import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import notesRouter from './routes/notesRoutes.js';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use(notesRouter);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);
const setupServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

setupServer();
