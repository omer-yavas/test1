import { useQuery } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../store/slices/userSlice';
import { getUser } from '../../store/slices/userSlice';
import CommunicationPageFormComponent from '../DashboardForms/CommunicationPageForm';

const CommunicationPageComponent = () => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();

  const {
    isError: isUserError,
    error: userError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get(
        'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
        { withCredentials: true }
      );
      dispatch(getUser(response.data));
    },
  });

  return (
    <>
      {isUserLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <CircularProgress />
        </div>
      )}
      {!isUserLoading && <CommunicationPageFormComponent usersData={user} />}
    </>
  );
};

export default CommunicationPageComponent;
