---
title: "カスタマイズ"
description: "Misskey で活用できるカスタマイズ情報を紹介します。"
---
以下の内容はMisskeyで使う事のできる情報です。  
一定のチェックは行っていますが、動作保証はありません。  
利用に際してはご自身の責任において利用して下さい。

（作者等は敬称略です。）

## カスタムCSS利用方法

「設定」→「全般」→最下部の「カスタムCSS」 と進み、該当コードを追記します。  
誤ったコードを記載すると、全体が正しく表示されなくなる場合がありますので注意してください。

必要に応じて一部のコードを変更する必要（チャンネルのIDを指定する等）がある場合があります。

:::caution[:hasを持つ記述について]

一部のブラウザで正しく動作しない（未対応のブラウザがある）ので、必要に応じて自身のブラウザについて確認を行ってください。

:::

## カスタムCSSコード各種

### チャンネル投稿時のノートの背景色を変える

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* チャンネル投稿時のノート入力部分の色を変える */
.x8B0D[placeholder="チャンネルに投稿..."]{
  background-color: rgba(40, 40, 60, 1) !important;
}
```

### リアクションデッキをみやすくする

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)
参考の参考: [misskey.io](https://misskey.io/notes/9d8kl0mdfg)

サイズは作者さんの環境に合わせているとのことですので、必要に応じて調整を行ってください。

#### スマホ向けサイズ

``` css
/* ノート作成時のリアクションボタンから呼び出す画面 */
.xpAOc {
  width: 400px !important;
  height: 350px !important;
}
.omfetrab>.emojis section>.body {
  display: block !important;
}
/* 絵文字選択 */
.omfetrab {
  width: 48em !important;
  height: 500px !important;
}
/* 絵文字のサイズ */
.omfetrab>.emojis section>.body>.item>.emoji {
  height: 2em !important;
}
.omfetrab>.emojis section>.body>.item {
  contain: none !important;
  padding: 4px !important;
  aspect-ratio: auto !important;
  font-size: 14px !important;
  width: auto !important;
  height: auto !important;
}
```

#### PC向けサイズ

``` css
/* ノート作成時のリアクションボタンから呼び出す画面 */
.xpAOc {
  width: 550px !important;
  height: 500px !important;
}
.omfetrab>.emojis section>.body {
  display: block !important;
}
/* 絵文字選択 */
.omfetrab {
  width: 40em !important;
  height: 500px !important;
}
/* 絵文字のサイズ */
.omfetrab>.emojis section>.body>.item>.emoji {
  height: 2em !important;
}
.omfetrab>.emojis section>.body>.item {
  contain: none !important;
  padding: 4px !important;
  aspect-ratio: auto !important;
  font-size: 15px !important;
  width: auto !important;
  height: auto !important;
}
```

### タイムラインに流れてくるチャンネル投稿の文字色を変える

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* 流れてくるチャンネルの文字色を変える */
.x5yeR:has(.xww2J[href^="チャンネルURLを指定"]) {
  color: 色コードを指定;
}
```

### アイコンをクリックしてもプロフィールに飛ばないようにする

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* アイコンクリックでプロフィールに飛ばないようにする */
.xrEoV {
  pointer-events: none;
}
```

### ノート投稿部分の色々を消す

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* ノート投稿部分のリアクションのアレを消す */
._button.x9WHn:has(.ti-icons) {
  display:none;
}
/* ノート投稿部分の#を消す */
._button.xjAub:has(.ti-hash) {
  display:none;
}

/* ノート投稿部分の@を消す */
._button.xjAub:has(.ti-at) {
  display:none;
}

/* 連合なしのときの注意文言を非表示 */
.xxK0J {
  display:none;
}
```

### チャンネル投稿のボタンの色を変更する

