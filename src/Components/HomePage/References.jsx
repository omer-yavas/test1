import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ReferenceMobil from "./ReferenceMobil";
const References = () => {
  const referenceUrls = [
    "Dizayn.png",
    "Colins.png",
    "Mercedes.png",
    "Ulker.png",
    "Mitsubishi.png",
    "Papara.png",
    "Tergan.png",
    "Theorie.png",
    "GenPa.png",
    "Gulsan.png",
    "TBMM.png",
    "AkParti.png",
    "BBP.png",
    "MHP.png",
    "IYIParti.png",
    "CHP.png",
    "MerkezParti.png",
    "Saadet.png",
    "IYIParti-CHP-MerkezParti-Saadet.png",
    "THY.png",
    "istanbulUniversitesi.png",
    "Ford.png",
    "IBB-Mitsubishi-Turing-Papara.png",
    "Osram.png",
    "Turkiye.png",
    "Haksan.png",
    "Medicana.png",
    "Nisa.png",
    "Bahariye.png",
    "GeneralMotor.png",
    "Metro.png",
    "Sarar.png",
    "DunyaGoz.png",
    "Gezer.png",
    "Ayfar.png",
    "TurkcellSuperonline.png",
    "Papagan.png",
    "Ziraat.png",
    "Desi.png",
    "TOKI.png",
  ];

  const referenceMobil = [
    "Dizayn.png",
    "Colins.png",
    "Mercedes.png",
    "Ulker.png",
    "Mitsubishi.png",
    "Papara.png",
    "Tergan.png",
    "Theorie.png",
    "GenPa.png",
  ];
  const referenceMobilTwo = [
    "Gulsan.png",
    "TBMM.png",
    "AkParti.png",
    "BBP.png",
    "MHP.png",
    "IYIParti.png",
    "CHP.png",
    "MerkezParti.png",
    "Saadet.png",
  ];
  const referenceMobilThree = [
    "IYIParti-CHP-MerkezParti-Saadet.png",
    "THY.png",
    "istanbulUniversitesi.png",
    "Ford.png",
    "IBB-Mitsubishi-Turing-Papara.png",
    "Osram.png",
    "Turkiye.png",
    "Haksan.png",
    "Medicana.png",
  ];
  const referenceMobilFour = [
    "Nisa.png",
    "Bahariye.png",
    "GeneralMotor.png",
    "Metro.png",
    "Sarar.png",
    "DunyaGoz.png",
    "Gezer.png",
    "Ayfar.png",
    "TurkcellSuperonline.png",
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 3,
          rows: 3,
          slidesToScroll: 3,
          slidesPerRow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="text-center" style={{ color: "var(--banabi)" }}>
            <strong>REFERANSLARIMIZ</strong>
          </h2>
          <h4 className="text-center mb-5" style={{ color: "var(--siyah)" }}>
            Markada yazan kişiye bizi sorabilirsiniz
          </h4>
          <hr style={{ width: "100px", margin: "50px auto", height: "3px" }} />
          <div className="col-sm-12 my-3 text-center">
            <a href="references.html" className="custom-ghost-btn d-md-none">
              Tümü
            </a>
          </div>

          <div className="hidden md:grid grid-cols-10">
            {referenceUrls.map((item) => (
              <Image
                key={item}
                width={90}
                height={40}
                alt="referencePhotos"
                src={`/references/${item}`}
                className="my-3 mx-3"
              />
            ))}
          </div>
          <ul className="md:hidden border border-black">
            <Slider {...settings}>
              {referenceMobil.map((item) => (
                <ReferenceMobil key={item} url={`/references/${item}`} />
              ))}
              {referenceMobilTwo.map((item) => (
                <ReferenceMobil key={item} url={`/references/${item}`} />
              ))}
              {referenceMobilThree.map((item) => (
                <ReferenceMobil key={item} url={`/references/${item}`} />
              ))}
              {referenceMobilFour.map((item) => (
                <ReferenceMobil key={item} url={`/references/${item}`} />
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default References;
