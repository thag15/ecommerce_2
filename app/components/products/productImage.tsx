"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/productdetail";
import Image from "next/image";
import { FC } from "react";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  hdlColorSelect: (value: SelectedImgType) => void;
}
const ProductImage: FC<ProductImageProps> = ({
  cartProduct,
  product,
  hdlColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div
        className="flex flex-col items-center justify-center gap-4 cursor-pointer border 
      h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] "
      >
        {product.images.map((i: SelectedImgType) => (
          <div
            className={`relative w-[80%] aspect-square rounded border-teal-300
                    ${cartProduct.selectedImg.color === i.color
                ? "border-[1.5px]"
                : "border-none"
              }`}
            key={i.color}
            onClick={() => hdlColorSelect(i)}
          >
            <Image
              src={i.image}
              alt={i.color}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt="image"
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;
