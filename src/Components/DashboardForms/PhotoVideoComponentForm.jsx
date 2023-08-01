//43 : profil
//44: diğer fotolar
//46: youtube link

import s3 from '../../utils/awsconfig';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useSubmitHook from '../../utils/submitUtil';
import CancelIcon from '@mui/icons-material/Cancel';

const PhotoVideoComponentForm = ({ usersData }) => {
  const form = useForm();
  const { resetField, handleSubmit, register, control } = useForm();
  const user = { ...usersData };

  const arrFortyFour = [...user.info['44']];

  //gelen string ifadeyi semicolon kısmından bölüp ilk veya son parçalarını dönen fonksiyon
  //file adresleri server da ilgili alanda array içinde bu formatta tutulduğu için böyle kodlandı
  const semicolonDivider = (string, part) => {
    if (string === undefined || !string.includes(';')) {
      return '';
    } else if (part === 'first') {
      return string.split(';')[0];
    } else if (part === 'second') {
      return string.split(';')[1];
    }
  };

  const [fileState, setFileState] = useState({
    profile: {
      full: user.info['43'][0],
      value: semicolonDivider(user.info['43'][0], 'second'),
      showInput: user.info['43'][0] ? false : true,
    },
    photo_1: {
      full: user.info['44'][0],
      value: semicolonDivider(user.info['44'][0], 'second'),
      showInput: user.info['44'][0] ? false : true,
    },
    photo_2: {
      full: user.info['44'][1],
      value: semicolonDivider(user.info['44'][1], 'second'),
      showInput: arrFortyFour[1] ? false : true,
    },
    photo_3: {
      full: user.info['44'][2],
      value: semicolonDivider(user.info['44'][2], 'second'),
      showInput: arrFortyFour[2] ? false : true,
    },
    photo_4: {
      full: user.info['44'][3],
      value: semicolonDivider(user.info['44'][3], 'second'),
      showInput: arrFortyFour[3] ? false : true,
    },
    photo_5: {
      full: user.info['44'][4],
      value: semicolonDivider(user.info['44'][4], 'second'),
      showInput: arrFortyFour[4] ? false : true,
    },
    youtube: user.info['46'],
  });

  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = async (data) => {
    console.log(data);
    const formData = new FormData();
    //formdata ile gönderilen her dosyanın ismi "file" olarak istendiği için her fotoyu tek ekleyip gönderip, diğerlerini sırayla overwrite ediyoruz.
    let uploadedProfilePhotoName;
    let uploadedProfilePhotoKey;
    let uploadedPhotoNames = ['', '', '', '', ''];
    let uploadedPhotoKeyList = ['', '', '', '', ''];
    //submit başında state i tutalım ki submit içinde değişirse kullanabilelim
    let prevProfileFull = fileState.profile.full;
    // [...fileState.profile.value].length > 0
    //   ? [...fileState.profile.value]
    //   : [];

    if (data.photo_profile && data.photo_profile.length > 0) {
      formData.append('file', data.photo_profile['0']);

      try {
        const response = await axios.post(
          'https://octopus-app-577yw.ondigitalocean.app/upload-file',
          formData,
          { withCredentials: true }
        );

        const [returnString] = response.data.file_key_list;

        uploadedProfilePhotoName = semicolonDivider(returnString, 'second');
        uploadedProfilePhotoKey = returnString;
        formData.delete('file');
        //belirtilen register ı resetliyoruz, çünkü boş gözükse de input un FileList Objesi dolu olabiliyor
        resetField('photo_profile');
        setFileState((prevState) => ({
          ...prevState,
          profile: {
            ...prevState.profile,
            showInput: false,
            value: uploadedProfilePhotoName,
            full: returnString,
          },
        }));
      } catch (error) {
        console.log(error.message);
      }
    }
    ///////////////////////////////////////////////////////////
    //aynı işlemi diğer 5 input a da sırayla uygulayacağız

    for (let i = 1; i < 6; i++) {
      if (data[`photo_${i}`]) {
        if (data[`photo_${i}`][length]) {
          formData.append('file', data[`photo_${i}`][0]);
          try {
            const response = await axios.post(
              'https://octopus-app-577yw.ondigitalocean.app/upload-file',
              formData,
              { withCredentials: true }
            );

            const [returnString] = response.data.file_key_list;
            semicolonDivider(returnString, 'first');
            uploadedPhotoNames[i - 1] = semicolonDivider(
              returnString,
              'second'
            );
            uploadedPhotoKeyList[i - 1] = returnString;

            formData.delete('file');
            resetField(`photo_${i}`);
            setFileState((prevState) => ({
              ...prevState,
              [`photo_${i}`]: {
                ...prevState[`photo_${i}`],
                showInput: false,
                value: uploadedPhotoNames[i - 1],
                full: uploadedPhotoKeyList[i - 1],
              },
            }));
          } catch (error) {
            console.log(error.message);
          }
        }
      } else {
        //hiç form da varlığı olmayan ise hiç form açılmadığı için eski state teki değeri ile devam edecek
        const { value, full } = fileState[`photo_${i}`];
        uploadedPhotoNames[Number(i - 1)] = value;
        uploadedPhotoKeyList[Number(i - 1)] = full;
      }
    }

    ///////////////////////////////////////////////////////////
    //Burada 43 ve 44 nolu kısma gidecek olan sonuçları belirliyoruz.

    const fortyThree = () => {
      if (uploadedProfilePhotoKey) {
        //console.log(`test sonucu uploadeed var`);
        return [uploadedProfilePhotoKey];
      } else if (prevProfileFull) {
        // console.log(`test sonucu uploadeed yok, prev var`);
        setFileState((prevState) => ({
          ...prevState,
          profile: {
            ...prevState.profile,
            showInput: false,
          },
        }));
        return [prevProfileFull];
      } else {
        // console.log(`test sonucu uploadeed yok, prev yok, 3. seçenek`);
        return [];
      }
    };

    const fortyFour = () => {
      return uploadedPhotoKeyList.filter((item) => item.includes(';'));
    };

    const updatedFormData = {
      info: {
        43: fortyThree(),
        44: fortyFour(),
        46: data.youtube === '' ? [] : [data.youtube],
      },
    };

    mutate(updatedFormData);
  };

  const cancelProfilePhotoHandler = () => {
    resetField('photo_profile');
    setFileState((prevState) => ({
      ...prevState,
      profile: {
        ...prevState.profile,
        showInput: true,
        value: '',
        full: undefined,
      },
    }));
  };

  const cancelBigPhotoHandler = (num) => {
    resetField(`photo_${num}`);
    setFileState((prevState) => ({
      ...prevState,
      [`photo_${num}`]: {
        ...prevState[`photo_${num}`],
        showInput: true,
        value: '',
        full: undefined,
      },
    }));
  };

  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Fotoğraflar ve Videolar
          </h4>
          <div className="col-lg-12">
            <div className="mb-5">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Profil Resmini Yükle
              </h6>
              {fileState.profile.showInput ? (
                <div>
                  <label htmlFor="formFile" className="form-label">
                    Profil resmi yükle
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    style={{ maxWidth: '300px', display: 'inline-block' }}
                    {...register('photo_profile')}
                    accept="image/png, image/jpg"
                  />
                </div>
              ) : (
                <div onClick={cancelProfilePhotoHandler}>
                  {fileState.profile.value}
                  <span>
                    <CancelIcon />
                  </span>
                </div>
              )}

              <div id="emailHelp" className="form-text">
                400x400 pixel boyutlarında jpg ya da png formatında resminizi
                yükleyiniz
              </div>
            </div>
            <h6 className="mb-3 text-banabi" style={{ color: 'var(--banabi)' }}>
              Öğrencilerle Fotonuzu Yükleyiniz
            </h6>
            <div
              className="alert py-2 alert-info"
              style={{ maxWidth: '700px' }}
              role="alert"
            >
              <small>
                Resimlerinizi toplu olarak yükleyebilirsiniz. Png ya da jpg
                formatında 5 adet resim yükleyiniz.
              </small>
            </div>
            {fileState.photo_1.showInput ? (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Resim Yükle
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ maxWidth: '300px', display: 'inline-block' }}
                  {...register('photo_1')}
                />
              </div>
            ) : (
              <div className="mb-3" onClick={() => cancelBigPhotoHandler(1)}>
                {fileState.photo_1.value}
                <span>
                  <CancelIcon />
                </span>
              </div>
            )}
            {fileState.photo_2.showInput ? (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Resim Yükle
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ maxWidth: '300px', display: 'inline-block' }}
                  {...register('photo_2')}
                />
              </div>
            ) : (
              <div className="mb-3" onClick={() => cancelBigPhotoHandler(2)}>
                {fileState.photo_2.value}
                <span>
                  <CancelIcon />
                </span>
              </div>
            )}

            {fileState.photo_3.showInput ? (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Resim Yükle
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ maxWidth: '300px', display: 'inline-block' }}
                  {...register('photo_3')}
                />
              </div>
            ) : (
              <div className="mb-3" onClick={() => cancelBigPhotoHandler(3)}>
                {fileState.photo_3.value}
                <span>
                  <CancelIcon />
                </span>
              </div>
            )}
            {fileState.photo_4.showInput ? (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Resim Yükle
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ maxWidth: '300px', display: 'inline-block' }}
                  {...register('photo_4')}
                />
              </div>
            ) : (
              <div className="mb-3" onClick={() => cancelBigPhotoHandler(4)}>
                {fileState.photo_4.value}
                <span>
                  <CancelIcon />
                </span>
              </div>
            )}
            {fileState.photo_5.showInput ? (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Resim Yükle
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  style={{ maxWidth: '300px', display: 'inline-block' }}
                  {...register('photo_5')}
                />
              </div>
            ) : (
              <div className="mb-3" onClick={() => cancelBigPhotoHandler(5)}>
                {fileState.photo_5.value}
                <span>
                  <CancelIcon />
                </span>
              </div>
            )}

            <div className="mb-3 mt-5">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Youtube Linkiniz{' '}
              </h6>
              <div className="mb-3">
                <div className="position-relative">
                  <span className="absolute top-2 left-2">
                    <i
                      className="fa-brands fa-youtube fa-lg"
                      style={{ color: '#ff0000' }}
                    ></i>
                  </span>
                  <input
                    type="text"
                    className="border rounded-md px-2 py-2  w-full ps-5 placeholder-[#d6d6d6]  placeholder:text-sm"
                    id="youtube"
                    placeholder="YouTube videonuz linkini yazınız"
                    defaultValue={fileState.youtube[0]}
                    {...register('youtube')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
            <button type="submit" className="btn custom-btn my-2">
              <i className="fa-light fa-floppy-disk"></i> Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PhotoVideoComponentForm;
