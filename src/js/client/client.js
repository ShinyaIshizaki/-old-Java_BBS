function callJava() {
  console.log("***function callJava() start***");

  // JavaScriptからサーバーサイドにリクエストを送る例
  // 以下はXMLHttpRequestを使用した非同期のGETリクエストの例です。
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../server/express.js", true);
  
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          // サーバーサイドからの応答を処理する
          console.log(xhr.responseText);
      }
  };
  
  xhr.send();
  console.log("***function callJava() end***");
}

console.log("***callJava***");
callJava;