import Axios from "axios";

export const Apis = {
  login(values: FormData) {
    return Axios.post(`api/authorization/login`, values);
  },
  register(values: FormData) {
    return Axios.post(`api/authorization/register`, values);
  },
  logout() {
    return Axios.post(`api/authorization/logout`);
  },
  IsAuthorized() {
    return Axios.get(`api/authorization/isAuthorized`);
  },
  getProfile() {
    return Axios.get(`api/account/getProfile`);
  }
};

export default Apis;
