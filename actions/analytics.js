import fetch from "isomorphic-fetch";
import axios from "axios";
// import { removeCookie, removeLocalStorage } from "./auth";
import queryString from "query-string";

let API = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

if (process.env.NEXT_PUBLIC_PRODUCTION == true) {
  API = process.env.NEXT_PUBLIC_API_PRODUCTION;
}

export const getCaseCountByDate = () => {
  let url = `${API}/cases/casesCountByDate`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const getCaseCountByCity = () => {
  let url = `${API}/cases/casesCountByCity`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const getCaseCountByActive = () => {
  let url = `${API}/cases/casesCountByActive`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const getCaseCountByMonth = () => {
  let url = `${API}/cases/casesCountByYear`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const getCaseCountByWeekDays = () => {
  let url = `${API}/cases/casesCountByWeekDays`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getCaseCountByDailyHours = () => {
  let url = `${API}/cases/casesCountByDailyHours`;

  return fetch(url, {
    method: "GET",
    // params: { ...query },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
// export const AllAppointmentsCountByDate = () => {
//   let url = `${API}/appointments/getAllAppointmentsByDate`;

//   return fetch(url, {
//     method: "GET",
//     // params: { ...query },
//   })
//     .then((response) => {
//       //   console.log(response.data);
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//       return err;
//     });
// };
