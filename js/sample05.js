// sample05.js

// while
{
    // カウントを数える変数（カウンター変数）
    let count = 10;
    while(count) {
        console.log(`count:${count}`);
        count = count - 1 ;
    }
}

// 比較
    let count = 10;
    console.log( count == 10);
    console.log( count == "10")

// for文
{
    for(let count = 1; count <= 4; count++) {
        console.log(`count: ${ count }`);
    }
}

// Hello Worldをコンソールに14回表示する。
{
    const maxCount = 14;
    for(let H=1; H<=14; H++) {
        console.log("Hello World");
    }
}

// 1~10までの合計した結果をコンソールに表示する
{
    const endNum = 10;
    let sum      = 0;
    for(let i =1; i <= endNum; i++){
        sum = sum + i;
    }
    console.log(`合計: ${ sum }`)
}

// 10から1づつ減らすカウントダウンをコンソールに表示する
{
    for (let i=10; i>0; i--){
        console.log(i)
    }
}

// 多重forループ
{
    for(let i=1; i< 10; i++) {
        console.log(`--- ${i} ---`);
        for(let j=1; j<10; j++) {
            console.log(j);
        }
    }
}

// 九九の表
// 1 2 3 4 5 6 7 8 9
// 2 4 6 8 10 12 14 16 18
// 9 18 27 ....        81
{
    for(let i=1; i<=9; i++) {
        let row = "";
        console.log(`---[${i}]-----------------------------------------------------------------`);
        for(let j=1; j<=9; j++) {
            row = row + " | " + ( i*j )+" | ";
        }
        // jのループが終わったら実行
        console.log(row);
        row = "";
    }
}