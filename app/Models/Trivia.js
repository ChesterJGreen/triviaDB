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
  <div class="col-3 m-2 border shadow">
    <h5>${this.question}</h5>
    <button type="button" class="btn btn-primary>${this.answer[0]}</button>
    <button type="button" class="btn btn-primary>${this.answer[1]}</button>
    <button type="button" class="btn btn-primary>${this.answer[2]}</button>
    <button type="button" class="btn btn-primary>${this.answer[3]}</button>
    
  </div>`
  }
}
