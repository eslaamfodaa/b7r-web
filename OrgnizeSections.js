import Image from "next/image";
import sectionImage from "../../public/assets/sections_view.jpg";

import { Button } from "antd";
import { CenteredDiv } from "../styles/CenteredDiv";
const OrgnizeSections = () => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>منظم الأقسام</h1>
      <p className="sec-description">
        قم بتخصيص متجرك ليناسب إحتياجاتك في بضع دقائق ..بكل سهولة يمكنك إعادة
        ترتيب أقسام المتجر حسب رغبتك وحسب مايناسب نشاطك التجاري واختيار الأقسام
        المهمة والأكثر أهمية .. يوفر خيار منظم الأقسام تنقلًا بسيطًا ووصولاً
        سريعًا وتجربة عملاء أفضل.
      </p>
      {<Image src={sectionImage} />}

      <CenteredDiv>
        <Button className="ant-btn hero-btn" type="primary" size="large">
          ابني متجرك الان
        </Button>
      </CenteredDiv>
    </div>
  );
};

export default OrgnizeSections;
