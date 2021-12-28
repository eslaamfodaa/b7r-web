import { SaleContainer } from "../styles/SaleContainer";
import Image from "next/image";
import CardIcon1 from "../../public/assets/card2.svg";
import CardIcon2 from "../../public/assets/card1.svg";
const Sale = () => {
  return (
    <div className="sell-section">
      <h1 className="title">عملیات بیع أسهل وأكثر بشراكات أكبر</h1>
      <SaleContainer>
        <div className="card">
          <Image src={CardIcon1} />
          <h3 className="catTitle">طرق شحن آمنه وسريعة</h3>
          <p className="description">
            حيث نوفر لك دمج كامل بمتجرك مع شركات شحن إحترافية محلية لتصل لعملائك
            حيثما كانوا ...يمكنك إختيار الشركة المناسبة لاحتياجات مشروعك من
            مجموعة الشركات التي نوفرها وقم بترك باقي الأمر لنا.
          </p>
        </div>
        <div className="card" style={{ backgroundColor: "rgb(25, 133, 161);" }}>
          <Image src={CardIcon1} />
          <h3 className="catTitle" style={{ color: "white" }}>
            الربط بين متجرك ومتاجر منصات التواصل الإجتماعي وجوجل
          </h3>
          <p className="description" style={{ color: "white" }}>
            تستطيع الآن بكل سهولة من خلال متجرك الالكتروني أن تربط بين منتجاتك
            في متجرك وبين فيسبوك شوب وانستجرام شوب وجوجل شوبينج بكل سهولة .. كما
            تستطيع القيام بتعديلات في متاجر كل من فيسبوك وانستجرام وجوجل شوبينج
            من خلال متجرك الالكتروني .
          </p>
        </div>
        <div className="card">
          <Image src={CardIcon2} />
          <h3 className="catTitle">طرق شحن آمنه وسريعة</h3>
          <p className="description">
            حتستطيع الآن تقديم تجربة دفع أكثر أمانا للعملاء في متجرك. من خلال
            ربط المتجربطرق دفع آمنه وموثوقة دوليًا ومحليًا. مثل باي موب وغيرها
          </p>
        </div>
      </SaleContainer>
    </div>
  );
};

export default Sale;
