import Link from 'next/link';

const MediaMobile = () => {
  const urls = [
    '/Aksam-Cumhuriyet.jpg',
    '/Dunya-HaberlerCom.png',
    '/Dunya.png',
    '/Hurriyet.jpg',
    '/Aksam.jpg',
  ];
  return (
    <li className="flex flex-wrap gap-2 border items-center justify-center border-black ">
      {urls.map((item) => (
        <Link key={item} href="/media">
          <img
            src={item}
            alt="mediaMobile"
            width={100}
            height={100}
            className="my-3 mx-3"
          />
        </Link>
      ))}
    </li>
  );
};

export default MediaMobile;
