import "./newFeature.scss";

export default function NewFeature() {
  const featuresArray = [
    {
      title: "Խանութում կատարված գնումներ",
      content: [
        "Այժմ Երևան Սիթի խանութներից գնումներ կատարելիս կարող եք պատվերի մանրամասները գտնել մեր հավելվածում՝ «Իմ պատվերները» բաժնում: Դուք հնարավորություն կունենաք դիտելու գնման և վճարման տեղեկատվության մանրամասները:",
        "Օֆլայն կատարած գնումների դեպքում գործում է նաև պատվերը կրկնելու և բաժնում ապրանքների ցանկը պահպանելու գործառույթը։",
      ],
      interaction: "Գտեք ձեր անձնական էջում",
      img: "https://yerevan-city.am/assets/images/first.png",
    },
    {
      title: "Հավաքածուներ",
      content: [
        "Այսուհետ Երևան Սիթի վեբ կայքում հավելվածում գնումներ կատարելն ավելի հեշտ կլինի հավաքածուների միջոցով: Դուք կարող եք ընտրել Ձեզ համար անհրաժեշտ թեմատիկ հավաքածուն, օրինակ՝ ծննդյան տարեդարձ, պիկնիկ, խորոված և այլն ու հավաքածուի ներսում գտնել անհրաժեշտ բոլոր ապրանքները:",
        "Հավաքածուները կարելի է գտնել գլխավոր էջում կամ կայքի ընտրացանկից ընտրելով համապատասխան բաժինը",
      ],
      interaction: "Բացահայտեք հավաքածուներ",
      img: "https://yerevan-city.am/assets/images/second.png",
    },
    {
      title: "Տուփով գնումներ կատարելու հնարավորություն",
      content: [
        "Այսուհետ Երևան Սիթի վեբ կայքում հնարավորություն կունենաք կատարել ավելի արագ գնումներ խնայելով Ձեր ժամանակը: Այժմ դուք կարող եք գնել որոշակի ապրանքներ միանգամից մեծ քանակությամբ՝ ապրանքի ընտրանքների մեջ ընտրելով բլոկ:",
      ],
      interaction: "Գնիր հիմա",
      img: "https://yerevan-city.am/assets/images/third.png",
    },
  ];

  return (
    <div className="newFeature-container">
      {featuresArray.map((item, i) => {
        return (
          <div key={i} className="content-box">
            <img
              className={i % 2 !== 0 ? "turn-img" : ""}
              src={item.img}
              alt=""
            />
            <div
              style={{
                justifyContent: i % 2 !== 0 ? "flex-start" : "flex-end",
              }}
            >
              {" "}
              <div className={`text-box ${i % 2 !== 0 ? "turn-text" : ""}`}>
                <h2>{item.title}</h2>
                {item.content.map((text, i) => {
                  return <span key={i}>{text}</span>;
                })}
                <p>{item.interaction}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
