import fetch from "isomorphic-fetch";
import axios from "axios";
import { removeCookie, removeLocalStorage } from "./auth";
import queryString from "query-string";

let API = process.env.NEXT_PUBLIC_API_DEVELOPMENT;

if (process.env.NEXT_PUBLIC_PRODUCTION == true) {
  API = process.env.NEXT_PUBLIC_API_PRODUCTION;
}

export const oneUser = (id, token) => {
  let url = `${API}/users/${id}`;

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
export const allUsers = (token, paramsData) => {
  // console.log(id, token);
  let url = `${API}/users/`;

  return axios(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      limit: paramsData.limit,
      page: paramsData.page,
      policeId: paramsData.policeId,
      receivedDate1: paramsData.receivedDate1,
      receivedDate2: paramsData.receivedDate2,

      role: paramsData.role,
      // policeId,
      // qued: true,
      // currentOwnerCity,
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

export const updateUser = async (id, data, token) => {
  // console.log(data, token);
  let url = `${API}/users/${id}`;
  return fetch(url, {
    method: "PATCH",
    headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
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

export const updateUserPassword = (id, user, token) => {
  let url = `${API}/users/updateMyPassword/${id}`;
  // console.log(id, user, token);

  return fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const logOutUser = async (next) => {
  removeCookie("token_user");
  removeLocalStorage("user");
  // next();
  let url = `${API}/users/logout`;
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      // console.log("Logout Success");
      return response;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteUser = async (id, token) => {
  // console.log(data, token);
  let url = `${API}/users/${id}`;
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

export const searchUsers = (params) => {
  console.log(params);
  let query = queryString.stringify(params);
  console.log(query);
  let url = `${API}/users/search?${query}`;

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
