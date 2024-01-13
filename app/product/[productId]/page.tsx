import Container from "@/app/components/container";
import ProductDetail from "./productdetail";
import { product } from "@/utils/product";

interface IParams {
    productId?: string
}
const Product = ({ params }: { params: IParams }) => {

    return (
        <div className="p-8">
            <Container>
                <ProductDetail product={product} />
            </Container>
        </div>
    );
};

export default Product;
