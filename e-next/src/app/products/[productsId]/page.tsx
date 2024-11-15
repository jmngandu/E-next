import { Metadata } from "next";

type Props = {
  params: { params: { productsId: string } };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productsId}`,
  };
};

export default function Product({ params }: Props) {
  return (
    <>
      <h1>product:{params.productsId} </h1>
    </>
  );
}
