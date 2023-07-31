const ExtraStep = ({ register }) => {
  return (
    <div className="teacher-info-detail flex flex-col space-y-2">
      <h6 className="mb-3">Öğretmen başka neyi bilmeli /neye dikkat etmeli?</h6>

      <textarea
        style={{ height: "200px", resize: "none" }}
        className="form-control placeholder-opacity-50"
        placeholder="Buraya yazın"
        type="textarea"
        {...register("9")}
        id="floatingtextarea"
      />
    </div>
  );
};

export default ExtraStep;
