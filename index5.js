// function name(params) {
    
// }

// function hello(params) {
//     console.log('你好');
// }
// function hello2(params) {
//     console.log('你好2');
// }
// function hello3(params) {
//     console.log('你好3');
// }

// hello() //执行函数的方式
// hello2() //执行函数的方式
// hello3() //执行函数的方式

// function addMoney(price1, price2) {
//     console.log('price1', price1);
//     console.log('price2', price2);
//     console.log(price1 + price2);
// }

// // 结账
// addMoney(2000, 100)

// // 购物车
// addMoney(3000, 200)

// function addMoney(price1, price2, discount) {
//     2000
// }

function creatCard(initName) {
    this.name = initName
}

const a1 = new creatCard('小明')
const a2 = new creatCard('小明2')
const a3 = new creatCard('小明3')
const a4 = new creatCard('小明4')
const a5 = new creatCard('小明5')

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);