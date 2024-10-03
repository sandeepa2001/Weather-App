// utils/getWeatherBackground.ts

export function getWeatherBackground(weather: string | undefined): string {
    if (!weather) return "bg-gray-100"; // Default background for loading or unknown
  
    const lowerCaseWeather = weather.toLowerCase();
  
    if (lowerCaseWeather.includes("clear")) {
      return "bg-blue-400"; // Clear sky (sunny day)
    } else if (lowerCaseWeather.includes("clouds")) {
      return "bg-gray-400"; // Cloudy weather
    } else if (lowerCaseWeather.includes("rain")) {
      return "bg-blue-700"; // Rainy weather
    } else if (lowerCaseWeather.includes("snow")) {
      return "bg-white"; // Snowy weather
    } else if (lowerCaseWeather.includes("thunderstorm")) {
      return "bg-purple-800"; // Thunderstorm
    } else {
      return "bg-gray-500"; // Fallback for other weather conditions
    }
  }
  