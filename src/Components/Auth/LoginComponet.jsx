import Link from "next/link";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const LoginComponent = ({ loginHandler }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const loginInfo = {
      email,
      password,
    };

    console.log(loginInfo);
    try {
      const response = await axios.post(
        "https://octopus-app-577yw.ondigitalocean.app/login",
        loginInfo,
        { withCredentials: true }
      );
      console.log(response.data);
      console.log(response.headers);

      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label
          style={{ color: "var(--banabi)" }}
          htmlFor="exampleInputEmail1"
          className="form-label"
        >
          E-Posta Adresiniz
        </label>
        <div className="withicon">
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div className="mb-3">
        <label
          style={{ color: "var(--banabi)" }}
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
      <div className="mb-3 form-check d-flex justify-content-between">
        <div>
          <input type="checkbox" className="form-check-input" id="rememberme" />
          <label className="form-check-label" htmlFor="rememberme">
            Beni Hatırla
          </label>
        </div>
        <div>
          <a href="#">şifremi unuttum</a>
        </div>
      </div>
      <button type="submit" className="custom-login-btn">
        GİRİŞ YAP
      </button>
      <div className="text-center mt-3">
        <span style={{ color: "rgba(0,0,0,.5)" }}>Üyeliğin yok mu?&nbsp;</span>
        <Link href="/auth/register" style={{ color: "var(--banabi)" }}>
          Hemen Üye Ol
        </Link>
      </div>
    </form>
  );
};

export default LoginComponent;
