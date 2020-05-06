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
  console.log('you\'ve reached /location!');
  res.json(
    {
      formatted_query: 'Seattle, WA, USA',
      latitude: '47.606210',
      longitude: '-122.332071',
    },
  );
});

app.get('/weather', (req, res) => {
  console.log('you\'ve reached /weather!');
  // try {
    res.json(
      [{
        forecast: 'Partly cloudy until afternoon.',
        time: 'Mon Jan 01 2001',
      },
      {
        forecast: 'Mostly cloudy in the morning.',
        time: 'Tue Jan 02 2001',
      }],
    );}
//   } catch (e) {
//     console.error(e);

//     res.json({
//       status: 500,
//       responseText: e,

//     });
//   }
// });

// wildstar matches ANYTHING
app.get('*', (req, res) => {
  // req will have query parameters and some user data

  // res.json is like the RETURN statement
  res.status(404).json({
    error: 'no such route!',
  });
});

app.listen(PORT, () => { console.log(`hello from port ${PORT}`); });
