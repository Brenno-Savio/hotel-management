'use client';

import ThemeContext from '@/context/theme.Context';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header className="bg-tertiary-dark py-6 mx-auto w-full text-white text-2xl flex fixed z-10 flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center md:2/3">
        <Link
          href="/"
          className="text-white h-fit px-3 py-2 lg:py-5 lg:px-7 font-bold lg:text-xl "
        >
          Hotel Alpestre
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="img scale-animation"
                    />
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer" />
              </Link>
            )}
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme');
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');
                }}
              />
            )}
          </li>
        </ul>
      </div>
      <ul className="flex items-center px-5 justify-between w-full md:w-1/3 md:justify-end mt-4 md:text-2xl min-[280px]:text-base">
        <li className="hover:-translate-y-2 duration-500 transition-all md:px-3 sm:px-1">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all md:px-3 sm:px-1">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all md:px-3 sm:px-1">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
