import { getCookie } from "actions/auth";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// import { policeStationNamesIds } from "actions/police";
import { deleteUser } from "actions/user";
// import { deleteAppointment, deleteAppointmentUser } from "actions/appointment";

const AllUsers = ({ data }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    // e.preventDefault();
    console.log("clickkedd....", id);
    // e.preventDefault();
    let token;

    if (getCookie("token_user")) {
      token = getCookie("token_user");

      await deleteUser(id, token)
        .then((data) => {
          console.log(data);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // alert("You dont't have the permission to perform this action...");
      return;
    }
  };

  const test = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-7 p-4 border-b-2 border-gray-200 hover:bg-gray-300 transition-all rounded-xl">
        <h3 className="hidden md:block">
          {data._id.substr(data._id.length / 2, data._id.length)}
        </h3>
        <h3 className="md:hidden">
          {data._id.substr(data._id.length - 5, data._id.length)}
        </h3>

        {/* <h3></h3> */}
        <Link className="" href={`/profile/info/${data._id}`}>
          {data.name}
        </Link>
        <h3 className="hidden col-span-1 md:block ">{data.policeId}</h3>
        <h3>{data.policeStationName}</h3>
        <h3 className="hidden md:block">{data.role}</h3>

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
          onClick={() => router.push(`/updateRole/${data._id}`)}
        >
          {/* <Link > */}
          update
          {/* </Link> */}
        </h3>
      </div>
    </>
  );
};

export default AllUsers;
