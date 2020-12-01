# Aoki-JavaScipt

- 繰り返し

  - for : 回数を指定する場合
  - for in : あまり使われない
  - for of : ES6、使いやすい

- for of

  ```
  for(score of scores) {
    console.log(score)
    };
  ```

- 関数

  ```
  let words = 'コメント';

  // 引数と処理に使う変数の名前を合わせる

  function getComment(comment) {
    console.log(comment);
  }

  getComment(words);
  ```

  ```
  function sumPrice(int1, int2) {
    let int3 = int1 + int2;
    return int3;
  }
  const total = sumPrice(3, 5);
  console.log(total);
  ```

- すべてオブジェクト
  - オブジェクトとは、値と関数
    - 値（変数と定数）-> プロパティ
    - 関数 -> メソッド
