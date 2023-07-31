const StepTwo = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <div className="group mb-5">
        <h6 className="mb-3">Hangi dersten özel ders istiyorsun?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="turkce"
            {...register("4")}
            id="flexCheckDefaulta"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaulta">
            Türkçe
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="matematik"
            {...register("4")}
            id="flexCheckDefaultb"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultb">
            Matematik
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="hayat"
            {...register("4")}
            id="flexCheckDefaultc"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultc">
            Hayat Bilgisi
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="gorsel"
            {...register("4")}
            id="flexCheckDefaulte"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaulte">
            Görsel Sanatlar
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="muzik"
            {...register("4")}
            id="flexCheckDefaultd"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultd">
            Müzik
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="oyun"
            {...register("4")}
            id="flexCheckDefaultf"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultf">
            Oyun ve Fiziki Etkinlikleri
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
