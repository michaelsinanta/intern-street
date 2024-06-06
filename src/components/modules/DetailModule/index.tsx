"use client";
import { useEffect, useState } from "react";
import { InternDetails } from "@/components/elements/InternModal/interface";
import { Button } from "@/components/elements";
import Link from "next/link";

export default function DetailsPage({ data }: { data: InternDetails }) {
  const [internDetails, setInternDetails] = useState<InternDetails | null>(
    null,
  );

  useEffect(() => {
    setInternDetails(data);
  }, [data]);

  return (
    <main className="flex flex-col overflow-y-scroll h-screen bg-[#E24E42] w-full p-[4vw]">
      <div className="flex justify-between items-center flex-row h-fit mb-5">
        <h2 className="flex text-left font-bold text-white text-2xl">
          {internDetails?.name || "No Title Available"}
        </h2>

        <Link
          href={`https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/${data.activity_id.mitra_id}/${data.id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant={"white"} size={"md"} onClick={() => {}}>
            <p>Daftar Magang</p>
          </Button>
        </Link>
      </div>

      {internDetails && (
        <>
          <p className="text-left text-white mb-5 text-sm">
            {internDetails.requirement}
          </p>
          <p className="text-left text-white mb-5 text-sm">
            <strong>Program Description:</strong>{" "}
            {internDetails.activity_id.description}
          </p>
          <p className="text-left text-white mb-5 text-sm">
            <strong>Additional Info:</strong>{" "}
            {internDetails.activity_id.additional_information}
          </p>
        </>
      )}
    </main>
  );
}
