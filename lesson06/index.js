// ES6 文法演習
console.log('Hello World')

/////////////////////////////
//////// デフォルト引数
/////////////////////////////
function sum(a, b) {
  return a + b
}

// a = 2, b = 1 のデフォルト値を設定

/////////////////////////////
//////// 【復習】アロー関数式
/////////////////////////////

// function multiply(a, b) {
//   return a * b
// }

// アロー関数

// アロー関数（省略形）

/////////////////////////////
//////// オブジェクトの省略記法
/////////////////////////////

const name = 'taro'
const age = 25
function greet(person) {
  console.log(`${person} さん、こんにちは！`)
}

// const user_1 = {
//   name: name,
//   age: age
//   greet: greet
// }

// 省略記法
// メソッドも省略記法が可能

/////////////////////////////
//////// 分割代入
/////////////////////////////

// 配列
// const width = 100
// const height = 200

// オブジェクト

const response = {
  data: { name: 'taro', age: 20, country: 'Japan' },
}

// const data = response.data
// 分割代入

// プロパティ (key) 名が異なる場合の分割代入
// const user_２ = response.data

// 深い階層にある country を分割代入したい場合
// const country = response.data.country

/////////////////////////////
//////// スプレッド構文
/////////////////////////////
const numbers = [1, 2, 3]

// [2, 3] のみ抽出

// [0, 1, 2, 3, 4, 5] のような配列を新たに定義したい場合

// [2, 3] を関数の引数に渡すことも可能

const user_3 = { name: 'hanako', age: 30, country: 'Tokyo' }

// {age, country} のみ抽出

// phone プロパティが追加されたオブジェクトを新たに定義したい場合
// { phone: '123456789', name: 'taro', age: 25, city: 'Japan' }

/////////////////////////////
//////// 配列メソッド
/////////////////////////////

///////////////////
// 【復習】 map
///////////////////

// 【演習】全ての要素を 2 倍にする配列を定義してください。
const someNumbers = [1, 5, 10, 30]

// const twiveNumbers = [2, 10, 20, 60]

// 【演習】name + さんとなるような配列を定義してください。
const users = [
  { name: 'taro', age: 10 },
  { name: 'hanako', age: 20 },
  { name: 'kento', age: 30 },
]

// const users_1 = [
//   { name: 'taroさん', age: 10 },
//   { name: 'hanakoさん', age: 20 },
//   { name: 'kentoさん', age: 30 },
// ]

///////////////////
// 【復習】 forEach
///////////////////

// 【演習】forEach で書き直してください。
// for (let index = 0; index < users.length; index++) {
//   console.log(users[index])
// }

// 【園主】配列と forEach の違いについて

///////////////////
// filter
///////////////////

// someNumbers から 10 以上の要素のみ抽出したい場合

// someNumbers の全要素が条件（ 100 以上）にどれも当てはまらない場合

// 【演習】users から age が 18 以上を抽出してください。
// const adultUsers = [
//   { name: 'hanakoさん', age: 20 },
//   { name: 'kentoさん', age: 30 },
// ]

///////////////////
// find
///////////////////

// someNumbers から 10 と一致する要素を取り出す場合

// 複数の条件に当てはまる場合（0 以上）

// 条件に当てはまらない場合（100 以上）
