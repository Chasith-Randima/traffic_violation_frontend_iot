import fetch from "isomorphic-fetch";
import axios from "axios";
import { removeCookie, removeLocalStorage } from "./auth";
import queryString from "query-string";

let API = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

if (process.env.NEXT_PUBLIC_PRODUCTION == true) {
  API = process.env.NEXT_PUBLIC_API_PRODUCTION;
}

export const policeStationNamesIds = () => {
  let url = `${API}/police/policeNameId`;
  // console.log(paramsData, "This is from here...");

  return axios(url, {
    method: "GET",
    // params: { ...query },
    // params: {
    //   page: paramsData.page,
    //   limit: paramsData.limit,
    //   name: paramsData.name,
    //   city: paramsData.city,
    //   //   brandname: paramsData.brandname,
    //   //   location: paramsData.location,
    //   //   "price[gte]": paramsData.priceMin,
    //   //   "price[lte]": paramsData.priceMax,
    //   //   sort: paramsData.sort,
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

export const onePoliceStation = (id) => {
  let url = `${API}/police/${id}`;

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
export const allPoliceStations = (paramsData) => {
  let url = `${API}/police/`;
  console.log(paramsData);
  return axios(url, {
    method: "GET",
    params: {
      limit: paramsData.limit,
      page: paramsData.page,
      city: paramsData.city,
      oicName: paramsData.oicName,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const searchPoliceStations = (params) => {
  let query = queryString.stringify(params);
  // console.log(query);
  let url = `${API}/police/search?${query}`;

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

export const createPoliceStation = async (data, token) => {
  console.log(token);
  let url = `${API}/police/`;
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
export const deletePoliceStation = async (id, token) => {
  // console.log(data, token);
  let url = `${API}/police/${id}`;
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

export const updatePoliceStation = async (id, data, token) => {
  // console.log(id, data, token);
  let url = `${API}/police/${id}`;
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
