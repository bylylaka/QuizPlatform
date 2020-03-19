import Axios from "axios";

export const Apis = {
  login(values: FormData) {
    return Axios.post(`api/authorization/login`, values);
  },
  register(values: FormData) {
    return Axios.post(`api/authorization/register`, values);
  },
  IsAuthorized() {
    return Axios.get(`api/authorization/isAuthorized`);
  }
};

export default Apis;
