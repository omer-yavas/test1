import StarIcon from "@mui/icons-material/Star";
const BannerTwo = () => {
  return (
    <div className="container">
      <div className="flex lg:flex-row lg:justify-between lg:mr-28 lg:mb-4 flex-col">
        <ul className="px-0 items-center justify-center">
          <h2 className="mb-4" style={{ color: "var(--siyah)" }}>
            <strong>Eğitim uzmanımıza sor</strong>
          </h2>
          <li className="mb-2">
            <StarIcon style={{ color: "var(--banabi)" }} />
            Eğitim uzmanımız sizi arasın
          </li>

          <li className="mb-2">
            <StarIcon style={{ color: "var(--banabi)" }} />
            Çalışmalarınızı planlasın
          </li>
          <li className="mb-2">
            <StarIcon style={{ color: "var(--banabi)" }} />
            Öğretmenlerle buluştursun
          </li>
          <div className="button mt-4">
            <a className="custom-btn" href="ask-to-teacher.html">
              <i className="fa-light fa-comments-question"></i> Uzmana Sor
            </a>
          </div>
        </ul>
        <div className="flex items-center  justify-center sm:justify-start">
          {/*banner image  */}
          <img
            src="/uzmana-sor.svg"
            width={256}
            height={260}
            alt="banner2"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
