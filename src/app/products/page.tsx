import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "@/services/productService";
import Card from "@/components/Card";

export async function getStaticProps() {
  let productsFound: IProduct[] = [];

  try {
    productsFound = await getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return {
    props: {
      productsFound,
    },
    revalidate: 10,
  };
}

const Products = ({ productsFound }: { productsFound: IProduct[] }) => {
  return (
    <main>
      <h1>Products</h1>
      <hr />
      <br />
      {productsFound.length > 0 ? (
        <div className="wrapper pb-8 grid md:grid-cols-4 gap-10">
          {productsFound.map((product: IProduct) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="wrapper flex justify-center items-center mt-6">
          <h2 className="text-pink-basic text-center">
            Sorry, we could not load the products. Please try again later.
          </h2>
        </div>
      )}
    </main>
  );
};

export default Products;
