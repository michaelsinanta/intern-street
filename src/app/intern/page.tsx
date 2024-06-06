import BaseLayout from "@/components/elements/BaseLayout";
import InternPage from "@/components/modules/InternModule";

async function getData() {
  const res = await fetch(
    "https://api.kampusmerdeka.kemdikbud.go.id/magang/browse/opportunities?opportunity_type=MSIB&activity_type=",
    { next: { revalidate: 3600 } },
  );
  if (!res.ok) {
    return { data: [] };
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <BaseLayout>
      <InternPage data={data.data} />
    </BaseLayout>
  );
}
