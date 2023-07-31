const StepThree = ({ register }) => {
  return (
    <div className="teacher-info-detail">
      <div className="group mb-5">
        <h6 className="mb-3">Niçin özel ders?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="okuladestek"
            {...register("5")}
            id="flexCheckDefaulta"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaulta">
            Okula destek
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="sinavlarahazirlik"
            {...register("5")}
            id="flexCheckDefaultb"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultb">
            Sınavlara Hazırlık
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="yurtdisinahazirlik"
            {...register("5")}
            id="flexCheckDefaultc"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultc">
            Yurtdışı Sınavlara Hazırlık
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="checkbox"
            value="yabancidilhazirlik"
            {...register("5")}
            id="flexCheckDefaultd"
          />
          <label className="form-check-label" htmlFor="flexCheckDefaultc">
            Yabanci dil hazırlık
          </label>
        </div>
      </div>
      <div className="group mb-5">
        <h6 className="mb-3">Özel dersi ne zaman istiyorsunuz?</h6>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="bugün"
            {...register("6")}
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Bugün
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="yarin"
            {...register("6")}
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Yarın
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="buhafta"
            {...register("6")}
            id="flexRadioDefault4"
          />
          <label className=" form-check-label" htmlFor="flexRadioDefault4">
            Bu hafta
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="15gun"
            {...register("6")}
            id="flexRadioDefault5"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault5">
            15 gün içinde
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="1ay"
            {...register("6")}
            id="flexRadioDefault6"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault6">
            1 ay içinde
          </label>
        </div>
        <div className="form-check mb-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="sadecefiyat"
            {...register("6")}
            id="flexRadioDefault7"
          />
          <label className=" form-check-label" htmlFor="flexRadioDefault7">
            Sadece fiyat bakıyorum
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
