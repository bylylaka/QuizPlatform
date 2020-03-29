import Gender from "./Gender";
import Education from "./Education";
import MaritalStatus from "./MaritalStatus";

class User {
  id?: number;
  name?: string;
  email?: string;
  age?: number;
  gender?: Gender;
  avatar?: File | string;
  birth?: Date;
  education?: Education;
  country?: number;
  city?: number;
  maritalStatus?: MaritalStatus;
  loveAnimals?: boolean;
  smoke?: boolean;
  drink?: boolean;
  childsCount?: number;
  work?: boolean;
  study?: boolean;
  salary?: number;
}

export default User;
