import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";


//Private
function _draw() {
  let trivia = ProxyState.trivia;
  let template = ''
  trivia.forEach(t => template += t.Template)
  document.getElementById('game').innerHTML = template
  // document.getElementById('buttons').innerHTML = `
  // <button type="button" class="btn btn-primary" ${this.correct}`


}

// //Public
// export default class ValuesController {
//   constructor() {
//     ProxyState.on("values", _draw);
//     _draw()
//   }
// }

export default class TriviasController {

  constructor() {
    ProxyState.on('trivia', _draw);
    this.getAll()


  }

  async getAll() {
    try {
      await triviasService.getAllTrivia()
    } catch (e) {
      console.error("Didn't get quite get it right" + e)

    }
  }
}


  // addValue() {
  //   valuesService.addValue()
  // }




