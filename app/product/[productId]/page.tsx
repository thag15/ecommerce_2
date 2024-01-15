import Container from "@/app/components/container";
import ProductDetail from "./productdetail";
import { product } from "@/utils/product"
    ;
import ListRating from "./listrating";

interface IParams {
    productId?: string
}
const Product = ({ params }: { params: IParams }) => {

    return (
        <div className="p-8">
            <Container>
                <ProductDetail product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div className="">rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
};

export default Product;
