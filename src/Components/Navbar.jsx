import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50 bg-[#f8f9fa] my-0">
      <div
        className="min-[992px]:flex justify-between container mx-auto items-center text-[17.6px]"
        style={{ height: '88px', paddingTop: '20px' }}
      >
        <div>
          <Link className="navbar-brand" href="/">
            <Image
              alt="banabiders"
              src="/logo.svg"
              width={220}
              height={220}
              className="pt-2"
            />
          </Link>
        </div>
        <div
          onClick={openHandler}
          className="min-[992px]:hidden cursor-pointer absolute right-8 top-8"
        >
          <MenuIcon />
        </div>
        <div>
          <ul
            className={`absolute min-[992px]:static  flex flex-col bg-[#f8f9fa] space-y-2 min-[992px]:space-y-0 min-[992px]:flex-row space-x-4 min-[992px]:z-auto z-50 left-0 w-full min-[992px]:w-auto min-[992px]:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-20' : 'top-[-480px]'
            } `}
          >
            <li>
              <Link
                className="text-[#7c7c7d] hover:text-[#d38e3e] hover:duration-200 transition-all"
                href="/OgretmenBul"
              >
                Öğretmen Bul
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7c7c7d] hover:text-[#d38e3e]  hover:duration-200 transition-all"
                href="/askanexpert"
              >
                Uzmana Sor
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7c7c7d] hover:text-[#d38e3e] hover:duration-200 transition-all"
                href="/#references"
              >
                Referanslar
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7c7c7d] hover:text-[#d38e3e] hover:duration-200 transition-all"
                href="/#media"
              >
                Medyada Biz
              </Link>
            </li>
            <li>
              <Link
                className="text-[#7c7c7d] hover:text-[#d38e3e] hover:duration-200 transition-all"
                href="/#contact"
              >
                İletişim
              </Link>
            </li>
            <li
              onClick={() => {
                setOpenAvatar((prev) => !prev);
              }}
              className="relative"
            >
              <div className="text-[#7c7c7d] cursor-pointer hover:text-[#d38e3e] hover:duration-200 transition-all">
                Öğretmen Ol
                <ArrowDropDownIcon />
              </div>
              <div
                className={`${
                  openAvatar ? 'flex' : 'hidden'
                }  bg-white absolute  w-40 top-8  rounded-md border border-black py-2 flex flex-col space-y-1`}
              >
                <div className="hover:bg-[#e9ecef] w-full">
                  <Link
                    className="px-3 text-black font-medium"
                    href="/auth/login"
                  >
                    Giriş Yap
                  </Link>
                </div>
                <div className="hover:bg-[#e9ecef]">
                  <Link className="px-3 text-black" href="/auth/register">
                    Üye Ol
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
