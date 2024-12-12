import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "@/services/productService";
import Card from "@/components/Card";

const Products = async () => {
  const productsFound: IProduct[] = await getProducts();

  return (
    <main>
      <div className="container">
        <h1>Products</h1>
        <hr />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto my-4">
          {productsFound.map((product: IProduct) => {
            return (
              <div className="card" key={product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
