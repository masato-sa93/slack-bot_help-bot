function doPost(e) {
  var slack_token = '①Verification Tokenで取得したトークン';
  // 指定チャンネルのコマンドのみ受け付けるための条件分岐
  if (slack_token != e.parameter.token) {
    throw new Error(e.parameter.token);
  }
// 返答データ本体
  var data = {
    "text": "み〜んなのみな実だよ！まずは言語を選んでね♡", //アタッチメントではない通常メッセージ
    "response_type":"ephemeral", // ephemeralにしてるため、自分にだけ表示される
    //アタッチメント部分
    "attachments": [{
      "title": "Language Select",//　アタッチメントのタイトル
      "text": "Please select language.",//アタッチメント内テキスト
      "fallback": "Yeeeeeeeeeeah!!!",//ボタン表示に対応してない環境での表示メッセージ. 
      "callback_id": "callback_button",
      "color": "#00bfff", //左の棒の色を指定する
      "attachment_type": "default",
      // ボタン部分
      "actions": [
        //ボタン1
        {
          "name": "eng",
          "text": "English",
          "type": "button",//
          "value": "language"
        },
        //ボタン2
        {
          "name": "jpn",
          "text": "日本語",
          "type": "button",
          "value": "language"
        }
        ]
      }]
  };
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
