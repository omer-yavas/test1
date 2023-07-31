import { Avatar, Hidden } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SettingsIcon from '@mui/icons-material/Settings';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ data }) => {
  const router = useRouter();

  const [openAvatar, setOpenAvatar] = useState(false);
  const [avatarURL, setAvatarUrl] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [teacherDetailLink, setTeacherDetailLink] = useState('');

  useEffect(() => {
    if (data && data.info[43].length > 0) {
      async function getAvatarURL() {
        const response = await axios.post(
          'https://octopus-app-577yw.ondigitalocean.app/download-file',
          {
            file_key_list: data.info[43],
          },
          { withCredentials: true }
        );

        setAvatarUrl(response.data.url_list[0]);
      }
      getAvatarURL();
    }
    if (data && data.info[9].length > 0) {
      console.log(data);
      let name = data.info[9][0];
      let surname = data.info[10][0] ? data.info[10][0] : '';
      setUserFullName(`${name} ${surname}`);
    }
    if (data) {
      async function getUserName() {
        const response = await axios.get(
          `https://octopus-app-577yw.ondigitalocean.app/user?id=${data.user_id}`,
          { withCredentials: true }
        );
        console.log(response);
        setTeacherDetailLink(
          `/OgretmenDetaylari/${data.info[9][0]}${data.info[10][0]}_${response.data.username}`
        );
      }
      getUserName();
    }
  }, [data]);

  return (
    <div className="d-none d-md-block header-top bg-banabi sticky-top px-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="admin-logo">
          <Link href="/">
            <img src="/dashboard/logo.svg" />
          </Link>
        </div>
        <div className="header-right d-flex me-3 align-items-center">
          <div className="mymessage me-5">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="help me-5">
            <FontAwesomeIcon icon={faCircleQuestion} />
          </div>
          <div
            onClick={() => {
              setOpenAvatar((prev) => !prev);
            }}
            className="user relative align-items-center justify-content-center  cursor-pointer"
          >
            <Avatar src={avatarURL} sx={{ width: 48, height: 48 }} />
            <div
              className={` ${
                openAvatar ? 'flex' : 'hidden'
              } absolute right-4 top-16 items-start justify-start border border-solid bg-white px-2.5 py-2 flex flex-col w-40`}
            >
              <div
                className="flex items-center justify-center space-x-2"
                onClick={() => router.push(teacherDetailLink)}
              >
                <img className="pb-3" src="/dashboard/person.svg"></img>
                <p>{userFullName}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img className="pb-3" src="/dashboard/gear.svg"></img>
                <p>Ayarlar</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img className="pb-3" src="/dashboard/arrow.svg"></img>
                <p>Çıkış yap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
