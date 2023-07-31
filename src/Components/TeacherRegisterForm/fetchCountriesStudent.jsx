import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCitiesAndCountiesStudent = (selectedCity) => {
  const [citiesStudent, setCitiesStudent] = useState([]);
  const [countiesStudent, setCountiesStudent] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(
        "https://turkiyeapi.cyclic.app/api/v1/provinces/"
      );
      setCitiesStudent(response.data.data);
      console.log(response.data.data);
    };

    fetchCities();
  }, []);

  const fetchCounty = async (selectedCity) => {
    const response = await axios.get(
      `https://turkiyeapi.cyclic.app/api/v1/districts`
    );

    const selectedCounties = response.data.data.filter(
      (item) => item.province === selectedCity
    );

    setCountiesStudent(selectedCounties);
    console.log(selectedCounties);
  };
  useEffect(() => {
    if (selectedCity) {
      console.log(selectedCity);

      fetchCounty(selectedCity);
    }
  }, [selectedCity]);

  return { countiesStudent, citiesStudent };
};

export default useFetchCitiesAndCountiesStudent;
