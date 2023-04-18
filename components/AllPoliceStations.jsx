import { getCookie } from "actions/auth";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { deletePoliceStation, policeStationNamesIds } from "actions/police";
// import { deleteAppointment, deleteAppointmentUser } from "actions/appointment";

const AllPoliceStations = ({ data }) => {
  const router = useRouter();
  const handleDelete = (id) => {
    // e.preventDefault();
    console.log("clickkedd....", id);
    // e.preventDefault();
    let token;

    if (getCookie("token_user")) {
      token = getCookie("token_user");

      deletePoliceStation(id, token)
        .then((data) => {
          console.log(data);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("You dont't have the permission to perform this action...");
      return;
    }
  };

  const test = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-5 p-4 border-b-2 border-gray-200 hover:bg-gray-300 transition-all rounded-xl">
        <h3 className="hidden md:block">
          {data._id.substr(data._id.length / 2, data._id.length)}
        </h3>
        <h3 className="md:hidden">
          {data._id.substr(data._id.length - 5, data._id.length)}
        </h3>

        {/* <h3></h3> */}
        <Link className="" href={`/data/one/${data._id}`}>
          {data.policeStationName}
        </Link>

        <h3 className="hidden md:block">{data.city}</h3>

        <h3
          //   value={"Cancel"}
          onClick={() => handleDelete(data._id)}
          // onClick={() => test()}
          className="cursor-pointer"
        >
          Cancel
        </h3>
        {/* <h3>Update</h3> */}
        <h3
          className="cursor-pointer"
          onClick={() => router.push(`/police/update/${data._id}`)}
        >
          update
        </h3>
      </div>
    </>
  );
};

export default AllPoliceStations;
