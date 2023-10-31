// sample07.js

// 配列の作成
const arr01 = [];

console.log(arr01);

// 配列にデータを保存する

// arr01 = "りんご"; <= これだけだと変数になる。
arr01[ 0 ] = "りんご";
arr01[ 1 ] = "もも"

console.log(arr01);

// 配列に保存されているデータの数
console.log(`arr01のデータ数：&{ arr01.length }`);

// 配列にデータを追加
arr01[ arr01.length ] = "ぶどう";

console.log(arr01);

arr01.push(" 柿 ");

console.log(arr01);

// 配列の作成とデータの保存を同時にする
const classes = [ "WD1A" , "WD2A" ];

console.log(classes);

// 配列にデータの追加（定数バージョン）
classes[ classes.length ] = "WD3A";

console.log(classes)