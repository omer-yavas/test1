import RegisterComponent from "@/Components/Auth/RegisterComponent";
import Navbar from "@/Components/Navbar";
const Register = () => {
  return (
    <>
      <Navbar />
      <div
        className="points teacher-bul pt-0 d-flex align-items-center shadow-sm mt-0"
        style={{ background: "#f3f3fe" }}
      >
        <div className="container">
          <div className="row">
            <div className="bg-white my-3 p-md-5 p-3  shadow-sm offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6  offset-xxl-4 col-xxl-4">
              <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                <button className="flex items-center space-x-3 justify-center px-2 py-2 border rounded-lg hover:shadow-xl hover:-translate-y-1 duration-200 ">
                  <img
                    alt="facebook"
                    className="w-10"
                    src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/main/mini-projects/login-modal/images/facebook.png"
                  />
                  <span>Facebook ile giriş yap</span>
                </button>
                <button className="flex items-center space-x-3 justify-center px-2 py-2 border rounded-lg hover:shadow-xl hover:-translate-y-1 duration-200">
                  <img
                    alt="google"
                    className="w-10"
                    src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/main/mini-projects/login-modal/images/google.png"
                  />
                  <span>Google ile giriş yap</span>
                </button>
              </div>
              <RegisterComponent />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="copyright border-0 mt-3 py-3 text-center">
          copyright © 2022 banabiders.com iyi gelecek
        </div>
      </footer>
    </>
  );
};

export default Register;
