"use client";
import React, { useEffect, useState } from "react";
import { InternCard } from "@/components/elements/InternCard";
import { InternProps } from "@/components/elements/InternCard/interface";
import { Pagination } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";
import CircularProgress from "@mui/material/CircularProgress";
import { InternModal } from "@/components/elements/InternModal";

async function getData(): Promise<InternProps[]> {
  const res = await fetch(
    `https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/opportunities?opportunity_type=MSIB&activity_type=`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export default function InternPage() {
  const [interns, setInterns] = useState<InternProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [brandNameFilter, setBrandNameFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");
  const pageSize: number = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        const savedBookmarks = JSON.parse(
          localStorage.getItem("bookmarks") || "[]",
        );
        const updatedInterns = response.map((intern) => ({
          ...intern,
          isBookmarked: savedBookmarks.some(
            (bookmark: InternProps) => bookmark.id === intern.id,
          ),
        }));
        setInterns(updatedInterns);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number,
  ) => {
    setCurrentPage(pageNumber);
  };

  const filteredInterns = interns.filter(
    (intern) =>
      intern.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      intern.mitra_brand_name
        .toLowerCase()
        .includes(brandNameFilter.toLowerCase()) &&
      intern.location.toLowerCase().includes(locationFilter.toLowerCase()),
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageInterns = filteredInterns.slice(startIndex, endIndex);

  const debouncedNameFilter = useDebounce(nameFilter, 500);
  const debouncedBrandNameFilter = useDebounce(brandNameFilter, 500);
  const debouncedLocationFilter = useDebounce(locationFilter, 500);

  useEffect(() => {
    console.log("Filters changed, resetting page");
    setCurrentPage(1);
  }, [debouncedNameFilter, debouncedBrandNameFilter, debouncedLocationFilter]);

  return (
    <>
      <main className="flex flex-col overflow-y-scroll h-screen bg-[#E24E42] w-full  p-[4vw] items-center">
        <h2 className="text-center font-bold text-white text-4xl mb-1">
          Find Your Dream Internship
        </h2>
        <p className="text-center text-white font-bold italic mb-5 ">
          Access the MSIB Kemdikbud 2024 with better UI and multiple sorting,
          view and bookmark detailed cards, and monitor saved items on the
          dashboard.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Filter by Name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Filter by Brand Name"
            value={brandNameFilter}
            onChange={(e) => setBrandNameFilter(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Filter by Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {currentPageInterns.length === 0 ? (
          <CircularProgress color="inherit" />
        ) : (
          <div className="w-full text-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4">
            {currentPageInterns.map((intern) => (
              <InternCard key={intern.id} intern={intern} />
            ))}
          </div>
        )}

        <div className="fixed bottom-10 bg-white px-4 py-2">
          {" "}
          <Pagination
            sx={{
              button: { color: "#000000" },
              backgroundColor: "#ffffff",
              borderRadius: "8px",
            }}
            count={Math.ceil(filteredInterns.length / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </main>
      <InternModal/>
    </>
  );
}
