import { usePathname } from "next/navigation";
import BaseLayout from "@/components/elements/BaseLayout";
import DetailsPage from "@/components/modules/DetailModule";
import { useEffect, useState } from "react";

async function getData(id: string | string[]) {
  const res = await fetch(
    `https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/position/${id}`,
  );
  if (!res.ok) {
    return { data: [] };
  }
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getData(id);

  return (
    <BaseLayout>
      <DetailsPage data={data.data} />
    </BaseLayout>
  );
}
