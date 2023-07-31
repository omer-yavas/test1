import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaMobile from "./MediaMobile";
import MediaMobileTwo from "./MediaMobileTwo";
import Link from "next/link";
import Image from "next/image";

const Media = () => {
  const referenceUrls = [
    "/Aksam-Cumhuriyet.jpg",
    "/Aksam.jpg",
    "/Dunya-HaberlerCom.png",
    "/Dunya.png",
    "/Hurriyet.jpg",
    "/MemurlarNet-Turkiye.jpg",
    "/MemurlarNet.jpg",
    "/Milliyet.jpg",
    "/Sabah.jpg",
    "/Tavvim.png",
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        dots: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dot: true,
          autplay: true,
        },
      },
    ],
  };

  return (
    <div className="row mt-5" id="media">
      <div className="col-sm-12">
        <h2 className="text-center" style={{ color: "var(--banabi)" }}>
          <strong>MEDYADA BİZ</strong>
        </h2>
        {/* <hr
    style={{ width: "100px", margin: "50px auto", height: "3px" }}
  /> */}

        <div className=" col-sm-12 my-3 text-center">
          <a href="medya-image.html" className="custom-ghost-btn d-md-none">
            Tümü
          </a>
        </div>
        <div className="hidden md:grid md:grid-cols-5 md:place-items-center md:px-40">
          {referenceUrls.map((item) => (
            <Link key={item} href="/media">
              <Image
                src={item}
                alt="mediaImages"
                className="my-3 mx-3"
                height={150}
                width={150}
              />
            </Link>
          ))}
        </div>
        <ul className="md:hidden px-2">
          <Slider {...settings}>
            <MediaMobile />
            <MediaMobileTwo />
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Media;
