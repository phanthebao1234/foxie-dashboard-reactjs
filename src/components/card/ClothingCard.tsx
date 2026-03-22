import { useState } from "react";

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

export default function ClothingCard({ product }: { product: ClothingResponse }) {
  const [activeImage, setActiveImage] = useState(0);

  const statusColor: Record<string, string> = {
    available: "bg-green-100 text-green-600",
    rented: "bg-yellow-100 text-yellow-600",
    maintenance: "bg-red-100 text-red-600",
  };
  
  const statusText: Record<string, string> = {
    available: "Có sẵn",
    rented: "Đã cho thuê",
    maintenance: "Đang bảo trì",
  };

  const images = product.images_data || [];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          src={images[activeImage]?.image_url || "/no-image.png"}
          alt={product.code}
          className="w-full aspect-[3/4] object-cover"
        />

        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-medium ${
            statusColor[product.status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {statusText[product.status]}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.image_url}
            onClick={() => setActiveImage(index)}
            className={`w-14 h-20 object-cover rounded-lg cursor-pointer border-2 ${
              activeImage === index
                ? "border-black"
                : "border-transparent opacity-70"
            }`}
          />
        ))}
      </div>

      {/* Info */}
      <div className="px-4 pb-4 space-y-2 text-center">
        <div>
          <h3 className="font-semibold text-lg">
            {product.category?.name}
          </h3>
          <p className="text-sm text-gray-500">
            Mã: {product.code}
          </p>
        </div>

        <div className="flex justify-between text-sm">
          <span>🎨 {product.color}</span>
          <span>📏 {product.size}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xl font-bold text-pink-600">
            <span className="text-blue-500">Giá thuê:</span> {Number(product.rental_price).toLocaleString()}đ
          </p>

          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}