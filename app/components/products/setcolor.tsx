import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/productdetail";
import { FC } from "react";

interface SetColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  hdlColorSelect: (value: SelectedImgType) => void;
}
const SetColor: FC<SetColorProps> = ({
  images,
  cartProduct,
  hdlColorSelect,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <span className="font-semibold">COLOR:</span>
      <div className="flex ">
        {images.map((i, index) => (
          <div
            onClick={() => hdlColorSelect(i)}
            key={index}
            className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
              cartProduct.selectedImg.color === i.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
          >
            <div
              className="h-5 w-5 rounded-full border-[1.2px] border.slate-300 cursor-pointer"
              style={{ background: i.colorCode }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetColor;
