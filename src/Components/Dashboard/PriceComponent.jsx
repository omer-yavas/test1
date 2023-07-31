import { useQuery } from "react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "@/store/slices/userSlice";

import { getUser } from "@/store/slices/userSlice";
import PriceComponentForm from "../DashboardForms/PriceComponentForm";
const PriceComponent = () => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const {
    data: userData,
    isError: isUserError,
    error: userError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["priceComponent"],
    queryFn: async () => {
      const response = await axios.get(
        "https://octopus-app-577yw.ondigitalocean.app/teacher-application",
        { withCredentials: true }
      );
      dispatch(getUser(response.data));
      console.log(response.data);
      return response.data;
    },
  });
  return (
    <>
      {isUserLoading && <p>Loading</p>}
      {!isUserLoading && <PriceComponentForm usersData={user} />}
    </>
  );
};

export default PriceComponent;
