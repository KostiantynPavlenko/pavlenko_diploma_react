const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/destinations', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

  res.json(db.destination);
});

app.get('/hotels', (req, res) => {
  const { limit = 16, page = 0 } = req.query;

  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

  const start = Number(page) * Number(limit);
  const end = start + Number(limit);
  const hotels = db.hotels.slice(start, end);

  res.json({
    hotels,
    total: db.hotels.length,
  });
});

app.get('/hotels/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  const hotel = db.hotels.find(hotel => hotel.id === parseInt(req.params.id));

  if(!hotel) return res.status(404).json({message: 'Hotel not found'});

  res.json(hotel);
})

app.post('/search', (req, res) => {
  const { destinationId, limit = 20, page = 0} = req.body;

  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  const destination = db.destination.find(d => d.id === destinationId);

  if(!destination) return res.status(404).json({message: 'Destination not found'});

  const filteredHotels = db.hotels.filter((hotel) => {
    return hotel.city === destination.label;
  })

  const paginatedHotels = filteredHotels.slice(page, page + limit);

  res.json({
    hotels: paginatedHotels,
    total: filteredHotels.length,
  });
});

app.listen(PORT, () => {});
