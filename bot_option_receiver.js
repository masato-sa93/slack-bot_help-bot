function doPost(e) {
  // ペイロード部分の取り出し
  var payload = JSON.parse(e["parameter"]["payload"]);
  var name = payload["actions"][0]["name"];
  var value = payload["actions"][0]["value"];

  // nameの値についてswitch分岐(nameを言語モードの分岐条件にしている)
  switch (name) {
    // 英語モードの場合
    case 'eng':
      var head_text = "Answer in English♡";
      var quest_attachment = {
        "title": "Question Select",
        "text": "Sorry, I'm just getting ready 🙇‍♂️🙇‍♂️🙇‍♂️",
        "fallback": "Opps",
        "callback_id": "callback_button",
        "color": "#00bfff",
        "attachment_type": "default",
        "actions": [
          {
            "name": "eng",
            "text": "Exit",
            "type": "button",
            "value": "quit"
          }
        ]
      };
      break;
    // 日本語モードの場合
    case 'jpn':
      var head_text = '日本語で答えるね♡';
      // 2段階目の選択肢ボタン用アタッチメント
      var quest_attachment = {
        "title": '質問選択',
        "text": '何について知りたいの？',
        "fallback": "ほえ〜",
        "callback_id": "callback_button",
        "color": "#FFC0CB",
        "attachment_type": "default",
        "actions": [
          {
            "name": "jpn",
            "text": "働くDB関連",
            "type": "button",
            "value": "htdb"
          },
          {
            "name": "jpn",
            "text": "テレワーク関連",
            "type": "button",
            "value": "telework"
          },
          {
            "name": "jpn",
            "text": "ツールの使い方",
            "type": "button",
            "value": "how-tools"
          },
          {
            "name": "jpn",
            "text": "みな実のこと！",
            "type": "button",
            "value": "about-minami"
          },
          {
            "name": "jpn",
            "text": "終了",
            "type": "button",
            "value": "quit"
          }
        ]
      }
      break;
  }

  // 選択肢に応じた応答をするためにvalueでswitch分岐する
  switch (value) {
    case 'htdb':
      // 言語モードに応じた答えに分岐する
      switch (name) {
        case 'eng':
          var r_text = "英語版";
          var exp_text = "英語版";
          break;
        case 'jpn':
          var head_text = "働くDBついて答えるよ♡"
          var quest_attachment = {
            "title": '',
            "text": 'どうしたの？',
            "fallback": "ほえ〜",
            "callback_id": "callback_button",
            "color": "#FFC0CB",
            "attachment_type": "default",
            "actions": [
              {
                "name": "jpn",
                "text": "データを削除したい",
                "type": "button",
                "value": "htdb__delete-data"
              },
              {
                "name": "jpn",
                "text": "質問・要望を送りたい",
                "type": "button",
                "value": "htdb__qandr"
              },
              {
                "name": "jpn",
                "text": "バグがあった",
                "type": "button",
                "value": "htdb__report-bug"
              },
              {
                "name": "jpn",
                "text": "パスワードを忘れた",
                "type": "button",
                "value": "htdb__reset-pw"
              },
              {
                "name": "jpn",
                "text": "その他",
                "type": "button",
                "value": "other"
              },
              {
                "name": "jpn",
                "text": "終了",
                "type": "button",
                "value": "quit"
              }
            ]
          }
          break;
      }
      break;
    case 'telework':
      switch (name) {
        case 'eng':
          var r_text = "英語版";
          var exp_text = "英語版";
          break;
        case 'jpn':
          var head_text = "テレワークついて答えるよ♡"
          var quest_attachment = {
            "title": '質問選択',
            "text": '何について知りたいの？',
            "fallback": "ほえ〜",
            "callback_id": "callback_button",
            "color": "#FFC0CB",
            "attachment_type": "default",
            "actions": [
              {
                "name": "jpn",
                "text": "テレワーク実施までの手順",
                "type": "button",
                "value": "tele__start"
              },
              {
                "name": "jpn",
                "text": "リモートデスクトップの使い方",
                "type": "button",
                "value": "howto-rdt"
              },
              {
                "name": "jpn",
                "text": "VPNの使い方",
                "type": "button",
                "value": "howto-vpn"
              },
              {
                "name": "jpn",
                "text": "テレワークの規定を確認したい",
                "type": "button",
                "value": "tele__guideline"
              },
              {
                "name": "jpn",
                "text": "その他",
                "type": "button",
                "value": "other"
              },
              {
                "name": "jpn",
                "text": "終了",
                "type": "button",
                "value": "quit"
              }
            ]
          }
          break;
      }
      break;
    case 'how-tools':
      switch (name) {
        case 'eng':
          var r_text = "英語版";
          var exp_text = "英語版";
          break;
        case 'jpn':
          var head_text = "ツールついて答えるよ♡"
          var quest_attachment = {
            "title": '質問選択',
            "text": '何について知りたいの？',
            "fallback": "ほえ〜",
            "callback_id": "callback_button",
            "color": "#FFC0CB",
            "attachment_type": "default",
            "actions": [
              {
                "name": "jpn",
                "text": "Slackの使い方",
                "type": "button",
                "value": "howto-slack"
              },
              {
                "name": "jpn",
                "text": "Zoomの使い方",
                "type": "button",
                "value": "howto-zoom"
              },
              {
                "name": "jpn",
                "text": "VPNの使い方",
                "type": "button",
                "value": "howto-vpn"
              },
              {
                "name": "jpn",
                "text": "irucaの使い方",
                "type": "button",
                "value": "howto-iruca"
              },
              {
                "name": "jpn",
                "text": "その他",
                "type": "button",
                "value": "other"
              },
              {
                "name": "jpn",
                "text": "終了",
                "type": "button",
                "value": "quit"
              }
            ]
          }
          break;
      }
      break;
    case 'about-minami':
      var image = 'https://livedoor.blogimg.jp/moriagarisokuho/imgs/7/b/7b3dcc21-s.jpg';
      switch (name) {
        case 'eng':
          var r_text = "Which key corresponds to each room?";
          var exp_text = "Correspondence of the key of each room is as this photo";
          break;
        case 'jpn':
          var exp_text = "＼＼＼教えてあーげない！／／／";
          break;

      }
      break;

    //////////// 子項目の選択肢 ////////////
    case 'other':
      var r_text = "その他の問い合わせ";
      var exp_text = "このチャンネルでメンションをして質問してね！";
      break;

    case 'htdb__delete-data':
      var r_text = "働くDBのデータ削除の方法";
      var exp_text = "こちらのURLから削除依頼をしてね！\nhttps://hogehoge";
      break;

    case 'htdb__qandr':
      var r_text = "働くDBへの質問・要望の出し方";
      var exp_text = "こちらのURLから質問・要望を送信してね！\nhttps://fugafuga";
      break;

    case 'htdb__report-bug':
      var r_text = "働くDBのバグ報告の方法";
      var exp_text = "バグ出しちゃってごめんね😢\nこちらのURLからバグを報告してね！\nhttps://hogehoge";
      break;      

    case 'htdb__reset-pw':
      var r_text = "働くDBのパスワード再設定の方法";
      var exp_text = "こちらのURLからパスワード再設定依頼をしてね！\nhttps://fugafuga";
      break; 

    case 'tele__start':
      var r_text = "テレワーク実施までの手順";
      var exp_text = "こちらのURLから確認してね！\nhttps://hogehoge";
      break; 

    case 'howto-rdt':
      var r_text = "リモートデスクトップの利用手順";
      var exp_text = "こちらのURLから確認してね！\nhttps://fugafuga";
      break; 

    case 'howto-vpn':
      var r_text = "VPNの接続方法";
      var exp_text = "こちらのURLから確認してね！\nhttps://hogehoge";
      break; 

    case 'tele__guideline':
      var r_text = "テレワーク・モバイルワーク規定";
      var exp_text = "こちらのURLから確認してね！\nhttps://fugafuga";
      break; 

    case 'howto-slack':
      var r_text = "Slackの使い方";
      var exp_text = "こちらのURLから確認してね！\n利用までの手順や利用ガイドへのリンクも載ってるよ！\nhttps://hogehoge";
      break; 

    case 'howto-zoom':
      var r_text = "Zoomの使い方";
      var exp_text = "こちらのURLから確認してね！\nhttps://fugafuga";
      break; 

    case 'howto-iruca':
      var r_text = "irucaの使い方";
      var exp_text = "こちらのURLから確認してね！\nhttps://hogehoge";
      break;       
  }
  // 質問に応じたアタッチメントの定義
  var response = {
    "title": r_text,
    "text": exp_text,
    "image_url": image,
    "color": "#ffa500"
  };
  // 送信されるメッセージの定義
  var new_rep = {
    "text": head_text,
    "attachments": [
      response,
      quest_attachment
    ]
  };

  // 「終了」という選択肢が選ばれた時のみ異なる処理をしてボタンを消す(ボタン無しメッセージで上書きする)
  if (value == "quit"){
    // 終了時
    var reply = {
      "attachments": [
        {
          "text": "今日もみな実とがんばろうね♡",
          "color": "FFC0CB"
        }
      ]
    };
    return ContentService.createTextOutput(JSON.stringify(reply)).setMimeType(ContentService.MimeType.JSON);
  } else{
    // それ以外の場合は選択肢メッセージを出し続ける
    return ContentService.createTextOutput(JSON.stringify(new_rep)).setMimeType(ContentService.MimeType.JSON);
  }

}
