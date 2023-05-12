const CODES: Record<string, string> = {
  "01d": "day.svg",
  "02d": "cloudy-day-1.svg",
  "03d": "cloudy-day-3.svg",
  "04d": "cloudy.svg",
  "09d": "rainy-5.svg",
  "10d": "rainy-6.svg",
  "11d": "thunder-6.svg",
  "13d": "snowy-5.svg",
  "01n": "night.svg",
  "02n": "cloudy-night-1.svg",
  "03n": "cloudy-night-3.svg",
  "04n": "cloudy.svg",
  "09n": "rainy-5.svg",
  "10n": "rainy-6.svg",
  "11n": "thunder-6.svg",
  "13n": "snowy-5.svg",
};

const getIcon = (code: string) => {
  const fileName = CODES[code];

  return fileName;
};

export default getIcon;
