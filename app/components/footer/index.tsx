import Link from "next/link";
import Container from "../container";
import FooterList from "./footerlist";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                        <FooterList>
                            <h3 className="text-base font-bold"> Shop categories</h3>
                            <Link href={"/"}>Phones</Link>
                            <Link href={"/"}>Laptop</Link>
                            <Link href={"/"}></Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold">Custom service</h3>
                            <Link href={"/"}>Contact us</Link>
                            <Link href={"/"}>Shipping Policy</Link>
                            <Link href={"/"}>FAQs</Link>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold">About us</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Molestias dolore provident tempora, culpa id nemo natus
                                assumenda vero ipsum? Id perferendis a, doloremque sequi minima
                                illum nam recusandae aut deserunt?
                            </p>

                            <p>&copy; {new Date().getFullYear()}</p>
                        </FooterList>
                        <FooterList>
                            <h3 className="text-base font-bold">Follow us</h3>
                            <div className="flex">
                                <Link href={""}>
                                    <FaFacebook />
                                </Link>
                                <Link href={""}>
                                    <CiYoutube />
                                </Link>
                            </div>
                        </FooterList>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
