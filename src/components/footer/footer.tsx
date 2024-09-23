import "./footer.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-center">
        <div className="footer-top">
          <div className="footer-section">
            <img src="	https://yerevan-city.am/assets/images/logo.svg" alt="" />
          </div>

          <div className="footer-section">
            <p>Կապվեք մեզ հետ</p>
            <span>+374 55254444</span>
            <p>Հաճախ տրվող հարցեր</p>
            <div className="contact-apps">
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <img
                src="https://yerevan-city.am/assets/images/telegram_img.svg"
                alt=""
              />
              <img
                src="https://yerevan-city.am/assets/images/watsapp_img.svg"
                alt=""
              />
              <img
                src="https://yerevan-city.am/assets/images/viber_img.svg"
                alt=""
              />
            </div>
          </div>

          <div className="footer-section">
            <p>Մեր մասին</p>
            <span>Սիթի սուպերմարկետի մասին</span>
            <span>Մասնաճյուղեր</span>
            <span>Կապվեք մեզ հետ</span>
            <span>Գաղտնիության քաղաքականություն</span>
            <span>Օգտագործման պայմաններ</span>
          </div>

          <div className="footer-section">
            <p>Բջջային հավելված</p>
            <span>
              Այժմ «Երևան Սիթի» բջջային հավելվածի միջոցով պատվերներ կատարելն էլ
              ավելի հարմար է դարձել
            </span>
            <span>
              <img
                src="https://yerevan-city.am/assets/images/android.svg"
                alt=""
              />
              <img src="https://yerevan-city.am/assets/images/ios.svg" alt="" />
              <img
                src="https://yerevan-city.am/assets/images/appgallery-seeklogo.com.svg
"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© City, Inc. Բոլոր իրավունքները պաշտպանված են</span>
        </div>
      </div>
    </div>
  );
}
