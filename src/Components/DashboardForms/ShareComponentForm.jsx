import useSubmitHook from '../../utils/submitUtil';
import { useForm } from 'react-hook-form';

import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const ShareComponentForm = ({ usersData }) => {
  const form = useForm();

  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    console.log('submitted data', data);
    const updatedFormData = {
      info: {
        45: [data[45]],
      },
    };
    mutate(updatedFormData);
  };
  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Fotoğraflar ve Videolar
          </h4>
          <div className="col-lg-12">
            <div className="group">
              <h6
                className="mb-3 text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Profilimi yayınla/durdur
              </h6>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  value="yayınla"
                  name="car"
                  {...register('45')}
                  defaultChecked={usersData?.info[45][0] === 'yayınla'}
                  id="share"
                />
                <label className="form-check-label" htmlFor="share">
                  Yayınla
                </label>
              </div>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  type="radio"
                  value="yayınlama"
                  name="car"
                  {...register('45')}
                  defaultChecked={usersData?.info[45][0] === 'yayınlama'}
                  id="share2"
                />
                <label className=" form-check-label" htmlFor="share2">
                  Yayınlama
                </label>
              </div>
              <div
                className="alert alert-info mt-3"
                role="alert"
                style={{ maxWidth: ' 700px' }}
              >
                <small>
                  Yayınlama derseniz Profiliniz web sitesinde yayınlanmayacak
                  Profiliniz öğretmenlerin olduğu veri tabanında güvenle
                  tutulacak Web sitemiz üzerinden eğitim uzmanımızdan özel ders
                  isteyenler olursa eğitim uzanımız sizi görebilecek ve özel
                  derse gönderebilecek
                </small>
              </div>
              <div className="btn btn-danger">Profilimi Sil</div>
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
    </div>
  );
};

export default ShareComponentForm;
