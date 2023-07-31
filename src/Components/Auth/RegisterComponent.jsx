import Link from 'next/link';
import { useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
const RegisterComponent = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const surname = surnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const registerInfo = {
      name,
      surname,
      email,
      password,
    };
    console.log(registerInfo);

    try {
      const response = await axios.post(
        'https://octopus-app-577yw.ondigitalocean.app/user',
        registerInfo,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      router.push('/auth/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label
          style={{ color: 'var(--banabi)' }}
          htmlFor="ad"
          className="form-label"
        >
          Adınız
        </label>
        <div className="withicon">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="ad"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div className="mb-3">
        <label
          style={{ color: 'var(--banabi)' }}
          htmlFor="surname"
          className="form-label"
        >
          Soyadınız
        </label>
        <div className="withicon">
          <input
            ref={surnameRef}
            type="text"
            className="form-control"
            id="surname"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label
            style={{ color: 'var(--banabi)' }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            E-Posta Adresiniz
          </label>
          <div className="withicon">
            <span className="infoicon"></span>
            <input
              ref={emailRef}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div id="emailHelp" className="form-text d-none">
            {" We'll never share your email with anyone else."}
          </div>
        </div>
        <div className="mb-3">
          <label
            style={{ color: 'var(--banabi)' }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Şifre
          </label>
          <div className="withicon">
            <input
              ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="mb-3 form-check d-flex">
          <div>
            <input type="checkbox" className="form-check-input" id="sozlesme" />
            <label className="form-check-label" htmlFor="sozlesme">
              <small>
                <a
                  href="https://docs.google.com/document/d/1MQyxVkfZ-g-n2G1hanYO46m26AxJ4uKmn2ZOUkQKTSM/edit?usp=sharing"
                  target="_blank"
                >
                  Üye Sözleşmesini
                </a>
                &nbsp;kabul ediyorum.
              </small>
            </label>
          </div>
        </div>
        <div className="mb-3 form-check d-flex">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="rizametni"
            />
            <label className="form-check-label" htmlFor="rizametni">
              <small>
                İletişim bilgilerime e-ileti gönderilmesine, verilerimin&nbsp;
                <a
                  href="https://docs.google.com/document/d/1PUu91Vo7DOiHeEYqPHotUoAP06A513002bdrzCdhoQU/edit?usp=sharing"
                  target="_blank"
                >
                  Açık Rıza Metni
                </a>
                ’nde belirtilen şekilde işlenmesine onay veriyorum.
              </small>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#98eb84] hover:bg-[#5bdf3a] py-2.5 rounded-md flex justify-center text-white text-2xl px-30 "
          href="index.html"
        >
          ÜYE OL
        </button>
        <div className="text-center mt-3">
          <span style={{ color: 'rgba(0,0,0,.5)' }}>
            Üyeliğin var mı?&nbsp;
          </span>
          <Link href="/auth/login" style={{ color: 'var(--banabi)' }}>
            Giriş Yap
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterComponent;
