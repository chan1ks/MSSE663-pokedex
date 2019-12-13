import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import cors = require('cors');
import mongoose = require('mongoose');
import { database } from './config/database.config';
import { router } from './routes/pokemon.routes';

// Database connection using mongoose
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// On Connection
db.on('connected', () => {
  console.log('Connected to Database ' + database);
});
// On Error
db.on('error', err => {
  console.log('Database Connection Error ' + err);
});

const app = express();

// Port Number
const port = process.env.PORT || 9081;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/pokedex', router);

// Index Route
app.get('/', (req, res) => {
  res.send('Not authorized to view this page!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
