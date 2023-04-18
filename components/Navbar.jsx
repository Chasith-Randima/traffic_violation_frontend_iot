import React from "react";
import { useState, useEffect } from "react";

import { logOutUser } from "actions/user";
import Link from "next/link";
import { Router, useRouter } from "next/router";
// import SearchHospitals from "./search/SearchHospitals";
import { FaBars } from "react-icons/fa";
// import { NProgress } from "nprogress";

const Navbar = ({ setSideBar, showSideBar }) => {
  const [user, setUser] = useState({});
  const router = useRouter();

  // Router.onRouteChangeStart = (url) => NProgress.start();
  // Router.onRouteChangeComplete = (url) => NProgress.done();
  // Router.onRouteChangeError = (url) => NProgress.done();

  useEffect(() => {
    if (localStorage.getItem("user"))
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const userLogout = () => {
    return (
      <>
        <div className="">
          {user.name} <span>logged in as : {user.role}</span>
        </div>
      </>
    );
  };

  const handleLogout = async (func) => {
    await func()
      .then((data) => {
        console.log(data);
        // Router.replace(Router.asPath);
        router.push("/auth/LogIn");
        // router.reload();
      })
      .catch((err) => {
        console.log();
      });
  };
  return (
    <>
      <nav className="w-full h-auto grid grid-cols-2 p-2 bg-blue-400 text-white gap-2">
        {/* <nav
        className={
          router.asPath == "/mainPage"
            ? "w-full h-auto grid grid-cols-3 p-8 bg-blue-400 text-white gap-2"
            : "w-full h-auto grid grid-cols-2 p-8 bg-blue-400 text-white gap-2"
        }
      > */}
        <div className=" font-bold text-xl w-1/3 bg-blue-200 rounded">
          <img src="/img/opd-logo.png" className="w-full h-20" />
        </div>
        {/* {router.asPath == "/mainPage" && (
          <div>
            <SearchHospitals />
          </div>
        )} */}

        <div className="flex justify-end my-auto ">
          {user._id && (
            <>
              <div
                className="cursor-pointer hidden md:block mx-3 p-3 text-blue-500 font-semibold rounded bg-white hover:bg-blue-500 hover:text-white transition-all"
                onClick={() => router.push(`/profile/info/${user._id}`)}
              >
                {user.name.split(" ")[0]}{" "}
                <span className="my-2"> : {user.role}</span>
              </div>
              <div className=" hidden md:block mx-3 p-3 text-blue-500 font-semibold rounded bg-white hover:bg-blue-500 hover:text-white transition-all">
                <h2
                  onClick={() => handleLogout(logOutUser)}
                  className="cursor-pointer"
                >
                  LogOut
                </h2>
              </div>
            </>
          )}
          {!user._id && (
            <div className="cursor-pointer hidden md:block mx-3 p-3 text-blue-500 font-semibold rounded bg-white hover:bg-blue-500 hover:text-white transition-all">
              <Link href="/auth/LogIn">LogIn</Link>
            </div>
          )}
          <div className="md:hidden" onClick={() => setSideBar(!showSideBar)}>
            <FaBars className="font-bold text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
