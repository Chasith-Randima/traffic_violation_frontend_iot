import fetch from "isomorphic-fetch";
import axios from "axios";
import { removeCookie, removeLocalStorage } from "./auth";
import queryString from "query-string";

// import Router from "next/router";

let API = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

if (process.env.NEXT_PUBLIC_PRODUCTION == true) {
  API = process.env.NEXT_PUBLIC_API_PRODUCTION;
}

export const allCases = (paramsData) => {
  let query = queryString.stringify(paramsData);
  console.log(query);
  let url = `${API}/cases`;
  console.log(paramsData);

  return axios(url, {
    method: "GET",
    // params: { ...query },
    params: {
      limit: paramsData.limit,
      page: paramsData.page,
      active: paramsData.active,

      "receivedDate[gte]": paramsData.caseDate1,
      "receivedDate[lte]": paramsData.caseDate2,
      // arrived: paramsData.arrived,
      currentOwnerCity: paramsData.currentOwnerCity,
      qued: paramsData.qued,
      vehicleNumber: paramsData.vehicleNumber,
      warrented: paramsData.warrented,
      checked: paramsData.checked,
      // sort: paramsData.sort,
    },
  })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const allCasesRelated = (paramsData) => {
  // let url = `${API}/appointments`;
  let url = `${API}/cases?${paramsData.field_name}=${paramsData.id}`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    params: {
      // paramsData.field_name: paramsData.id,
      limit: paramsData.limit,
      page: paramsData.page,
      hospitalName: paramsData.hospitalName,
      appointmentDate1: paramsData.appointmentDate1,
      appointmentDate2: paramsData.appointmentDate2,
    },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const oneCase = (id) => {
  let url = `${API}/cases/${id}`;

  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const createCase = async (data, token) => {
  console.log(data, token);
  let url = `${API}/cases`;
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      //   console.log(response.statusText);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const updateCase = async (id, data, token) => {
  // console.log(data, token);
  let url = `${API}/cases/${id}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      //   console.log(response.statusText);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteCase = async (id, token) => {
  // console.log(data, token);
  let url = `${API}/cases/${id}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data),
  })
    .then((response) => {
      //   console.log(response.statusText);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const deleteAppointmentUser = async (id, token) => {
  // console.log(data, token);
  let url = `${API}/cases/user/${id}`;
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data),
  })
    .then((response) => {
      //   console.log(response.statusText);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const searchCases = (params) => {
  console.log(params);
  let query = queryString.stringify(params);
  console.log(query);
  let url = `${API}/cases/search?${query}`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    // params: {
    //   limit: paramsData.limit,
    //   page: paramsData.page,
    //   brandname: paramsData.brandname,
    //   location: paramsData.location,
    //   "price[gte]": paramsData.priceMin,
    //   "price[lte]": paramsData.priceMax,
    //   sort: paramsData.sort,
    // },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const searchCityCases = (params) => {
  let query = queryString.stringify(params);
  console.log(query);
  let url = `${API}/cases/searchCases?${query}`;

  return axios(url, {
    method: "GET",
    // params: { ...query },
    // params: {
    //   limit: paramsData.limit,
    //   page: paramsData.page,
    //   brandname: paramsData.brandname,
    //   location: paramsData.location,
    //   "price[gte]": paramsData.priceMin,
    //   "price[lte]": paramsData.priceMax,
    //   sort: paramsData.sort,
    // },
  })
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
