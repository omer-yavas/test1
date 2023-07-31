const StepSeven = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <h6 className="mb-5">Eğitim uzmanımız sizi hangi numaradan arasın ?</h6>
      <div className="mb-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Adınız soyadınız
        </label>
        <input
          type="email"
          placeholder="Ad soyad"
          className="form-control"
          {...register("12")}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="exampleInputEmail2" className="form-label">
          Telefon numaranız
        </label>
        <input
          type="email"
          placeholder="+90 (555) 555 55 55"
          className="form-control"
          {...register("13")}
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
        />
      </div>
    </div>
  );
};

export default StepSeven;
