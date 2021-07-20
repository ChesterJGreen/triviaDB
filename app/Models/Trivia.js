export default class Trivia {

  constructor({ category, type, difficulty, question, correct_answer, incorrect_answers = [] }) {
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.correct = correct_answer
    this.answers = incorrect_answers

    if (type == 'multiple') {
      this.answers = incorrect_answers
    }
    let randIndex = Math.floor(Math.random() * 3)
    this.answers.splice(randIndex, 0, this.correct)
  }



  get Template() {
    return `
  <div class="col-4 m-2 border border-dark bg-secondary shadow rounded">
  <div row>
  <div class="col">
    <h5 class="text-black-50">${this.question}</h5>
    <button class="btn btn-success border-dark m-2">${this.answers[3]}</button>
    <button class="btn btn-success border-dark m-2">${this.answers[1]}</button>
    <button class="btn btn-success border-dark m-2">${this.answers[2]}</button>
    <button class="btn btn-success border-dark m-2">${this.answers[0]}</button>
    </div>
    </div>
  </div>`
  }
}
