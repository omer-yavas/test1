import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useRef } from 'react';
import { registerLocale } from 'react-datepicker';
import { tr } from 'date-fns/locale';
import countries from '../Dashboard/countriesListApi/countriesList';
import useSubmitHook from '@/utils/submitUtil';
import { useForm } from 'react-hook-form';
import format from 'date-fns/format';
import { DevTool } from '@hookform/devtools';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const PersonalInfoComponentForm = ({ usersData }) => {
  const defaultStartBirthDate =
    usersData?.info[12] && usersData.info[12].length > 0
      ? new Date(usersData.info[12])
      : new Date();

  const defaultStartDate =
    usersData?.info[16] && usersData.info[16].length > 0
      ? new Date(usersData.info[16])
      : new Date();

  const [startDateBirth, setStartDateBirth] = useState(defaultStartBirthDate);
  const [startDate, setStartDate] = useState(defaultStartDate);

  const [formData, setFormData] = useState(usersData?.info);
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();
  const form = useForm({
    defaultValues: {
      9: usersData?.info[9][0],
      10: usersData?.info[10][0],
      14: usersData?.info[14][0],
    },
  });

  const { register, control, handleSubmit } = form;

  registerLocale('tr', tr);
  const submitFormHandler = (data) => {
    const updatedFormData = {
      info: {
        9: [data[9]],
        10: [data[10]],
        11: [data[11]],
        12: [startDateBirth.toISOString()],
        13: [data[13]],
        14: [data[14]],
        15: [data[15]],
        16: [startDate.toISOString()],
      },
    };
    console.log(updatedFormData);
    setFormData(updatedFormData);
    mutate(updatedFormData);
  };
  return (
    <>
      <div className="bg-white rounded p-4">
        <form onSubmit={handleSubmit(submitFormHandler)} noValidate>
          <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
            <h4 style={{ color: 'var(--banabi)' }} className="text-banabi mb-3">
              Kişisel Bilgiler
            </h4>
            <div className="col-lg-5">
              <div className="mb-3">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="name"
                  className="form-label text-banabi"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  {...register('9')}
                  placeholder="Adınızı yazın"
                  className="border rounded-md py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                  id="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-5">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="surname"
                  className="form-label text-banabi"
                >
                  Soyadınız
                </label>
                <input
                  type="text"
                  {...register('10')}
                  placeholder="Soyadınızı yazın"
                  className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                  id="surname"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="group mb-5">
                <h6
                  style={{ color: 'var(--banabi)' }}
                  className="mb-3 text-banabi"
                >
                  Cinsiyetiniz?
                </h6>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    value="Erkek"
                    type="radio"
                    name="gender"
                    defaultChecked={usersData?.info[11][0] === 'Erkek'}
                    {...register('11')}
                    id="gender"
                  />
                  <label className="form-check-label" htmlFor="gender">
                    Erkek
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Kadın"
                    {...register('11')}
                    defaultChecked={usersData?.info[11][0] === 'Kadın'}
                    id="flexRadioDefault3"
                  />
                  <label
                    className=" form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Kadın
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="date"
                  className="form-label text-banabi"
                >
                  Doğum Tarihiniz
                </label>
                <div className="border border-solid rounded-lg px-2 py-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  <DatePicker
                    selected={startDateBirth}
                    locale="tr"
                    onChange={(date) => {
                      setStartDateBirth(date);
                      console.log(date.toISOString());
                    }}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="MMMM d, yyyy"
                  />
                </div>
              </div>
              <div className="group mb-3">
                <h6
                  style={{ color: 'var(--banabi)' }}
                  className="mb-3 text-banabi"
                >
                  Hangi cinsiyetteki öğrencilere ders verirsiniz?
                </h6>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Farketmez"
                    name="ogrselect"
                    id="ogrselect"
                    {...register('13')}
                    defaultChecked={
                      usersData?.info[13][0] === 'Farketmez' ||
                      usersData?.info[13][0] === ''
                    }
                  />
                  <label className="form-check-label" htmlFor="ogrselect">
                    Farketmez
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    value="Kadın"
                    name="ogrselect"
                    {...register('13')}
                    defaultChecked={usersData?.info[13][0] === 'Kadın'}
                    type="radio"
                    id="select2"
                  />
                  <label className="form-check-label" htmlFor="select2">
                    Kadın
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    value="Erkek"
                    name="ogrselect"
                    {...register('13')}
                    defaultChecked={usersData?.info[13][0] === 'Erkek'}
                    type="radio"
                    id="select3"
                  />
                  <label className="form-check-label" htmlFor="select3">
                    Erkek
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="mb-5">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-banabi"
                  style={{ color: 'var(--banabi)' }}
                >
                  Uyruğunuz
                </label>
                <select
                  className="form-select mb-2"
                  aria-label="Default select example"
                  {...register('14')}
                  style={{ maxWidth: '300px' }}
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.name}
                      selected={country.name === 'Türkiye'}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="group mb-5">
                <h6
                  style={{ color: 'var(--banabi)' }}
                  className="mb-3 text-banabi"
                >
                  Arabanız var mı?
                </h6>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Var"
                    name="car"
                    {...register('15')}
                    defaultChecked={
                      usersData?.info[15][0] === 'Var' ||
                      usersData?.info[15][0] === ''
                    }
                    id="car"
                  />
                  <label className="form-check-label" htmlFor="car">
                    Var
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="car"
                    value="Yok"
                    {...register('15')}
                    defaultChecked={usersData?.info[15][0] === 'Yok'}
                    id="mycar"
                  />
                  <label className=" form-check-label" htmlFor="mycar">
                    Yok
                  </label>
                </div>
                <div className="alert alert-info mt-3" role="alert">
                  <small>
                    Ulaşımı zor yerlerde yaşayan aileler arabası olan öğretmen
                    tercih edebilir.
                  </small>
                </div>
              </div>
              <div>
                <label
                  htmlFor="exampleInputPassword2"
                  className="form-label text-banabi"
                  style={{ color: 'var(--banabi)' }}
                >
                  Hangi yıldan beri özel ders veriyorsunuz?
                </label>
                <div className="border border-solid rounded-lg px-2 py-2 flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    yearItemNumber={9}
                  />
                </div>
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
    </>
  );
};

export default PersonalInfoComponentForm;
