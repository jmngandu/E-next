export default function Product({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>product:{params.id} </h1>
    </>
  );
}
