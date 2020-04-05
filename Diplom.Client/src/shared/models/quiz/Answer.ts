class Answer {
  constructor(quizId: number, questionId: number, value: object) {
    this.quizId = quizId;
    this.questionId = questionId;
    this.value = value;
  }
  id?: number;
  quizId?: number;
  questionId?: number;
  value?: any;
}

export default Answer;
