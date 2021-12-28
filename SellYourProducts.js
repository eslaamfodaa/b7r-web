import Image from "next/image";
import onlineShopingImage from "../../public/assets/DrawKit-onlineshopping-Illustration.svg";

const SellYourProducts = () => {
  return (
    <div className="sell-grid">
      <div className="left-sell">
        {" "}
        <h1 className="bagtitle">بيع وسوّق منتجاتك في كل مكان</h1>
        <p className="text">
          لأن معظم العملاء يقضون ساعات على هواتفهم المحمولة قم الآن بزيادة ظهور
          علامتك التجارية وبيع وسوّق منتجاتك في كل مكان، وتمكن من التواصل مع
          عملائك بكل سهولة باستخدام منصة التجارة الإلكترونية.
        </p>
      </div>
      <div className="right-sell">
        {" "}
        <Image src={onlineShopingImage} />
      </div>
    </div>
  );
};

export default SellYourProducts;
