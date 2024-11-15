import { notFound } from "next/navigation";
export default function ProductReviews({
  params,
}: {
  params: { productsId: string; productReviews: string };
}) {
  if (parseInt(params.productReviews) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Reviews {params.productReviews} of product {params.productsId}
      </h1>
    </>
  );
}
