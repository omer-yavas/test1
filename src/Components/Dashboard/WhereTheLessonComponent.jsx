import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../store/slices/userSlice';
import axios from 'axios';
import { getUser } from '../../store/slices/userSlice';
import { useQuery } from 'react-query';
import WhereTheLessonComponentForm from '../DashboardForms/WhereLessonComponentForm';

const WhereTheLessonComponent = () => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const {
    data: userData,
    isError: isUserError,
    error: userError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ['whereTheLesson'],
    queryFn: async () => {
      const response = await axios.get(
        'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
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
      {!isUserLoading && <WhereTheLessonComponentForm usersData={user} />}
    </>
  );
};

export default WhereTheLessonComponent;
