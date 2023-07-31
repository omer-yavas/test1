import StepOne from '../../Components/AskAnExpert/step1';
import StepTwo from '../../Components/AskAnExpert/step2';
import StepThree from '../../Components/AskAnExpert/step3';
import StepFour from '../../Components/AskAnExpert/step4';
import StepFive from '../../Components/AskAnExpert/step5';
import StepSix from '../../Components/AskAnExpert/step6';
import StepSeven from '../../Components/AskAnExpert/step7';
import StepEight from '../../Components/AskAnExpert/step8';
import ExtraStep from '../../Components/AskAnExpert/extrastep';
import Navbar from '../../Components/Navbar';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const AskAnExpert = () => {
  const [step, setStep] = useState(1);
  const [cityCounty, setCityCounty] = useState([]);
  const form = useForm();
  const { register, control, formState, handleSubmit } = form;
  const { errors, isDirty, isValid } = formState;

  const prevHandler = () => {
    setStep((prev) => prev - 1);
  };
  const nextHandler = () => {
    setStep((prev) => prev + 1);
    console.log(step);
  };

  const submitHandler = async (data) => {
    for (const key in data) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
    }
    const changedData = {
      info: { ...data, 10: cityCounty },
    };
    console.log(changedData);
    try {
      const response = await axios.post(
        'https://octopus-app-577yw.ondigitalocean.app/ask-to-expert',
        changedData,
        {
          withCredentials: true,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setStep((step) => step + 1);
      } else {
        // Request was not successful
        console.log('Request failed');
      }
    } catch (error) {
      console.log(response);
    }
  };

  const cityCountyHandler = (data) => {
    setCityCounty([data]);
  };
  return (
    <>
      <Navbar />
      <div
        className="points teacher-bul pt-0 d-flex align-items-center shadow-sm mt-0"
        style={{ background: ' #f3f3fe' }}
      >
        <div className="container">
          <div className="row">
            <div className="bg-white p-md-5 p-3 p-lg-5 my-3 shadow-sm offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <form onSubmit={handleSubmit(submitHandler)} noValidate>
                {step === 1 && <StepOne register={register} />}
                {step === 2 && <StepTwo register={register} />}
                {step === 3 && <StepThree register={register} />}
                {step === 4 && <StepFour register={register} />}
                {step === 5 && <ExtraStep register={register} />}
                {step === 6 && (
                  <StepFive
                    register={register}
                    cityCountyHandler={cityCountyHandler}
                  />
                )}
                {step === 7 && <StepSix register={register} />}
                {step === 8 && <StepSeven register={register} />}
                {step === 9 && <StepEight register={register} />}
                <div className="button mt-4 d-flex justify-content-between">
                  {step > 1 && step <= 8 && (
                    <a onClick={prevHandler} className="custom-btn px-5">
                      Geri
                    </a>
                  )}

                  {step >= 1 && step < 8 && (
                    <a onClick={nextHandler} className="custom-btn px-5">
                      İleri
                    </a>
                  )}
                  {step === 8 && (
                    <button type="submit" className="custom-btn px-5">
                      Gönder
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="copyright border-0 mt-3 py-3 text-center">
          copyright © 2022 banabiders.com | Öğretmen Bul
        </div>
      </footer>
    </>
  );
};

export default AskAnExpert;
