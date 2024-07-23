import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostApi = (url, form, json) => {
  let axiosConfig = {
    headers: {
      "Content-Type": json ? "application/json" : "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "client-secret": `57816d7297a09338b48da00c8e8b3aec`,
      "api-token": `57816d7297a09338b48da00c8e8b3aec`,
    },
  };
  return axios.post(`http://192.168.0.211:8003${url}`, form, axiosConfig);
};
