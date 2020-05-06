// set up dependencies
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const cors = require('cors');

// import data
const data = require('./data/weather.json');
// hardcoded until we get the API stuff working

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

app.get('/location', (req, res) => {
  console.log(`you've reached /location!`);
  res.json(
    {
      formatted_query: 'Seattle, WA, USA',
      latitude: '47.606210',
      longitude: '-122.332071',
    },
  );
});

app.listen(PORT, () => { console.log(`hello from port ${PORT}`); })