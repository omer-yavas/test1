import { Slider } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function valuetext(value) {
  return `${value}°C`;
}
const DetailedSearchForm = () => {
  const [value, setValue] = useState([20, 37]);

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="col-lg-3 filter-column p-3 rounded-3 mb-3">
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Öğretmenin Eğitimi</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultaa"
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultaa">
              Lisans
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultbb"
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultbb">
              Yüksek Lisans
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaultcc"
            />
            <label className="form-check-label" htmlFor="flexCheckDefaultcc">
              Doktora
            </label>
          </div>
        </div>
        <h6 className="mb-3 text-banabi">Tecrübe Yılı</h6>
        <div className="d-flex justify-content-between align-items-center w-75 mb-5">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={50}
          />
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi"> Ders nerede yapılsın</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ogrhome"
            />
            <label className="form-check-label" htmlFor="ogrhome">
              Öğrencinin Evinde
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="teachome"
            />
            <label className="form-check-label" htmlFor="teachome">
              Öğretmenin Evinde / Ofisinde
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi"> Öğretmenin Cisiyeti</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="cinsiyet"
            />
            <label className="form-check-label" htmlFor="cinsiyet">
              Kadın
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="bay"
            />
            <label className="form-check-label" htmlFor="bay">
              Erkek
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Referans verme durumu</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="vart"
            />
            <label className="form-check-label" htmlFor="vart">
              Referansı var
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="yok"
            />
            <label className="form-check-label" htmlFor="yok">
              Referansı Yok
            </label>
          </div>
        </div>
        <h6 className="mb-3 text-banabi">Yaş aralığı</h6>
        <div className="d-flex justify-content-between align-items-center w-75 mb-5">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={20}
            max={80}
          />
        </div>
        <h6 className="mb-3 text-banabi">Fiyat aralığı(Online)</h6>
        <div className="d-flex justify-content-between align-items-center w-75 mb-5">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={250}
            max={900}
          />
        </div>
        <h6 className="mb-3 text-banabi">Fiyat aralığı(Öğrencinin evinde)</h6>
        <div className="d-flex justify-content-between align-items-center w-75 mb-5">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={250}
            max={900}
          />
        </div>
        <h6 className="mb-3 text-banabi">
          Fiyat aralığı(Öğretmenin Evinde/Ofisinde)
        </h6>
        <div className="d-flex justify-content-between align-items-center w-75 mb-5">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={250}
            max={900}
          />
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Yazdığı eser var mı?</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="ogrselect"
              id="ogrselect"
            />
            <label className="form-check-label" htmlFor="ogrselect">
              Var
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="ogrselect"
              id="select2"
            />
            <label className=" form-check-label" htmlFor="select2">
              Yok
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Hangi gruplara özel ders veriyor</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="okuladestek"
            />
            <label className="form-check-label" htmlFor="okuladestek">
              Okula destek
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="shaz"
            />
            <label className="form-check-label" htmlFor="shaz">
              Sınavlara Hazırlık
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ysinav"
            />
            <label className="form-check-label" htmlFor="ysinav">
              Yurtdışı Sınavlarına Hazırlık
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="konist"
            />
            <label className="form-check-label" htmlFor="konist">
              Yabancı dil konuşmak / öğrenmek isteyenlere
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Kullandığı sosyal medyalar</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="twitter"
            />
            <label className="form-check-label" htmlFor="twitter">
              Twitter
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="li"
            />
            <label className="form-check-label" htmlFor="li">
              Linkedin
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="youtube"
            />
            <label className="form-check-label" htmlFor="youtube">
              Youtube
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="face"
            />
            <label className="form-check-label" htmlFor="face">
              Facebook
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="insta"
            />
            <label className="form-check-label" htmlFor="insta">
              Instagram
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Kampanyaları</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="tanisma"
            />
            <label className="form-check-label" htmlFor="tanisma">
              Ücretsiz tanışma dersi yaparım
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="free"
            />
            <label className="form-check-label" htmlFor="free">
              Memnun değilse ders ücretini almam
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ozelders"
            />
            <label className="form-check-label" htmlFor="ozelders">
              Özel ders sonrası ödev veririm
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rehber"
            />
            <label className="form-check-label" htmlFor="rehber">
              Ders dışında öğrenciye rehberlik yaparım
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ucr"
            />
            <label className="form-check-label" htmlFor="ucr">
              Öğrenilmeyen dersi ücretsiz tekrar ederim
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Online dersin yapıldığı program</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="zoom"
            />
            <label className="form-check-label" htmlFor="zoom">
              Zoom
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ws"
            />
            <label className="form-check-label" htmlFor="ws">
              Whatsapp
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="teams"
            />
            <label className="form-check-label" htmlFor="teams">
              Microsoft Teams
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="meet"
            />
            <label className="form-check-label" htmlFor="meet">
              Google Meet
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="per"
            />
            <label className="form-check-label" htmlFor="per">
              Perculus
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="uzep"
            />
            <label className="form-check-label" htmlFor="uzep">
              UZEP
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Arabası var mı?</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="ogrselect"
              id="arabav"
            />
            <label className="form-check-label" htmlFor="arabav">
              Var
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="ogrselect"
              id="arabay"
            />
            <label className=" form-check-label" htmlFor="arabay">
              Yok
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Dersi hangi dilde verir?</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="tr"
            />
            <label className="form-check-label" htmlFor="tr">
              Türkçe
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ing"
            />
            <label className="form-check-label" htmlFor="ing">
              İnglizce
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="alm"
            />
            <label className="form-check-label" htmlFor="alm">
              Almanca
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ru"
            />
            <label className="form-check-label" htmlFor="ru">
              Rusça
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fr"
            />
            <label className="form-check-label" htmlFor="fr">
              Fransızca
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ar"
            />
            <label className="form-check-label" htmlFor="ar">
              Arapça
            </label>
          </div>
        </div>
        <div className="group mb-5">
          <h6 className="mb-3 text-banabi">Uyruğu</h6>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="turk"
            />
            <label className="form-check-label" htmlFor="turk">
              Türkiye
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="usa"
            />
            <label className="form-check-label" htmlFor="usa">
              USA
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="ingiliz"
            />
            <label className="form-check-label" htmlFor="ingiliz">
              İngiltere
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="german"
            />
            <label className="form-check-label" htmlFor="german">
              Almanya
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fre"
            />
            <label className="form-check-label" htmlFor="fre">
              Fransız
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="rus"
            />
            <label className="form-check-label" htmlFor="rus">
              Rusya
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedSearchForm;
