import { useEffect, useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import {
  getClothingCategories,
  createClothing,
} from "../../api/clothing.api";

interface Category {
  id: number;
  name: string;
}

export default function ClothesNew() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    code: "",
    category_id: "",
    color: "",
    size: "",
    material: "",
    rental_price: "",
    status: "available",
    description: "",
  });

  const [images, setImages] = useState<File[]>([]);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>({});

  // 📡 load category
  useEffect(() => {
    getClothingCategories()
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  // 🧠 handle change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📸 append ảnh
  const handleImageChange = (e: any) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...(files as File[])]);
  };

  // ❌ xoá ảnh
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // ✅ validate
  const validate = () => {
    let err: any = {};

    if (!form.code) err.code = "Bắt buộc";
    if (!form.category_id) err.category_id = "Chọn loại";
    if (!form.color) err.color = "Nhập màu";
    if (!form.size) err.size = "Nhập size";
    if (!form.rental_price) err.rental_price = "Nhập giá";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🚀 submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await createClothing(formData);

      alert("Tạo thành công 🎉");

      // reset
      setForm({
        code: "",
        category_id: "",
        color: "",
        size: "",
        material: "",
        rental_price: "",
        status: "available",
        description: "",
      });
      setImages([]);

    } catch (err: any) {
      console.error(err.response?.data);
      alert("Lỗi xác thực hoặc dữ liệu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ComponentCard>
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Thêm trang phục</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <Label>Code</Label>
          <Input name="code" onChange={handleChange} />
          {errors.code && <p className="text-red-500">{errors.code}</p>}

          <select name="category_id" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">-- Chọn loại --</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-2">
            <Input name="color" placeholder="Màu" onChange={handleChange} />
            <Input name="size" placeholder="Size" onChange={handleChange} />
          </div>

          <Input name="material" placeholder="Chất liệu" onChange={handleChange} />

          <Input name="rental_price" type="number" placeholder="Giá" onChange={handleChange} />

          <textarea name="description" className="w-full border p-2 rounded" onChange={handleChange} />

          <input type="file" multiple onChange={handleImageChange} />

          {/* Preview */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((file, i) => (
              <div key={i} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  onClick={() => setPreviewIndex(i)}
                  className="w-24 h-32 rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-black text-white w-6 h-6 rounded-full"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded"
          >
            {loading ? "Đang tạo..." : "Tạo trang phục"}
          </button>
        </form>
      </div>
    </ComponentCard>
  );
}