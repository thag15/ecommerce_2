"use client";
import Button from "@/app/components/button";
import ProductImage from "@/app/components/products/productImage";
import SetColor from "@/app/components/products/setcolor";
import SetQuantity from "@/app/components/products/setquantity";
import { Rating } from "@mui/material";
import { FC, useCallback, useState } from "react";
interface ProductDetailProps {
  product: any;
}
// init type data
export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => <hr className="w-[30%] my-2" />;
const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: product.images[0],
    quantity: 1,
    price: product.price,
  });
  //
  const rating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  // function hdl
  const hdlColorSelect = useCallback(
    (value: SelectedImgType) => {
      if (cartProduct.quantity === 99) return;
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct]
  );
  const hdlQuantityIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity++ };
    });
  }, []);
  const hdlQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) return;
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        hdlColorSelect={hdlColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={rating} readOnly />
          <div className="">{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <>
          <div className="">
            <span className="font-semibold">CATEGORY:</span>
            {product.category}
          </div>
          <div className="">
            <span className="font-semibold">BRAND:</span>
            {product.brand}
          </div>
          <div>
            <span className="font-semibold">STATE:</span>
            <span
              className={product.inStock ? "text-green-600" : "text-red-600"}
            >
              {product.inStock ? "In stock" : "Out of stock"}
            </span>
          </div>
        </>
        <Horizontal />
        {/* color select */}
        <SetColor
          images={product.images}
          cartProduct={cartProduct}
          hdlColorSelect={hdlColorSelect}
        />
        <Horizontal />
        {/* quantity */}
        <SetQuantity
          cartProduct={cartProduct}
          hdlQuantityIncrease={hdlQuantityIncrease}
          hdlQuantityDecrease={hdlQuantityDecrease}
        />
        <Horizontal />
        {/* add to cart */}
        <Button outline={false} label="Add to cart" onClick={() => { }} />
      </div>
    </div>
  );
};

export default ProductDetail;
