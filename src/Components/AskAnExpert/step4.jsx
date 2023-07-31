const StepFour = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <div className="group mb-5">
        <h6 className="mb-3">Öğretmenin cinsiyeti?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefaultr"
            value="Farketmez"
            {...register("7")}
            id="flexRadioDefaultr"
          />
          <label className="form-check-label" htmlFor="flexRadioDefaultr">
            Farketmez
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefaultr"
            value="Kadın"
            {...register("7")}
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Kadın
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefaultr"
            value="Erkek"
            {...register("7")}
            id="flexRadioDefault4"
          />
          <label className=" form-check-label" htmlFor="flexRadioDefault4">
            Erkek
          </label>
        </div>
      </div>
      <div className="group mb-5">
        <h6 className="mb-3">Öğrencinin cinsiyeti?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="kadin"
            {...register("8")}
            id="flexRadioDefaultk"
          />
          <label className="form-check-label" htmlFor="flexRadioDefaultk">
            Kadın
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="erkek"
            {...register("8")}
            id="flexRadioDefault5"
          />
          <label className=" form-check-label" htmlFor="flexRadioDefault5">
            Erkek
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
