"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    alert("Thanks for shopping with us");
    router.push("/products");
    // router.back();
    // router.forward();
    // router.replace("/");
  };
  return (
    <>
      <h1>order product</h1>
      <button onClick={handleClick}>place order</button>
    </>
  );
}
