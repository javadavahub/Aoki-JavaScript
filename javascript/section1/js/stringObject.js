"use strict";

const test = "テスト";

console.log(typeof test);
console.log(test.length);

/**
 * 実行結果
 * js % node stringObject.js
 * string
 * 3
 */

const test_2 = "文字列の結合";

console.log(test_2.concat(test));

/**
 * 実行結果
 * %
 * 文字列結合テスト
 */

const greeting = "  Hello World ";

console.log(greeting);
console.log(greeting.trim());
console.log(greeting);
/**
 * 実行結果
 *
 *   Hello World
 * Hello world
 *   Hello World
 */

console.log(greeting.replace("World", "JavaScript"));
console.log(greeting);
/**
 * 実行結果
 *
 *   Hello JavaScript
 *   Hello World
 */
