/**
 * TypeScript 是 JavaScript的超集，是有let 和 const
 * 1.var声明可以在包含它的函数，模块，命名空间，或全局作用域内部任何位置被访问
 * 2.let声明是块级作用域声明，let 声明作用域是词法作用域或块级作用域，块级作用域在包含他们的快或for循环外是无法访问的
 * 
 */

function sumMatrix (matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i]
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i]
    }
  }
  return sum
}

//  console.log(sumMatrix([[9, 0], [4, 5]]))


/**
 * for循环结束的时候 i 的 值为10
 */
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
  //  console.log(i)
  }, 100 * i)
}

// 立即执行函数，for循环执行到立即执行函数时，立即执行函数是同步方法，会把 i 传递给setTimeout,setTimeout会被加入到异步任务队列
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      // console.log(i)
    }, 100 * i)
  })(i)
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // console.log(i)
  }, 100 * i)
}

// 无法在外部访问作用域链内部定义的变量,a 的 作用域是f作用域， b 的 作用域是if语句
function f (input: boolean) {
  let a = 100;

  if (input) {
    let b = a  + 1;
    return b;
  }

  return a;
}

// 结构数组
let input = [1, 2]
let [first, second] = input;
// [first, second] = [second, first]

// let [first1, ...rest] = [1, 2, 3, 4]

// let [first2] = [3, 5, 9, 10]

// 对象结构赋值
// ({ a1, b1 } = { a1: 'Jack', b1: 10})