import "./specialDiscounts.scss";

export default function SpecialDiscounts() {
  return (
    <div className="specialDiscounts-container">
      <div className="specialDiscounts-center">
        <div className="content">
          <h2>
            Հատուկ զեղչեր հավատարիմ հաճախորդների համար Երևան Սիթիի
            գործընկերներից
          </h2>
          <span>
            Բարի գալուստ Երևան Սիթիի գործընկերների կողմից տրամադրվող զեղչերի էջ
            մեր հաճախորդների համար։ Դարձեք հավատարիմ հաճախորդ՝ կատարելով 30,000
            դրամ և ավել գնումներ։ Յուրաքանչյուր հաջորդիվ ծախսված 30,000 դրամի
            դիմաց կրկին ստանում եք անհատական զեղչեր և կարող եք օգտվել ստորև
            բոլոր զեղչերից մեկական անգամ 7 օրվա ընթացքում: Շնորհակալություն մեզ
            ընտրելու համար. ձեր հավատարմությունն արժանի է պարգևի: Սկսեք խնայել
            հենց հիմա!
          </span>
        </div>
        <div className="images">
          <img
            src="https://yerevan-city.am/assets/images/mega_mall.svg"
            alt=""
          />
          <img
            src="https://yerevan-city.am/assets/images/erebuni_mall.svg"
            alt=""
          />
        </div>
        <div className="login-box">
          <span>
            <p>Մուտք գործեք ձեր հաշիվ</p>
            <span>Բացահայտեք բազմազան զեղչեր մեր գործընկերներից</span>
            <button>ՄՈՒՏՔ ԳՈՐԾԵԼ</button>
          </span>
          <div
          className="login-box-img"
            style={{
              backgroundImage:
                "url(https://yerevan-city.am/assets/images/login-discount.png)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
