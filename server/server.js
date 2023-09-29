import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

// import diariesRouter from './routes/diaries.js';


const app = express();

const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
const __dirname = dirname(__filename); // Get the directory name of the current module

// To check the requested URLs.
// app.use((req, res, next) => {
//     console.log("Request URL:", req.url);
//     next();
// });

// // Explicitly serve main.js
// app.get('/public/scripts/main.js', (req, res) => {
//     const explicitPath = path.join(__dirname, '../client/public/scripts/main.js');
//     // console.log("Serving:", explicitPath);
//     res.sendFile(explicitPath);
// });

app.get('/public/scripts/:scriptName', (req, res) => {
    const scriptName = req.params.scriptName;
    const explicitPath = path.join(__dirname, `../client/public/scripts/${scriptName}`);
    
    // Optional: Check if the file exists before serving, to avoid potential errors
    if (fs.existsSync(explicitPath)) {
        res.sendFile(explicitPath);
    } else {
        res.status(404).send('Script not found.');
    }
});


// Serve static files from the client directory
app.use('/public', express.static(path.join(__dirname, '../client'))); //issue with scripts file in the public directory

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.get(['/', '/:diaryTitle'], (req, res) => {
    if(req.params.diaryTitle) {
        res.sendFile(path.join(__dirname, '../client/diary.html'));
    } else {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    }
});


// app.use('/diaries', diariesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

//404 page
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});






// Later for production use

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// // import morgan from 'morgan'; // Uncomment this if you choose to use morgan for logging

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // app.use(morgan('combined')); // Uncomment this if you choose to use morgan for logging

// // Serve static files from the client directory
// app.use('/public', express.static(path.join(__dirname, '../client')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`🚀 Server listening on http://localhost:${PORT}`);
// });

// // A better 404 page (for the sake of example)
// app.use((req, res) => {
//     res.status(404).sendFile(path.join(__dirname, '../client/404.html')); // assuming you have a 404.html in your client directory
// });
