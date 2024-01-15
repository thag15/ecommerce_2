import Avatar from "@/app/components/avatar";
import Heading from "@/app/components/heading";
import { Rating } from "@mui/material";
import moment from "moment";

const ListRating = ({ product }: { product: any }) => {
    return (
        <div className="">
            <Heading title="Product reviews" />
            <div className="text-sm mt-2">
                {product.reviews &&
                    product.reviews.map((review: any) => (
                        <div className="max-w-300px" key={review.id}>
                            <div className="flex gap-2 items-center">
                                <Avatar src={review.user.image} />
                                <div className="font-semibold">{review.user.name}</div>
                                <div className="">{moment(review.createdDate).fromNow()}</div>
                            </div>
                            {/* review comment */}
                            <div className="mt-2">
                                <Rating value={review.rating} readOnly />
                                <div className="ml-2">{review.comment}</div>
                                <hr className="my-4" />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ListRating;
