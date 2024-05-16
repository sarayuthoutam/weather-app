import { useState } from 'react';
import CityModal from '../components/CityModal.js';
import axios from 'axios';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleCitySubmit = async (city) => {
  try {
    const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=caQcNubrJL02doaHdlmNZx8gg2KTgTEe`);
    setWeather(response.data);
  } catch (err) {
    setError('Could not fetch weather data. Please try again.');
  }
};

  

  return (
    <div>
      {showModal && <CityModal onClose={() => setShowModal(false)} onCitySubmit={handleCitySubmit} />}
      <h1>Home Page</h1>
      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}K</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;