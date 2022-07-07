// 現在の問題インデックス
let questionIndex = 0;

// 問題一覧
const questions = [
    {
        text: "日本の首都は？",
        selects: ["東京", "北海道", "青山"],
        answerIndex: 0
    },
    {
        text: "アメリカの首都は？",
        selects: ["ニューヨーク", "ワシントン", "ボストン"],
        answerIndex: 1
    },
    {
        text: "エジプトの首都は？",
        selects: ["ネイロ", "ジャイロ", "カイロ"],
        answerIndex: 2
    },
]


// ボタンをクリックすると問題が表示される
const button = document.querySelector('#button')
button.addEventListener('click', function () {

    // #question-index からインデックス番号を取得

    // 問題文をセット

    // 選択肢をセット

})


// 選択肢のinput要素にクリックイベントを追加
// querySelectorAll: 複数の要素を取得
const questionSelects = document.querySelectorAll('#question-selects input')
// 要素を一つずつ取り出してクリックイベントを追加
questionSelects.forEach(questionSelect => {
    // クリックイベントを追加
});