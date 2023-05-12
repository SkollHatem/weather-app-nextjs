import dayjs from "dayjs";

// Interfaces
import { ForecastData, WeatherDataWithoutForecast } from "@interfaces";

const forecastFormater = (data: WeatherDataWithoutForecast[]) => {
  const today = dayjs().format("DD/MM/YYYY");
  const orderedData: Record<string, WeatherDataWithoutForecast[]> = {};

  const forecastData: Record<string, ForecastData> = {};

  data.forEach((f) => {
    const formatedDate = dayjs.unix(f.dt).format("DD/MM/YYYY");
    const prevData = orderedData[formatedDate];
    if (prevData) {
      orderedData[formatedDate] = [...prevData, f];
    } else {
      orderedData[formatedDate] = [f];
    }
  });

  Object.keys(orderedData)
    .splice(1)
    .forEach((f) => {
      const keyData = orderedData[f];
      const dayName = dayjs.unix(keyData[0].dt).format("dddd");
      const highest = keyData.reduce((p: any, c: any) => {
        return c.dt > p.dt ? c : p;
      });

      const lowest = keyData.reduce((p: any, c: any) => {
        return c.dt < p.dt ? c : p;
      });

      forecastData[f] = { lowest, highest, dayName };
    });

  const todayData = orderedData[today];

  return {
    today: todayData,
    week: forecastData,
  };
};

export default forecastFormater;
