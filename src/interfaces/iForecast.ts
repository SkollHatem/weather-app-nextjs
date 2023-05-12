export interface WeatherData {
  name: string;
  dayName?: string;
  dt: number;
  sys: {
    country: string;
  };
  main: {
    temp: string;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    icon: string;
    description: string;
  };
  wind: {
    speed: number;
  };
  forecast: {
    today: WeatherDataWithoutForecast[];
    week: Record<string, ForecastData>;
  };
}

export type WeatherDataWithoutForecast = Omit<WeatherData, "forecast">;

export interface ForecastData {
  dayName: string;
  lowest: WeatherDataWithoutForecast;
  highest: WeatherDataWithoutForecast;
}
