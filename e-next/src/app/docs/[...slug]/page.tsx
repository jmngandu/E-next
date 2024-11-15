export default function Docs({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h1>DOCS PAGE: {params.slug}</h1>
    </>
  );
}
