import { FC } from "react";
import Image from "next/legacy/image";

// Interfaces
import { WeatherData } from "@interfaces";

// Utils
import { getIcon } from "@utils";

interface WeatherHeroProps {
  data?: WeatherData;
}

const WeatherHero: FC<WeatherHeroProps> = ({ data }) => (
  <div className="flex-1 flex flex-row justify-between items-center px-10">
    <div className="flex flex-col justify-between">
      <div className="flex flex-col space-y-2">
        <h1 className="text-5xl font-bold text-light-text">
          {data?.name}, <span>{data?.sys.country}</span>
        </h1>
        <p className="text-base text-light-label">
          {data?.weather.description}
        </p>
      </div>
      <span className="text-6xl font-bold mt-10 text-light-text">
        {data?.main.temp && `${Math.trunc(Number(data?.main.temp))}°`}
      </span>
    </div>
    {data?.weather.icon && (
      <Image
        src={`/images/animated/${getIcon(data.weather.icon)}`}
        alt="exam"
        width={240}
        height={240}
        priority
      />
    )}
  </div>
);

export default WeatherHero;