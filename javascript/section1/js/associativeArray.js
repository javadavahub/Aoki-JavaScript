"use strict";

const member = {
  name: "本田",
  age: 20,
  hobby: "サッカー",
};

console.log(member);
console.log(member["hobby"]);
console.log(member.age);

const member_1 = {
  japan: {
    honda: {
      age: 20,
      hobby: "サッカー",
    },
    kagawa: {
      age: 25,
      hobby: "野球",
    },
  },
  china: {
    shen: {
      age: 21,
      hobby: "サッカー",
    },
    wan: {
      age: 30,
      hobby: "卓球",
    },
  },
};

console.log(member_1["china"]["wan"]["hobby"]);
