const BannerThree = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 py-3">
          <div className="expert-box">
            <ul className="px-0">
              <h2 className="mb-3" style={{ color: "var(--siyah)" }}>
                <strong>BanaBiDers’te öğretmen ol</strong>
              </h2>
              <li className="mb-2">
                <i
                  className="fas fa-star me-md-3"
                  style={{ color: "var(--banabi)" }}
                ></i>
                Öğrenciler ile buluş
              </li>
              <li className="mb-2">
                <i
                  className="fas fa-star me-md-3"
                  style={{ color: "var(--banabi)" }}
                ></i>
                %100 kazanç sizin
              </li>
            </ul>
            <div className="button">
              <a
                className="custom-btn duration-200 transition-all "
                href="ogretmen-ol.html"
              >
                <i className="fa-light fa-user-plus"></i> Ücretsiz Üye Ol
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 py-3">
          <img src="/user.svg" width={355} height={227} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default BannerThree;
