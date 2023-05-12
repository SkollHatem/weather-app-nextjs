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
    <div className="w-96 bg-light-card rounded-3xl p-6 h-max max-h-full">
      <h2 className="text-sm text-light-label font-bold uppercase">
        pronóstico de 5 días
      </h2>
      <div className="flex flex-col justify-between">
        {data &&
          dataKeys.map((f, i) => {
            const fData = data[f];
            return (
              <div className="flex items-center justify-between" key={i}>
                <p className="text-base text-light-label">{fData.dayName}</p>
                <div className="flex my-2 w-20 h-20 relative">
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
                <span className="text-base text-light-label">
                  <span className="font-bold text-light-text mr-1">
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
