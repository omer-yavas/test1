const StepSix = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <div className="group mb-3">
        <h6 className="mb-5">Öğretmen özel dersi hangi dilde versin?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="turkce"
            {...register("11")}
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
            value="ingilizce"
            {...register("11")}
            id="flexCheckDefaultb"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultb">
            İngilizce
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="almanca"
            {...register("11")}
            id="flexCheckDefaultc"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultc">
            Almanca
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="fransızca"
            {...register("11")}
            id="flexCheckDefaulte"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaulte">
            Fransızca
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="rusca"
            {...register("11")}
            id="flexCheckDefaultd"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultd">
            Rusça
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="arapca"
            {...register("11")}
            id="flexCheckDefaultf"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultf">
            Arapça
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Diğer
        </label>
        <input
          type="email"
          placeholder="Diğer"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </div>
  );
};

export default StepSix;
