import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo2.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} height={65} width={65} priority alt="logo" />
    </Link>
  );
};

export default Logo;
