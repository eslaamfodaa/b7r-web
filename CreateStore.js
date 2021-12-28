import Image from "next/image";
import Home from "../../public/assets/home_icon.svg";
import MegaPhone from "../../public/assets/megaphone_icon.svg";
import ShoppingCart from "../../public/assets/shopping-cart.svg";
import { ThreeCol } from "../styles/ThreeCol";
const CreateStore = () => {
  return (
    <>
      <h1 className="title">
        أطلق متجرك الإلكتروني الآن، وضاعف مبيعاتك من الإنترنت
      </h1>
      <ThreeCol>
        <div>
          <Image src={MegaPhone} width="90" height="90" />
          <span className="number">03</span>
          <h3 className="catTitle">سوق لمتجرك</h3>
          <p className="catDescription">
            قم بالتسويق لمتجرك باستخدام أفضل الأساليب التسويقية الحديثه وزود
            مبيعاتك وأرباحك
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Image src={ShoppingCart} width="90" height="90" />
          <span className="number">02</span>
          <h3 className="catTitle">أضف منتجاتك</h3>
          <p className="catDescription">
            قستتمكن من إضافة منتجاتك بكل سهولة من خلال لوحة تحكم مرنة لا تحتاج
            إلي خبرة فنية أو تدريب
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Image src={Home} width="90" height="90" />
          <span className="number">01</span>
          <h3 className="catTitle">أنشئ متجرك</h3>
          <p className="catDescription">
            قم بالتسفي خلال 30 ثانية فقط ستتمكن من إنشاء متجر الكتروني متكامل
            وتبدأ تجربة البيع عبر الإنترنت مثل ملايين التجار
          </p>
        </div>
      </ThreeCol>
    </>
  );
};

export default CreateStore;
