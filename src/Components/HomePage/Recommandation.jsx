import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Recommandation = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center">
            <h2 style={{ color: "var(--siyah)" }}>
              <strong>Veliler, öğrenciler ve uzmanlar tavsiye ediyor.</strong>
            </h2>
            <h2 className="mb-3" style={{ color: "var(--siyah)" }}>
              <strong>
                Herkes Bana
                <span style={{ color: "var(--siyah)" }}>Bi</span>Ders’e
                Güveniyor
              </strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-none d-sm-none d-md-none d-lg-flex d-lg-block">
        <div className="col">
          <div className="card p-3 text-center">
            <img src="/meltem.jpg" alt="recommendImage" className="mx-auto" />
            <div className="card-body">
              <h5 className="card-title">Meltem KAYA</h5>
              <h6 style={{ color: "var(--siyah)" }}>
                Boğaziçi Üni./Endüstri Müh.
              </h6>
              <h6 className="mt-5">
                <strong>Tecrübeli ve ilgili öğretmenler</strong>
              </h6>
              <p className="card-text">
                Okuldaki bazı konularda zorluk yaşadım. Güvenebileceğim
                öğretmenlerden özel ders almaya karar verdim. Öğretmen ararken
                BanaBiDers sitesini tavsiye ettiler. Öğretmenler tecrübeli ve
                ilgiliydi. Bana çok yardımcı oldular. Gönül rahatlığı ile ben de
                tavsiye ediyorum.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 text-center">
            <img src="/ceylan.jpg" alt="recommendImage" className="mx-auto" />
            <div className="card-body">
              <h5 className="card-title">Ceylan DEMİR</h5>
              <h6 style={{ color: "var(--siyah)" }}>Öğrenci Velisi</h6>
              <h6 className="mt-5">
                <strong>Mutluyuz</strong>
              </h6>
              <p className="card-text">
                Biz de çocuğumuzun iyi bir yer kazanmasını istiyorduk. Bunun
                için gereken fedakarlığı yaptık. En zor şey doğru öğretmenleri
                bulmaktı. BanaBiDers’te onaylı öğretmenlerden ders aldık.
                Tecrübe ve ilgileriyle denemelerde netlerimiz yükseldi. Çocuğuma
                koçluk da yapıyorlardı. Evde ders için tartışmalarımız bitti.
                Çocuğum istediği yeri kazandı. Çok mutluyuz. Teşekkürler
                BanaBiDers.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-3 text-center">
            <img src="/ahmet.jpg" alt="recommendImage" className="mx-auto" />
            <div className="card-body">
              <h5 className="card-title">Ahmet BAL</h5>
              <h6 style={{ color: "var(--siyah)" }}>Eğitimci Yazar</h6>
              <h6 className="mt-5">
                <strong>BanaBiDers’i tebrik ediyorum</strong>
              </h6>
              <p className="card-text">
                Öğrenciler okul dersleri ve sınavlara hazırlık için özel derse
                ihtiyaç duyabilirler. Veliler çocuklarının iyi bir eğitim
                almasını isterler. BanaBiDers tecrübeli ve iletişim becerileri
                yüksek öğretmenlerin, rehberlerin ve koçların bir araya geldiği
                bir web sitesi. Tebrik ediyorum ve başarılar diliyorum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-block d-sm-block d-md-block d-lg-none border py-2 px-3  border-black">
        <ul id="flexiselComments">
          <Slider {...settings}>
            <li className="gift-item">
              <div className="col">
                <div className="text-center">
                  <img
                    src="/meltem.jpg"
                    alt="recommendImage"
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Meltem KAYA</h5>
                    <h6 style={{ color: "var(--siyah)" }}>
                      Boğaziçi Üni./Endüstri Müh.
                    </h6>
                    <h6>
                      <strong>Tecrübeli ve ilgili öğretmenler</strong>
                    </h6>
                    <p className="card-text">
                      Okuldaki bazı konularda zorluk yaşadım. Güvenebileceğim
                      öğretmenlerden özel ders almaya karar verdim. Öğretmen
                      ararken BanaBiDers sitesini tavsiye ettiler. Öğretmenler
                      tecrübeli ve ilgiliydi. Bana çok yardımcı oldular. Gönül
                      rahatlığı ile ben de tavsiye ediyorum.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="gift-item">
              <div className="col">
                <div className="text-center">
                  <img
                    src="/ceylan.jpg"
                    alt="recommendImage"
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Ceylan DEMİR</h5>
                    <h6 style={{ color: "var(--siyah)" }}>Öğrenci Velisi</h6>
                    <h6>
                      <strong>Mutluyuz</strong>
                    </h6>
                    <p className="card-text">
                      Biz de çocuğumuzun iyi bir yer kazanmasını istiyorduk.
                      Bunun için gereken fedakarlığı yaptık. En zor şey doğru
                      öğretmenleri bulmaktı. BanaBiDers’te onaylı öğretmenlerden
                      ders aldık. Tecrübe ve ilgileriyle denemelerde netlerimiz
                      yükseldi. Çocuğuma koçluk da yapıyorlardı. Evde ders için
                      tartışmalarımız bitti. Çocuğum istediği yeri kazandı. Çok
                      mutluyuz. Teşekkürler BanaBiDers.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="gift-item">
              <div className="col">
                <div className="text-center">
                  <img
                    src="/ahmet.jpg"
                    alt="recommendImage"
                    className="mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Ahmet BAL</h5>
                    <h6 style={{ color: "var(--siyah)" }}>Eğitimci Yazar</h6>
                    <h6>
                      <strong>BanaBiDers’i tebrik ediyorum</strong>
                    </h6>
                    <p className="card-text">
                      Öğrenciler okul dersleri ve sınavlara hazırlık için özel
                      derse ihtiyaç duyabilirler. Veliler çocuklarının iyi bir
                      eğitim almasını isterler. BanaBiDers tecrübeli ve iletişim
                      becerileri yüksek öğretmenlerin, rehberlerin ve koçların
                      bir araya geldiği bir web sitesi. Tebrik ediyorum ve
                      başarılar diliyorum.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default Recommandation;
