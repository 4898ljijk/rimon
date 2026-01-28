"use strict";

// ページ読み込み時に実行
window.addEventListener("DOMContentLoaded", function () {

    // 1. localStorage が使えるか確認
    if (typeof localStorage === "undefined") {
        window.alert("このブラウザは LocalStorage 機能が実装されていません。");
        return;
    } else {
        viewStorage();
        saveLocalStorage();
        selectTable();
    }

}, false
);


// 2. localStorage への保存処理
function saveLocalStorage() {

    const save = document.getElementById("save");

    save.addEventListener("click", function (e) {
        e.preventDefault();

        const key = document.getElementById("textKey").value;
        const value = document.getElementById("textMemo").value;

        // 入力チェック
        if (key === "" || value === "") {
            window.alert("Key , Memo はどちらも必須です。");
            return;
        } else {

            // localStorage に保存
            localStorage.setItem(key, value);

            // 完了メッセージ
            let w_msg = "LocalStorage に「" + key + "  " + value + "」を保存しました。";
            window.alert(w_msg);

            // 入力欄クリア
            document.getElementById("textKey").value = "";
            document.getElementById("textMemo").value = "";
        }
    }, false
    );
};



"use strict";

// ページ本体が読み込まれたタイミングで実行するコード
window.addEventListener("DOMContentLoaded",
    function () {
        // 1.localStorageが使えるか。(つかえるか) 確認(かくにん)
        if (typeof localStorage == "undefined") {
            window.alert("このブラウザはLocal Storage機能が実装されていません");
            return;
        } else {
            viewStorage(); // localStorageからのデータの取得 (しゅとく)とテーブルへ表示(ひょうじ)
            saveLocalStorage(); // 2.localStorageへの保存(ほぞん)
        }
    }, false
);

// 2.localStorageへの保存(ほぞん)
function saveLocalStorage() {
    const save = document.getElementById("save");
    save.addEventListener("click",
        function (e) {
            e.preventDefault();
            const key = document.getElementById("textKey").value;
            const value = document.getElementById("textMemo").value;

            // 値の入力チェック
            if (key == "" || value == "") {
                window.alert("Key、Memoはいずれも必須です。");
                return;
            } else {
                localStorage.setItem(key, value);
                viewStorage(); //localStorageからのデータの取得 (しゅとく)とテーブルへ表示 (ひょうじ)
                let w_msg = "LocalStorageに" + key + " : " + value + "を保存(ほぞん)しました。";
                window.alert(w_msg);
                document.getElementById("textKey").value = "";
                document.getElementById("textMemo").value = "";
            }
        }, false
    );
};
function selectTable() {
    const select =document.getElementById("select");
    select.addEventListener("click",
        function(e) {
            e.preventDefault();
            selectRadioBtn();
        }, false
    );
}
// 11 テーブルからデータ選択
function selectRadioBtn() {
    let w_sel = "0"; // 選択されていれば "1" にする

    const radio1 = document.getElementsByName("radio1");
    const table1 = document.getElementById("table1");

    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            document.getElementById("textKey").value =
                table1.rows[i + 1].cells[1].firstChild.data;

            document.getElementById("textMemo").value =
                table1.rows[i + 1].cells[2].firstChild.data;

            w_sel = "1";
            return w_sel;
        }
    }

    window.alert("1つ選択（select）してください。");
    return w_sel;
}



function viewStorage() {
    const list = document.getElementById("list");

    // htmlのテーブル初期化 (しょきか)
    while (list.rows[0]) list.deleteRow(0);

    // localStorageすべての情報 (じょうほう) の取得 (しゅとく)
    for (let i = 0; i < localStorage.length; i++) {
        let w_key = localStorage.key(i);

        // localStorageのキーと値 (あたい) を表示 (ひょうじ)
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        td1.innerHTML = "<input name='radio1' type='radio'>";
        td2.innerHTML = w_key;
        td3.innerHTML = localStorage.getItem(w_key);
    }
}





