import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function LegacyBrandProductRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/brand/catalog/${slug}`);
}
