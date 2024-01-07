import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/assets/logo.svg"}
        priority
        height={54}
        width={54}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
