import React from 'react';
import './Recommendations.css';

const Recommendations = ({ data }) => {
  let recommendation = '';
  let reason = '';

  switch (data.weather[0].main) {
    case 'Rain':
    case 'Drizzle':
      recommendation = 'Bring an umbrella.';
      reason = 'Rain or drizzle can make you wet and uncomfortable, potentially leading to hypothermia in cold conditions.';
      break;
    case 'Thunderstorm':
      recommendation = 'Stay indoors.';
      reason = 'Lightning in thunderstorms can be dangerous. The National Weather Service advises to stay indoors for at least 30 minutes after the last thunder clap.';
      break;
    case 'Snow':
      recommendation = 'Wear warm clothes.';
      reason = 'Snow can lower body temperature. Wearing layers can help maintain body heat and prevent hypothermia.';
      break;
    case 'Mist':
    case 'Fog':
    case 'Haze':
    case 'Smoke':
    case 'Dust':
    case 'Sand':
    case 'Ash':
      recommendation = 'Be careful when driving.';
      reason = 'These conditions can significantly reduce visibility, increasing the risk of accidents. The National Highway Traffic Safety Administration recommends turning on your headlights and slowing down.';
      break;
    case 'Squall':
    case 'Tornado':
      recommendation = 'Seek shelter.';
      reason = 'Squalls and tornadoes can cause severe damage. The Centers for Disease Control and Prevention recommends going to a small, windowless, interior room on the lowest level of your house.';
      break;
    case 'Clear':
      recommendation = 'Wear sunscreen.';
      reason = 'Sunlight contains harmful UV rays that can cause skin damage and cancer. The American Cancer Society recommends using a broad spectrum sunscreen with at least SPF 30.';
      break;
    case 'Clouds':
      recommendation = 'The weather seems to be mild.';
      reason = 'Cloudy weather is generally considered comfortable for most people.';
      break;
    default:
      recommendation = 'Check the weather before you go.';
      reason = 'Weather conditions can change rapidly, and being unprepared can lead to health and safety risks.';
  }

  if (data.main.temp < 20) {
    recommendation += '\n It might be a bit chilly, consider wearing warmer clothes.';
    reason += '\n The temperature is below 20 degrees Celsius, which may feel cool.';
  } else if (data.main.temp > 30) {
    recommendation += '\n It\'s quite hot, consider wearing light clothes.';
    reason += '\n The temperature is above 30 degrees Celsius, which can be uncomfortable for many people.';
  }

  if (data.wind.speed > 10) {
    recommendation += '\n It\'s also quite windy, consider wearing a windbreaker.';
    reason += '\n High wind speeds can make the weather feel colder and can be uncomfortable.';
  }

  if (data.main.humidity > 80) {
    recommendation += '\n The humidity is high, consider wearing breathable clothes.';
    reason += '\n High humidity can make the weather feel hotter and can be uncomfortable.';
  }

  return (
    <div className="recommendations">
      <div className="title-container">
        <h2 className="title">Travel Recommendations</h2>
        <img src="/icons/info_circle.png" alt="info_circle" className="info_circle" />
      </div>
      <p>{recommendation}</p>
      <p>{reason}</p>
    </div>
  );
}

export default Recommendations;