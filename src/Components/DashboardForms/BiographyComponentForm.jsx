import useSubmitHook from '@/utils/submitUtil';
import { useForm } from 'react-hook-form';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';
import NotificationButton from '../Dashboard/Notifications/NotificationButton';

const BiographyComponentForm = ({ usersData }) => {
  const form = useForm();

  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    console.log('submitted data', data);
    const updatedFormData = {
      info: {
        41: [data[41]],
      },
    };
    mutate(updatedFormData);
  };

  return (
    <>
      <div className="bg-white rounded p-4 mx-auto">
        <form onSubmit={handleSubmit(submitHandler)} noValidate>
          <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
            <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
              Kendinizi Tanıtın
            </h4>
            <div className="col-lg-12">
              <div className="flex flex-col">
                <label
                  htmlFor="mail"
                  className="form-label text-banabi"
                  style={{ color: 'var(--banabi)' }}
                >
                  Özgeçmiş
                </label>
                <textarea
                  style={{ height: '400px', maxWidth: '600px' }}
                  className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                  placeholder="Buraya yazın"
                  defaultValue={usersData?.info[41]}
                  {...register('41')}
                  id="floatingTextarea"
                ></textarea>
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
    </>
  );
};

export default BiographyComponentForm;
