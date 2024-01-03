import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} height={54} width={54} priority alt="logo" />
    </Link>
  );
};

export default Logo;
