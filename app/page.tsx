import { products } from "@/utils/datafake";
import Container from "./components/container";
import HomeBanner from "./components/homebanner";
import { TruncateText } from "@/utils/truncate_text";
import ProductCard from "./components/products/productcard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div className="">
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products?.map((i: any) => (
            <ProductCard data={i} key={i.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}
