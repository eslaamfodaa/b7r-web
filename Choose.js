import desing1 from "../../public/assets/design1.jpg";
import desing2 from "../../public/assets/design2.jpg";
import desing3 from "../../public/assets/design3.jpg";
import desing4 from "../../public/assets/design4.jpg";
import Image from "next/image";
import { FourCol } from "../../components/styles/FourCol";

const Choose = () => {
  return (
    <div style={{ backgroundColor: "rgb(110, 187, 197)", padding: "46px 0" }}>
      <h1 className="title" style={{ color: "white" }}>
        إختر النموذج الأنسب لك من بين مجموعة من افضل التصاميم <br /> المتنوعة و
        إبدأ الان بتحقيق حلمك
      </h1>
      <FourCol>
        <Image src={desing1} />
        <Image src={desing2} />
        <Image src={desing3} />
        <Image src={desing4} />
      </FourCol>
    </div>
  );
};

export default Choose;
