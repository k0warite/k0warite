#!/usr/bin/env node

const logger = require('./utils/logger');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.json());

app.get('/', (req, res) => {
    logger('Debug', `GET ${req.url}`);
    res.sendFile(path.resolve(__dirname, 'index.html'), (err) => {
        if (err) return logger('Error', err.message);
    });
});

app.get('/style.css', (req, res) => {
    logger('Debug', `GET ${req.url}`);
    res.sendFile(path.resolve(__dirname, 'style.css'), (err) => {
        if (err) return logger('Error', err.message);
    });
});

app.get('/script.js', (req, res) => {
    logger('Debug', `GET ${req.url}`);
    res.sendFile(path.resolve(__dirname, 'script.js'), (err) => {
        if (err) return logger('Error', err.message);
    });
});

app.post('/error', (req, res) => {
    logger('Error', req.body.msg);
    res.send(JSON.stringify({ message: 'Logged' }));
});

app.listen(parseInt(PORT), HOST, () => {
    logger('Info', `Development server running on port ${PORT}`);
});