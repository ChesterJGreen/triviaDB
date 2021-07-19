export default class Trivia {

  constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.correctAns = correct_answer
    this.incorrectAns = incorrect_answers
  }

  get Template() {
    return ``
  }
}