import Banner from "../../public/assets/banner.svg";
import Image from "next/image";
import { HeroContainer } from "../styles/HeroContainer";
import { Button } from "antd";
const Hero = () => {
  return (
    <>
      <HeroContainer>
        <div>
          <h1 className="banner-header">
            أنشيء متجرك الإلكتروني بسهولة فى دقائق، كل ما تحتاجه لبيع منتجاتك
            <br />
            اليوم
          </h1>
          <span className="banner-text">
            إنقل نشاطك التجاري إلي متجر إلكتروني أسهل وأسرع مما تعتقد، زود وحافظ
            علي عملائك الحاليين من خلال متجر احترافي . بدون الحاجة إلي مبرمج أو
            مصمم ، كل ماعليك هو أن تسجل وسنقوم بمساعدتك في تطوير تجارتك وزيادة
            مبيعاتك.
          </span>
          <div style={{ marginTop: "35px" }}>
            <Button className="ant-btn hero-btn" type="primary" size="large">
              ابني متجرك الان
            </Button>
          </div>
        </div>
        <div>
          <Image src={Banner} alt="Banner" />
        </div>
      </HeroContainer>
    </>
  );
};

export default Hero;
