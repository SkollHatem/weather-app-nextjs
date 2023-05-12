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
  <div className="h-60 bg-light-card rounded-3xl p-6">
    <h2 className="text-sm text-light-label font-bold uppercase">
      pronóstico de hoy
    </h2>
    <div className="flex mt-8 px-2 space-x-10">
      {data?.map((f) => (
        <div className="flex items-center flex-col" key={f.dt}>
          <p className="text-base font-bold text-light-label">
            {dayjs.unix(f.dt).format("h:mm A")}
          </p>
          <div className="flex my-2 w-16 h-16 relative">
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
