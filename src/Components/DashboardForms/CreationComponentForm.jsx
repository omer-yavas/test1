import { useState } from 'react';
import useSubmitHook from '@/utils/submitUtil';
import { useForm, useFieldArray } from 'react-hook-form';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const CreationComponentForm = ({ usersData }) => {
  const [creations, setCreations] = useState(usersData?.info[42]);

  const creationsPeople = [];

  for (let i = 0; i < 5; i++) {
    creationsPeople.push({ name: creations[i] || '' });
  }
  if (creations.length > 5)
    for (let i = 5; i < creations.length; i++) {
      creationsPeople.push({ name: creations[i] || '' });
    }
  const creationChangeHandler = (index, value) => {
    // Create a copy of the lessons array
    const updatedCreations = [...creations];
    // Update the value at the specified index
    updatedCreations[index] = value;
    // Set the updated array as the new value of the state variable
    setCreations(updatedCreations);
  };

  console.log(creations);
  const form = useForm({
    defaultValues: {
      creationsPeople: creationsPeople,
    },
  });

  const { register, control, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'creationsPeople',
  });
  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();
  console.log(usersData);
  const submitHandler = (data) => {
    data = data?.creationsPeople
      ?.filter((item) => item.name !== '')
      .map((item, index) => item.name);
    const updatedFormData = {
      info: {
        42: data,
      },
    };
    mutate(updatedFormData);
  };
  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Yazdığınız Eserler
          </h4>
          <div className="col-lg-12">
            <div className="mb-2">
              <label
                htmlFor="ilce"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Yazdığınız eseriniz varsa ismini yazınız.{' '}
              </label>
              {fields.map((item, index) => (
                <div key={index} className="mb-3 flex space-x-2">
                  <input
                    type="text"
                    className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                    id={`d${index + 1}`}
                    onChange={(e) =>
                      creationChangeHandler(index, e.target.value)
                    }
                    style={{ maxWidth: '450px' }}
                    placeholder="Yazdığınız eserin ismini yazınız."
                    {...register(`creationsPeople.${index}.name`)}
                  />
                  {index > 4 && (
                    <button
                      type="button"
                      style={{ backgroundColor: 'var(--banabi)' }}
                      className="px-2 py-2 text-white rounded-md"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Kaldır
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  append({ name: '' });
                }}
              >
                <i className="fa-light fa-circle-plus"></i> Eser Ekle
              </button>
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

export default CreationComponentForm;
