"use client";

import { FortmatPrice } from "@/utils/format_price";
import { TruncateText } from "@/utils/truncate_text";
import Image from "next/image";
import Rating from "@mui/material/Rating";

const ProductCard = ({ data }: { data: any }) => {
    const rating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length
    return (
        <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm  ">
            <div className="flex flex-col items-center h-full w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        fill
                        src={data.images[0]}
                        alt={"image"}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-4">{TruncateText(data.name)}</div>
                <div className="">
                    <Rating value={rating} readOnly />
                </div>
                <div className="">{data.reviews.length} reviews</div>
                <div className="font-semibold">{FortmatPrice(data.price)}</div>
            </div>
        </div>
    );
};

export default ProductCard;
