import { getCookie } from "actions/auth";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { deleteCase } from "actions/case";

// import { deleteAppointment, deleteAppointmentUser } from "actions/appointment";

const CaseComponent = ({ data }) => {
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
  const handleDelete = (id) => {
    // e.preventDefault();
    console.log("clickkedd....", id);
    setAlert({ ...alert, loading: true });
    // e.preventDefault();
    let token;

    if (getCookie("token_user")) {
      token = getCookie("token_user");

      deleteCase(id, token)
        .then((data) => {
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
          }, 1000);
          router.reload();
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
      <div className="grid grid-cols-7 md:grid-cols-7 p-4 border-b-2 border-gray-200 hover:bg-gray-300 transition-all rounded-xl">
        <h3 className="hidden md:block">
          {data._id.substr(data._id.length / 2, data._id.length)}
        </h3>
        <h3 className="md:hidden">
          {data._id.substr(data._id.length - 5, data._id.length)}
        </h3>

        {/* <h3></h3> */}
        <Link className="" href={`/singleCase/${data._id}`}>
          {data.vehicleNumber}
        </Link>
        <h3 className="hidden col-span-1 md:block ">{data.currentOwner}</h3>
        <h3>{data.receivedDate.split("T")[0]}</h3>
        <h3>
          {data.receivedTime.split(":")[0]}:{data.receivedTime.split(":")[1]}
        </h3>
        <h3>{data.active ? "Active" : "Closed"}</h3>
        <h3
          //   value={"Cancel"}
          onClick={() => handleDelete(data._id)}
          // onClick={() => test()}
          className="cursor-pointer"
        >
          Delete
        </h3>
        {/* <h3>Update</h3> */}
        {/* <h3>
          <Link className="col-span-2" href={`/data/update/${data._id}`}>
            update
          </Link>
        </h3> */}
      </div>
    </>
  );
};

export default CaseComponent;
