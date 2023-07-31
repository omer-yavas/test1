const StepOne = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <div className="group mb-5">
        <h6 className="mb-3">Ders nasıl yapılsın?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="online"
            {...register("1")}
            id="flexCheckDefault1a"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaulta">
            Online
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="yüzyüze"
            {...register("1")}
            id="flexCheckDefault1b"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultb">
            Yüzyüze
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="ilce" className="form-label">
          Ders nerede yapılsın?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ofisimde"
            {...register("2")}
            id="flexCheckDefault2a"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultb">
            Benim Evimde/Ofisimde
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ogrencievinde"
            {...register("2")}
            id="flexCheckDefault2b"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultc">
            Öğrencinin Evinde
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="ilce" className="form-label">
          Nerede okuyorsunuz ?
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ilkokul"
            {...register("3")}
            id="flexCheckDefault3a"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            İlkokuldayım
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="ortaokul"
            {...register("3")}
            id="flexCheckDefault3b"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Ortaokuldayım
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="lise"
            {...register("3")}
            id="flexCheckDefault3c"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault3">
            Lisedeyim
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="lisemezun"
            {...register("3")}
            id="flexCheckDefault3d"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault4">
            Lise mezunuyum
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="universite"
            {...register("3")}
            id="flexCheckDefault3e"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault5">
            Üniversitedeyim
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="unimezun"
            {...register("3")}
            id="flexCheckDefault3f"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault6">
            Üniversite mezunuyum
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
