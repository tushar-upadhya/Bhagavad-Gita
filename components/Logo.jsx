import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} priority height={70} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