参考: [Misskingway](https://invillage-outvillage.com/@wildfangkatze/pages/1682180199159)

``` css
/* チャンネル投稿のボタンの色を変更する */
.xze7V{
  background:MediumSpringGreen !important;
}
```

### 特定の絵文字の幅を画面に収める

作者: [@sasapiyo](https://ikaskey.bktsk.com/@saspaiyo)

``` css
/* リアクションや絵文字のサイズ変更 */
img[title=":<絵文字のID>:"] {
  width: calc(100% - 50px);
  height: auto;
}
```

### リアクションのボタンをプラスに戻す

作者: [@sasapiyo](https://ikaskey.bktsk.com/@saspaiyo)

``` css
/* リアクションボタンをプラスに戻したい */
footer.xhAPG button.xviCy i.ti-mood-happy:before,
footer button.xzgmm i.ti-mood-happy:before {
  content: "\eb0b";
}
```

## プラグイン利用方法

「設定」→クライアント設定内「プラグイン」→「プラグインをインストール」 に進み、コードを貼り付けます。  
一定の動作確認を行っていますが、動作保証はありません。  
利用に際してはご自身の責任において利用して下さい。

## プラグインコード各種

### ネコ化強制解除

自分の投稿のネコ化を強制的に解除します。

バージョン: 1.0.0

作者: [めろん](https://ikaskey.bktsk.com/@melon)

``` javascript
/// @ 0.12.4

### {
  name: "猫語はちょっと恥ずかしいにゃ",
  version: "1.0.0",
  author: "めろん",
  description: "猫化解除にゃ！！"
}

let convert_char_emojis = [

  ["な", "\(な\)"],
]

Plugin:register_post_form_action(`猫化解除にゃ！` @(form, update) {
  var res = form.text
  for (let i, convert_char_emojis.len) {
    let char_emoji = convert_char_emojis[i]
    res = res.replace(char_emoji[0], char_emoji[1])
  }
  update("text", res)
})
```

### いかすきー募集用テンプレート

いかすきーで募集をかけるときに使えるテンプレートが一気に投稿欄に入力されます。

バージョン: 0.1.4

作者: [めろん](https://ikaskey.bktsk.com/@melon)  
協力: [あるみ](https://ikaskey.bktsk.com/@arumi_toon)

``` javascript
/// @ 0.12.4

### {
  name: "スプラ募集テンプレプラグイン",
  version: "0.1.4",
  author: "めろん+あるみさん協力",
  description: "募集時テンプレ"
}



Plugin:register_post_form_action(`募集時テンプレ` @(form, template) {
  var res = form.text
  res = "$[x2 :boshu::ato募集数:]
種類 | $[fg.color=a260bf プラベ] or $[fg.color=ff0000 オープン] or $[fg.color=fd7e00 サーモンラン]
通話の有無|:aru: or :nai:
一言 |
URL  |
#いかすきー募集"
  template("text", res)
})
```

### 絵文字自動変換

入力している文字類が一気に絵文字に変換されます。

バージョン: 0.1.0

作者: [めろん](https://ikaskey.bktsk.com/@melon)  

``` javascript
/// @ 0.12.4

### {
  name: "絵文字をワンボタンで変換するよ",
  version: "0.1.0",
  author: "めろん",
  description: "絵文字をワンボタンで変換するよ"
}

let convert_char_emojis = [
  ["@1", ":ato1:"],
  ["@2", ":ato2:"],
  ["@3", ":ato3:"],
  ["@4", ":ato4:"],
  ["@5", ":ato5:"],
  ["@6", ":ato6:"],
  ["@7", ":ato7:"],
  ["@8", ":ato8:"],
  ["@9", ":ato9:"],
  ["しめきり", ":shime_ikaskey:"],
  ["しめ", ":shime_ikaskey:"],
  ["締め切り", ":shime_ikaskey:"],
  ["締め", ":shime_ikaskey:"],


  ["恒", ":producer:"],

  ["ガチアサリ", ":clam_blitz_100:"],
  ["ガチホコ", ":rainmaker_100:"],
  ["ガチヤグラ", ":tower_control_100:"],
  ["ガチエリア", ":splat_zones_100:"],
  ["アサリ", ":clam_blitz_100:"],
  ["ホコ", ":rainmaker_100:"],
  ["ヤグラ", ":tower_control_100:"],
  ["エリア", ":splat_zones_100:"],


  ["受け身", ":drop_roller:"],
  ["対物", ":object_shredder:"],
  ["ステジャン", ":stealth_jump:"],
  ["ペナップ", ":respawn_punisher:"],
  ["ペナッアプ", ":respawn_punisher:"],
  ["ペナ増", ":respawn_punisher:"],
  ["デスペナ", ":respawn_punisher:"],
  ["復ペナ", ":respawn_punisher:"],
  ["サーマルインク", ":thermal_ink:"],
  ["サーマル", ":thermal_ink:"],
  ["恨み", ":haunt:"],
  ["リベンジ", ":haunt:"],
  ["イカ忍", ":イカ忍:"],
  ["イカニン", ":イカニン:"],
  ["カムバック", ":comeback:"],
  ["カムバ", ":comeback:"],
  ["逆境", ":tenacity:"],
  ["ラストスパート", ":last_ditch_effort:"],
  ["ラスパ", ":last_ditch_effort:"],
  ["スタートダッシュ", ":opening_gambit:"],
  ["スタダ", ":opening_gambit:"],
  ["アクション強化", ":intensify_jump:"],
  ["アク強", ":intensify_jump:"],
  ["サ減", ":sub_resistance_up:"],
  ["サブ減", ":sub_resistance_up:"],
  ["安全靴", ":ink_resistance_up:"],
  ["安全", ":ink_resistance_up:"],
  ["遠投", ":sub_power_up:"],
  ["サブ強", ":sub_power_up:"],
  ["サブ性", ":sub_power_up:"],
  ["ジャン短", ":quick_super_jump:"],
  ["スパ短", ":quick_super_jump:"],
  ["復短", ":quick_respawn:"],
  ["ゾンビ", ":quick_respawn:"],
  ["スペ強", ":special_power_u"],
  ["スペ性", ":special_power_up:"],
  ["スペ減", ":special_saver:"],
  ["スペ増", ":special_charge_up:"],
  ["イカ速", ":swim_speed_up:"],
  ["ヒト速", ":run_speed_up:"],
  ["人速", ":run_speed_up:"],
  ["インク回復", ":ink_recovery_up:"],
  ["イン回", ":ink_recovery_up:"],
  ["回復", ":ink_recovery_up:"],
  ["サインク", ":ink_saver_sub:"],
  ["サブインク", ":ink_saver_sub:"],
  ["サブ効率", ":ink_saver_sub:"],
  ["サブ効", ":ink_saver_sub:"],
  ["メインク", ":ink_saver_main:"],
  ["メイン効率", ":ink_saver_main:"],
  ["メイン効", ":ink_saver_main:"],

  ["デコイチラシ", ":super_chump:"],
  ["チラシ", ":super_chump:"],
  ["デコチラ", ":super_chump:"],
  ["デコイ", ":super_chump:"],
  ["テイオウイカ", ":kraken_royale:"],
  ["帝王", ":kraken_royale:"],
  ["テイオウ", ":kraken_royale:"],
  ["ウルトラハンコ", ":ultra_stamp:"],
  ["ウンコ", ":ultra_stamp:"],
  ["ウルハン", ":ultra_stamp:"],
  ["ハンコ", ":ultra_stamp:"],
  ["ナイスダマ", ":booyah_bomb:"],
  ["ナダマ", ":booyah_bomb:"],
  ["善玉", ":booyah_bomb:"],
  ["アメブラシ", ":inkstorm:"],
  ["雨", ":inkstorm:"],
  ["アメ", ":inkstorm:"],
  ["ジェットパック", ":inkjet:"],
  ["ジェッパ", ":inkjet:"],
  ["マルチミサイル", ":tenta_missiles:"],
  ["ミサイル", ":tenta_missiles:"],
  ["マルミサ", ":tenta_missiles:"],
  ["マルミ", ":tenta_missiles:"],
  ["マルチ", ":tenta_missiles:"],
  ["サメライド", ":reefslider:"],
  ["鮫", ":reefslider:"],
  ["サメ", ":reefslider:"],
  ["ホップソナー", ":wave_braker:"],
  ["ソナー", ":wave_braker:"],
  ["トリプルトルネード", ":triple_inkstrike:"],
  ["トルネード", ":triple_inkstrike:"],
  ["トリネード", ":triple_inkstrike:"],
  ["トリトル", ":triple_inkstrike:"],
  ["トリネ", ":triple_inkstrike:"],
  ["トルネ", ":triple_inkstrike:"],
  ["ショクワンダー", ":zipcaster:"],
  ["触腕", ":zipcaster:"],
  ["ショクワン", ":zipcaster:"],
  ["ダイソン", ":ink_vac:"],
  ["キューインキ", ":ink_vac:"],
  ["掃除機", ":ink_vac:"],
  ["吸引", ":ink_vac:"],
  ["キューイン", ":ink_vac:"],
  ["エナジースタンド", ":tacticooler:"],
  ["エナドリ", ":tacticooler:"],
  ["ドリンク", ":tacticooler:"],
  ["エナスタ", ":tacticooler:"],
  ["メガホンレーザー", ":killer_wail_5_1:"],
  ["メガレ", ":killer_wail_5_1:"],
  ["メガホン", ":killer_wail_5_1:"],
  ["グレートバリア", ":big_bubbler:"],
  ["グレバリ", ":big_bubbler:"],
  ["グレバ", ":big_bubbler:"],
  ["バリア", ":big_bubbler:"],
  ["ウルトラショット", ":trizooka:"],
  ["ウルショ", ":trizooka:"],

  ["ラインマーカー", ":angle_shooter:"],
  ["ラマ", ":angle_shooter:"],
  ["ライマ", ":angle_shooter:"],
  ["マーカー", ":angle_shooter:"],
  ["トーピード", ":torpedo:"],
  ["トピド", ":torpedo:"],
  ["トピ", ":torpedo:"],
  ["魚雷", ":torpedo:"],
  ["炭酸", ":fizzy_bomb:"],
  ["タンサン", ":fizzy_bomb:"],
  ["拠点", ":squid_beakon:"],
  ["ベーコン", ":squid_beakon:"],
  ["ビーコン", ":squid_beakon:"],
  ["地雷", ":ink_mine:"],
  ["罠", ":ink_mine:"],
  ["トラップ", ":ink_mine:"],
  ["カーテン", ":splash_wall:"],
  ["シールド", ":splash_wall:"],
  ["スプリンクラー", ":sprinkler:"],
  ["噴水", ":sprinkler:"],
  ["リンクラ", ":sprinkler:"],
  ["スプリン", ":sprinkler:"],
  ["プリン", ":sprinkler:"],
  ["ポイズンミスト", ":toxic_mist:"],
  ["毒霧", ":toxic_mist:"],
  ["毒", ":toxic_mist:"],
  ["ミスト", ":toxic_mist:"],
  ["ポイミス", ":toxic_mist:"],
  ["ポイミ", ":toxic_mist:"],
  ["ポイズン", ":toxic_mist:"],
  ["ポイントセンサー", ":point_sensor:"],
  ["センサー", ":point_sensor:"],
  ["ポイセン", ":point_sensor:"],
  ["水風船", ":burst_bomb:"],
  ["クイックボム", ":burst_bomb:"],
  ["クイボ", ":burst_bomb:"],
  ["ロボットボム", ":autobomb:"],
  ["ロボボ", ":autobomb:"],
  ["ロボボム", ":autobomb:"],
  ["ロボム", ":autobomb:"],
  ["カーリングボム", ":curling_bomb:"],
  ["カーボム", ":curling_bomb:"],
  ["カーリング", ":curling_bomb:"],
  ["キューバンボム", ":suction_bomb:"],
  ["キューバン", ":suction_bomb:"],
  ["スプラッシュボム", ":splat_bomb:"],
  ["おにぎり", ":splat_bomb:"],
  ["スプボム", ":splat_bomb:"],
  ["スプボ", ":splat_bomb:"],

  ["クマ手", ":grizzco_splatana:"],
  ["クマ剣", ":grizzco_splatana:"],
  ["クマ刀", ":grizzco_splatana:"],
  ["クマワイパー", ":grizzco_splatana:"],
  ["熊弓", ":grizzco_stringer:"],
  ["クマスト", ":grizzco_stringer:"],
  ["クマチャー", ":grizzco_charger:"],
  ["熊洗濯機", ":grizzco_slosher:"],
  ["クマスロ", ":grizzco_slosher:"],
  ["クマ傘", ":grizzco_brella:"],
  ["クマシェル", ":grizzco_brella:"],
  ["クマブラ", ":grizzco_blaster:"],

  ["チェンソー", ":splatana_stamper:"],
  ["ジム", ":splatana_stamper:"],
  ["イワパコ", ":splatana_wiper_deco:"],
  ["ドラデコ", ":splatana_wiper_deco:"],
  ["ドラワイ", ":splatana_wiper:"],
  ["ドライブ", ":splatana_wiper:"],
  ["ワイパー", ":splatana_wiper:"],

  ["ラクト", ":lact_450:"],
  ["トラスト", ":tri_stringer:"],
  ["ストリンガー", ":tri_stringer:"],
  ["弓", ":tri_stringer:"],

  ["百均傘", ":undercover_brella:"],
  ["スパイ傘", ":undercover_brella:"],
  ["スパイガ", ":undercover_brella:"],
  ["スパガ", ":undercover_brella:"],
  ["スバイ", ":undercover_brella:"],
  ["キャンソレ", ":tenta_sorella_brella:"],
  ["テント", ":tenta_brella:"],
  ["巨傘", ":tenta_brella:"],
  ["デカ傘", ":tenta_brella:"],
  ["キャンシェル", ":tenta_brella:"],
  ["キャンブ", ":tenta_brella:"],
  ["パラ傘", ":splat_brella:"],
  ["パラシェル", ":splat_brella:"],
  ["パラシェ", ":splat_brella:"],
  ["傘", ":splat_brella:"],

  ["ドンキンちゃん", ":nautilus47:"],
  ["銀チラス", ":nautilus47:"],
  ["銀ノチ", ":nautilus47:"],
  ["ノチ", ":nautilus47:"],
  ["脳散らす", ":nautilus47:"],
  ["ノーチラス", ":nautilus47:"],
  ["ノーチ", ":nautilus47:"],
  ["ボールペン", ":ballpoint_splatling:"],
  ["公家", ":ballpoint_splatling:"],
  ["クゲ", ":ballpoint_splatling:"],
  ["クーゲル", ":ballpoint_splatling:"],
  ["ハイドラ", ":hydra_splatling:"],
  ["ピナコラ", ":zink_mini_splatling:"],
  ["ピナコ", ":zink_mini_splatling:"],
  ["スピコラ", ":zink_mini_splatling:"],
  ["スプスピ", ":mini_splatling:"],
  ["バピコ", ":heavy_splatling_deco:"],
  ["バレデコ", ":heavy_splatling_deco:"],
  ["バレスピ", ":heavy_splatling:"],
  ["バレル", ":heavy_splatling:"],

  ["バスタブ", ":bloblobber:"],
  ["オバフロ", ":bloblobber:"],
  ["バフロ", ":bloblobber:"],
  ["お風呂", ":bloblobber:"],
  ["風呂", ":bloblobber:"],
  ["オフロ", ":bloblobber:"],
  ["エクプロ", ":explosher:"],
  ["エクスロ", ":explosher:"],
  ["エクス", ":explosher:"],
  ["スクネオ", ":sloshing_machine:"],
  ["洗濯機", ":sloshing_machine:"],
  ["スクスロ", ":sloshing_machine:"],
  ["ヒッヒュー", ":tri_slosher_nouveau:"],
  ["ヒヒュー", ":tri_slosher_nouveau:"],
  ["筆洗", "::tri_slosher"],
  ["ヒッセン", ":tri_slosher:"],
  ["バケデコ", ":slosher_deco:"],
  ["バケツ", ":slosher:"],
  ["バケスロ", ":slosher:"],

  ["クアホワ", ":light_tetra_dualies:"],
  ["白ッパー", ":light_tetra_dualies:"],
  ["白クアッド", ":light_tetra_dualies:"],
  ["白クッパ", ":light_tetra_dualies:"],
  ["クアホ", ":dark_tetra_dualies:"],
  ["クアブ", ":dark_tetra_dualies:"],
  ["黒ッパー", "::dark_tetra_dualies"],
  ["黒クアッド", ":dark_tetra_dualies:"],
  ["黒クッパ", ":dark_tetra_dualies:"],
  ["クッパ", ":dark_tetra_dualies:"],
  ["クアッド", ":dark_tetra_dualies:"],
  ["青スパ", ":dapple_dualies_nouveau:"],
  ["スパヒュー", ":dapple_dualies_nouveau:"],
  ["スパヒュ", "::dapple_dualies_nouveau"],
  ["スパッタリ", ":dapple_dualies:"],
  ["赤スパ", ":dapple_dualies:"],
  ["スパ", ":dapple_dualies:"],
  ["アルパカ", ":custom_dualie_squelchers:"],
  ["デュアカス", ":custom_dualie_squelchers:"],
  ["デュカス", ":custom_dualie_squelchers:"],
  ["ザリガニ", ":dualie_squelchers:"],
  ["デュアル", ":dualie_squelchers:"],
  ["青ケル", ":glooga_dualies:"],
  ["青ケルビン", ":glooga_dualies:"],
  ["ケルビン", ":glooga_dualies:"],
  ["素マニュ", ":splat_dualies:"],
  ["スマニュ", ":splat_dualies:"],
  ["スプマニュ", ":splat_dualies:"],
  ["マニュ", ":splat_dualies:"],

  ["鉛筆", ":snipewriter5h:"],
  ["rペン", ":snipewriter5h:"],
  ["Rペン", ":snipewriter5h:"],
  ["アルペン", ":snipewriter5h:"],
  ["醤油", ":goo_tuber:"],
  ["ソイチュ", ":goo_tuber:"],
  ["ソイ", ":goo_tuber:"],
  ["甲竹", ":banboozler14mk1:"],
  ["竹甲", ":banboozler14mk1:"],
  ["竹", ":banboozler14mk1:"],
  ["スクα", ":classic_squiffer:"],
  ["スクイク", ":classic_squiffer:"],
  ["スイクン", ":classic_squiffer:"],
  ["スクリン", ":classic_squiffer:"],
  ["洗剤", ":classic_squiffer:"],
  ["４スコ", ":e_liter4k_scope:"],
  ["4スコ", ":e_liter4k_scope:"],
  ["リッスコ", ":e_liter4k_scope:"],
  ["リッター", ":e_liter4k:"],
  ["スココラ", ":zplusf_splatterscope:"],
  ["スプスコ", ":splatterscope:"],
  ["チャーコラ", ":zplusf_splat_charger:"],
  ["スプチャ", ":splat_charger:"],
  ["チャー", ":splat_charger:"],

  ["フィン", ":painbrush:"],
  ["白菜", ":octobrush:"],
  ["ホクサイ", ":octobrush:"],
  ["パブビュー", ":inkbrush_nouveau:"],
  ["パヒュー", ":inkbrush_nouveau:"],
  ["パブロ", ":inkbrush:"],

  ["ワロコラ", ":big_swig_roller_express:"],
  ["ワイコラ", ":big_swig_roller_express:"],
  ["ワイローラ", ":big_swig_roller:"],
  ["ワイロ", ":big_swig_roller:"],
  ["ワイドロ", ":big_swig_roller:"],
  ["ワイド", ":big_swig_roller:"],
  ["銀ダイナモ", ":dynamo_roller:"],
  ["銀ナモ", ":dynamo_roller:"],
  ["ダイナモ", ":dynamo_roller:"],
  ["ナモ", ":dynamo_roller:"],
  ["万年筆", ":flingza_roller:"],
  ["ヴァローラ", ":flingza_roller:"],
  ["ヴァリアブル", ":flingza_roller:"],
  ["ヴァリ", ":flingza_roller:"],
  ["赤カーボン", ":carbon_roller_deco:"],
  ["カローラデコ", ":carbon_roller_deco:"],
  ["カロデコ", ":carbon_roller_deco:"],
  ["カーデコ", ":carbon_roller_deco:"],
  ["黄カーボン", ":carbon_roller:"],
  ["カローラ", ":carbon_roller:"],
  ["カーボン", ":carbon_roller:"],
  ["ロラコラ", ":krak_on_splat_roller:"],
  ["スローラ", ":splat_roller:"],
  ["ローラ", ":splat_roller:"],
  ["スプロラ", ":splat_roller:"],

  ["ガイザー", ":squeezer:"],
  ["ボトル", ":squeezer:"],

  ["黒ブラ", ":s_blast_92:"],
  ["エスブラ", ":s_blast_92:"],
  ["sブラ", ":s_blast_92:"],
  ["Sブラ", ":s_blast_92:"],
  ["赤クラ", ":clash_blaster_neo:"],
  ["クラネオ", ":clash_blaster_neo:"],
  ["青クラ", ":clash_blaster:"],
  ["クラブラ", ":clash_blaster:"],
  ["黒ノヴァ", ":luna_blaster_neo:"],
  ["ノヴァネオ", ":luna_blaster_neo:"],
  ["白ノヴァ", ":luna_blaster:"],
  ["ノヴァブラ", ":luna_blaster:"],
  ["ノヴァ", ":luna_blaster:"],
  ["エリデコ", ":rapid_blaster_pro_deco:"],
  ["エリブラ", ":rapid_blaster_pro:"],
  ["ラピエリ", ":rapid_blaster_pro:"],
  ["青ラピ", ":rapid_blaster_deco:"],
  ["ラピデコ", ":rapid_blaster_deco:"],
  ["赤ラピ", ":rapid_blaster:"],
  ["ラピブラ", ":rapid_blaster:"],
  ["ラピッド", ":rapid_blaster:"],
  ["ラピ", ":rapid_blaster:"],
  ["ロング", ":range_blaster:"],
  ["ロンブラ", ":range_blaster:"],
  ["ホトブラ", ":blaster:"],
  ["ホッブラ", ":blaster:"],
  ["ホット", ":blaster:"],

  ["h3w", ":h3_nozzlenose_d_badge:"],
  ["H3W", ":h3_nozzlenose_d_badge:"],
  ["h3d", ":h3_nozzlenose_d_badge:"],
  ["H3D", ":h3_nozzlenose_d_badge:"],
  ["h3b", ":h3_nozzlenose_badge:"],
  ["H3B", ":h3_nozzlenose_badge:"],
  ["h3", ":h3_nozzlenose_badge:"],
  ["H3", ":h3_nozzlenose_badge:"],
  ["l3w", ":l3_nozzlenose_d:"],
  ["L3W", ":l3_nozzlenose_d:"],
  ["l3d", ":l3_nozzlenose_d:"],
  ["L3D", ":l3_nozzlenose_d:"],
  ["l3b", ":h3_nozzlenose:"],
  ["L3B", ":h3_nozzlenose:"],
  ["l3", ":h3_nozzlenose:"],
  ["L3", ":h3_nozzlenose:"],
  ["ウシコラ", ":annaki_splattershot_nova:"],
  ["スペコラ", ":annaki_splattershot_nova:"],
  ["牛", ":splattershot_nova:"],
  ["ウシ", ":splattershot_nova:"],
  ["スペシュ", ":splattershot_nova:"],
  ["rg", ":aerospray_rg:"],
  ["RG", ":aerospray_rg:"],
  ["金モデ", ":aerospray_rg:"],
  ["mg", ":aerospray_mg:"],
  ["MG", ":aerospray_mg:"],
  ["銀モデ", ":aerospray_mg:"],
  ["赤zap", ":n_zap89:"],
  ["赤ZAP", ":n_zap89:"],
  ["赤ザップ", ":n_zap89:"],
  ["黒zap", ":n_zap85:"],
  ["黒ZAP", ":n_zap85:"],
  ["黒ザップ", ":n_zap85:"],
  ["ジェッカス", ":custom_jet_squelcher_badge:"],
  ["ジェムジ", ":jet_squelcher:"],
  ["ジェット", ":jet_squelcher:"],
  ["ジェッスイ", ":jet_squelcher:"],
  ["96凸", ":96gal_deco:"],
  ["クロデコ", ":96gal_deco:"],
  ["96デコ", ":96gal_deco:"],
  ["クロ", ":96gal:"],
  ["96ガロ", ":96gal:"],
  ["96", ":96gal:"],
  ["ゴツ", ":52gal:"],
  ["52", ":52gal:"],
  ["プラコラ", ":forge_splattershot_pro:"],
  ["プラシュ", ":splattershot_pro:"],
  ["プライム", ":splattershot_pro:"],
  ["ヒロシュ", ":hero_shot_replica:"],
  ["ヒロシ", ":hero_shot_replica:"],
  ["シューコラ", ":tentatek_splattershot:"],
  ["スシコラ", ":tentatek_splattershot:"],
  ["スプシュ", ":splattershot:"],
  ["寿司", ":splattershot:"],
  ["スシ", ":splattershot:"],
  ["銀シャープ", ":neo_splash_o_matic:"],
  ["シャカネオ", ":neo_splash_o_matic:"],
  ["シャプネオ", ":neo_splash_o_matic:"],
  ["シャプネ", ":neo_splash_o_matic:"],
  ["シマネ", ":neo_splash_o_matic:"],
  ["シャプマ", ":splash_o_matic:"],
  ["シャーカー", ":splash_o_matic:"],
  ["銀ボールド", ":neo_sploosh_o_matic:"],
  ["ボルネオ", ":neo_sploosh_o_matic:"],
  ["ボドマ", ":sploosh_o_matic:"],
  ["ボールド", ":sploosh_o_matic:"],
  ["紅葉", ":custom_splattershot:"],
  ["もみじ", ":custom_splattershot:"],
  ["若葉", ":splattershot_jr:"],
  ["わかば", ":splattershot_jr:"],

  ["amiibo", ":amiibo_l::amiibo::amiibo_r:"],
  ["アミーボ", ":amiibo_l::amiibo::amiibo_r:"],
  ["あみーぼ", ":amiibo_l::amiibo::amiibo_r:"],
  ["dal", ":dal:"],
  ["DAL", ":dal:"],
  ["error", ":error:"],
  ["エラー", ":error:"],
  ["デス", ":error:"],
  ["クマサンに金いくら送れ", ":kumasan_ni_kin_ikura_okure:"],
  ["クマサンに金イクラ送れ", ":kumasan_ni_kin_ikura_okure:"],
  ["金いくら送れ", ":kumasan_ni_kin_ikura_okure:"],
  ["金イクラ送れ", ":kumasan_ni_kin_ikura_okure:"],
  ["金イクラ", ":golden_egg:"],
  ["金いくら", ":golden_egg:"],
  ["いかちゃん", ":ika_chan_mint:"],
  ["イカちゃん", ":ika_chan_mint:"],
  ["イカ", ":ika_chan_mint:"],
  ["いかがわすきー", ":ikagawaskey:"],
  ["いかすきー", ":ikaskey:"],
  ["驚き", ":info:"],
  ["もさすきー", ":mosaskey:"],
  ["にくすきー", ":nikuskey:"],
  ["はてな", ":not_found:"],
  ["野上", ":producer:"],
  ["のがみ", ":producer:"],
  ["クマサンにいくら送れ", ":salmon_egg:"],
  ["クマサンにイクラ送れ", ":salmon_egg:"],
  ["いくら送れ", ":salmon_egg:"],
  ["イクラ送れ", ":salmon_egg:"],
  ["イクラ", ":salmon_egg:"],
  ["いくら", ":salmon_egg:"],
  ["しゃけすきー", ":shakeskey:"],
  ["しゅげすきー", ":shugeiskey:"],
  ["たこちゃん", ":tako_chan_red:"],
  ["タコちゃん", ":tako_chan_red:"],
  ["たこ", ":tako_chan_red:"],
  ["タコ", ":tako_chan_red:"],
  ["ウミイカ", ":umi_ika:"],
  ["海イカ", ":umi_ika:"],

  ["暴れん坊照準", ":abarenbou_target:"],
  ["暴れん坊", ":abarenbou_target:"],
  ["アッふーん", ":affuun:"],
  ["あっふーん", ":affuun:"],
  ["ふーん", ":affuun:"],
  ["あっかたーい", ":akkata_i_:"],
  ["かたーい", ":akkata_i_:"],
  ["かたい", ":akkata_i_:"],
  ["硬い", ":akkata_i_:"],
  ["あわてずいそぐんだ", ":awatezu_isogunda:"],
  ["慌てず急ぐんだ", ":awatezu_isogunda:"],
  ["ばかなのかい", ":bakanokai:"],
  ["馬鹿なのかい", ":bakanokai:"],
  ["バカなのかい", ":bakanokai:"],
  ["ばか", ":bakanokai:"],
  ["馬鹿", ":bakanokai:"],
  ["バカ", ":bakanokai:"],
  ["爆誕", ":bakutan:"],
  ["募集", ":boshu:"],
  ["ビックラン", ":big_run:"],
  ["ビッグラン", ":big_run:"],
  ["気合で何とかしろ", ":kiaide_nantoka_shiro:"],
  ["なんでや阪神関係ないやろ", ":nandeya_hanshin_kankei_naiyaro:"],
  ["阪神", ":nandeya_hanshin_kankei_naiyaro:"],
  ["334", ":334:"],

  ["ちょっとマテガイ", ":chotto_mategai_hosuiro:"],
  ["マテガイ", ":chotto_mategai_hosuiro:"],
  ["カモン", ":comeon:"],
  ["かもん", ":comeon:"],
  ["同意", ":doui:"],
  ["同感", ":doukan:"],
  ["激同", ":hagedou:"],
  ["バイトチームコンテスト", ":eggstra_work:"],

  ["寄せろシリーズ", ":doroshake_yosero::hashira_yosero::katapad_yosero::tatsu_yosero::yokozuna_yosero::tower_yosero::tekkyu_yosero:"],
  ["ヨコズナ寄せろ", ":yokozuna_yosero:"],
  ["タワー寄せろ", ":tower_yosero:"],
  ["テッキュウ寄せろ", ":tekkyu_yosero:"],
  ["タツ寄せろ", ":tatsu_yosero:"],
  ["ドロシャケ寄せろ", ":doroshake_yosero:"],
  ["ハシラ寄せろ", ":hashira_yosero:"],
  ["柱寄せろ", ":hashira_yosero:"],
  ["カタパ寄せろ", ":katapad_yosero:"],
  ["カタパット寄せろ", ":katapad_yosero:"],
  ["カタパッド寄せろ", ":katapad_yosero:"],
  ["寄せろ", ":yosero:"],

  ["祭りシリーズ", ":kawaii_fest::arigatofes::igyofes::naruhodofes::tasukarufes::tasukarufes::omatasefes::medetaifes:"],
  ["可愛い祭り", ":kawaii_fest:"],
  ["かわいい祭り", ":kawaii_fest:"],
  ["可愛いまつり", ":kawaii_fest:"],
  ["かわいいまつり", ":kawaii_fest:"],
  ["ありがと祭り", ":arigatofes:"],
  ["ありがとまつり", ":arigatofes:"],
  ["偉業祭り", ":igyofes:"],
  ["偉業まつり", ":igyofes:"],
  ["おまたせ祭り", ":omatasefes:"],
  ["おまたせまつり", ":omatasefes:"],
  ["助かる祭り", ":tasukarufes:"],
  ["助かるまつり", ":tasukarufes:"],
  ["たすかる祭り", ":tasukarufes:"],
  ["たすかるまつり", ":tasukarufes:"],
  ["たすけて祭り", ":tasuketefes:"],
  ["助けて祭り", ":tasuketefes:"],
  ["たすけてまつり", ":tasuketefes:"],
  ["助けてまつり", ":tasuketefes:"],
  ["なるほどまつり", ":naruhodofes:"],
  ["なるほど祭り", ":naruhodofes:"],
  ["めでたい祭り", ":medetaifes:"],
  ["めでたいまつり", ":medetaifes:"],

  ["ってこと", ":ttekoto:"],
  ["ッテコト", ":ttekoto:"],
  ["はすべて詐欺です", ":wa_subetesagidesu:"],
  ["すべて詐欺です", ":wa_subetesagidesu:"],
  ["詐欺です", ":wa_subetesagidesu:"],
  ["詐欺", ":wa_subetesagidesu:"],
  ["わかった", ":wakatta:"],
  ["悔い改めて", ":kuiaratamete:"],
  ["まぐれ", ":maguredesu:"],
  ["せや", ":seya:"],
  ["これすき", ":koresuki:"],
  ["これ好き", ":koresuki:"],
  ["好き", ":suki_ikaskey:"],
  ["すき", ":suki_ikaskey:"],
  ["スキ", ":suki_ikaskey:"],
  ["ごじあい", ":gojiai:"],
  ["ご自愛", ":gojiai:"],
  ["ヘルプ", ":help:"],
  ["囲え", ":kakoe:"],
  ["囲め", ":kakome_ikaskey:"],
  ["危険", ":kiken_ikaskey:"],
  ["鮭畜確定", ":shakechiku_kakutei:"],
  ["鮭畜", ":shake_chiku:"],
  ["されたし", ":saretashi:"],
  ["はてな", ":hatena_weapon::hatena_weapon_bk:"],
  ["全部", ":zenbu_ikaskey:"],
  ["緊急事態発生", ":emergency_alert_salmon_run:"],
  ["緊急事態", ":emergency_alert_salmon_run:"],
  ["明日本気", ":ashitahonki:"],
  ["あったかーい", ":attaka_i:"],
  ["アウト", ":out:"],
  ["問題はなし", ":mondaihanashi:"],

  ["そう思うシリーズ", ":ikamo_souomou::takomo_souomou::souomou:"],
  ["イカもそう思う", ":ikamo_souomou:"],
  ["タコもそう思う", ":takomo_souomou:"],
  ["イカもそうおもう", ":ikamo_souomou:"],
  ["タコもそうおもう", ":takomo_souomou:"],
  ["そう思う", ":souomou:"],

  ["はなしシリーズ", ":arigataihanashi::iihanashi::omoshiroi_hanashi::kanasiihanasi::kokodakeno_hanashi::kowaihanashi::shouganaihanashi::hidoi_hanashi::muzukashiihanashi::waruihanasi:"],
  ["ありがたいはなし", ":arigataihanashi:"],
  ["いいはなし", ":iihanashi:"],
  ["面白いはなし", ":omoshiroi_hanashi:"],
  ["悲しいはなし", ":kanasiihanasi:"],
  ["ここだけの話", ":kokodakeno_hanashi:"],
  ["こわいはなし", ":kowaihanashi:"],
  ["しょうがないはなし", ":shouganaihanashi:"],
  ["ひどいはなし", ":hidoi_hanashi:"],
  ["むずかしいはなし", ":muzukashiihanashi:"],
  ["悪いはなし", ":waruihanasi:"],

  ["偉業シリーズ", ":igyo_no_tatuzin::igyo::igyofes::ultra_igyo::kiwamete_igyo::super_igyo:"],
  ["偉業の達人", ":igyo_no_tatuzin:"],
  ["偉業", ":igyo:"],
  ["ウルトラ偉業", ":ultra_igyo:"],
  ["きわめて偉業", ":kiwamete_igyo:"],
  ["スーパー偉業", ":super_igyo:"],

  ["ぷっぷーシリーズ", ":ikapuppu::kanipuppu::nogapuppu::samepuppu::shakepuppu::takopuppu::tetsupuppu::wipuppu::zapuppu::campuppu:"],
  ["いかぷっぷー", ":ikapuppu:"],
  ["かにぷっぷー", ":kanipuppu:"],
  ["のがぷっぷー", ":nogapuppu:"],
  ["さめぷっぷー", ":samepuppu:"],
  ["しゃけぷっぷー", ":shakepuppu:"],
  ["たこぷっぷー", ":takopuppu:"],
  ["てつぷっぷー", ":tetsupuppu:"],
  ["わいぷっぷー", ":wipuppu:"],
  ["ざっぷっぷー", ":zapuppu:"],
  ["きゃんぷっぷー", ":campuppu:"],

  ["マンメンミシリーズ", ":umanmenmi::manmenmi::sumanmenmi:"],
  ["マンメンミ", ":manmenmi:"],
  ["スマンメンミ", ":sumanmenmi:"],
  ["ウマンメンミ", ":umanmenmi:"],
  ["美味ンメンミ", ":umanmenmi:"],

  ["wipeout", ":wipeout:"],
  ["ワイプアウト", ":wipeout:"],
  ["ワイプ", ":wipeout:"],

  ["ですわシリーズ", ":bouryoku_desuwa::ukiashidattesoudesuwa::osimee_desuwa::owa_desuwa::saikou_desuwa::desuwa::desuwayo::pakupakudesuwa::makotoniossharutooridesuwa::yabaidesuwa::watakushidattesoudesuwa:"],
  ["浮足だってそうですわ", ":ukiashidattesoudesuwa:"],
  ["暴力ですわ", ":bouryoku_desuwa:"],
  ["暴力", ":bouryoku_desuwa:"],
  ["おしめえですわ", ":osimee_desuwa:"],
  ["オワですわ", ":owa_desuwa:"],
  ["最高ですわ", ":saikou_desuwa:"],
  ["ですわよ", ":desuwayo:"],
  ["パクパクですわ", ":pakupakudesuwa:"],
  ["誠におっしゃる通りですわ", ":makotoniossharutooridesuwa:"],
  ["やばいですわ", ":yabaidesuwa:"],
  ["ヤバいですわ", ":yabaidesuwa:"],
  ["あたくしだってそうですわですわ", ":watakushidattesoudesuwa:"],
  ["ですわ", ":desuwa:"],

  ["しか勝たん", ":shikakatan:"],
  ["勝たん", ":shikakatan:"],
  ["草", ":kusa:"],
  ["これはクサヤ", ":korewa_kusaya:"],
  ["それはクサヤ", ":sorewa_kusaya:"],
  ["いいよ", ":iiyo:"],
  ["バジリスク", ":basilisk_time:"],
  ["ドラピオン", ":basilisk_time:"],

  ["おはよう", ":ohayougozaimasu::ohayo::ohayou::ohayougozaimasen:"],
  ["おはよ", ":ohayougozaimasu::ohayo::ohayou::ohayougozaimasen:"],
  ["お布団", ":ofuton:"],
  ["おふとん", ":ofuton:"],
  ["ふとん", ":ofuton:"],
  ["おやおや", ":oyaoya:"],
  ["おやすみ", ":oyasumi:"],
  ["うわー", ":uwa_xtu:"],
  ["ウワー", ":uwa_xtu:"],
  ["えらい", ":erai:"],
  ["けしずみ", ":keshizumie:"],
  ["ツイッター", ""],
  ["twitter", ":twitter:"],
  ["インスタ", ""],
  ["ディスコ", ":discord:"],

  ["開発者様へ", "めろん様ありがとうございますすきです"],

//参考　なれ
]

Plugin:register_post_form_action(`絵文字変換ボタン` @(form, update) {
  var res = form.text
  for (let i, convert_char_emojis.len) {
    let char_emoji = convert_char_emojis[i]
    res = res.replace(char_emoji[0], char_emoji[1])
  }
  update("text", res)
})
```
