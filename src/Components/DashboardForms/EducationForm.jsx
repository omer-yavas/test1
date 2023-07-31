import useSubmitHook from '@/utils/submitUtil';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const EducationForm = ({ usersData }) => {
  const form = useForm();
  console.log(usersData?.info[37]);
  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    console.log('submitted data', data);
    const updatedFormData = {
      info: {
        36: data[36] === '' ? [] : [data[36]],
        37: data[37] === '' ? [] : [data[37]],
        38: data[38] === '' ? [] : [data[38]],
        39: data[39] === '' ? [] : [data[39]],
      },
    };
    mutate(updatedFormData);
  };

  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Eğitiminiz
          </h4>
          <div className="col-lg-12">
            <div className="mb-3  flex-col flex ">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Lise
              </label>
              <input
                type="text"
                placeholder="Okul adını yazınız"
                style={{ maxWidth: '400px' }}
                defaultValue={usersData?.info[36]}
                {...register('36')}
                className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Üniversite
              </label>
              <input
                type="text"
                placeholder="Okul adını yazınız"
                style={{ maxWidth: '400px' }}
                className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                defaultValue={usersData?.info[37]}
                {...register('37')}
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Yüksek Lisans
              </label>
              <input
                type="text"
                placeholder="Okul adını yazınız"
                style={{ maxWidth: '400px' }}
                className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                defaultValue={usersData?.info[38]}
                {...register('38')}
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Doktora
              </label>
              <input
                type="text"
                placeholder="Okul adını yazınız"
                style={{ maxWidth: '400px' }}
                className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                defaultValue={usersData?.info[39]}
                {...register('39')}
                id="name"
                aria-describedby="emailHelp"
              />
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

export default EducationForm;
