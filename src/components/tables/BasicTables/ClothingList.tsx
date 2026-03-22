import { useEffect, useState } from "react";
import ClothingCard from "../../card/ClothingCard";
import axios from "axios";

interface ClothingResponse {
  id: number;
  code: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  color: string;
  size: string;
  material: string;
  rental_price: string;
  status: string;
  description: string;
  images_data: {
    id: number;
    image: string;
    image_url: string;
  }[];
}

export default function ClothingList() {
  const [data, setData] = useState<ClothingResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/clothings/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Đang tải...</p>;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <ClothingCard key={item.id} product={item} />
      ))}
    </div>
  );
}