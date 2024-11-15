import Link from "next/link";

export default function Products() {
  return (
    <>
      <Link href="/">home</Link>

      <h1>My products</h1>
      <ul>
        <li>product: 1</li>
        <li>product: 2 </li>
        <li>product: 3</li>
        <li>product: 4</li>
        <li>product: 5</li>
      </ul>
    </>
  );
}
