const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="harita">
              <iframe
                title="Location"
                style={{ border: "1px solid #ccc", borderRadius: "5px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2479776229998!2d28.87235941491325!3d40.97605052935706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabcbb294708a5%3A0xaf915c79264f63ef!2zWmV5dGlubGlrLCDDlm1lciBOYWNpIFNrLiBObzozMiwgMzQxNDAgQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1646770911425!5m2!1str!2str"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact" id="contact">
              <h3 className="mb-4">Bize Ulaşın</h3>
              <p>
                <strong>Adres :</strong> Zeytinlik Mah. Ömer Naci Sok. 32/1
                Bakırköy / İstanbul
              </p>
              <p>
                <strong>Tel :</strong> +90 532 292 31 93
              </p>
              <p>
                <strong>E-mail :</strong> info@banabiders.com
              </p>
              <div className="sosyal-footer">
                <ul>
                  <li>
                    <a
                      href=" https://www.facebook.com/banabiderscom"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/banabiderscom" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/banabiderscom"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/channel/UCLZYYhoHbqD-b-tXFqdhoUw"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/banabiderscom/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright mt-3 pt-4 text-center">
        copyright © 2022 banabiders.com iyi gelecek
      </div>
    </footer>
  );
};

export default Footer;
