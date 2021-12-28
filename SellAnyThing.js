import checkIcon from "../../public/assets/shippingcheck.svg";
import Image from "next/image";

import shippingImage from "../../public/assets/shippingImage.svg";
const SellAnyThing = () => {
  return (
    <div className="sell-section">
      <h1 className="bagtitle" style={{ textAlign: "center" }}>
        بيع أي شيء أونلاین وقُل وداعًا للعشوائية
      </h1>
      <p className="description" style={{ textAlign: "center" }}>
        للأننا نعلم أن مع زيادة حجم تجارتك الالكترونية قد تواجه العديد من الصعاب
        في تنظيم وإدارة <br /> عملك..الآن يمكنك إدارة عملك وتجارتك بكل سهولة
        وتنظيم ونجاح أكبر من خلال منصة التجارة <br /> الالكترونية !
      </p>
      <div className="sell-anything-grid">
        <div className="right-sell">
          {" "}
          <Image src={shippingImage} />
        </div>
        <div className="left-sell">
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">تابع طلبات العملاء بكل سهولة</span>
          </div>
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">ضف عدد لا نهائي من الصفحات</span>
          </div>
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">تحكم في الصور و المحتوي</span>
          </div>
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">ضف منتجات بعدد لا نهائي</span>
          </div>
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">
              ضف خدمات و حدد تفاصيل الخدمه (الوقت و التكلفة والسعر)
            </span>
          </div>
          <div className="left-sell-flex">
            <Image src={checkIcon} />
            <span className="catText">
              نظم المنتجات و ضف إليها خصائص مثل اللون و الوزن و الحجم ... الخ)
              بدون اي قيود
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellAnyThing;
