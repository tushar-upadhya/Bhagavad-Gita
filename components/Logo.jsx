import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} width={70} height={70} priority alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
