import Image from "next/image";
import Link from "next/link";
// import logo from "../../public/logo.svg";

const Logo = () => {
  return (
    <Link href={"/"} className="text-2xl font-semibold text-slate-600">
      {/* <Image src={logo} height={54} width={54} priority alt="logo" /> */}
      Bhagavad Gita
    </Link>
  );
};

export default Logo;
