import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { isAuth } from "../actions/auth";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [userId, setUserId] = useState();
  const [userRole, setUserRole] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user")) {
        setUserId(JSON.parse(localStorage.getItem("user"))._id);
        setUserRole(JSON.parse(localStorage.getItem("user")).role);
      }
    }
  }, [typeof window]);
  const userSidebar = () => {
    return (
      <div className="md:mr-10 ">
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Dashboard
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/que/currentQue"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/que/currentQue")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Que
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/allCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/allCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            All Cases
          </h2>
        </div>

        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/duedCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/duedCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Dued Cases
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/pendingCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/pendingCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Pending Cases
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == `/profile/${userId}`
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push(`/profile/${userId}`)}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Profile
          </h2>
        </div>
      </div>
    );
  };
  const adminSidebar = () => {
    return (
      <div className="md:mr-10 ">
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Dashboard
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/que/currentQue"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/que/currentQue")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Que
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/allCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/allCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            All Cases
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/allUsers"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/allUsers")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            All Users
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/duedCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/duedCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Dued Cases
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == "/pendingCases"
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push("/pendingCases")}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Pending Cases
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == `/profile/${userId}`
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push(`/profile/${userId}`)}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Profile
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == `/police`
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push(`/police`)}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            All Police Stations
          </h2>
        </div>
        <div
          className={`  my-2 font-medium p-2 w-full  rounded-md  hover:bg-blue-300 hover:text-white transition-all ${
            router.asPath == `/analytics`
              ? "bg-blue-300 text-white"
              : "text-black bg-gray-300"
          }`}
        >
          {/* <h2 className="my-1 ml-2 text-xl">page 1</h2> */}
          <h2
            // href="/mainPage"
            onClick={() => router.push(`/analytics`)}
            className="my-1 ml-2 text-xl cursor-pointer"
          >
            Analytics
          </h2>
        </div>
      </div>
    );
  };
  return (
    <>
      {userId && userRole == "user" && userSidebar()}
      {userId && userRole == "admin" && adminSidebar()}
    </>
  );
};

export default Sidebar;
