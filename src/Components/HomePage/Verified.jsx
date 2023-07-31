import { useSpring, animated } from "react-spring";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import VerifiedTeacher from "./VerifiedTeacher";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#c47b06",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        placeItems: "center",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingTop: "7px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#c47b06",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        placeItems: "center",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingTop: "7px",
      }}
      onClick={onClick}
    />
  );
}

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Verified = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="point-center">
          <div className="col-12 col-sm-8">
            <div className="row" id="counters_2">
              <div className="col-4">
                <div className="sayac text-center">
                  <FontAwesomeIcon icon={faChalkboardUser} size="xl" />
                  <h2 className="mt-1 mb-0 counter">
                    <Number n={10000} />
                  </h2>
                  <h6>Öğretmen</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="sayac text-center">
                  <FontAwesomeIcon icon={faGraduationCap} size="xl" />
                  <h2 className="mt-1 mb-0 counter">
                    <Number n={567900} />
                  </h2>
                  <h6>Öğrenci</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="sayac text-center">
                  <FontAwesomeIcon icon={faBook} size="xl" />
                  <h2 className="mt-1 mb-0 counter">
                    <Number n={30} />
                  </h2>
                  <h6>Farklı Ders</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <hr style={{ width: "100px", margin: "50px auto", height: "3px" }} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="mb-4" style={{ color: "var(--siyah)" }}>
            <strong>Onaylı mükemmel öğretmenler</strong>
          </h2>
          <h5 style={{ color: "var(--siyah)" }}>
            Tecrübeli, kaliteli ve başarılı öğretmenler
          </h5>
          <h5 style={{ color: "var(--siyah)" }}>
            %100 güvenebileceğiniz öğretmenler
          </h5>
        </div>
      </div>
      <div className="row mt-4">
        <ul
          id="flexiselGiftBrands"
          className="border border-solid border-black pb-2 pt-4"
          style={{ paddingRight: "30px", paddingLeft: "30px" }}
        >
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <VerifiedTeacher key={item} />
            ))}
          </Slider>
        </ul>

        <div className="button mt-3">
          <a className="custom-btn" href="ogretmen-bul.html" target="_blank">
            <i className="fa-light fa-magnifying-glass"></i> Öğretmen Bul
          </a>
        </div>
      </div>
    </div>
  );
};

export default Verified;
