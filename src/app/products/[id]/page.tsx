import { getProductById } from "@/services/productService";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const productFind = await getProductById(parseInt(id));

  if (!productFind) {
    return notFound();
  }

  return (
    <div>
      <h1 className="mb-6">{productFind.name}</h1>
      <div>
        <Detail product={productFind} />
      </div>
    </div>
  );
};

export default Product;
