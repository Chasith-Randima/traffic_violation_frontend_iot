// import { updateHospital } from "actions/hospital";
// import { oneHospita } from "actions/hospital";
import { onePoliceStation, updatePoliceStation } from "actions/police";
import React, { useState, useEffect } from "react";

import Layout from "components/Layout";
import { useRouter } from "next/router";
import { getCookie } from "actions/auth";

import Message from "components/Message";
const PoliceStation = () => {
  const router = useRouter();
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
    if (
      getCookie("token_user") &&
      JSON.parse(localStorage.getItem("user")).role == "admin"
    ) {
      return;
    } else {
      //   alert(
      //     "You dont have the permission to access this page..click OK to redirect to main page.."
      //   );
      setAlert({
        ...alert,
        loading: true,
        message:
          "you dont have the permission to access this route...redirecting to main page",
      });
      router.push(`/`);
    }
  }, []);

  const [values, setValues] = useState({
    policeStationName: "",
    city: "",
    description: "",
    images: "",

    oicName: "",
    oicId: "",
  });
  console.log(router.query);

  const {
    policeStationName,
    city,
    description,
    images,

    oicName,
    oicId,
  } = values;
  useEffect(() => {
    setAlert({ ...alert, loading: true });
    // let token = getCookie("token_doctor");
    if (router.isReady) {
      onePoliceStation(router.query.policeStation)
        .then((data) => {
          console.log(data);
          if (data.status && data.status == "success") {
            setValues({
              policeStationName: data.doc.policeStationName,
              city: data.doc.city,
              description: data.doc.description,
              oicName: data.doc.oicName,
              oicId: data.doc.oicId,
              //   formData: new FormData(),
              //   images: data.doc.images,
            });
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
    }
  }, [router.isReady]);

  const handleChange = (name) => (e) => {
    e.preventDefault();
    let value = name == "images" ? e.target.files[0] : e.target.value;
    if (name == "images") {
      console.log(name, value, "workin..");
      formData.append(name, value);
      setValues({ ...values, [name]: value, formData });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ ...alert, loading: true });
    let token = getCookie("token_user");

    let data = {
      policeStationName,
      description,
      city,
      oicId,
      oicName,
      // usersArray,
      // doctorsArray,
    };
    // console.log(data);
    // for (const key in data) {
    //   formData.append(key, data[key]);
    //   setValues({ ...values, formData });
    //   // console.log(`${key}: ${phone[key]}`);
    // }

    await updatePoliceStation(router.query.policeStation, data, token)
      .then((data) => {
        if (data.status && data.status == "success") {
          console.log(data);

          setAlert({
            ...alert,
            loading: false,
            message: data.message,
            error: false,
            success: true,
          });

          window.setTimeout(() => {
            resetAlert();
            router.reload();
          }, 1000);
        }
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
  };

  return (
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
      ;
      <div className="mt-5 mr-10 border-2 border-gray-200 rounded-xl">
        <form className="block md:grid md:grid-cols-2">
          {/* <div className="cmd:ol-span-1 overflow-hidden">
            {images ? (
              <img
                src={`http://127.0.0.1:3000/api/v1/hospitals/image/${images[0]}`}
                className="md:rounded-full my-5 w-4/5 m-auto"
              />
            ) : (
              <img src="/img/profile.png" />
            )}
            <div className="flex justify-center mx-auto">
              <label for="profileImage" className="flex justify-center">
                <input
                  id="profileImage"
                  type="file"
                  accept="images/*"
                  onChange={handleChange("images")}
                  className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-violet-100"
                />
              </label>
            </div>
          </div> */}
          <div className="md:col-span-2 m-2">
            <h2 className="text-gray-400 text-xl font-semibold my-1">
              Update Hospital
            </h2>
            <div className="border-2 border-gray-200 rounded-xl p-2 ">
              <div className="">
                <label class="text-gray-600 mb-2 block my-2">
                  Police Station Name
                </label>
                <input
                  type="text"
                  value={policeStationName}
                  onChange={handleChange("policeStationName")}
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0  focus:border-blue-500 placeholder-gray-400"
                  placeholder="Enter Police Station Name"
                />
              </div>
              <div className="my-2">
                <label class="text-gray-600 mb-2 block">Description</label>
                <textarea
                  type="text"
                  value={description}
                  cols="5"
                  rows="5"
                  onChange={handleChange("description")}
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter the Description"
                />
              </div>

              <div className="my-2">
                <label class="text-gray-600 mb-2 block">city</label>
                <input
                  type="text"
                  value={city}
                  onChange={handleChange("city")}
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter your city"
                />
              </div>
              <div className="my-2">
                <label class="text-gray-600 mb-2 block">Oic Name</label>
                <input
                  type="text"
                  value={oicName}
                  onChange={handleChange("oicName")}
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter OIC Name"
                />
              </div>
              <div className="my-2">
                <label class="text-gray-600 mb-2 block">OIC ID</label>
                <input
                  type="text"
                  value={oicId}
                  onChange={handleChange("oicId")}
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter OIC Id"
                />
              </div>
            </div>
          </div>
          <div className="text-center col-span-3 my-5  ">
            <input
              type="submit"
              value={"Update Hospital"}
              onClick={handleSubmit}
              className="bg-blue-400 p-5 rounded-full text-xl font-bold text-white hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PoliceStation;
