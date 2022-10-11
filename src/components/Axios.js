import axios from 'axios'

export const Axios = axios.create({
    withCredentials:true,
    baseURL: 'https://maqure.43.205.71.30.nip.io',
    headers: {
      "Content-Type": "application/json"
    },
  });


  axios.defaults.withCredentials = true
  