import useSubmitHook from '@/utils/submitUtil';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';
const PriceComponentForm = ({ usersData }) => {
  const form = useForm();

  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    const updatedFormData = {
      info: {
        31: [data[31]],
        32: [data[32]],
        33: [data[33]],
        34: [data[34]],
      },
    };
    console.log(data[31]);
    mutate(updatedFormData);
  };

  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Ücretler
          </h4>
          <div className="col-lg-12">
            <div className="mb-5">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Ders ücretinin para birimi
              </label>
              <select
                className="form-select mb-2"
                aria-label="Default select example"
                {...register('31')}
                style={{ maxWidth: '300px' }}
                defaultValue={usersData?.info[31]}
              >
                <option selected value="TL">
                  Türk Lirası
                </option>
                {/* <option value="Euro">Euro</option>
                <option value="Dolar">Dolar</option> */}
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                ONLINE 45dk ders ?
              </label>
              <input
                type="text"
                placeholder="ONLINE 45dk ders ücretinizi yazınız"
                style={{ maxWidth: '400px' }}
                className="form-control"
                defaultValue={usersData?.info[32]}
                {...register('32')}
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                ÖĞRETMENİN EVİNDE/OFİSİNDE 45dk ders?
              </label>
              <input
                type="text"
                placeholder="EVİNİZDE/OFİSİNİZDE 45dk ders ücretinizi yazınız"
                style={{ maxWidth: '400px' }}
                className="form-control"
                defaultValue={usersData?.info[33]}
                {...register('33')}
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                ÖĞRENCİNİN EVİNDE 45dk ders?
              </label>
              <input
                type="text"
                placeholder="ÖĞRENCİNİN EVİNDE 45dk ders ücretinizi yazınız"
                style={{ maxWidth: '400px' }}
                className="form-control"
                defaultValue={usersData?.info[34]}
                {...register('34')}
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

export default PriceComponentForm;
