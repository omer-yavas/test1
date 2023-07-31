import { useRef, useState } from 'react';
import useSubmitHook from '@/utils/submitUtil';
import { useForm } from 'react-hook-form';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const CompaniesComponentForm = ({ usersData }) => {
  const [companies, setCompanies] = useState(usersData?.info[35]);
  const companiesChangeHandler = (index, value) => {
    // Create a copy of the lessons array
    const updatedCompanies = [...companies];
    // Update the value at the specified index
    updatedCompanies[index] = value;
    // Set the updated array as the new value of the state variable
    setCompanies(updatedCompanies);
  };

  const form = useForm();

  const { register, control, handleSubmit } = form;
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    console.log('submitted data', data);
    const updatedFormData = {
      info: {
        35: companies,
      },
    };
    mutate(updatedFormData);
  };
  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Çalıştığınız Kurumlar
          </h4>
          <div className="col-lg-12">
            <div className="mb-2">
              <label
                htmlFor="ilce"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Çalıştığınız kurumları yazınız
              </label>
              {Array(5)
                .fill(null)
                .map((item, index) => (
                  <div key={index} className="mb-3">
                    <input
                      type="text"
                      className="border rounded-md px-2 py-2  w-full  placeholder-[#d6d6d6]  placeholder:text-sm"
                      id={`d${index + 1}`}
                      defaultValue={usersData?.info[35][index]}
                      onChange={(e) =>
                        companiesChangeHandler(index, e.target.value)
                      }
                      style={{ maxWidth: '300px' }}
                      placeholder="Çalıştığınız kurumu yazınız"
                    />
                  </div>
                ))}

              <div>
                <a className="btn btn-secondary btn-sm" href="javascript:;">
                  <i className="fa-light fa-circle-plus"></i> Kurum Ekle
                </a>
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
    </div>
  );
};

export default CompaniesComponentForm;
