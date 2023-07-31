import Teacher from '@/Components/Teacher';
import Head from 'next/head';
import Portal from '@/Modal/Portal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetchCitiesAndCounties from '@/Components/TeacherRegisterForm/fetchCountries';
import Layout from '@/Components/Layout';
import DetailedSearchForm from '@/Components/FindTeacher/detailedSearchForm';
import { useMediaQuery } from '@mui/material';
import SearchModal from '@/Components/FindTeacher/modal/searchModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import classes from '../../styles/OgretmenBul.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FindTeacher = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [pageNumber, setPageNumber] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [teacherCount, setTeacherCount] = useState(0);
  const [fileKeyList, setFileKeyList] = useState([]);
  const [keyURLMatches, setKeyURLMatches] = useState([]);

  useEffect(() => {
    fetchTeachers(pageNumber, pageIndex);
  }, []);

  const theme = createTheme({
    palette: {
      primary: { main: '#ff8801' },
    },
  });

  const fetchTeachers = (pageNumber, pageIndex) => {
    // URL'i oluştur
    const url = `https://octopus-app-577yw.ondigitalocean.app/find-teacher-homepage?page=${pageIndex}&per_page=${pageNumber}`;

    // API'den verileri almak için fetch işlemi
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
        setTeacherCount(data.total);
        console.log(data);
        let fileKeyArr = [];
        data['teacher_array'].map((item) => {
          if (item.info[43][0]) {
            fileKeyArr.push(item.info[43][0]);
          } else {
            fileKeyArr.push(null);
          }
        });
        console.log(fileKeyArr);
        setFileKeyList(fileKeyArr);
      })
      .catch((error) => console.log(error));
  };

  //Eğer FileKey list boş değilse, yani fetch edilen teacher ların profil fotoları varsa, 43. array den dönen

  useEffect(() => {
    if (
      fileKeyList.length > 0 &&
      fileKeyList.filter((item) => item !== null).length > 0
    ) {
      async function fetchURLs() {
        //fileKeyList state indeki null olmayan keyleri topluyoruz, ki karşılık gelen url ler için fetch yapalım
        let keyList = fileKeyList
          .filter((item) => item !== null)
          .filter((item) => item.includes(';'));

        const response = await axios.post(
          'https://octopus-app-577yw.ondigitalocean.app/download-file',
          {
            file_key_list: keyList,
          },
          { withCredentials: true }
        );
        console.log(response);

        //keyList arrayine karşılık gelen URL ler response.data.url_list içinde var
        //şimdi teacher 43 te yer alan data ; keyLİst te kaçıncı index te ise bulmalı, o index değerini
        //response.data.url_list içinde uygulamalı
        let match = [];
        for (let i = 0; i < keyList.length; i++) {
          match.push({ ourKey: keyList[i], url: response.data.url_list[i] });
        }
        setKeyURLMatches(match);
      }
      fetchURLs();
    }
  }, [fileKeyList]);

  //verilen key e göre URL bulan fonksiyon için keyURLMatches state ine bakıyoruz
  const URLFinder = (ourKey) => {
    console.log(ourKey);
    if (ourKey && ourKey.includes(';')) {
      const [relatedObj] = keyURLMatches.filter(
        (item) => item.ourKey === ourKey
      );
      if (relatedObj) {
        return relatedObj.url;
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  //gelen datanın server da toplam sayısına göre (örn 12 veri gelmiş olsa da server da 56 tane olabilir) sayfa hesaplayan fonk
  const paginationPageCalculator = () => {
    if (teacherCount <= pageNumber) {
      return 1;
    } else {
      return Math.floor(teacherCount / pageNumber);
    }
  };

  const paginationSelectHandle = (e, value) => {
    setPageIndex(value);
    fetchTeachers(pageNumber, value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleCountyChange = (event) => {
    setSelectedCounty(event.target.value);
  };
  const { cities, counties } = useFetchCitiesAndCounties(selectedCity);
  const [detailedSearch, setDetailedSearch] = useState(false);

  const searchHandler = () => {
    setDetailedSearch((prev) => !prev);
  };

  const isScreenWide = useMediaQuery('(min-width: 768px)');
  const isMobile = !isScreenWide;

  return (
    <>
      <Layout>
        <Head>
          <title>BanaBiDers İyi Gelecek</title>
        </Head>

        <section className="points teacher-bul mt-0">
          <div className="container">
            <div className="ogretmen-bul-filter">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-sm-4 mb-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Online
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Yüzyüze
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-4 mb-2">
                    <select
                      className="form-select mb-2"
                      aria-label="Default select example"
                    >
                      <option value>Nerede Okuyorsunuz?</option>
                      <option value="1">İlkokuldayım</option>
                      <option value="2">Ortaokuldayım</option>
                      <option value="3">Lisedeyim</option>
                      <option value="4">Lise mezunuyum</option>
                      <option value="5">Üniversitedeyim</option>
                      <option value="6">Üniversite mezunuyum</option>
                    </select>
                    <select
                      className="form-select "
                      aria-label="Default select example"
                    >
                      <option selected>Hangi dersi istiyorsunuz?</option>
                      <option value="1">Matematik</option>
                      <option value="2">Kimya</option>
                      <option value="3">Fizik</option>
                      <option value="3">Tarih</option>
                    </select>
                  </div>

                  <div className="col-sm-4 mb-2">
                    <select
                      className="form-select mb-2"
                      aria-label="Default select example"
                      value={selectedCity}
                      onChange={handleCityChange}
                    >
                      <option value="">İl seçiniz</option>
                      {cities?.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select mb-2"
                      aria-label="Default select example"
                      value={selectedCounty}
                      onChange={handleCountyChange}
                    >
                      <option value="">İlçe seçiniz</option>
                      {counties?.map((county) => (
                        <option key={county.name} value={county.name}>
                          {county.name}
                        </option>
                      ))}
                    </select>
                    <button onClick={searchHandler}>Detaylı arama</button>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="button text-center">
                      <a
                        className="custom-btn"
                        href="ogretmen-bul.html"
                        target="_blank"
                      >
                        <i className="fa-light fa-magnifying-glass"></i>{' '}
                        Öğretmen Bul
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Detailed Search Section */}
            {isMobile && detailedSearch && (
              <Portal>
                <SearchModal />
              </Portal>
            )}
            <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-8">
              {detailedSearch && !isMobile && <DetailedSearchForm />}

              {/* Detailed Search Section End*/}
              {/* Teacher Search Start */}
              <div className="grid grid-cols-1 min-[576px]:grid-cols-2 min-[992px]:grid-cols-3 gap-x-6 gap-y-4 ">
                {/*multipleFakeData.map((teacherData, index) => (  */}
                {teachers.teacher_array?.map((teacherData, index) => (
                  <Teacher
                    key={index}
                    data={teacherData}
                    usercode={teacherData.username}
                    url={URLFinder(teacherData.info[43][0])}
                  />
                ))}
              </div>
              {/* Teacher Search End */}
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" hidden min-[576px]:block min-[576px]:mt-8">
              <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                  <Pagination
                    count={paginationPageCalculator()}
                    color="primary"
                    onChange={(e, value) => paginationSelectHandle(e, value)}
                  />
                </Stack>
              </ThemeProvider>
            </div>
          </div>
        </section>

        <footer className="footer pb-5">
          <hr />
          <div className="copyright mt-3 pt-4 text-center">
            copyright © 2022 banabiders.com iyi gelecek
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default FindTeacher;
