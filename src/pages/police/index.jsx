import React, { useEffect } from "react";
import Layout from "components/Layout";
import SearchPoliceStations from "components/SearchPoliceStations";
// import Appointment from "components/Appointment";
// import { allAppointments } from "actions/appointment";
import { allCases } from "actions/case";
// import SearchBar from "components/SearchBar";
import { useState } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import Message from "components/Message";
import CaseComponent from "components/case/CaseComponent";
import SearchBar from "components/SearchBar";
import { allUsers } from "actions/user";
import { getCookie } from "actions/auth";
import AllUsers from "components/AllUsers";
import SearchAllUsers from "components/SearchAllUsers";
import { allPoliceStations } from "actions/police";
import AllPoliceStations from "components/AllPoliceStations";
import Link from "next/link";

const Index = () => {
  const [allData, setAllData] = useState();
  console.log(allData);
  const [show, setShow] = useState(false);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  //   const [totalPages, setTotalPages] = useState(
  //     Math.ceil(allData.totalCount / limit)
  //   );
  // console.log(allData, totalPages);
  const [active, setActive] = useState();
  const [receivedDate1, setReceivedDate1] = useState();
  const [receivedDate2, setReceivedDate2] = useState();
  const [vehicleNumber, setVehicleNumber] = useState();
  const [city, setCity] = useState();
  const [oicName, setOicName] = useState();

  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };
  //   const initialSet = () => {
  //     setAllData(data);
  //   };

  // const [filters, setFilters] = useState({
  //   active: undefined,
  //   receivedDate1: undefined,
  //   receivedDate2: undefined,
  //   vehicleNumber: undefined,
  // });

  // const { active, receivedDate1, receivedDate2, vehicleNumber } = filters;

  const handleChange = (name) => (e) => {
    e.preventDefault();
    setFilters({ ...filters, [name]: e.target.value });
  };

  // useEffect(() => {
  //   initialSet();
  // }, [data]);

  // ---------------pagination--------------------------
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > totalPages) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage <= 1) {
        prevPage = totalPages;
      }
      return prevPage;
    });
  };

  // ---------------pagination--------------------------
  let currentOwnerCity;
  useEffect(() => {
    console.log("page changed...", page);
    if (typeof window !== "undefined") {
      // Perform localStorage action
      currentOwnerCity = JSON.parse(localStorage.getItem("user")).police[0]
        .city;
    }

    handleSubmit();
    // console.log(allData);
  }, [page]);
  console.log(currentOwnerCity);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    setAlert({ ...alert, loading: true });

    let params = {
      limit,
      page,
      city,
      oicName,
    };
    let token = getCookie("token_user");
    // console.log(params, "submit clicked...");
    await allPoliceStations(params)
      .then((data) => {
        console.log(data);
        if (data.status && data.status == "success") {
          if (data.results == 0) {
            // initialSet();
            setShow(false);
          } else {
            setAllData(data);
            console.log(data.totalCount);
            let totalCount = data.totalCount;
            setTotalPages(Math.ceil(totalCount / limit));
            setShow(false);
          }

          setAlert({
            ...alert,
            loading: false,
            message: data.message,
            error: false,
            success: true,
          });

          window.setTimeout(() => {
            resetAlert();
          }, 1000);
        }

        // return { data };
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          ...alert,
          loading: false,
          message: err.message,
          error: true,
          success: false,
        });
      });
    // await allAppointments(params)
    //   .then((data) => {
    //     console.log(data);
    //     setAllData(data);
    //     console.log(allData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center">
          {alert.error && (
            <Message
              message={alert.message}
              // alert={"error"}
              resetAlert={resetAlert}
            />
          )}
          {alert.success && (
            <Message
              message={alert.message}
              // alert={"success"}
              resetAlert={resetAlert}
            />
          )}
          {alert.loading && (
            <Message
              message={"Loading...Please Waite..."}
              // alert={"loading"}
              resetAlert={resetAlert}
            />
          )}
        </div>
        <div className="mt-2 mb-2 p-2 mr-10 border-2 border-gray-200 rounded-xl grid grid-cols-4">
          <SearchPoliceStations />
          {/* {typeof window !== "undefined" && (
            <SearchBar
              city={JSON.parse(localStorage.getItem("user")).police[0].city}
            />
          )} */}
          {/* {
                if (typeof window !== "undefined") {
                 
                    currentOwnerCity = JSON.parse(localStorage.getItem("user")).police[0]
                      .city;
                  }
          } */}
          <div
            className="col-span-1 flex justify-between ml-3 border-2 px-3 border-gray-400 rounded text-gray-400 text-xl font-semibold cursor-pointer hover:bg-gray-400 hover:text-white"
            onClick={() => setShow(!show)}
          >
            <h2 className="hidden md:block p-2 text-xl font-bold">Filter</h2>
            <span className="my-auto md:p-3 text-xl font-bold">
              <BsFillFilterSquareFill />
            </span>
          </div>
        </div>
        {show ? (
          <div className="mr-10 border-2 border-gray-200 rounded-xl">
            <div className="mt-5 mr-5 shadow-xl">
              <div className="flex justify-between">
                <h2 className="text-gray-400 text-xl font-semibold mx-5 ">
                  Set Filters
                </h2>
                <span
                  className="mr-10 text-lg font-semibold text-gray-400 p-1 border-2 border-gray-400 rounded hover:bg-gray-400 hover:text-white cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  Close
                </span>
              </div>
              <form className="ml-2 mr-10">
                <div className=" m-2">
                  <div className="border-2 border-gray-200 rounded-xl p-2 ">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-1">
                        <label class="text-gray-600 mb-2 block my-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          // onChange={handleChange("vehicleNumber")}
                          class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0  focus:border-blue-500 placeholder-gray-400"
                          placeholder="Enter the city name"
                        />
                      </div>
                      <div className="col-span-1">
                        <label class="text-gray-600 mb-2 block my-2">
                          Oic Name
                        </label>
                        <input
                          type="text"
                          value={oicName}
                          onChange={(e) => setOicName(e.target.value)}
                          // onChange={handleChange("active")}
                          class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0  focus:border-blue-500 placeholder-gray-400"
                          placeholder="Enter Police Id"
                        />
                      </div>
                    </div>
                    {/* <div className="">
                      <h2>Time duration</h2>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="my-2 col-span-1">
                          <label class="text-gray-600 mb-2 block">
                            Starting Date
                          </label>
                          <input
                            type="date"
                            value={receivedDate1}
                            onChange={(e) => setReceivedDate1(e.target.value)}
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Enter your NIC"
                          />
                        </div>
                        <div className="my-2 col-span-1">
                          <label class="text-gray-600 mb-2 block">
                            Ending Date
                          </label>
                          <input
                            type="date"
                            value={receivedDate2}
                            onChange={(e) => setReceivedDate2(e.target.value)}
                            // onChange={handleChange("receivedDate2")}
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Enter your NIC"
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="my-2">
                      <label class="text-gray-600 mb-2 block">
                        Appointment Time
                      </label>
                      <input
                        type="time"
                        // value={appointmentTime}
                        // onChange={handleChange("appointmentTime")}
                        class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="Enter your Date Of Birth"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="text-center col-span-3 my-5   ">
                  <input
                    type="submit"
                    value={"Set Filters"}
                    className="bg-blue-400 p-5 rounded-full text-xl font-bold text-white hover:bg-blue-500 hover:text-white transition-all cursor-pointer mb-5"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className=" mr-10 border-2 border-gray-200 rounded-xl">
            <div className="grid grid-cols-5 md:grid-cols-5 bg-gray-600 p-4 rounded-xl text-white text-xl font-sb ">
              <h2>Police ID</h2>
              <h2>Police Station</h2>

              <h2 className="">City</h2>

              <h2>Delete</h2>
              <h2>Update</h2>
            </div>
            <div className="">
              {allData &&
                allData.doc.map((data) => {
                  return <AllPoliceStations data={data} />;
                  // return <CaseComponent data={data} />;
                })}
            </div>
          </div>
        )}
        <div className="my-5 w-full  p-5 text-center mr-10 rounded">
          <Link
            href="/police/createPoliceStation"
            className="bg-blue-500 text-white  hover:bg-blue-700 rounded p-5 font-sembibold text-xl"
          >
            Create Police Station
          </Link>
        </div>

        {/* --------------------------pagination----------------------- */}
        <div
          aria-label="Page navigation example"
          className="flex w-full justify-center mt-10"
        >
          <ul className="  inline-flex -space-x-px">
            <li>
              <a
                href="#"
                onClick={prevPage}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {[...Array(totalPages)].map((val, index) => {
              // console.log(index);
              return (
                // <li>
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => setPage(index + 1)}
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    {index + 1}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                href="#"
                onClick={nextPage}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </div>
        {/* --------------------------pagination----------------------- */}
      </Layout>
    </>
  );
};

// CurrentQue.getInitialProps = async () => {
//   let limit = 10;
//   let page = 1;
//   let active = true;
//   let qued = true;
//   let caseDate1;
//   let caseDate2;
//   let currentOwnerCity;
//   // let appointmentDate1 = "2023-03-05T00:00:00.000Z";
//   // let receivedDate2 = "2023-07-05T00:00:00.000Z";
//   let vehicleNumber;
//   if (localStorage.getItem("user")) {
//     currentOwnerCity = localStorage.getItem("user").police[0].city;
//   }

//   return allCases({
//     limit,
//     page,
//     active,
//     qued,
//     caseDate1,
//     caseDate2,
//     vehicleNumber,
//     currentOwnerCity,
//   })
//     .then((data) => {
//       return { data };
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export default Index;
