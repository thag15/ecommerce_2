import { CartProductType } from "@/app/product/[productId]/productdetail";
import { FC } from "react";

interface SetQuantityProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    hdlQuantityIncrease: () => void;
    hdlQuantityDecrease: () => void;
}
const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";
const SetQuantity: FC<SetQuantityProps> = ({
    cartCounter,
    cartProduct,
    hdlQuantityIncrease,
    hdlQuantityDecrease,
}) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
            <div className="flex gap-4 items-center text-base">
                <button className={btnStyles} onClick={hdlQuantityDecrease}>
                    -
                </button>
                <div className="">{cartProduct.quantity}</div>
                <button className={btnStyles} onClick={hdlQuantityIncrease}>
                    +
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
