const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route to get all cities from a country by its ISO2 code
app.post('/getAllCitiesFromCountry/:iso2', (req, res) => {
  const iso2 = req.params.iso2;
  res.send(`Fetching cities for country with ISO2 code: ${iso2}`);
});

// Example new route
app.get('/new-route', (req, res) => {
  res.send('This is a new route!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
