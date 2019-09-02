const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./db');

//Connect to DB
connectDB();

// Routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tournaments', require('./routes/tournaments'));
app.use('/api/seasons', require('./routes/seasons'));
app.use('/api/matches', require('./routes/matches'));

// Serve static assets in production - USED FOR HEROKU DEPLOYMENT
if ((process.env.NODE_ENV = 'production')) {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port: ' + PORT));
