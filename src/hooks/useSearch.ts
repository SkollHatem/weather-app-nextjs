import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// Hooks
import useDebounce from "./useDebounce";

// Interfaces
import { WeatherData } from "@interfaces";

// Utils
import { forecastFormater } from "@utils";

const STORAGE_KEY = "/recent";

const useSearch = () => {
  // States
  const [value, setValue] = useState(process.env.NEXT_PUBLIC_INITIAL_SEARCH);
  const [response, setResponse] = useState<WeatherData>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);

  // Custom Hooks
  const debouncedValue = useDebounce(value, 1500);

  // Handlers
  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleOnSearch = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q,
            APPID: process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY,
            units: "metric",
            lang: "es",
          },
        }
      );
      const resForecast = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
            APPID: process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY,
            units: "metric",
            lang: "es",
          },
        }
      );

      setResponse({
        ...res?.data,
        weather: res?.data.weather[0],
        forecast: forecastFormater(
          resForecast.data.list.map((i: any) => ({
            ...i,
            weather: i.weather[0],
          }))
        ),
      });
      const recentData: string[] = JSON.parse(
        localStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_KEY) || "[]"
      );

      if (!recentData.includes(q)) {
        localStorage.setItem(
          process.env.NEXT_PUBLIC_STORAGE_KEY,
          JSON.stringify([...recentData, q])
        );
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  // Effects
  useEffect(() => {
    if (debouncedValue.length) {
      handleOnSearch(debouncedValue);
    }
  }, [debouncedValue, handleOnSearch]);

  return {
    data: response,
    error,
    value,
    loading,
    handleChange,
  };
};

export default useSearch;
