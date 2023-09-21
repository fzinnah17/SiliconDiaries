import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
const __dirname = dirname(__filename); // Get the directory name of the current module

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

//404 page
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});
