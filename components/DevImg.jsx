import Image from "next/image";

const DevImg = ({ containerStyle, imgSrc }) => {
  return (
    <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="hero" />
    </div>
  );
};

export default DevImg;
