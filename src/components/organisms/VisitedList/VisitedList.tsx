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
    <div className="h-max max-h-full w-96 rounded-3xl bg-dark-card p-6">
      <h2 className="text-sm font-bold uppercase text-dark-label">
        Busquedas recientes
      </h2>
      <div className="mt-2 flex flex-col justify-between space-y-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => onClick(item)}
            className="rounded-xl p-2 text-left hover:bg-dark-bg"
          >
            <span className="text-base text-dark-label">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VisitedList;
