import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slices/userSlice";
import { getUser } from "@/store/slices/userSlice";
import axios from "axios";
import PersonalInfoComponentForm from "../DashboardForms/PersonalInfoComponentForm";
const PersonalInfoComponent = () => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["userpersonal"],
    queryFn: async () => {
      const response = await axios.get(
        "https://octopus-app-577yw.ondigitalocean.app/teacher-application",
        { withCredentials: true }
      );
      dispatch(getUser(response.data));
    },
  });

  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && <PersonalInfoComponentForm usersData={user} />}
    </>
  );
};

export default PersonalInfoComponent;
