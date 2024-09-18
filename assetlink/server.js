const express = require('express');
const path = require('path');
const app = express();

// Statische bestanden voor de hoofdmap
app.use(express.static(path.join(__dirname)));

// Statische bestanden voor de engineering map
app.use('/engineering', express.static(path.join(__dirname, '..', 'engineering')));

// Statische bestanden voor de engineering map
app.use('/software', express.static(path.join(__dirname, '..', 'software')));

// Hoofdroute
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Engineering route
app.get('/engineering', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'engineering', 'index.html'));
});

app.get('/software', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'software', 'index.html'));
});

// Voeg een catch-all route toe voor engineering subpagina's
app.get('/engineering/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'engineering', 'index.html'));
});

// 404 foutafhandeling
app.use((req, res) => {
    res.status(404).send('Pagina niet gevonden');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});