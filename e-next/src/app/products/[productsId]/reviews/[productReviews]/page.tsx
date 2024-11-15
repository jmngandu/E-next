export default function ProductReviews({
  params,
}: {
  params: { productsId: string; productReviews: string };
}) {
  return (
    <>
      <h1>
        Reviews {params.productReviews} of product {params.productsId}
      </h1>
    </>
  );
}
