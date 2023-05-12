import { FC } from "react";
import Image from "next/legacy/image";
import dayjs from "dayjs";

// Interfaces
import { WeatherDataWithoutForecast } from "@interfaces";

// Utils
import { getIcon } from "@utils";

interface TodayForecastListProps {
  data?: WeatherDataWithoutForecast[];
}

const TodayForecastList: FC<TodayForecastListProps> = ({ data }) => (
  <div className="h-60 rounded-3xl bg-light-card p-6">
    <h2 className="text-sm font-bold uppercase text-light-label">
      pronóstico de hoy
    </h2>
    <div className="mt-8 flex space-x-10 px-2">
      {data?.map((f) => (
        <div className="flex flex-col items-center" key={f.dt}>
          <p className="text-base font-bold text-light-label">
            {dayjs.unix(f.dt).format("h:mm A")}
          </p>
          <div className="relative my-2 flex h-16 w-16">
            <Image
              src={`/images/animated/${getIcon(f.weather.icon)}`}
              alt="exam"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <span className="text-2xl font-bold text-light-text">
            {Math.trunc(Number(f.main.temp))}°
          </span>
        </div>
      ))}
    </div>
  </div>
);
export default TodayForecastList;
