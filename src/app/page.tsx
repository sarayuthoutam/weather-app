"use client";
import { useState } from 'react';
import CityModal from '../../components/CityModal';
import axios from 'axios';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [weather, setWeather] = useState<any>(null);  // Use any for simplicity, or define a proper type
  const [error, setError] = useState<string | null>(null);

  const handleCitySubmit = async (city: string) => {
    try {
      const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
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
