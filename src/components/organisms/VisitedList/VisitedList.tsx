import { FC, useEffect, useState } from "react";

interface VisitedListProps {
  onClick: (value: string) => void;
  loading: boolean;
}

const VisitedList: FC<VisitedListProps> = ({ loading, onClick }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const getData = () => {
      const recentData: string[] = JSON.parse(
        localStorage.getItem(process.env.NEXT_PUBLIC_STORAGE_KEY) || "[]"
      );

      return recentData;
    };

    if (!loading) {
      setItems(getData());
    }
  }, [loading]);

  return (
    <div className="w-96 bg-light-card rounded-3xl p-6 h-max max-h-full">
      <h2 className="text-sm text-light-label font-bold uppercase">
        Busquedas recientes
      </h2>
      <div className="flex flex-col justify-between space-y-2 mt-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => onClick(item)}
            className="p-2 text-left rounded-xl hover:bg-light-bg"
          >
            <span className="text-base text-light-label">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VisitedList;
