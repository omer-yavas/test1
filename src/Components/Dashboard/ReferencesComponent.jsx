import { useQuery } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';
import ReferencesComponentForm from '../DashboardForms/ReferencesComponent';

const ReferencesComponent = () => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const {
    data: userData,
    isError: isUserError,
    error: userError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ['userReferences'],
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
      {!isUserLoading && <ReferencesComponentForm usersData={user} />}
    </>
  );
};

export default ReferencesComponent;
