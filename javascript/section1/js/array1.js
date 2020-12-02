"use strict";

const fruits = ["りんご", "バナナ"];
console.log(fruits);

fruits.push("みかん");
console.log(fruits);

// callback 関数 (無名関数・匿名関数)
fruits.forEach(function (input) {
  console.log(input);
});

/**
 * forEach() メソッドは与えられた関数を、
 * 配列の各要素に対して一度ずつ実行します。
 */

/**
 * 「自分自身を呼び出す処理が書かれている関数」のことを，再帰関数と言います。
 *  コールバック関数は，その中で呼び出す関数を外から引数として与えます。どちらも、
 *  その処理の途中で関数を呼び出すのですが，再起関数の場合には自分自身を，コールバ
 *  ック関数の場合は引数として与えた関数を呼び出します。
 */

// アロー関数 ES6
// const 関数名 = (引数) => {処理　戻り値};
// ①名前あり {}なし
const getItem = () => console.log("アロー");
getItem();
// ②名前なし {}なし
fruits.forEach((element) => console.log(element));
