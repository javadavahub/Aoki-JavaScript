"use strict";

const myMap = new Map();

myMap.set("id", 3);
myMap.set("name", "honda");

console.log(myMap);
console.log(myMap.get("name"));

const valueList = myMap.values();

for (let value of valueList) {
  console.log(value);
}

/**
 * 実行結果
 * map.js:8 Map(2) {"id" => 3, "name" => "honda"}
 * map.js:9 honda
 * map.js:14 3
 *
 */
