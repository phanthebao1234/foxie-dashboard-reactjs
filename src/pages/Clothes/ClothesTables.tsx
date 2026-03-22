import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

import { getCategories } from "../../api/category.api";

import { useEffect } from "react";

import { getClothings } from "../../api/clothing.api";
import ClothingTable from "../../components/tables/BasicTables/ClothingList";

export default function ClothesTables() {
  // Test
  useEffect(() => {
  getCategories()
    .then((res) => {
      console.log("API RESPONSE:", res);
      console.log("DATA:", res.data);
    })
    .catch((err) => console.error(err));
}, []);

  // Fetch API Clothing
  useEffect(() => {
    getClothings()
      .then((res) => {
        console.log("API RESPONSE Clothing:", res);
        console.log("DATA Clothing:", res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <PageMeta
        title="Clothes Tables Dashboard | FoxieStudio Admin Dashboard"
        description="This is Clothes Tables Dashboard page for FoxieStudio - Admin Dashboard "
      />
      <PageBreadcrumb pageTitle="Trang phục" />
      <div className="space-y-6">
        <ComponentCard title="Tất cả trang phục" >
          <ClothingTable />
        </ComponentCard>
      </div>
    </>
  );
}
