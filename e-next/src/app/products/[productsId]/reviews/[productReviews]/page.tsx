export default function ProductReviews({
  params,
}: {
  params: { productId: string; productReviews: string };
}) {
  return (
    <>
      <h1>
        Reviews {params.productReviews} of product {params.productId}{" "}
      </h1>
    </>
  );
}
