import useFetchCitiesAndCounties from "../TeacherRegisterForm/fetchCountries";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";

const StepFive = ({ register, cityCountyHandler }) => {
  const [selectedCityStudent, setSelectedCityStudent] = useState("");
  const [selectedCountyStudent, setSelectedCountyStudent] = useState([]);

  const { cities, counties } = useFetchCitiesAndCounties(selectedCityStudent);
  const handleCityChangeStudent = (event) => {
    if (selectedCityStudent !== event.target.value) {
      setSelectedCountyStudent([]);
    }
    setSelectedCityStudent(event.target.value);
  };
  const handleCountyChangeStudent = (event) => {
    setSelectedCountyStudent(event.target.value);
  };
  useEffect(() => {
    cityCountyHandler({
      city: selectedCityStudent,
      counties: selectedCountyStudent,
    });
  }, [selectedCityStudent, selectedCountyStudent]);

  return (
    <div className="teacher-info-detail">
      <h6 className="mb-5">Öğrenci hangi il/ilçede ?</h6>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          İl Seçiniz
        </label>
        <select
          className="form-select mb-2"
          style={{ maxWidth: "300px" }}
          value={selectedCityStudent}
          onChange={handleCityChangeStudent}
          aria-label="Default select example"
          defaultValue={selectedCityStudent}
        >
          <option value="">Şehir seçiniz</option>
          {cities?.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="exampleInputPassword2" className="form-label">
          İlçe Seçiniz
        </label>
        <Select
          className="form-select mb-2"
          style={{ maxWidth: "300px" }}
          multiple
          aria-label="Default select example"
          defaultValue={selectedCountyStudent}
          value={selectedCountyStudent}
          onChange={handleCountyChangeStudent}
        >
          {counties?.map((county) => (
            <MenuItem key={county.name} value={county.name}>
              {county.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default StepFive;
