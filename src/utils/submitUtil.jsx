import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { currentUser } from '../store/slices/userSlice';
const useSubmitHook = () => {
  const user = useSelector(currentUser);
  const submitHandler = async (formData) => {
    // Get the existing data from the server
    const { data: existingData } = await axios.get(
      'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
      { withCredentials: true }
    );

    console.log(existingData);

    // Merge the new values with the existing data
    formData.info = { ...existingData.info, ...formData.info };

    const response = await axios.post(
      'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
      formData,
      { withCredentials: true }
    );

    return response.data;
  };
  //console.log(user);
  const queryClient = useQueryClient();
  const {
    data,
    isSuccess: isSuccessSubmit,
    isError,
    isLoading: isLoadingSubmit,
    error: isErrorSubmit,
    mutate,
  } = useMutation({
    mutationFn: submitHandler,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      queryClient.invalidateQueries('userpersonal');
    },
  });

  return {
    submitHandler,
    isLoadingSubmit,
    isErrorSubmit,
    mutate,
    isSuccessSubmit,
  };
};

export default useSubmitHook;
