import React, { useEffect, useState } from "react";
import WishForm from "@/pages/LandingPage/components/WishForm";
import WishList from "@/pages/LandingPage/components/WishList";
import axios from "axios";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
    const SHEET_BEST_URL = import.meta.env.VITE_SHEET_BEST_URL;
      const response = await axios.get(SHEET_BEST_URL);
      if (response.status === 200) {
        setData(response.data); // Dữ liệu trả về từ sheet.best
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Form Submission</h1>
      <WishForm fetchData={fetchData} />
      <h1 className="text-2xl font-bold mt-8 mb-4">Submitted Data</h1>
      <WishList data={data} />
    </div>
  );
}
