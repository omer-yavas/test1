import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCitiesAndCounties = (selectedCity) => {
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);
  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get(
        "https://turkiyeapi.cyclic.app/api/v1/provinces/"
      );
      setCities(response.data.data);
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

    setCounties(selectedCounties);
    console.log(selectedCounties);
  };
  useEffect(() => {
    if (selectedCity) {
      console.log(selectedCity);

      fetchCounty(selectedCity);
    }
  }, [selectedCity]);

  return { counties, cities };
};

export default useFetchCitiesAndCounties;
