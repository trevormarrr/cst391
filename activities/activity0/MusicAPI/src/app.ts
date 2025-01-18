// Importing the from the express library
import express, { Request, Response } from 'express';

// Create an instance of the Express
const app = express();

// Defining the port number
const port = 3000;

// Set up a route handler for GET requests
app.get('/', (req: Request, res: Response) => {
  
  // Send a simple response with the text 'Hello World from TypeScript!'
  // This will be sent back to the client as the HTTP response
  res.send('Hello World from TypeScript!');
});

// Make the server listen on the defined port (3000)
app.listen(port, () => {

  // Print a message in the console confirming the server is running
  console.log(`Example app listening at http://localhost:${port}`);
});
