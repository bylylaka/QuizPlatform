import User from "../user/User";

class StatisticAnswer {
  constructor(value: any, participant: User) {
    this.value = value;
    this.participant = participant;
  }

  value: any;
  participant: User;
}

export default StatisticAnswer;
