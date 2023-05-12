import { FC } from "react";
import Image from "next/legacy/image";

// Interfaces
import { ForecastData } from "@interfaces";

// Utils
import { getIcon } from "@utils";

interface ForecastListProps {
  data?: Record<string, ForecastData>;
}

const ForecastList: FC<ForecastListProps> = ({ data }) => {
  const dataKeys = data ? Object.keys(data) : [];

  return (
    <div className="h-max max-h-full w-96 rounded-3xl bg-dark-card p-6">
      <h2 className="text-sm font-bold uppercase text-dark-label">
        pronóstico de 5 días
      </h2>
      <div className="flex flex-col justify-between">
        {data &&
          dataKeys.map((f, i) => {
            const fData = data[f];
            return (
              <div className="flex items-center justify-between" key={i}>
                <p className="text-base text-dark-label">{fData.dayName}</p>
                <div className="relative my-2 flex h-20 w-20">
                  <Image
                    src={`/images/animated/${getIcon(
                      fData.highest.weather.icon
                    )}`}
                    alt="exam"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <span className="text-base text-dark-label">
                  <span className="mr-1 font-bold text-dark-text">
                    {Math.trunc(Number(fData.highest.main.temp))}
                  </span>
                  /{Math.trunc(Number(fData.lowest.main.temp))}°
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ForecastList;
