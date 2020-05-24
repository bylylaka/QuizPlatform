export class BaseNotification {
  constructor(
    id: number,
    producerId: number,
    producerName: string,
    quizId: number,
    quizTitle: string,
    dateCreated: Date
  ) {
    this.id = id;
    this.producerId = producerId;
    this.producerName = producerName;
    this.quizId = quizId;
    this.quizTitle = quizTitle;
    this.dateCreated = dateCreated;
  }
  id: number;
  producerId: number;
  producerName: string;
  quizId: number;
  quizTitle: string;
  dateCreated: Date;
}

export default BaseNotification;
