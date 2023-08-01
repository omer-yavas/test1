import { useState } from 'react';
import useSubmitHook from '../../utils/submitUtil';
import { useFieldArray, useForm } from 'react-hook-form';
import LoadingButtonDashboard from '../Dashboard/LoadingButton.jsx/LoadingButtonDashboard';

const ReferencesComponentForm = ({ usersData }) => {
  const [references, setReferences] = useState(usersData?.info[40]);
  const referencespeople = [];

  for (let i = 0; i < 5; i++) {
    referencespeople.push({ name: references[i] || '' });
  }
  if (references.length > 5)
    for (let i = 5; i < references.length; i++) {
      referencespeople.push({ name: references[i] || '' });
    }

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      referencespeople: referencespeople,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'referencespeople',
  });

  const referencesChangeHandler = (index, value) => {
    console.log(index, value);
    const updatedReferences = [...references];
    updatedReferences[index] = value;
    setReferences(updatedReferences);
  };

  const { isErrorSubmit, isLoadingSubmit, mutate, isSuccessSubmit } =
    useSubmitHook();

  const submitHandler = (data) => {
    data = data?.referencespeople
      ?.filter((item) => item.name !== '')
      .map((item, index) => item.name);
    const updatedFormData = {
      info: {
        40: data,
      },
    };
    mutate(updatedFormData);
  };

  return (
    <div className="bg-white rounded p-4">
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div className="row mb-1 max-h-[calc(100vh-280px)] overflow-auto">
          <h4 className="text-banabi mb-3" style={{ color: 'var(--banabi)' }}>
            Referanslar
          </h4>
          <div className="col-lg-12">
            <div className="mb-2">
              <label
                htmlFor="ilce"
                className="form-label text-banabi"
                style={{ color: 'var(--banabi)' }}
              >
                Referanslarım
              </label>
              {fields.map((item, index) => (
                <div key={index} className="mb-3 flex space-x-2">
                  <input
                    type="text"
                    className="border rounded-md  py-2  w-full px-2 placeholder-[#d6d6d6]  placeholder:text-sm"
                    id={`d${index + 1}`}
                    onChange={(e) =>
                      referencesChangeHandler(index, e.target.value)
                    }
                    style={{ maxWidth: '450px' }}
                    placeholder="Öğrencinizin adını soyadını ve nereyi kazandığını yazınız."
                    {...register(`referencespeople.${index}.name`)}
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
                <i className="fa-light fa-circle-plus"></i> Referans Ekle
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

export default ReferencesComponentForm;
