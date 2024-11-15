export default function Product({
  params,
}: {
  params: { productsId: string };
}) {
  return (
    <>
      <h1>product:{params.productsId} </h1>
    </>
  );
}
