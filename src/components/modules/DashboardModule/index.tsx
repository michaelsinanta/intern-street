"use client";
import { InternCard } from "@/components/elements";
import { InternProps } from "@/components/elements/InternCard/interface";
import { InternModal } from "@/components/elements/InternModal";
import { Pagination } from "@mui/material";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [bookmarks, setBookmarks] = useState<InternProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [brandNameFilter, setBrandNameFilter] = useState<string>("");
  const pageSize: number = 9;

  useEffect(() => {
    const fetchBookmarks = async () => {
      const savedBookmarks = JSON.parse(
        localStorage.getItem("bookmarks") || "[]",
      );
      setBookmarks(savedBookmarks);
    };

    fetchBookmarks();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    pageNumber: number,
  ) => {
    setCurrentPage(pageNumber);
  };

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      bookmark.mitra_brand_name
        .toLowerCase()
        .includes(brandNameFilter.toLowerCase()),
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageBookmarks = filteredBookmarks.slice(startIndex, endIndex);

  const debouncedNameFilter = useDebounce(nameFilter, 500);
  const debouncedBrandNameFilter = useDebounce(brandNameFilter, 500);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedNameFilter, debouncedBrandNameFilter]);

  return (
    <>
      <main className="flex flex-col overflow-y-scroll h-screen bg-[#E24E42] w-full  p-[4vw] items-center">
        <h2 className="text-center font-bold text-white text-4xl mb-5">
          Bookmarked Internship
        </h2>

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
        </div>
        {currentPageBookmarks.length === 0 ? (
          <h3 className="text-white">It&apos;s empty</h3>
        ) : (
          <div className="w-full text-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-4">
            {currentPageBookmarks.map((intern) => (
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
            count={Math.ceil(filteredBookmarks.length / pageSize)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </main>
      <InternModal />
    </>
  );
}
