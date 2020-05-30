import { BaseNotification } from "./BaseNotificatoin";

export default class SiteNotification extends BaseNotification {
  constructor(
    wasOpened: boolean,
    id: number,
    producerId: number,
    producerName: string,
    quizId: number,
    quizTitle: string,
    dateCreated: Date
  ) {
    super(id, producerId, producerName, quizId, quizTitle, dateCreated);
    this.wasOpened = wasOpened;
  }

  wasOpened: boolean;
}
