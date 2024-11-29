/* 全体のフォント設定 */
body {
    font-family: 'Noto Sans JP', 'Arial', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #4d4d4d;
    margin: 0;
    padding: 20px;
}


/* 見出しスタイル */
h1, h2, h3,h4,h5,h6 {
    font-family: 'Noto Sans JP', sans-serif; /* ゴシック体 */
	font-weight: 400; /* 細めのスタイル */
    margin-bottom: 15px;
    /* text-align: center; */
}

h1 {
    font-size: 2.5em;
}

h2 {
    font-size: 2em;
}

h3 {
    font-size: 1.5em;
}

/* 数字のフォント */
body, input, button, table, #result {
    font-feature-settings: "tnum"; /* 固定幅数字（タブラー数字）を有効化 */
    font-family: 'Roboto', 'Arial', sans-serif; /* 数字には見やすいフォント */
}

/* 入力フィールド */
input, button {
    font-size: 1em;
    padding: 10px;
    margin: 5px 0;
    border: 2px solid #ffdab9; /* 柔らかいピーチ系カラー */
    border-radius: 10px; /* 丸みをつける */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 軽い影をつける */
}

input:focus, button:focus {
    outline: none; /* フォーカス時の青枠を消す */
    border-color: #ffb6c1; /* フォーカス時にピンク色 */
}

/* ボタン */
button {
    background-color: #ffb6c1; /* 優しいピンク */
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #ff69b4; /* 濃いピンク */
}

/* テーブル */
table {
    font-size: 0.95rem;
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fffaf0;
    border-radius: 10px;
    overflow: hidden;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
}
/* スマホ対応 */
/* @media (max-width: 600px) {
    body {
        font-size: 0.9rem;
    }
    table {
        font-size: 1rem;
    }
    button, input {
        padding: 8px;
    }
    .button-container {
        gap: 5px;
    }
} */

th, td {
    padding: 10px;
    border: 1px solid #ffdab9; /* ピーチカラーの枠線 */
    /* text-align: center; */
}

th {
    background-color: #ffdab9; /* テーブルヘッダーの背景色 */
    color: #4d4d4d;
    font-weight: bold;
}

/* リンク */
a {
    color: #ff69b4; /* 優しいピンク */
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* 結果のエリア */
#result {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff0f5; /* 柔らかいピンク */
    color: #4d4d4d;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 軽い影 */
}
/* ボタンを横並びに */
.button-container {
    display: flex;
    gap: 10px; /* ボタン間に少しスペース */
}
