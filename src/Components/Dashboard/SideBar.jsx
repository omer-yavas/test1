import Link from 'next/link';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const SideBar = () => {
  const links = [
    { href: '/dashboard', text: 'İletişim / Sosyal Medyalar' },
    { href: '/dashboard/personalinfo', text: 'Kişisel Bilgiler' },
    { href: '/dashboard/teachlessons', text: 'Verdiğiniz Dersler' },
    { href: '/dashboard/wherethelesson', text: 'Dersi Nerede Verirsiniz' },
    { href: '/dashboard/price', text: 'Ücretler' },
    { href: '/dashboard/companies', text: 'Çalıştığınız Kurumlar' },
    { href: '/dashboard/educations', text: 'Eğitiminiz' },
    { href: '/dashboard/references', text: 'Referanslar' },
    { href: '/dashboard/biography', text: 'Kendinizi Tanıtın' },
    { href: '/dashboard/creation', text: 'Yazdığınız Eserler' },
    { href: '/dashboard/photovideo', text: 'Fotoğraf / Video' },
    { href: '/dashboard/share', text: 'Yayınla/Durdur/Sil' },
  ];

  const [number, setNumber] = useState(0);
  const { data } = useQuery({
    queryKey: ['profileComplete'],
    queryFn: async () => {
      const response = await axios.get(
        'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
        { withCredentials: true }
      );
      return response.data;
    },
  });

  // Count the non-empty arrays in data.info
  const countNonEmptyArrays = () => {
    let count = 0;
    for (const key in data?.info) {
      if (
        Array.isArray(data.info[key]) &&
        data.info[key].length > 0 &&
        !data.info[key].includes('')
      ) {
        count++;
      }
    }
    return count;
  };

  const nonEmptyArrayCount = countNonEmptyArrays();

  return (
    //alt satırda className den fixed çıkardım
    <div className="hidden md:block bg-white px-4 py-4 fixed h-full justify-center ">
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <h3 className="text-lg">
          <i className="fa-regular fa-chart-line-up"></i> İstatistikler
        </h3>
        <h3 className="text-lg" style={{ color: 'var(--banabi)' }}>
          <FontAwesomeIcon icon={faUser} /> Profilim
        </h3>
        <div>
          <ul className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: 'black' }}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <hr className="my-2" />
        <p className="text-center font-bold">Profil doluluk oranınız</p>
        <div className="relative">
          <CircularProgressWithLabel
            variant="determinate"
            value={Math.floor((nonEmptyArrayCount * 100) / 45)}
            className="mx-20"
            style={{
              color: 'var(--banabi)',
              width: '70px',
              height: '70px',
            }}
          />
          <div className="absolute bottom-7 left-[100px]">
            %{Math.floor((nonEmptyArrayCount * 100) / 45)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
