/**
 * 函数
 */
// 为函数定义类型
function add (x: number, y: number): number {
  return x + y;
}
// let myAdd = function (x: number, y: number): number { return x + y }
let myAdd: (x: number, y: number) => number = function (x: number, y: number) { return x + y; }

/**
 * 可选参数和默认参数
 */
function buildName(firstName: string, lastName = 'smith') {
  return firstName + ' ' + lastName
}

/**
 * 剩余参数
 */
function otherName (firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}
let buildNameFun: (fname: string, ...rest: string[]) => string = otherName;

/**
 * this指向，箭头函数
 * 箭头函数可以保存函数创建时候的this值，而不是调用时的值
 */
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickerCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickerCard / 13);

      return { suit: this.suits[pickedSuit], card: pickerCard % 13 }
    }
  }
}
let cardPicker = deck.createCardPicker()
console.log(cardPicker())

/**
 * this参数
 */
interface Card {
  suit: string,
  card: number
}

interface Deck {
  suits: string[],
  cards: number[],
  createCardPicker(this: Deck): () => Card;
}