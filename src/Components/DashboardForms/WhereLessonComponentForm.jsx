import useSubmitHook from '../../utils/submitUtil';
import useFetchCitiesAndCounties from '../TeacherRegisterForm/fetchCountries';
import useFetchCitiesAndCountiesStudent from '../TeacherRegisterForm/fetchCountriesStudent';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useState, useEffect } from 'react';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const WhereTheLessonComponentForm = ({ usersData }) => {
  const form = useForm();
  const theme = useTheme();

  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  // server dan gelen 'Türkiye-İstanbul-Bakırköy,Bahçelievler,Yenibosna' yapısındaki stringden ili veren fonksiyon
  const cityFinder = (arr) => {
    if (arr.length === 0) {
      return '';
    } else {
      let [myString] = arr;
      const parts = myString.split(/[-]/);
      return parts[1];
    }
  };

  // server dan gelen 'Türkiye-İstanbul-Bakırköy,Bahçelievler,Yenibosna' yapısındaki stringden ilçeleri veren fonksiyon
  const countyFinder = (arr) => {
    if (arr.length === 0) {
      return [];
    } else {
      let [myString] = arr;
      const parts = myString.split(/[-]/);
      if (parts[2].includes(',')) {
        return parts[2].split(/[,]/);
      } else if (parts[2]) {
        return [parts[2]];
      } else {
        return [];
      }
    }
  };

  //--------------------------Öğretmen için olan kısım-------------------------
  const [selectedCity, setSelectedCity] = useState(
    cityFinder(usersData.info[30])
  );
  const [selectedCounty, setSelectedCounty] = useState(
    countyFinder(usersData.info[30])
  );

  const { cities, counties } = useFetchCitiesAndCounties(selectedCity);

  const handleCityChangeTeacher = (event) => {
    setSelectedCity(event.target.value);
    //kullanıcı şehir değiştirince bir önceki şehrin seçimlerini resetliyoruz
    setSelectedCounty([]);
  };
  const handleCountyChangeTeacher = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCounty(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  //----------------------Öğrenci için olan kısım-------------------------------
  const [selectedCityStudent, setSelectedCityStudent] = useState(
    cityFinder(usersData.info[28])
  );
  const [selectedCountyStudent, setSelectedCountyStudent] = useState(
    countyFinder(usersData.info[28])
    //usersData.info[28]
  );

  const { citiesStudent, countiesStudent } =
    useFetchCitiesAndCountiesStudent(selectedCityStudent);

  const handleCityChangeStudent = (event) => {
    setSelectedCityStudent(event.target.value);
    //kullanıcı şehir değiştirince bir önceki şehrin seçimlerini resetliyoruz
    setSelectedCountyStudent([]);
  };

  const handleCountyChangeStudent = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedCountyStudent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  //----------------Programlar için olan kısım----------------------------
  const [programInputs, setProgramInputs] = useState([]);
  const [programInputIds, setProgramInputIds] = useState([]);

  const addNewInput = () => {
    const ourUid = Date.now();
    const newSet = (
      <div key={ourUid} className="mb-3 flex items-center">
        <input
          className="form-check-input mr-2"
          type="checkbox"
          defaultChecked={true}
          id={`ProgramInputCheckbox${ourUid}`}
        />
        <input
          type="text"
          className="border rounded-md px-2 py-2  w-full  placeholder-[#d6d6d6]  placeholder:text-sm"
          id={`ProgramInputText${ourUid}`}
          defaultValue={''}
          style={{ maxWidth: '300px' }}
          placeholder="Programın İsmini yazınız"
        />
      </div>
    );

    setProgramInputs([...programInputs, newSet]);
    setProgramInputIds([...programInputIds, ourUid]);
  };

  const getValidPrograms = () => {
    let result = [];
    programInputIds.map((id) => {
      if (
        document.getElementById(`ProgramInputCheckbox${id}`).checked &&
        document.getElementById(`ProgramInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`ProgramInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //---------------SUBMIT kısmı-------------------------------------------
  const submitHandler = (data) => {
    const selectedInfoStudent = `Türkiye-${selectedCityStudent}-${selectedCountyStudent.map(
      (item) => {
        return item;
      }
    )}`;

    const selectedInfoTeacher = `Türkiye-${selectedCity}-${selectedCounty.map(
      (item) => {
        return item;
      }
    )}`;

    //programlardan işaretli olanları alıyoruz
    const validPrograms = getValidPrograms();

    for (const key in data) {
      if (data[key] === false) {
        data[key] = [];
      }
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
    }
    const updatedFormData = {
      info: {
        26: data[26],
        27: data[27],
        28: [selectedInfoStudent],
        29: data[29].concat(validPrograms),
        30: [selectedInfoTeacher],
      },
    };

    mutate(updatedFormData);

    setProgramInputs([]);
  };

  //eğer submit işlemi içindeki mutate komutu başarılı olursa, async bir işlem, sayfayı yeniliyoruz.
  useEffect(() => {
    if (isSuccessSubmit) {
      location.reload();
    }
  }, [isSuccessSubmit]);

  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Dersi Nerede Verirsiniz?
          </h4>
          <div className="col-lg-5">
            <div className="group mb-5">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Dersinizi nasıl yaparsınız?
              </h6>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="online"
                  id="flexCheckDefaultaa"
                  defaultChecked={usersData?.info[26]?.includes('online')}
                  {...register('26')}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultaa"
                >
                  Online
                </label>
              </div>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="yüzyüze"
                  id="flexCheckDefaultbb"
                  defaultChecked={usersData?.info[26]?.includes('yüzyüze')}
                  {...register('26')}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultbb"
                >
                  Yüzyüze
                </label>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="ilce"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Dersinizi nerede yaparsınız?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="ofisimde"
                  id="flexCheckDefault"
                  defaultChecked={usersData?.info[27]?.includes('ofisimde')}
                  {...register('27')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Benim Evimde / Ofisimde
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="ogrencievinde"
                  id="flexCheckDefault2"
                  defaultChecked={usersData?.info[27]?.includes(
                    'ogrencievinde'
                  )}
                  {...register('27')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  Öğrencinin Evinde
                </label>
              </div>
            </div>
            <div className="mb-5">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Yüz yüze ( öğrencinin evinde ) derslerini hangi ülke/il/ilçede
                verebilirsiniz?
              </h6>
              <select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                aria-label="Default select example"
              >
                <option selected="">Türkiye</option>
              </select>
              <select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                value={selectedCityStudent}
                onChange={handleCityChangeStudent}
                aria-label="Default select example"
                defaultValue={selectedCityStudent}
              >
                <option value="">Şehir seçiniz</option>
                {citiesStudent?.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <Select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                id="multiple-student"
                multiple
                aria-label="Default select example"
                value={selectedCountyStudent}
                onChange={handleCountyChangeStudent}
              >
                {countiesStudent &&
                  countiesStudent.map((county) => (
                    <MenuItem
                      key={county.name}
                      value={county.name}
                      style={getStyles(
                        county.name,
                        selectedCountyStudent,
                        theme
                      )}
                    >
                      {county.name}
                    </MenuItem>
                  ))}
              </Select>
              {/* <div>
                <a
                  className="btn btn-secondary btn-sm mt-1"
                  href="javascript:;"
                >
                  <i className="fa-light fa-circle-plus"></i> Ülke/İl/İlçe Ekle
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="mb-2">
              <label
                htmlFor="ilce"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Online dersinizi hangi program ile yaparsınız ?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Zoom"
                  defaultChecked={usersData?.info[29].includes('Zoom')}
                  {...register('29')}
                  id="Zoom"
                />
                <label className="form-check-label" htmlFor="Zoom">
                  Zoom
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Whatsapp"
                  defaultChecked={usersData?.info[29].includes('Whatsapp')}
                  {...register('29')}
                  id="Whatsapp"
                />
                <label className="form-check-label" htmlFor="Whatsapp">
                  Whatsapp
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Microsoft Teams"
                  defaultChecked={usersData?.info[29].includes(
                    'Microsoft Teams'
                  )}
                  {...register('29')}
                  id="Microsoft Teams"
                />
                <label className="form-check-label" htmlFor="Microsoft Teams">
                  Microsoft Teams
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Google Meet"
                  defaultChecked={usersData?.info[29].includes('Google Meet')}
                  {...register('29')}
                  id="Google Meet"
                />
                <label className="form-check-label" htmlFor="Google Meet">
                  Google Meet
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Skype"
                  defaultChecked={usersData?.info[29].includes('Skype')}
                  {...register('29')}
                  id="Skype"
                />
                <label className="form-check-label" htmlFor="Skype">
                  Skype
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Perculus"
                  defaultChecked={usersData?.info[29].includes('Perculus')}
                  {...register('29')}
                  id="Perculus"
                />
                <label className="form-check-label" htmlFor="Perculus">
                  Perculus
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="UZEP"
                  defaultChecked={usersData?.info[29].includes('UZEP')}
                  {...register('29')}
                  id="UZEP"
                />
                <label className="form-check-label" htmlFor="UZEP">
                  UZEP
                </label>
              </div>
              {usersData?.info[29]
                .filter(
                  (program) =>
                    program !== 'UZEP' &&
                    program !== 'Perculus' &&
                    program !== 'Skype' &&
                    program !== 'Google Meet' &&
                    program !== 'Microsoft Teams' &&
                    program !== 'Whatsapp' &&
                    program !== 'Zoom'
                )
                .map((program, index) => {
                  return (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={program}
                        defaultChecked={true}
                        {...register('29')}
                        id={`flexCheckDefault${program}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckDefault${program}`}
                      >
                        {program.replace(/^\w/, (c) => c.toUpperCase())}
                      </label>
                    </div>
                  );
                })}
              {programInputs}
            </div>
            <div>
              <button
                type="button"
                onClick={() => addNewInput()}
                className="btn btn-secondary btn-sm"
              >
                <i className="fa-light fa-circle-plus"></i> Program Ekle
              </button>
            </div>
            <div className="mb-5">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Yüz yüze ( Öğretmenin evinde/Ofisinde ) derslerini hangi
                ülke/il/ilçede verebilirsiniz?
              </h6>
              <select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                aria-label="Default select example"
              >
                <option selected="">Türkiye</option>
              </select>
              <select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                value={selectedCity}
                onChange={handleCityChangeTeacher}
                aria-label="Default select example"
                defaultValue={selectedCityStudent}
              >
                <option value="">Şehir seçiniz</option>
                {cities?.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              <Select
                className="form-select mb-2"
                style={{ maxWidth: '300px' }}
                id="multiple-teacher"
                multiple
                aria-label="Default select example"
                value={selectedCounty}
                onChange={handleCountyChangeTeacher}
              >
                {counties &&
                  counties.map((county) => (
                    <MenuItem
                      key={county.name}
                      value={county.name}
                      style={getStyles(county.name, selectedCounty, theme)}
                    >
                      {county.name}
                    </MenuItem>
                  ))}
              </Select>
              {/* <div>
                <a
                  className="btn btn-secondary btn-sm mt-1"
                  href="javascript:;"
                >
                  <i className="fa-light fa-circle-plus"></i> Ülke/İl/İlçe Ekle
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
            <LoadingButtonDashboard
              isLoadingSubmit={isLoadingSubmit}
              isSuccessSubmit={isSuccessSubmit}
            />
          </div>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default WhereTheLessonComponentForm;
