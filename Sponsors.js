import { SponsersGrid } from "../../components/styles/SponsersGrid";
import s1 from "../../public/assets/s1.svg";
import s2 from "../../public/assets/s2.svg";
import s3 from "../../public/assets/s3.svg";
import s4 from "../../public/assets/s4.svg";
import s5 from "../../public/assets/s5.svg";
import Image from "next/image";
const Sponsors = () => {
  return (
    <div style={{padding: '100px 0'}}>
      <h1 className="title">شركات تثق في خدماتنا</h1>
      <SponsersGrid>
        <Image src={s5} />
        <Image src={s4} />
        <Image src={s3} />
        <Image src={s2} />
        <Image src={s1} />
      </SponsersGrid>
    </div>
  );
};

export default Sponsors;
