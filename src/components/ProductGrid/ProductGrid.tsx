import { FC } from "react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SlideIn } from "./SlideIn";
import { PerfumeProduct } from "./PerfumeProduct";

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  customizeUrl: string;
};

export type ProductGridProps = {
  heading: string;
  body: string;
  products: Product[];
};

const ProductGrid: FC<ProductGridProps> = ({ heading, body, products }) => {
  return (
    <Bounded className="bg-texture bg-brand-gray">
      <SlideIn>
        <Heading className="text-center mb-6" as="h2">
          {heading}
        </Heading>
      </SlideIn>

      <SlideIn>
        <div className="text-center mb-10">
          <p>{body}</p>
        </div>
      </SlideIn>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <PerfumeProduct key={product.id} product={product} />
        ))}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
