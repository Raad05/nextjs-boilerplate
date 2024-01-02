import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hola</h1>
      <Link href="/about">About</Link>
      <ProductCard></ProductCard>
      <Link href="/users">Users Page</Link>
    </main>
  );
}
