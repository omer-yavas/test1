import StarIcon from "@mui/icons-material/Star";
const Banner = () => {
  return (
    <div className="container">
      <div className="flex lg:flex-row lg:justify-between lg:mr-28 lg:mb-4 flex-col">
        <ul className="px-0 flex flex-col space-y-0">
          <h2 className="mb-3" style={{ color: "var(--siyah)" }}>
            <strong>1 numaralı özel ders sitesi</strong>
          </h2>
          <li className="mb-1 flex space-x-2 ">
            <StarIcon style={{ color: "var(--banabi)" }} />

            <p>Her dersten özel ders</p>
          </li>

          <li className="mb-1 flex space-x-2 ">
            <StarIcon style={{ color: "var(--banabi)" }} />

            <p>Sınavlara hazırlık</p>
          </li>
          <li className="mb-1 flex space-x-2 ">
            <StarIcon style={{ color: "var(--banabi)" }} />

            <p>Okula destek</p>
          </li>
          <li className="mb-1 flex space-x-2 ">
            <StarIcon style={{ color: "var(--banabi)" }} />

            <p>Onaylı Mükemmel Öğretmenler</p>
          </li>
          <div className="button mt-4">
            <a className="custom-btn" href="ogretmen-bul.html" target="_blank">
              <i className="fa-light fa-magnifying-glass"></i> Öğretmen Bul
            </a>
          </div>
        </ul>
        <div className="flex items-center justify-center sm:justify-start">
          {/*banner image  */}
          <img
            src="/banner-right-01.svg"
            width={236}
            height={186}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
