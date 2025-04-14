//imports express libraries
import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

dotenv.config();

//Creates an express app and assigns it to app variable
const app = express();

const port = process.env.PORT || 5001;

// Configure Helmet with proper CORS policy
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:3000'], // Allow both Angular and React app URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/assets', express.static(path.join(__dirname, '../public')));

if (process.env.NODE_ENV === 'development') {
  app.use(logger);
}

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to the Music API</h1>');
});

app.use('/', [albumsRouter, artistsRouter]);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//This method binds the app with the specified port(3000) to listen for any connections.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});