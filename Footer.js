import whatsLogo from "../../public/assets/whats-app-logo.png";
import shape from "../../public/assets/Shape.png";
import Image from "next/image";
import styled from "styled-components";
import instaLogo from "../../public/assets/insta.svg";
import twitterLogo from "../../public/assets/twitter.svg";
import fbLogo from "../../public/assets/facebook.svg";
import linkedinLogo from "../../public/assets/linkedin.svg";
const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <div>
          <span className="footer-title">تابعنا</span>
          <div className="footer-social-container">
            <div className="social-icon-container">
              <Image src={linkedinLogo} />
            </div>
            <div className="social-icon-container">
              <Image src={twitterLogo} />
            </div>
            <div className="social-icon-container">
              <Image src={fbLogo} />
            </div>
            <div className="social-icon-container">
              <Image src={instaLogo} />
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">الشركه</span>
          <div className="contact-flex-container">
            <span>متجر الكتروني</span>
          </div>
          <div className="contact-flex-container">
            <span>POS</span>
          </div>
          <div className="contact-flex-container">
            <span>الاسعار</span>
          </div>
          <div className="contact-flex-container">
            <span>المدونه</span>
          </div>
          <div className="contact-flex-container">
            <span>تواصل معانا</span>
          </div>
        </div>
        <div>
          <span className="footer-title">تواصل معانا</span>
          <div className="contact-flex-container">
            <Image src={whatsLogo} />
            <span className="contact-number"> (+966) 547-6574-40</span>
          </div>
          <div className="contact-flex-container">
            <Image src={whatsLogo} />
            <span className="contact-number"> (+20) 123456329</span>
          </div>
        </div>
        <div>
          <span className="footer-title">اشترك</span>
          <div className="input-container">
            <input
              className="send-main-input"
              type="text"
              placeholder="بريدك الالكتروني"
            />
            <div className="send-btn">
              <Image src={shape} />
            </div>
          </div>
        </div>
      </FooterContainer>
      <FooterBottom>
        <span>© 2021 B7R</span>
        <div className="conditions-container">
          <span>الشروط & الاحكام</span>
          <span>سياسه الخصوصيه </span>
        </div>
      </FooterBottom>
    </footer>
  );
};
const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  color: white;
  gap: 2rem;
  direction: rtl;

  .input-container {
    background-color: white;
    position: relative;
    width: 100%;
    height: 2.5rem;
    border-radius: 30px;
    overflow: hidden;

    input {
      border: none;
      color: black;
    }
    input:focus {
      outline: none;
    }
  }
  .footer-title {
    margin-bottom: 1rem;
    display: inline-block;
  }
  .send-main-input {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    padding: 1rem 1rem 1rem 3.2rem;
  }
  .send-btn {
    background-color: #6ebbc5;
    position: absolute;
    top: 0;
    left: -0.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-radius: 30px;
    cursor: pointer;
  }
  .contact-flex-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    span {
      font-size: smaller;
      cursor: pointer;
    }
  }
  .contact-number {
    direction: ltr;
    margin-right: 0.5rem;
  }
  .footer-social-container {
    display: flex;
  }
  .social-icon-container {
    background-color: #6ebbc5;
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: "pointer";
  }
`;

const FooterBottom = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  padding: 1.5rem 0;

  .conditions-container {
    span {
      display: inline-block;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
`;
export default Footer;
