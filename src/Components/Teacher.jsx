import { Avatar } from '@mui/material';
import classes from '../styles/OgretmenBul.module.css';
import CastIcon from '@mui/icons-material/Cast';
import HouseIcon from '@mui/icons-material/House';
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import profilePic from '../../public/exampleImage.jpeg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Teacher = ({ data, usercode, url }) => {
  const router = useRouter();

  // server dan gelen 'Türkiye-İstanbul-Bakırköy,Bahçelievler,Yenibosna' yapısındaki stringden ili veren fonksiyon
  const cityFinder = (arr) => {
    console.log(arr);
    if (arr.length === 0) {
      return 'İl Belirlenmedi';
    } else {
      let [myString] = arr;
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

  const semicolonDivider = (string, part) => {
    if (string === undefined || !string.includes(';')) {
      return '';
    } else if (part === 'first') {
      return string.split(';')[0];
    } else if (part === 'second') {
      return string.split(';')[1];
    }
  };

  //profil fotosu için 43. array den gelen key i kullanalım ve ilgili key e karşılık gelen url i bulalım
  const profilePhotoKey = data.info[43][0];

  //ilk harfi büyük,diğerlerini küçük yapan fonksiyon
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  //data.info[16] dan gelen özel ders vermeye başlama tarihi ile mevcut yıl arasındaki farkı hesaplayan fonksiyon
  const experienceCalculator = () => {
    let startYear;
    if (data.info[16].length === 0) {
      return 0;
    } else {
      let myString = data.info[16][0];
      const parts = myString.split(/[-]/);
      startYear = parts[0];
      //şimdiki yılı alalım
      const currentDate = new Date();
      const currentYear = Number(currentDate.getFullYear());

      return currentYear - startYear;
    }
  };

  return (
    // <div className="flex flex-col space-y-8 border  bg-[#f8f9fa] py-2 px-3 w-93 h-80"></div>
    <div
      className="flex flex-col space-y-8 border  bg-[#f8f9fa] py-2 px-3 cursor-pointer rounded-[5px] "
      onClick={() =>
        router.push(
          `/OgretmenDetaylari/${data.info[9][0]}${data.info[10][0]}_${usercode}`
        )
      }
    >
      {/*Upper side */}

      <div className="justify-between flex items-center mb-3">
        <div className="flex space-x-2 items-center">
          {/* <div className={classes.teacher_image}>
            { <Image src={} alt="Teacher Photo"></Image> }
          </div> */}
          <Avatar
            src={url}
            sx={{ width: 50, height: 50, border: '1px solid #FF8801' }}
            className="border-0 border-orange-400"
          />
          <div className="flex flex-col  ">
            <h5 className={classes.teacher_name}>{`${capitalizeFirstLetter(
              data.info[9][0]
            )} ${capitalizeFirstLetter(data.info[10][0])}`}</h5>
            <h6>
              {data.info[19].map((item, index) => {
                if (index === data.info[19].length - 1) {
                  return `${item}`;
                } else {
                }
                return `${item} / `;
              })}
            </h6>
          </div>
        </div>
        <div className="rounded-full w-12 h-12 bg-[#ff8801] text-center">
          <div className="text-white flex flex-col -space-y-5 py-2">
            <p className="text-md font-bold">{experienceCalculator()}</p>
            <p className="text-xs">Yıl</p>
          </div>
        </div>
      </div>

      {/*Upper side end */}
      <div className="flex flex-col mt-4 justify-start ">
        <p>
          <CastIcon />
          ONLINE 45dk ders
          <span> {data.info[32][0] ? `${data.info[32][0]} TL` : ''}</span>
        </p>
        <p>
          <HouseIcon /> EVİMDE/OFİSİMDE 45dk ders
          <span> {data.info[33][0] ? `${data.info[33][0]} TL` : ''}</span>
        </p>
        <p>
          <PlaceIcon style={{ color: '#ff8801' }} />
          <span
            style={{ color: '#868789', fontSize: '1em', marginLeft: '4px' }}
          >
            {cityFinder(data.info[30])} / {townFinder(data.info[30])}
          </span>
        </p>
        <p>
          <HouseIcon /> ÖĞRENCİNİN EVİNDE 45dk ders
          <span> {data.info[34][0] ? `${data.info[34][0]} TL` : ''}</span>
        </p>
        <div className="flex justify-between">
          <p>
            <PlaceIcon style={{ color: '#ff8801' }} />
            <span
              style={{ color: '#868789', fontSize: '1em', marginLeft: '4px' }}
            >
              {cityFinder(data.info[28])} / {townFinder(data.info[28])}
            </span>
          </p>
          <p>
            <SearchIcon style={{ color: '#ff8801' }} />
            <span
              style={{ color: '#ff8801', fontSize: '1em', marginLeft: '4px' }}
            >
              İncele
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
