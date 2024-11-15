import Link from "next/link";

export default function Products() {
  return (
    <>
      <Link href="/">home</Link>

      <h1>My products</h1>
      <ul>
        <li>
          <Link href="products/1">product: 1 </Link>
        </li>
        <li>
          <Link href="products/2">product: 2</Link>
        </li>
        <li>
          <Link href="products/3">product: 3</Link>
        </li>
        <li>
          <Link href="products/4">product: 4</Link>
        </li>
        <li>
          <Link href="products/5">product: 5</Link>
        </li>
      </ul>
    </>
  );
}
