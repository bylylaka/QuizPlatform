import Gender from "../../user/Gender";
import Education from "../../user/Education";
import MaritalStatus from "../../user/MaritalStatus";
import ChildsCount from "./ChildsCount";
import Salary from "./Salary";

export class StatisticFilter {
    age?: number[];
    gender?: Gender;
    country?: number;
    city?: number;
    education?: Education;
    maritalStatus?: MaritalStatus[];
    loveAnimals?: boolean;
    smoke?: boolean;
    drink?: boolean;
    childsCount?: ChildsCount[];
    work?: boolean;
    study?: boolean;
    salary?: Salary[];
}

export default StatisticFilter;
