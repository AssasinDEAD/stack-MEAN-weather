require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
console.log(apiKey);


app.use(cors());
app.use(express.json());

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const response = await axios.get(`${apiUrl}?appid=${apiKey}&units=metric&q=${city}`);
    console.log(response.data);
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
