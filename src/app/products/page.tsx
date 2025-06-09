//ürün listesi


import { products } from "@/lib/data/products";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-2 rounded">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h2 className="font-bold">{product.name}</h2>
          <p>{product.price} TL</p>
        </div>
      ))}
    </div>
  );
}
