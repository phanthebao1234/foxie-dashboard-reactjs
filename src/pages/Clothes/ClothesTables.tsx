import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import { getCategories } from "../../api/category.api";
import { getPackages } from "../../api/package.api";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export default function ClothesTables() {
  useEffect(() => {
  getCategories()
    .then((res) => {
      console.log("API RESPONSE:", res);
      console.log("DATA:", res.data);
    })
    .catch((err) => console.error(err));
}, []);
  const { data: categories, loading: cLoading } =
    useFetch(getCategories);

  const { data: packages, loading: pLoading } =
    useFetch(getPackages);

  if (cLoading || pLoading) return <p>Loading...</p>;
  return (
    <>
      <PageMeta
        title="React.js ClothesTables Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js ClothesTables Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="ClothesTables Tables" />
      <div className="space-y-6">
        <ComponentCard title="ClothesTables Table 1">
          <h1>Clothes Page</h1>
          <BasicTableOne />
        </ComponentCard>
        <ComponentCard title="ClothesTables Table 1">
          <div className="p-6">
      <h1 className="text-2xl font-bold">Foxie Studio</h1>

      {/* Categories */}
      <div className="mt-6">
        <h2 className="text-xl">Danh mục</h2>
        <div className="grid grid-cols-3 gap-4">
          {categories?.map((c: any) => (
            <div key={c.id} className="p-4 border">
              {c.name}
              {c.description}
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="mt-6">
        <h2 className="text-xl">Gói chụp</h2>
        <div className="grid grid-cols-3 gap-4">
          {packages?.map((p: any) => (
            <div key={p.id} className="p-4 border">
              <h3>{p.name}</h3>
              <p>{p.price} VNĐ</p>
            </div>
          ))}
        </div>
      </div>
    </div>
        </ComponentCard>
      </div>
    </>
  );
}
