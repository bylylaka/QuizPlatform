import Gender from "./Gender";

class User {
  name?: string;
  email?: string;
  age?: number;
  gender?: Gender;
  avatar?: File | string;
}

export default User;
