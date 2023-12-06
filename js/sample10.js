// sample10
// 関数

// コンソールにログを表示する関数
// function log() {
//     console.log("関数の呼び出し");
// }

// ログ関数の呼び出し
// log();
// log();

// アロー関数式
// log = () => {
//     console.log("関数の呼び出し");
// }

const createNumber = (digit = 1) => {
    let result = "";
    while(result.length<digit){
        result += rand(9)
        if(result==="0") {
            result ="";
        }
    }
    return result;
}