import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src }: { src?: string | null | undefined }) => {
    if (src) {
        return (
            <Image
                src={src}
                alt="avatar"
                className="rounded-full"
                height="30"
                width="30"
            />
        );
    } else {
        return <FaUserCircle size={24} />;
    }
};

export default Avatar;
