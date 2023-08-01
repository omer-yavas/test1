import { useEffect, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import useSubmitHook from '../../utils/submitUtil';
import { useFieldArray, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';
import CancelIcon from '@mui/icons-material/Cancel';

const TeachLessonComponentForm = ({ usersData }) => {
  //-------------------------17------------------------------------
  const groups = [
    { label: 'Okula destek', id: 1 },
    { label: 'Sınavlara hazırlık', id: 2 },
    { label: 'Yurtdışı sınavlarına hazırlık', id: 3 },
    { label: 'Yabancı dil konuşmak/öğrenmek isteyenlere', id: 4 },
  ];

  const startingStateOfGroups = usersData?.info[17];
  const getApprovedGroups = () => {
    let storeArr = [];
    document.getElementsByName('groupCheck').forEach((inputElement) => {
      if (inputElement.checked) {
        storeArr.push(inputElement.value);
      }
    });
    return storeArr;
  };

  //-----------------------18------------------
  const [checkList, setCheckList] = useState(
    usersData?.info[18] ? usersData?.info[18] : []
  );

  //--------------------------COMMON--------------------------------

  const [languageInputs, setLanguageInputs] = useState([]);
  const [languageInputIds, setLanguageInputIds] = useState([]);

  const [middleInputs, setMiddleInputs] = useState([]);
  const [middleInputIds, setMiddleInputIds] = useState([]);

  const [postHighInputs, setPostHighInputs] = useState([]);
  const [postHighInputIds, setPostHighInputIds] = useState([]);

  const [elementaryInputs, setElementaryInputs] = useState([]);
  const [elementaryInputIds, setElementaryInputIds] = useState([]);

  const [highInputs, setHighInputs] = useState([]);
  const [highInputIds, setHighInputIds] = useState([]);

  const [universityInputs, setUniversityInputs] = useState([]);
  const [universityInputIds, setUniversityInputIds] = useState([]);

  const [postUniversityInputs, setPostUniversityInputs] = useState([]);

  const addNewInput = (grade) => {
    const ourUid = Date.now();
    const newSet = (
      <div key={ourUid} className="mb-3 flex items-center">
        <input
          className="form-check-input mr-2"
          type="checkbox"
          defaultChecked={true}
          id={`${grade}InputCheckbox${ourUid}`}
        />
        <input
          type="text"
          className="border rounded-md px-2 py-2  w-full  placeholder-[#d6d6d6]  placeholder:text-sm"
          id={`${grade}InputText${ourUid}`}
          defaultValue={''}
          style={{ maxWidth: '300px' }}
          placeholder="Dersin İsmini yazınız"
        />
      </div>
    );
    if (grade === 'middle') {
      setMiddleInputs([...middleInputs, newSet]);
      setMiddleInputIds([...middleInputIds, ourUid]);
    } else if (grade === 'postHigh') {
      setPostHighInputs([...postHighInputs, newSet]);
      setPostHighInputIds([...postHighInputIds, ourUid]);
    } else if (grade === 'elementary') {
      setElementaryInputs([...elementaryInputs, newSet]);
      setElementaryInputIds([...elementaryInputIds, ourUid]);
    } else if (grade === 'high') {
      setHighInputs([...highInputs, newSet]);
      setHighInputIds([...highInputIds, ourUid]);
    } else if (grade === 'university') {
      setUniversityInputs([...universityInputs, newSet]);
      setUniversityInputIds([...universityInputIds, ourUid]);
    } else if (grade === 'language') {
      setLanguageInputs([...languageInputs, newSet]);
      setLanguageInputIds([...languageInputIds, ourUid]);
    }
  };

  const addNewPostUniInput = () => {
    const ourUid = Date.now();
    const postUniSet = (
      <div className="mb-3" key={ourUid}>
        <input
          type="text"
          className="border rounded-md py-2 w-full px-2 placeholder-[#d6d6d6] placeholder:text-sm"
          id={`postUni${ourUid}`}
          style={{ maxWidth: '300px' }}
          placeholder="öğreteceğiniz  özel dersi yazınız"
          name="postUni"
        />
      </div>
    );
    setPostUniversityInputs([...postUniversityInputs, postUniSet]);
  };

  const resetAllInputs = () => {
    setMiddleInputIds([]);
    setMiddleInputs([]);
    setPostHighInputIds([]);
    setPostHighInputs([]);
    setLanguageInputIds([]);
    setLanguageInputs([]);
    setElementaryInputIds([]);
    setElementaryInputs([]);
    setHighInputIds([]);
    setHighInputs([]);
    setUniversityInputIds([]);
    setUniversityInputs([]);
    setPostUniversityInputs([]);
  };
  //-------------------------19 dil--------------------------

  const getValidlanguages = () => {
    let result = [];
    languageInputIds.map((id) => {
      if (
        document.getElementById(`languageInputCheckbox${id}`).checked &&
        document.getElementById(`languageInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`languageInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //-------------------------20 ortaokul--------------------------
  //belirtilen sayı kadar input Checkbox/input text çifti middleInputs array de tutulacak

  const getValidMiddleLessons = () => {
    let result = [];
    middleInputIds.map((id) => {
      if (
        document.getElementById(`middleInputCheckbox${id}`).checked &&
        document.getElementById(`middleInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`middleInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //----------------------21 lise mezun------------------------------------
  const getValidPostHighLessons = () => {
    let result = [];
    postHighInputIds.map((id) => {
      if (
        document.getElementById(`postHighInputCheckbox${id}`).checked &&
        document.getElementById(`postHighInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`postHighInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //----------------------22 İlkokul-------------------------------------
  const getValidElementaryLessons = () => {
    let result = [];
    elementaryInputIds.map((id) => {
      if (
        document.getElementById(`elementaryInputCheckbox${id}`).checked &&
        document.getElementById(`elementaryInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`elementaryInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };
  //----------------------23 lise ------------------------------------
  const getValidHighLessons = () => {
    let result = [];
    highInputIds.map((id) => {
      if (
        document.getElementById(`highInputCheckbox${id}`).checked &&
        document.getElementById(`highInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`highInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //----------------------24 universite------------------------------------
  const getValidUniversityLessons = () => {
    let result = [];
    universityInputIds.map((id) => {
      if (
        document.getElementById(`universityInputCheckbox${id}`).checked &&
        document.getElementById(`universityInputText${id}`).value?.length > 0
      ) {
        let str = document.getElementById(`universityInputText${id}`).value;
        let edited = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        result.push(edited);
      }
    });
    return result;
  };

  //---------------------------25 Post üniversite-------------------------
  const getValidPostUniLessons = () => {
    let storeArr = [];
    //document.getElementsByName bir NodeList olduğu için belli methodları kullanabiliriz
    //.forEach metodu da undefined döner ama içinde birtakım işlemler yapılabilir, örneğin boş array i doldurmak gibi
    document
      .getElementsByName('postUni')
      .forEach((inputElement) => storeArr.push(inputElement.value));
    const result = storeArr
      .filter((str) => str.trim().length > 0)
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    return result;
  };

  const [startingPostUniLessons, setStartingPostUniLessons] = useState(
    usersData.info[25]
  );

  const deletePostUni = (index) => {
    let result = [];
    startingPostUniLessons.map((item, ind) => {
      if (ind !== index) {
        result.push(item);
      }
    });
    setStartingPostUniLessons(result);
  };

  const { register, control, handleSubmit } = useForm();
  // const { fields, append, remove } = useFieldArray({
  //   name: 'groupcheck',
  //   control,
  // });
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    const approvedGroups = getApprovedGroups();
    const validLanguages = getValidlanguages();
    const validMiddleLessons = getValidMiddleLessons();
    const validPostHighLessons = getValidPostHighLessons();
    const validElementaryLessons = getValidElementaryLessons();
    const validHighLessons = getValidHighLessons();
    const validUniversityLessons = getValidUniversityLessons();
    const validPostUniLessons = getValidPostUniLessons();

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
        17: approvedGroups,
        18: checkList,
        // 18: [],
        19: data[19].concat(validLanguages),
        20: checkList.includes('Ortaokuldakilere')
          ? data[20].concat(validMiddleLessons)
          : [],
        21: checkList.includes('Lise mezunlarına')
          ? data[21].concat(validPostHighLessons)
          : [],
        22: checkList.includes('İlkokuldakilere')
          ? data[22].concat(validElementaryLessons)
          : [],
        23: checkList.includes('Lisedekilere')
          ? data[23].concat(validHighLessons)
          : [],
        24: checkList.includes('Üniversitedekilere')
          ? data[24].concat(validUniversityLessons)
          : [],
        25: checkList.includes('Üniversite mezunlarına')
          ? validPostUniLessons
          : [],
      },
    };
    console.log('*************');
    console.log(updatedFormData);
    console.log('*************');
    mutate(updatedFormData);

    resetAllInputs();
  };

  //eğer submit işlemi içindeki mutate komutu başarılı olursa, async bir işlem, sayfayı yeniliyoruz.
  useEffect(() => {
    if (isSuccessSubmit) {
      location.reload();
    }
  }, [isSuccessSubmit]);

  const checkHandler = (event) => {
    if (!checkList?.includes(event.target.value)) {
      setCheckList((prev) => [...prev, event.target.value]);
    } else {
      setCheckList((prev) =>
        prev.filter((value) => value !== event.target.value)
      );
    }
  };

  return (
    <div className={`bg-white rounded p-4 `}>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className={`row mb-1 max-h-[calc(100vh-280px)] overflow-auto`}>
          <h4 style={{ color: 'var(--banabi)' }} className="text-banabi mb-3">
            Verdiğiniz Dersler
          </h4>
          <div className="col-lg-5">
            <div className="group mb-5">
              <h6
                style={{ color: 'var(--banabi)' }}
                className="mb-3 text-banabi"
              >
                Hangi gruplara özel ders verebilirsiniz?
              </h6>
              {groups.map((item, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={
                      startingStateOfGroups.includes(groups[index].label)
                        ? true
                        : false
                    }
                    id={`groupCheck${index + 1}`}
                    name="groupCheck"
                    value={groups[index].label}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`groupCheck${index + 1}`}
                  >
                    {groups[index].label}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-5">
              <label
                style={{ color: 'var(--banabi)' }}
                htmlFor="ilce"
                className="form-label text-banabi"
              >
                Kimlere ders verebilirsiniz?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="İlkokuldakilere"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  defaultChecked={usersData?.info[18].includes(
                    'İlkokuldakilere'
                  )}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  İlkokuldakilere
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  value="Ortaokuldakilere"
                  defaultChecked={usersData?.info[18].includes(
                    'Ortaokuldakilere'
                  )}
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  Ortaokuldakilere
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  value="Lisedekilere"
                  defaultChecked={usersData?.info[18].includes('Lisedekilere')}
                  id="flexCheckDefault3"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault3">
                  Lisedekilere
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  value="Lise mezunlarına"
                  defaultChecked={usersData?.info[18].includes(
                    'Lise mezunlarına'
                  )}
                  id="flexCheckDefault4"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault4">
                  Lise mezunlarına
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  value="Üniversitedekilere"
                  defaultChecked={usersData?.info[18].includes(
                    'Üniversitedekilere'
                  )}
                  id="flexCheckDefault5"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault5">
                  Üniversitedekilere
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={(event) => {
                    register('18');
                    checkHandler(event);
                  }}
                  value="Üniversite mezunlarına"
                  defaultChecked={usersData?.info[18].includes(
                    'Üniversite mezunlarına'
                  )}
                  id="flexCheckDefault6"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault6">
                  Üniversite mezunlarına
                </label>
              </div>
            </div>
            <div className="mb-5">
              <label
                style={{ color: 'var(--banabi)' }}
                htmlFor="ilce"
                className="form-label text-banabi"
              >
                Özel dersi hangi dillerde verebilirsiniz?
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Türkçe"
                  defaultChecked={usersData?.info[19].includes('Türkçe')}
                  {...register('19')}
                  id="flexCheckDefaulta"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaulta">
                  Türkçe
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="İngilizce"
                  defaultChecked={usersData?.info[19].includes('İngilizce')}
                  {...register('19')}
                  id="flexCheckDefaultb"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaultb">
                  İngilizce
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Almanca"
                  defaultChecked={usersData?.info[19].includes('Almanca')}
                  {...register('19')}
                  id="flexCheckDefaultc"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaultc">
                  Almanca
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Fransızca"
                  defaultChecked={usersData?.info[19].includes('Fransızca')}
                  {...register('19')}
                  id="flexCheckDefaultd"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaultd">
                  Fransızca
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Rusça"
                  defaultChecked={usersData?.info[19].includes('Rusça')}
                  {...register('19')}
                  id="flexCheckDefaulte"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaulte">
                  Rusça
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Arapça"
                  defaultChecked={usersData?.info[19].includes('Arapça')}
                  {...register('19')}
                  id="flexCheckDefaultf"
                />
                <label className="form-check-label" htmlFor="flexCheckDefaultf">
                  Arapça
                </label>
              </div>
              {usersData?.info[19]
                .filter(
                  (language) =>
                    language !== 'Almanca' &&
                    language !== 'Türkçe' &&
                    language !== 'İngilizce' &&
                    language !== 'Fransızca' &&
                    language !== 'Rusça' &&
                    language !== 'Arapça'
                )
                .map((language, index) => {
                  return (
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={language}
                        defaultChecked={true}
                        {...register('19')}
                        id={`flexCheckDefault${language}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckDefault${language}`}
                      >
                        {language.replace(/^\w/, (c) => c.toUpperCase())}
                      </label>
                    </div>
                  );
                })}
              {languageInputs}
              <div>
                <button
                  type="button"
                  onClick={() => addNewInput('language')}
                  className="btn btn-secondary btn-sm"
                >
                  <i className="fa-light fa-circle-plus"></i> Dil Ekle
                </button>
              </div>
            </div>
            {checkList.includes('Ortaokuldakilere') && (
              <div className="mb-2">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Hangi dersten özel ders verebilirsiniz? Ortaokul (5-6-7-8)
                  dersleri
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Türkçe"
                    defaultChecked={usersData?.info[20]?.includes('Türkçe')}
                    {...register('20')}
                    id="turkce"
                  />
                  <label className="form-check-label" htmlFor="turkce">
                    Türkçe
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Matematik"
                    defaultChecked={usersData?.info[20]?.includes('Matematik')}
                    {...register('20')}
                    id="mat"
                  />
                  <label className="form-check-label" htmlFor="mat">
                    Matematik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fen bilimleri"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Fen bilimleri'
                    )}
                    {...register('20')}
                    id="fen"
                  />
                  <label className="form-check-label" htmlFor="fen">
                    Fen bilimleri
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Sosyal bilgiler"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Sosyal bilgiler'
                    )}
                    {...register('20')}
                    id="sosyal"
                  />
                  <label className="form-check-label" htmlFor="sosyal">
                    Sosyal bilgiler
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Yabancı dil"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Yabancı dil'
                    )}
                    {...register('20')}
                    id="dil"
                  />
                  <label className="form-check-label" htmlFor="dil">
                    Yabancı dil
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Din kültürü ve ahlak bilgisi"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Din kültürü ve ahlak bilgisi'
                    )}
                    {...register('20')}
                    id="din"
                  />
                  <label className="form-check-label" htmlFor="din">
                    Din kültürü ve ahlak bilgisi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Görsel sanatlar"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Görsel sanatlar'
                    )}
                    {...register('20')}
                    id="gorsel"
                  />
                  <label className="form-check-label" htmlFor="gorsel">
                    Görsel sanatlar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Müzik"
                    defaultChecked={usersData?.info[20]?.includes('Müzik')}
                    {...register('20')}
                    id="music"
                  />
                  <label className="form-check-label" htmlFor="music">
                    Müzik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Beden eğitimi ve spor"
                    defaultChecked={usersData?.info[20]?.includes(
                      'Beden eğitimi ve spor'
                    )}
                    {...register('20')}
                    id="beden"
                  />
                  <label className="form-check-label" htmlFor="beden">
                    Beden eğitimi ve spor
                  </label>
                </div>
                {usersData?.info[20]
                  .filter(
                    (lesson) =>
                      lesson !== 'Türkçe' &&
                      lesson !== 'Matematik' &&
                      lesson !== 'Fen bilimleri' &&
                      lesson !== 'Sosyal bilgiler' &&
                      lesson !== 'Yabancı dil' &&
                      lesson !== 'Din kültürü ve ahlak bilgisi' &&
                      lesson !== 'Görsel sanatlar' &&
                      lesson !== 'Müzik' &&
                      lesson !== 'Beden eğitimi ve spor'
                  )
                  .map((lesson, index) => {
                    return (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={lesson}
                          defaultChecked={true}
                          {...register('20')}
                          id={`flexCheckDefault${lesson}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault${lesson}`}
                        >
                          {lesson.replace(/^\w/, (c) => c.toUpperCase())}
                        </label>
                      </div>
                    );
                  })}
                {middleInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewInput('middle')}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
            {checkList.includes('Lise mezunlarına') && (
              <div className="mb-2 mt-5">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Hangi dersten özel ders verebilirsiniz? Lise mezunları
                  dersleri
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Türk dili ve edebiyatı"
                    defaultChecked={usersData?.info[21]?.includes(
                      'Türk dili ve edebiyatı'
                    )}
                    {...register('21')}
                    id="turkdili"
                  />
                  <label className="form-check-label" htmlFor="turkdili">
                    Türk dili ve edebiyatı
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Matematik"
                    defaultChecked={usersData?.info[21]?.includes('Matematik')}
                    {...register('21')}
                    id="matli"
                  />
                  <label className="form-check-label" htmlFor="matli">
                    Matematik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Yabancı Dil"
                    defaultChecked={usersData?.info[21]?.includes(
                      'Yabancı Dil'
                    )}
                    {...register('21')}
                    id="yabdil"
                  />
                  <label className="form-check-label" htmlFor="yabdil">
                    Yabancı Dil
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fizik"
                    defaultChecked={usersData?.info[21]?.includes('Fizik')}
                    {...register('21')}
                    id="fizik"
                  />
                  <label className="form-check-label" htmlFor="fizik">
                    Fizik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Kimya"
                    defaultChecked={usersData?.info[21]?.includes('Kimya')}
                    {...register('21')}
                    id="kimya"
                  />
                  <label className="form-check-label" htmlFor="kimya">
                    Kimya
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Biyoloji"
                    defaultChecked={usersData?.info[21]?.includes('Biyoloji')}
                    {...register('21')}
                    id="Biyoloji"
                  />
                  <label className="form-check-label" htmlFor="Biyoloji">
                    Biyoloji
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tarih"
                    defaultChecked={usersData?.info[21]?.includes('Tarih')}
                    {...register('21')}
                    id="tarih"
                  />
                  <label className="form-check-label" htmlFor="tarih">
                    Tarih
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Coğrafya"
                    defaultChecked={usersData?.info[21]?.includes('Coğrafya')}
                    {...register('21')}
                    id="cog"
                  />
                  <label className="form-check-label" htmlFor="cog">
                    Coğrafya
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="T.C. İnkilap Tarihi ve Atatürkçülük"
                    defaultChecked={usersData?.info[21]?.includes(
                      'T.C. İnkilap Tarihi ve Atatürkçülük'
                    )}
                    {...register('21')}
                    id="inkilap"
                  />
                  <label className="form-check-label" htmlFor="inkilap">
                    T.C. İnkilap Tarihi ve Atatürkçülük
                  </label>
                </div>
                {usersData?.info[21]
                  .filter(
                    (lesson) =>
                      lesson !== 'Türk dili ve edebiyatı' &&
                      lesson !== 'Yabancı Dil' &&
                      lesson !== 'Biyoloji' &&
                      lesson !== 'Fizik' &&
                      lesson !== 'Matematik' &&
                      lesson !== 'Tarih' &&
                      lesson !== 'Kimya' &&
                      lesson !== 'Coğrafya' &&
                      lesson !== 'T.C. İnkilap Tarihi ve Atatürkçülük'
                  )
                  .map((lesson, index) => {
                    return (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={lesson}
                          defaultChecked={true}
                          {...register('21')}
                          id={`flexCheckDefault${lesson}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault${lesson}`}
                        >
                          {lesson.replace(/^\w/, (c) => c.toUpperCase())}
                        </label>
                      </div>
                    );
                  })}
                {postHighInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewInput('postHigh')}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-5 offset-lg-2">
            {checkList?.includes('İlkokuldakilere') && (
              <div className="mb-2">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Hangi dersten özel ders verebilirsiniz? İlkokul (1-2-3-4)
                  dersleri
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Türkçe"
                    defaultChecked={usersData?.info[22]?.includes('Türkçe')}
                    {...register('22')}
                    id="turkcei"
                  />
                  <label className="form-check-label" htmlFor="turkcei">
                    Türkçe
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Matematik"
                    defaultChecked={usersData?.info[22]?.includes('Matematik')}
                    {...register('22')}
                    id="mat"
                  />
                  <label className="form-check-label" htmlFor="mati">
                    Matematik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hayat Bilgisi"
                    defaultChecked={usersData?.info[22]?.includes(
                      'Hayat Bilgisi'
                    )}
                    {...register('22')}
                    id="hayat"
                  />
                  <label className="form-check-label" htmlFor="hayat">
                    Hayat Bilgisi
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Yabancı dil"
                    defaultChecked={usersData?.info[22]?.includes(
                      'Yabancı dil'
                    )}
                    {...register('22')}
                    id="ydilo"
                  />
                  <label className="form-check-label" htmlFor="ydilo">
                    Yabancı dil
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Din kültürü ve ahlak bilgisi"
                    defaultChecked={usersData?.info[22]?.includes(
                      'Din kültürü ve ahlak bilgisi'
                    )}
                    {...register('22')}
                    id="dini"
                  />
                  <label className="form-check-label" htmlFor="dini">
                    Din kültürü ve ahlak bilgisi
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Görsel sanatlar"
                    defaultChecked={usersData?.info[22]?.includes(
                      'Görsel sanatlar'
                    )}
                    {...register('22')}
                    id="gorseli"
                  />
                  <label className="form-check-label" htmlFor="gorseli">
                    Görsel sanatlar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Müzik"
                    defaultChecked={usersData?.info[22]?.includes('Müzik')}
                    {...register('22')}
                    id="musici"
                  />
                  <label className="form-check-label" htmlFor="musici">
                    Müzik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Oyun ve fiziki etkinlikler"
                    defaultChecked={usersData?.info[22]?.includes(
                      'Oyun ve fiziki etkinlikler'
                    )}
                    {...register('22')}
                    id="oyun"
                  />
                  <label className="form-check-label" htmlFor="oyun">
                    Oyun ve fiziki etkinlikler
                  </label>
                </div>
                {usersData?.info[22]
                  .filter(
                    (lesson) =>
                      lesson !== 'Türkçe' &&
                      lesson !== 'Hayat Bilgisi' &&
                      lesson !== 'Yabancı dil' &&
                      lesson !== 'Matematik' &&
                      lesson !== 'Din kültürü ve ahlak bilgisi' &&
                      lesson !== 'Müzik' &&
                      lesson !== 'Görsel sanatlar' &&
                      lesson !== 'Oyun ve fiziki etkinlikler'
                  )
                  .map((lesson, index) => {
                    return (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={lesson}
                          defaultChecked={true}
                          {...register('22')}
                          id={`flexCheckDefault${lesson}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault${lesson}`}
                        >
                          {lesson.replace(/^\w/, (c) => c.toUpperCase())}
                        </label>
                      </div>
                    );
                  })}
                {elementaryInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewInput('elementary')}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
            {checkList?.includes('Lisedekilere') && (
              <div className="mb-2">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Hangi dersten özel ders verebilirsiniz? Lise (9-10-11-12)
                  dersleri
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Türk dili ve edebiyatı"
                    defaultChecked={usersData?.info[23]?.includes(
                      'Türk dili ve edebiyatı'
                    )}
                    {...register('23')}
                    id="edeb"
                  />
                  <label className="form-check-label" htmlFor="edeb">
                    Türk dili ve edebiyatı
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Matematik"
                    defaultChecked={usersData?.info[23]?.includes('Matematik')}
                    {...register('23')}
                    id="matl"
                  />
                  <label className="form-check-label" htmlFor="matl">
                    Matematik
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hayat Bilgisi"
                    defaultChecked={usersData?.info[23]?.includes(
                      'Hayat Bilgisi'
                    )}
                    {...register('23')}
                    id="hayat"
                  />
                  <label className="form-check-label" htmlFor="hayat">
                    Hayat Bilgisi
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Fizik"
                    defaultChecked={usersData?.info[23]?.includes('Fizik')}
                    {...register('23')}
                    id="fizikl"
                  />
                  <label className="form-check-label" htmlFor="fizikl">
                    Fizik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Kimya"
                    defaultChecked={usersData?.info[23]?.includes('Kimya')}
                    {...register('23')}
                    id="kimyal"
                  />
                  <label className="form-check-label" htmlFor="kimyal">
                    Kimya
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Biyoloji"
                    defaultChecked={usersData?.info[23]?.includes('Biyoloji')}
                    {...register('23')}
                    id="biyolojil"
                  />
                  <label className="form-check-label" htmlFor="biyolojil">
                    Biyoloji
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Tarih"
                    defaultChecked={usersData?.info[23]?.includes('Tarih')}
                    {...register('23')}
                    id="tarihl"
                  />
                  <label className="form-check-label" htmlFor="tarihl">
                    Tarih
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Coğrafya"
                    defaultChecked={usersData?.info[23]?.includes('Coğrafya')}
                    {...register('23')}
                    id="cogl"
                  />
                  <label className="form-check-label" htmlFor="cogl">
                    Coğrafya
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="T.C. İnkilap Tarihi ve Atatürkçülük"
                    defaultChecked={usersData?.info[23]?.includes(
                      'T.C. İnkilap Tarihi ve Atatürkçülük'
                    )}
                    {...register('23')}
                    id="inkl"
                  />
                  <label className="form-check-label" htmlFor="inkl">
                    T.C. İnkilap Tarihi ve Atatürkçülük
                  </label>
                </div>
                {usersData?.info[23]
                  .filter(
                    (lesson) =>
                      lesson !== 'Türk dili ve edebiyatı' &&
                      lesson !== 'Yabancı Dil' &&
                      lesson !== 'Biyoloji' &&
                      lesson !== 'Fizik' &&
                      lesson !== 'Matematik' &&
                      lesson !== 'Tarih' &&
                      lesson !== 'Kimya' &&
                      lesson !== 'Coğrafya' &&
                      lesson !== 'T.C. İnkilap Tarihi ve Atatürkçülük'
                  )
                  .map((lesson, index) => {
                    return (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={lesson}
                          defaultChecked={true}
                          {...register('23')}
                          id={`flexCheckDefault${lesson}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault${lesson}`}
                        >
                          {lesson.replace(/^\w/, (c) => c.toUpperCase())}
                        </label>
                      </div>
                    );
                  })}
                {highInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewInput('high')}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
            {checkList?.includes('Üniversitedekilere') && (
              <div className="mb-2">
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Hangi dersten özel ders verebilirsiniz? Üniversite öğrencisine
                  dersler
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="İstatistik"
                    defaultChecked={usersData?.info[24]?.includes('İstatistik')}
                    {...register('24')}
                    id="ist"
                  />
                  <label className="form-check-label" htmlFor="ist">
                    İstatistik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Calculus"
                    defaultChecked={usersData?.info[24]?.includes('Calculus')}
                    {...register('24')}
                    id="calc"
                  />
                  <label className="form-check-label" htmlFor="calc">
                    Calculus
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Diferansiyel denklemler"
                    defaultChecked={usersData?.info[24]?.includes(
                      'Diferansiyel denklemler'
                    )}
                    {...register('24')}
                    id="ddenklem"
                  />
                  <label className="form-check-label" htmlFor="ddenklem">
                    Diferansiyel denklemler
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Lineer cebir"
                    defaultChecked={usersData?.info[24]?.includes(
                      'Lineer cebir'
                    )}
                    {...register('24')}
                    id="cebir"
                  />
                  <label className="form-check-label" htmlFor="cebir">
                    Lineer cebir
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Olasılık"
                    defaultChecked={usersData?.info[24]?.includes('Olasılık')}
                    {...register('24')}
                    id="olasilik"
                  />
                  <label className="form-check-label" htmlFor="olasilik">
                    Olasılık
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Ayrık matematik"
                    defaultChecked={usersData?.info[24]?.includes(
                      'Ayrık matematik'
                    )}
                    {...register('24')}
                    id="ayrik"
                  />
                  <label className="form-check-label" htmlFor="ayrik">
                    Ayrık matematik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Soyut matematik"
                    defaultChecked={usersData?.info[24]?.includes(
                      'Soyut matematik'
                    )}
                    {...register('24')}
                    id="soyut"
                  />
                  <label className="form-check-label" htmlFor="soyut">
                    Soyut matematik
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Sayısal analiz"
                    defaultChecked={usersData?.info[24]?.includes(
                      'Sayısal analiz'
                    )}
                    {...register('24')}
                    id="sayanaliz"
                  />
                  <label className="form-check-label" htmlFor="sayanaliz">
                    Sayısal analiz
                  </label>
                </div>
                {usersData?.info[24]
                  .filter(
                    (lesson) =>
                      lesson !== 'İstatistik' &&
                      lesson !== 'Calculus' &&
                      lesson !== 'Diferansiyel denklemler' &&
                      lesson !== 'Lineer cebir' &&
                      lesson !== 'Olasılık' &&
                      lesson !== 'Ayrık matematik' &&
                      lesson !== 'Soyut matematik' &&
                      lesson !== 'Sayısal analiz'
                  )
                  .map((lesson, index) => {
                    return (
                      <div key={index} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={lesson}
                          defaultChecked={true}
                          {...register('24')}
                          id={`flexCheckDefault${lesson}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`flexCheckDefault${lesson}`}
                        >
                          {lesson.replace(/^\w/, (c) => c.toUpperCase())}
                        </label>
                      </div>
                    );
                  })}
                {universityInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewInput('university')}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
            {checkList?.includes('Üniversite mezunlarına') && (
              <div>
                <label
                  style={{ color: 'var(--banabi)' }}
                  htmlFor="ilce"
                  className="form-label text-banabi"
                >
                  Üniversite mezunlarına hangi derslerden özel ders
                  verebilirsiniz?
                </label>
                {startingPostUniLessons.map((item, index) => {
                  return (
                    <div
                      className="mb-3"
                      key={index}
                      onClick={() => {
                        deletePostUni(index);
                      }}
                    >
                      {item}
                      <span>
                        <CancelIcon />
                      </span>
                    </div>
                  );
                })}
                {Array(5 - startingPostUniLessons.length)
                  .fill(null)
                  .map((lesson, index) => (
                    <div className="mb-3" key={index}>
                      <input
                        type="text"
                        className="border rounded-md py-2 w-full px-2 placeholder-[#d6d6d6] placeholder:text-sm"
                        id={`postUni${index + 1}`}
                        style={{ maxWidth: '300px' }}
                        placeholder="öğreteceğiniz  özel dersi yazınız"
                        name="postUni"
                      />
                    </div>
                  ))}
                {postUniversityInputs}
                <div>
                  <button
                    type="button"
                    onClick={() => addNewPostUniInput()}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fa-light fa-circle-plus"></i> Ders Ekle
                  </button>
                </div>
              </div>
            )}
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

export default TeachLessonComponentForm;
