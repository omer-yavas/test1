import Navbar from '../Dashboard/Navbar';
import MobileSideBar from '../Dashboard/mobileSideBar';
import SideBar from '../Dashboard/SideBar';
import { LinearProgress } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '@/store/slices/userSlice';

import { getUser } from '@/store/slices/userSlice';
import { useState } from 'react';

const withBioComponent = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [number, setNumber] = useState(0);
    const { data } = useQuery({
      queryKey: ['profileComplete'],
      queryFn: async () => {
        const response = await axios.get(
          'https://octopus-app-577yw.ondigitalocean.app/teacher-application',
          { withCredentials: true }
        );
        return response.data;
      },
    });

    console.log('mobiledata', data);

    // Count the non-empty arrays in data.info
    const countNonEmptyArrays = () => {
      let count = 0;
      for (const key in data?.info) {
        if (
          Array.isArray(data.info[key]) &&
          data.info[key].length > 0 &&
          !data.info[key].includes('')
        ) {
          count++;
        }
      }
      return count;
    };

    const nonEmptyArrayCount = countNonEmptyArrays();

    return (
      <>
        <Navbar data={data} />
        <div className="md:hidden">
          <MobileSideBar />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row h-full">
          <div className="flex-none w-72 ">
            <SideBar />
          </div>
          <div className="bg-[#dedede] p-8 md:w-full ">
            <div className="py-2 md:hidden">
              <p>Profil doluluk oranınız</p>
              <div className="progress" style={{ height: '20px' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${Math.floor((nonEmptyArrayCount * 100) / 45)}%`,
                  }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {Math.floor((nonEmptyArrayCount * 100) / 45)}%
                </div>
              </div>
            </div>
            <WrappedComponent />
          </div>
        </div>
      </>
    );
  };

  return EnhancedComponent;
};

export default withBioComponent;
