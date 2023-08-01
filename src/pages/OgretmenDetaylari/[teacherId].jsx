import TeacherDetail from '../../Components/TeacherDetail/TeacherDetail';
import Head from 'next/head';
import Layout from '../../Components/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const OgretmenDetay = () => {
  const router = useRouter();

  const [fetchedTeacherData, setFetchedTeacherData] = useState(null);

  console.log(router.query);
  const queryString = router.query.teacherId;

  const parts = queryString?.split('_');

  useEffect(() => {
    if (parts) {
      const url = `https://octopus-app-577yw.ondigitalocean.app/teacher-profile/${parts[1]}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setFetchedTeacherData(data.info);
        })
        .catch((error) => console.log(error));
    }
  }, [router]);

  //query ile gelen id yi alıp ilgili api den fetch edelim
  // const fetchTeacher = (id) => {
  //   // URL'i oluştur
  //   const url = `https://octopus-app-577yw.ondigitalocean.app/find-teacher-homepage?page=${pageIndex}&per_page=${pageNumber}`;

  //   // API'den verileri almak için fetch işlemi
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTeachers(data);
  //       setTeacherCount(data.total);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <Layout>
        <Head>
          <title>Öğretmen Detay</title>
        </Head>
        <section className="points teacher-bul">
          {fetchedTeacherData !== null ? (
            <TeacherDetail
              fetchedTeacherData={fetchedTeacherData}
              urlQuery={queryString}
            />
          ) : (
            <div></div>
          )}
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

export default OgretmenDetay;
