import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>E NEXT</h1>
      <Link href="/about">about</Link>
      <Link href="/products">Products</Link>
      <Link href="/contacts">contacts</Link>
    </>
  );
}
