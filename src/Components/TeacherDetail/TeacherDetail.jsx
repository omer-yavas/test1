import PhotoSlider from './PhotoSlider';
import ReferencesPart from './ReferencesPart';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QRCode from 'react-qr-code';
import YouTube, { YouTubeProps } from 'react-youtube';
import ReactPlayer from 'react-player';
import { Whatsup } from './SvgFiles';
import { Facebook } from './SvgFiles';
import { Twitter } from './SvgFiles';
import { Instagram } from './SvgFiles';
import { Linkedin } from './SvgFiles';
import { Envelope } from './SvgFiles';
import { YoutubeSVG } from './SvgFiles';
import { TelephoneIcon } from './SvgFiles';
import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';

const TeacherDetail = ({ fetchedTeacherData, urlQuery }) => {
  const [showSayfayiPaylasModal, setShowSayfayiPaylasModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showLinkCopyMessage, setShowLinkCopyMessage] = useState(false);
  const [photoUrlArray, setPhotoUrlArray] = useState([]);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);

  console.log(fetchedTeacherData);
  const exactUrl = `www.banabiders.com/OgretmenDetaylari/${urlQuery}`;

  useEffect(() => {
    async function fetchURLs() {
      const response = await axios.post(
        'https://octopus-app-577yw.ondigitalocean.app/download-file',
        {
          file_key_list: fetchedTeacherData[44],
        },
        { withCredentials: true }
      );
      setPhotoUrlArray(response.data.url_list);
    }
    if (fetchedTeacherData[44][0]) {
      fetchURLs();
    }
  }, []);

  //QR modal ı aıldığında , profile photo yu fetch etmek için gerekli fonksiyon
  async function fetchProfilePhoto() {
    if (fetchedTeacherData[43][0]) {
      const response = await axios.post(
        'https://octopus-app-577yw.ondigitalocean.app/download-file',
        {
          file_key_list: fetchedTeacherData[43],
        },
        { withCredentials: true }
      );
      setProfilePhotoUrl(response.data.url_list[0]);
    }
  }

  //-----------------------------------------------

  //ilk harfi büyük,diğerlerini küçük yapan fonksiyon
  function capitalizeFirstLetter(str) {
    // Önce tüm karakterleri küçük harfe dönüştürelim.
    const lowerCaseStr = str.toLowerCase();

    // Kelimeleri ayırmak için boşluk karakterine göre bölelim.
    const words = lowerCaseStr.split(' ');

    // Her kelimenin ilk harfini büyük harf yapalım.
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Tüm kelimeleri birleştirip sonuç olarak döndürelim.
    return capitalizedWords.join(' ');
  }

  //-----------------------tecrübe yılını hesaplayan fonksiyon
  //data.info[16] dan gelen özel ders vermeye başlama tarihi ile mevcut yıl arasındaki farkı hesaplayan fonksiyon
  const experienceCalculator = () => {
    let startYear;
    if (fetchedTeacherData[16].length === 0) {
      return 0;
    } else {
      let myString = fetchedTeacherData[16][0];
      const parts = myString.split(/[-]/);
      startYear = parts[0];
      //şimdiki yılı alalım
      const currentDate = new Date();
      const currentYear = Number(currentDate.getFullYear());

      return currentYear - startYear;
    }
  };

  //1 numaralı array de yer alan numarayı istenildiği foormatta dönen fonks,yon
  const telephoneNumberStyler = (inputString) => {
    //string de boşluklar varsa alıyoruz
    const stringWithoutSpaces = inputString.replace(/\s/g, '');
    //şimdi sondan iki karakter alalım
    const lastTwo = stringWithoutSpaces.slice(-2);
    //şimdi sondan üç ve dördüncü karakter alalım
    const thirdAndFourthFromTheLast = stringWithoutSpaces.slice(-4, -2);
    //şimdi sondan beş,altı ve yedinci karakter alalım
    const fifthSixthAndSeventhFromTheLast = stringWithoutSpaces.slice(-7, -4);
    //alan kodunu alalım
    const areaCode = stringWithoutSpaces.slice(-10, -7);

    return (
      <div className="flex gap-x-2 justify-center">
        <TelephoneIcon />
        <span>+90</span>
        <span>{areaCode}</span>
        <span>{fifthSixthAndSeventhFromTheLast}</span>
        <span>{thirdAndFourthFromTheLast}</span>
        <span>{lastTwo}</span>
      </div>
    );
  };

  //öğretmen dersi online yapar mı??
  const checkLessonOnline = () => {
    if (
      fetchedTeacherData[26].includes('online') ||
      fetchedTeacherData[26].includes('Online')
    ) {
      return true;
    } else {
      return false;
    }
  };

  //öğretmen dersi yüzyüze yapar mı??
  const checkLessonFaceToFace = () => {
    if (fetchedTeacherData[26].includes('yüzyüze')) {
      return true;
    } else {
      //geçici olarak true yapıldı, false olacak
      return false;
    }
  };

  //öğretmenin versdiği bütün dersleri isminişn altında listelemek için burada bir array de topluyoruz
  const lessonsGiving = () => {
    let allLessonsToGive = []
      .concat(fetchedTeacherData[20])
      .concat(fetchedTeacherData[21])
      .concat(fetchedTeacherData[22])
      .concat(fetchedTeacherData[23])
      .concat(fetchedTeacherData[24])
      .concat(fetchedTeacherData[25]);

    return allLessonsToGive.join(', ');
  };

  // server dan gelen 'Türkiye-İstanbul-Bakırköy,Bahçelievler,Yenibosna' yapısındaki stringden ili veren fonksiyon
  const cityFinder = (arr) => {
    if (arr.length === 0) {
      return 'İl Belirlenmedi';
    } else {
      let myString = arr[0];
      const parts = myString.split(/[-]/);
      return parts[1];
    }
  };

  const townFinder = (arr) => {
    if (arr.length === 0) {
      return 'İlçe Belirlenmedi';
    } else {
      let myString = arr[0];
      let responseString = '';
      const parts = myString
        .split(/[-,]/)
        .slice(2)
        .map((str, index) => (responseString = `${responseString} ` + str));
      return responseString;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="demo ">
            <div className="teacher-time2">
              <strong>{experienceCalculator()}</strong>
              <span>Yıl</span>
            </div>
            <PhotoSlider photoUrlArray={photoUrlArray} />
          </div>
          <h4>{`${
            fetchedTeacherData[9][0]
              ? capitalizeFirstLetter(fetchedTeacherData[9][0])
              : null
          } ${
            fetchedTeacherData[10][0]
              ? fetchedTeacherData[10][0].toUpperCase()
              : null
          }`}</h4>
          <hr style={{ width: '80px', border: '1px solid #333' }} />
          <h5>{lessonsGiving()}</h5>
          <div className="starr my-2">
            <StarRateIcon style={{ color: '#ff8801' }} />
            <StarRateIcon style={{ color: '#ff8801' }} />
            <StarRateIcon style={{ color: '#ff8801' }} />
            <StarRateIcon style={{ color: '#ff8801' }} />
            <StarRateIcon style={{ color: '#ff8801' }} />
          </div>
          <div className="flex gap-[5px] min-[576px]:max-[768px]:flex-col">
            <div
              className="custom-ghost-btn btn-lg me-2 "
              onClick={() => setShowSayfayiPaylasModal(true)}
            >
              Sayfayı Paylaş
            </div>
            <div
              className="custom-ghost-btn btn-lg me-2 "
              onClick={() => {
                setShowQRModal(true);
                fetchProfilePhoto();
              }}
            >
              QR Kod
            </div>
          </div>
          <h6 className="mt-4 text-[#ff8801]">Sosyal Medya Hesaplarım</h6>
          <div className="flex justify-around my-4 border border-solid border-slate-400 rounded py-2">
            <a
              href={`mailto:${
                fetchedTeacherData[3][0] ? fetchedTeacherData[3][0] : null
              }`}
              target="_blank"
            >
              <Envelope
                assignedColor={fetchedTeacherData[3][0] ? null : '#ccc'}
              />
            </a>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (fetchedTeacherData[5][0]) {
                  window.open(fetchedTeacherData[5][0], '_blank');
                }
              }}
            >
              <Twitter
                assignedColor={fetchedTeacherData[5][0] ? null : '#ccc'}
              />
            </div>
            <div style={{ cursor: 'pointer' }}>
              <Linkedin assignedColor={'#ccc'} />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (fetchedTeacherData[8][0]) {
                  window.open(fetchedTeacherData[8][0], '_blank');
                }
              }}
            >
              <Instagram
                assignedColor={fetchedTeacherData[8][0] ? null : '#ccc'}
              />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (fetchedTeacherData[7][0]) {
                  window.open(fetchedTeacherData[7][0], '_blank');
                }
              }}
            >
              <Facebook
                assignedColor={fetchedTeacherData[7][0] ? null : '#ccc'}
              />
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (fetchedTeacherData[6][0]) {
                  window.open(fetchedTeacherData[6][0], '_blank');
                }
              }}
            >
              <YoutubeSVG
                assignedColor={fetchedTeacherData[8][0] ? null : '#ccc'}
              />
            </div>
          </div>

          <div>
            {fetchedTeacherData[46] && fetchedTeacherData[46][0] ? (
              <ReactPlayer
                url={fetchedTeacherData[46][0]}
                controls={true}
                width={
                  window.innerWidth <= 576
                    ? `90vw`
                    : 'calc((100vw - 200px) / 3)'
                }

                // width={'min-[576px]:calc((100vw - 200px) / 3)'}
              />
            ) : (
              <p className="text-center">Henüz Video Yüklenmemiştir</p>
            )}
          </div>

          <div className="button mt-3 d-flex justify-content-around text-center d-none d-sm-block">
            <p className="text-center bg-light p-2">
              {fetchedTeacherData[1][0] ? (
                telephoneNumberStyler(fetchedTeacherData[1][0])
              ) : (
                <p className="text-center">Telefon Numarası Bulunmamaktadır</p>
              )}
            </p>
            <a
              className="custom-ghost-btn btn-lg me-2"
              href={`tel:${
                fetchedTeacherData[1][0] ? fetchedTeacherData[1][0] : null
              }`}
              target="_blank"
            >
              <i className="fa-light fa-phone"></i>
              HEMEN ARA
            </a>
            <a
              className="custom-ghost-btn-green btn-lg ms-2"
              href={`https://wa.me/${
                fetchedTeacherData[4][0] ? fetchedTeacherData[4][0] : null
              }?text=Merhaba Öğretmenim;
              BanaBiDers.com web sitesi üzerinden size ulaşıyorum. Uygun olunca beni arar mısınız?`}
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i> MESAJ AT
            </a>
          </div>
          <div
            className="button mt-3 d-flex justify-content-between d-block d-sm-none position-fixed bg-white w-100 p-3"
            style={{ zIndex: '999', left: '0', bottom: '0' }}
          >
            <a
              className="custom-ghost-btn btn-lg"
              href={`tel:${
                fetchedTeacherData[1][0] ? fetchedTeacherData[1][0] : null
              }`}
              target="_blank"
            >
              <i className="fa-light fa-phone"></i>
              HEMEN ARA
            </a>
            <a
              className="custom-ghost-btn-green btn-lg"
              href={`https://wa.me/${
                fetchedTeacherData[4][0] ? fetchedTeacherData[4][0] : null
              }?text=Merhaba Öğretmenim;
              BanaBiDers.com web sitesi üzerinden size ulaşıyorum. Uygun olunca beni arar mısınız?`}
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp"></i> MESAJ AT
            </a>
          </div>

          <div className="who-am-i mt-4 bg-light p-3 mb-4 border">
            <h4>Kendimi Tanıtayım.</h4>
            <hr style={{ width: '80px', border: '1px solid #333' }} />
            {fetchedTeacherData[41][0] ? (
              <p>{fetchedTeacherData[41][0]}</p>
            ) : null}
          </div>
        </div>

        <div className="col-sm-8">
          <div className="teacher-info-detail">
            <h6>Dersi nasıl yaparım?</h6>
            <ul className="list-group mb-5">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultChecked={checkLessonOnline()}
                  disabled
                  value=""
                />
                Online
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultChecked={checkLessonFaceToFace()}
                  disabled
                  value=""
                />
                Yüzyüze
              </li>
            </ul>
            {/*Yüz yüze ders yapmayı seçtiyse burası görünecek */}
            {checkLessonFaceToFace() === true ? (
              <>
                <h6>Yüz yüze dersleri nerede yaparım?</h6>
                <ul className="list-group mb-5">
                  <li className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultChecked={fetchedTeacherData[27].includes(
                        'ofisimde'
                      )}
                      disabled
                      value=""
                    />
                    Benim evimde / ofisimde
                    <p>
                      <span style={{ color: '#868789', fontSize: '1em' }}>
                        <PlaceIcon style={{ color: '#ff8801' }} />
                        Türkiye /{' '}
                        {fetchedTeacherData[30][0]
                          ? `${cityFinder(
                              fetchedTeacherData[30]
                            )} / ${townFinder(fetchedTeacherData[30])}`
                          : ''}
                      </span>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultChecked={fetchedTeacherData[27].includes(
                        'ogrencievinde'
                      )}
                      disabled
                      value=""
                    />
                    Öğrencinin evinde
                    <p>
                      <span style={{ color: '#868789', fontSize: '1em' }}>
                        <PlaceIcon style={{ color: '#ff8801' }} />
                        Türkiye /
                        {fetchedTeacherData[28][0]
                          ? `${cityFinder(
                              fetchedTeacherData[28]
                            )} / ${townFinder(fetchedTeacherData[28])}`
                          : ''}
                      </span>
                    </p>
                  </li>
                </ul>
              </>
            ) : null}

            <h6>Hangi gruplara özel ders veririm?</h6>
            <ul className="list-group mb-5">
              {fetchedTeacherData[17].map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      checked
                      disabled
                      value=""
                    />
                    {item}
                  </li>
                );
              })}
            </ul>

            <h6>İlkelerim ve Kampanyalarım</h6>
            <ul className="list-group mb-5">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked
                  disabled
                  value=""
                />
                Ücretsiz tanışma dersi yaparım.
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked
                  disabled
                  value=""
                />
                Memnun değilse dersin ücretini almam.
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked
                  disabled
                  value=""
                />
                Özel ders sonrası ödev veririm.
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked
                  disabled
                  value=""
                />
                Ders dışında öğrenciye rehberlik yaparım.
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  checked
                  disabled
                  value=""
                />
                Öğrenilmeyen dersi ücretsiz tekrar ederim.
              </li>
            </ul>

            {/*Burada eğitim varsa görünecek , yooksa ilgili seviye gözükmeyecek */}
            <h6>Eğitimim</h6>

            <ul className="list-group mb-5">
              {fetchedTeacherData[36][0] ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Lise
                  <span className="badge bg-primary rounded-pill">
                    {fetchedTeacherData[36][0]}
                  </span>
                </li>
              ) : null}
              {fetchedTeacherData[37][0] ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Üniversite
                  <span className="badge bg-primary rounded-pill">
                    {fetchedTeacherData[37][0]}
                  </span>
                </li>
              ) : null}
              {fetchedTeacherData[38][0] ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Yüksek lisans
                  <span className="badge bg-primary rounded-pill">
                    {fetchedTeacherData[38][0]}
                  </span>
                </li>
              ) : null}
              {fetchedTeacherData[39][0] ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Doktora
                  <span className="badge bg-primary rounded-pill">
                    {fetchedTeacherData[39][0]}
                  </span>
                </li>
              ) : null}
              {fetchedTeacherData[36][0] === undefined &&
              fetchedTeacherData[37][0] === undefined &&
              fetchedTeacherData[38][0] === undefined &&
              fetchedTeacherData[39][0] === undefined ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="invisible">Veri Yok</span>
                </li>
              ) : null}
            </ul>

            <h6>Çalıştığım kurumlar</h6>
            <ol className="mb-5 list-group list-group-numbered">
              {fetchedTeacherData[35].map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                );
              })}
              {fetchedTeacherData[35][0] === undefined ? (
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="invisible">Veri Yok</span>
                  </li>
                </ul>
              ) : null}
            </ol>

            <h6>Hangi cinsiyetteki öğrencilere ders veririm?</h6>
            <ul className="list-group mb-5">
              {fetchedTeacherData[13].includes('Farketmez') ? (
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    defaultChecked={true}
                    disabled
                    value=""
                  />
                  Farketmez
                </li>
              ) : null}
              {!fetchedTeacherData[13].includes('Farketmez') ? (
                <>
                  {' '}
                  <li className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultChecked={fetchedTeacherData[13].includes('Kadın')}
                      disabled
                      value=""
                    />
                    Kadın
                  </li>
                  <li className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultChecked={fetchedTeacherData[13].includes('Erkek')}
                      disabled
                      value=""
                    />
                    Erkek
                  </li>
                </>
              ) : null}
            </ul>
            <h6>Kimlere ders veririm?</h6>

            <ul className="list-group mb-5">
              {fetchedTeacherData[18].map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      checked
                      value=""
                    />
                    {item}
                  </li>
                );
              })}
            </ul>

            <h6>Ders Ücretleri ?</h6>
            <ul className="list-group mb-5">
              {checkLessonOnline() === true ? (
                <li className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        checked
                        value=""
                      />
                      ONLINE 45dk ders?
                    </span>
                    <span className="badge bg-primary rounded-pill">
                      {fetchedTeacherData[32][0]
                        ? `${fetchedTeacherData[32][0]} ${fetchedTeacherData[31][0]}`
                        : null}
                    </span>
                  </div>
                </li>
              ) : null}
              {/**Eğer yüzyüze işaretli değilse bu kısım görülmewmeli, çünkü yüzyüze ders vermeyecek */}
              {checkLessonFaceToFace() ? (
                <>
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultChecked={fetchedTeacherData[27].includes(
                            'ofisimde'
                          )}
                          disabled
                          value=""
                        />
                        <span>EVİMDE/OFİSİMDE 45dk ders?</span>
                      </span>
                      <span className="badge bg-primary rounded-pill">
                        {fetchedTeacherData[33][0]
                          ? `${fetchedTeacherData[33][0]} ${fetchedTeacherData[31][0]}`
                          : null}
                      </span>
                    </div>
                    <p className="mb-0">
                      <span style={{ color: '#868789', fontSize: '1em' }}>
                        <PlaceIcon style={{ color: '#ff8801' }} />
                        Türkiye /
                        {fetchedTeacherData[30][0]
                          ? `${cityFinder(
                              fetchedTeacherData[30]
                            )} / ${townFinder(fetchedTeacherData[30])}`
                          : ''}
                      </span>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultChecked={fetchedTeacherData[27].includes(
                            'ogrencievinde'
                          )}
                          disabled
                          value=""
                        />
                        <span>ÖĞRENCİNİN EVİNDE 45dk ?</span>
                      </span>

                      <span className="badge bg-primary rounded-pill">
                        {fetchedTeacherData[34][0]
                          ? `${fetchedTeacherData[34][0]} ${fetchedTeacherData[31][0]}`
                          : null}
                      </span>
                    </div>
                    <p className="mb-0">
                      <span style={{ color: '#868789', fontSize: '1em' }}>
                        <PlaceIcon style={{ color: '#ff8801' }} />
                        Türkiye /{' '}
                        {fetchedTeacherData[28][0]
                          ? `${cityFinder(
                              fetchedTeacherData[28]
                            )} / ${townFinder(fetchedTeacherData[28])}`
                          : ''}
                      </span>
                    </p>
                  </li>
                </>
              ) : null}
              {!checkLessonFaceToFace() && !checkLessonOnline() ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="invisible">Veri Yok</span>
                </li>
              ) : null}
            </ul>
            {checkLessonOnline() ? (
              <>
                <h6>Online derslerimi hangi program ile yaparım?</h6>
                <ul className="list-group mb-5">
                  {fetchedTeacherData[29].map((item, index) => {
                    return (
                      <li key={index} className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultChecked={true}
                          disabled
                          value=""
                        />
                        {item}
                      </li>
                    );
                  })}
                  {fetchedTeacherData[29][0] === undefined ? (
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <span className="invisible">Veri Yok</span>
                    </li>
                  ) : null}
                </ul>
              </>
            ) : null}

            <h6>Özel dersi hangi dillerde veririm?</h6>
            <ul className="list-group mb-5">
              {fetchedTeacherData[19].map((item, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      checked
                      disabled
                      value=""
                    />
                    {item}
                  </li>
                );
              })}
              {fetchedTeacherData[19][0] === undefined ? (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="invisible">Veri Yok</span>
                </li>
              ) : null}
            </ul>

            <h6>Yazdığım eserler</h6>
            <ol className="mb-5 list-group list-group-numbered">
              {fetchedTeacherData[42][0]
                ? fetchedTeacherData[42].map((item, index) => {
                    return (
                      <li key={index} className="list-group-item">
                        {item}
                      </li>
                    );
                  })
                : null}
              {fetchedTeacherData[42][0] === undefined ? (
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="invisible">Veri Yok</span>
                  </li>
                </ul>
              ) : null}
            </ol>

            <h6>Arabam var mı?</h6>
            <ol className="list-group mb-5">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultChecked={fetchedTeacherData[15].includes('Var')}
                  disabled
                  value=""
                />
                Evet
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultChecked={fetchedTeacherData[15].includes('Yok')}
                  disabled
                  value=""
                />
                Hayır
              </li>
            </ol>

            <h6>Referanslarım</h6>
            {/*Referanslarım 10 adet default satır her durumda görünecek, yoksa bile boş olarak görünecek */}
            <ReferencesPart arrayOfRefs={fetchedTeacherData[40]} />

            <h4>{`${
              fetchedTeacherData[9][0]
                ? capitalizeFirstLetter(fetchedTeacherData[9][0])
                : null
            } ${
              fetchedTeacherData[10][0]
                ? fetchedTeacherData[10][0].toUpperCase()
                : null
            }`}</h4>
            <hr style={{ width: '80px', border: '1px solid #333' }} />
            <h5>{lessonsGiving()}</h5>
            <div className="starr my-2">
              <StarRateIcon style={{ color: '#ff8801' }} />
              <StarRateIcon style={{ color: '#ff8801' }} />
              <StarRateIcon style={{ color: '#ff8801' }} />
              <StarRateIcon style={{ color: '#ff8801' }} />
              <StarRateIcon style={{ color: '#ff8801' }} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showSayfayiPaylasModal}
        onHide={() => {
          setShowSayfayiPaylasModal(false);
          setShowLinkCopyMessage(false);
        }}
        centered
      >
        <Modal.Header
          style={{
            position: 'relative',
            borderBottom: '0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              width: '90px',
              height: '90px',
              borderRadius: '40px',
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '40px',
                background: '#ff8801',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ShareIcon style={{ color: 'white' }} />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div></div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-3">
            <div
              style={{ cursor: 'pointer' }}
              className="flex gap-2"
              onClick={() => {
                window.open(
                  'https://twitter.com/intent/tweet?text=Bu%20%C3%B6%C4%9Fretmenin%20web%20sayfas%C4%B1n%C4%B1%20ziyaret%20ediniz&url=https://www.banabiders.com/dynamic_part.html',
                  '_blank'
                );
              }}
            >
              <Whatsup />
              <span>Whatsapp</span>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              className="flex gap-2"
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${exactUrl}`,
                  '_blank'
                );
              }}
            >
              <Facebook />
              <span>Facebook</span>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              className="flex gap-2"
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?text=Bu%20%C3%B6%C4%9Fretmenin%20web%20sayfas%C4%B1n%C4%B1%20ziyaret%20ediniz&url=${exactUrl}`,
                  '_blank'
                );
              }}
            >
              <Twitter />
              <span>Twitter</span>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              className="flex gap-2"
              onClick={() => {
                window.open(
                  'https://twitter.com/intent/tweet?text=Bu%20%C3%B6%C4%9Fretmenin%20web%20sayfas%C4%B1n%C4%B1%20ziyaret%20ediniz&url=https://www.banabiders.com/dynamic_part.html',
                  '_blank'
                );
              }}
            >
              <Instagram />
              <span>Instagram</span>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              className="flex gap-2"
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}',
                  '_blank'
                );
              }}
            >
              <Linkedin />
              <span>Linkedin</span>
            </div>
            <div style={{ cursor: 'pointer' }} className="flex gap-2">
              <Envelope />
              <span>E-posta</span>
            </div>
          </div>
          <div className="flex gap-2 items-center my-3">
            <div className="border-solid border-2 px-4 max-w-[900px] overflow-x-auto">
              {exactUrl}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigator.clipboard.writeText(exactUrl).then(
                  () => {
                    setShowLinkCopyMessage(true);
                  },
                  () => {
                    console.log('kopyalama başarısız');
                  }
                );
              }}
            >
              <ContentCopyIcon />
            </div>
          </div>
          {showLinkCopyMessage ? (
            <p className="mt-4 font-semibold">Link Kopyalandı</p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShowSayfayiPaylasModal(false);
              setShowLinkCopyMessage(false);
            }}
            variant="secondary"
          >
            Vazgeç
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showQRModal} onHide={() => setShowQRModal(false)} centered>
        <Modal.Header
          style={{
            position: 'relative',
            borderBottom: '0',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              width: '90px',
              height: '90px',
              borderRadius: '40px',
              background: '#ff8801',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              border: '2px solid #ff8801',
            }}
          >
            {profilePhotoUrl ? (
              <img src={profilePhotoUrl} alt="profil fotoğrafı" />
            ) : null}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div
              style={{
                height: 'auto',
                margin: '2rem auto',
                maxWidth: 128,
                width: '100%',
              }}
            >
              <QRCode
                size={512}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={exactUrl}
                viewBox={`0 0 512 512`}
              />
            </div>
          </div>
          <div className="flex gap-2 mb-4 items-center">
            <div className="border-solid border-2 px-4 max-w-[900px] overflow-x-auto">
              {exactUrl}
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigator.clipboard.writeText(exactUrl).then(
                  () => {
                    setShowLinkCopyMessage(true);
                  },
                  () => {
                    console.log('kopyalama başarısız');
                  }
                );
              }}
            >
              <ContentCopyIcon />
            </div>
          </div>
          <div className="flex justify-between py-2.5 px-2.5 border-solid border-2 rounded mt-2">
            <div>
              <h4>{`${
                fetchedTeacherData[9][0]
                  ? capitalizeFirstLetter(fetchedTeacherData[9][0])
                  : null
              } ${
                fetchedTeacherData[10][0]
                  ? fetchedTeacherData[10][0].toUpperCase()
                  : null
              }`}</h4>
              <h5>{lessonsGiving()}</h5>
            </div>
            <div
              style={{
                backgroundColor: '#ff8801',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                textAlign: 'center',
              }}
            >
              <strong
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  display: 'block',
                  color: '#FFF',
                }}
              >
                {experienceCalculator()}
              </strong>
              <span
                style={{
                  display: 'block',
                  color: '#FFF',
                  fontSize: '.75em',
                  marginTop: '-5px',
                }}
              >
                YIL
              </span>
            </div>
          </div>
          {showLinkCopyMessage ? (
            <p className="mt-4 font-semibold">Link Kopyalandı</p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShowQRModal(false);
              setShowLinkCopyMessage(false);
            }}
            variant="secondary"
          >
            Vazgeç
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeacherDetail;
