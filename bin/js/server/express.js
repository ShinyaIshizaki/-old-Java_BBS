console.log("***express.js start***");

const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/callJava', (req, res) => {
    // Javaプログラムを実行する例
    exec('java -jar /etc/alternatives/*.jar', (error, stdout, stderr) => {
        if (error) {
            console.error(`エラーが発生しました: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        console.log(`実行結果: ${stdout}`);
        res.send('Javaプログラムが正常に実行されました');
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました`);
});

console.log("***express.js end***");