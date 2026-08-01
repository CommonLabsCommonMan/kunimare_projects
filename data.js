/* Brewery Project Hub — bundled offline data.
   Generated from the Notion "Brewery Project Hub" databases on 2026-07-23.
   This is what the public GitHub Pages site shows when no live Notion
   connection is configured. Connecting via the sync badge replaces all of it
   with live data. Dates and owners are blank because they are not yet filled
   in Notion — add them there and they appear here automatically. */
const PROJECTS = [
  {
    id:'PRJ-01',
    name:{ja:'栄養抽出（酒粕・BSG）',en:'Sake-kasu / BSG Nutrient Extraction'},
    category:'strategy',
    status:'todo',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'酒粕・BSGからの栄養抽出手順を確立した状態',en:'Nutrient extraction protocol established'}, status:'todo',
        tasks:[] }
    ]
  },
  {
    id:'PRJ-02',
    name:{ja:'増毛フルーツビール',en:'Mashike Fruit Beer'},
    category:'product',
    status:'todo',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'地元フルーツの選定と調達を完了した状態',en:'Local fruit selected and sourced'}, status:'todo',
        tasks:[] },
      { id:'M2', name:{ja:'試作バッチとブランディング（コースター）を準備した状態',en:'Trial batch + branding (coasters) prepared'}, status:'todo',
        tasks:[
          { id:'T2-1', name:{ja:'コースターをデザインし発注する',en:'Design and order coasters'}, status:'todo', owner:'—' }
        ] }
    ]
  },
  {
    id:'PRJ-03',
    name:{ja:'酒酵母ビール開発',en:'Sake Yeast Beer Development'},
    category:'product',
    status:'doing',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'酵母供給源を確保した状態',en:'Yeast source secured'}, status:'doing',
        tasks:[
          { id:'T1-1', name:{ja:'菅野さんにアンプルの使用を相談する',en:'Consult Sugano-san on using existing ampules'}, status:'doing', owner:'—' },
          { id:'T1-2', name:{ja:'アンプルの培養利用を菅野（Kanno）さんに確認する',en:'Confirm ampule cultivation with Mr. Kanno'}, status:'todo', owner:'—' },
          { id:'T1-3', name:{ja:'ドライ酵母代替案を検討する',en:'Evaluate dry yeast as a cost-cutting alternative'}, status:'todo', owner:'—' }
        ] },
      { id:'M2', name:{ja:'限定試作バッチを製造した状態',en:'Limited trial batch produced'}, status:'todo',
        tasks:[
          { id:'T2-1', name:{ja:'酒酵母で限定バッチを仕込む',en:'Brew a limited batch with sake yeast'}, status:'todo', owner:'—' },
          { id:'T2-2', name:{ja:'ALDC酵素の適用を試す',en:'Trial ALDC enzyme for diacetyl control'}, status:'todo', owner:'—' },
          { id:'T2-3', name:{ja:'マルトエキス（Maltoex）を試す',en:'Trial malt extract (Maltoex)'}, status:'todo', owner:'—' }
        ] },
      { id:'M3', name:{ja:'レシピ原料量を確定した状態',en:'Recipe ingredient quantities finalized'}, status:'todo',
        tasks:[] }
    ]
  },
  {
    id:'PRJ-04',
    name:{ja:'HACCP体制構築',en:'HACCP System Implementation'},
    category:'quality',
    status:'doing',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'報告CCPフォーマットを作成した状態',en:'CCP report format built'}, status:'doing',
        tasks:[
          { id:'T1-1', name:{ja:'フォーマット・Notion・Claudeを連携させてCCP報告を作成する',en:'Build CCP report via format + Notion + Claude'}, status:'doing', owner:'—' },
          { id:'T1-2', name:{ja:'カウンター・阿部キッチン・藤屋の報告経路を定める',en:'Define report routing for counter, Abe kitchen, Fujiya'}, status:'todo', owner:'—' },
          { id:'T1-3', name:{ja:'ムカイヤマさんとHACCP分担を協議する',en:'Discuss HACCP division with Mukaiyama-san'}, status:'todo', owner:'—' },
          { id:'T1-4', name:{ja:'HACCPのルールと基準（規格）を学習する',en:'Study the HACCP rules and the ruleset'}, status:'todo', owner:'—' }
        ] },
      { id:'M2', name:{ja:'日次HACCP監視を運用した状態',en:'Daily HACCP monitoring operational'}, status:'doing',
        tasks:[
          { id:'T2-1', name:{ja:'発酵データを毎日取得する（藤屋）',en:'Collect fermentation data daily (Fujiya)'}, status:'doing', owner:'—' },
          { id:'T2-2', name:{ja:'塩素水検査を毎日実施し必要なら補充する',en:'Run chlorine water test daily, refill if depleted'}, status:'doing', owner:'—' },
          { id:'T2-3', name:{ja:'不適合例（缶破損等）の対応フローを規定する',en:'Define non-conformance response flow (e.g. damaged can)'}, status:'todo', owner:'—' }
        ] },
      { id:'M3', name:{ja:'仕入先トレーサビリティとA/B/C評価を確立した状態',en:'Supplier traceability + A/B/C evaluation established'}, status:'todo',
        tasks:[
          { id:'T3-1', name:{ja:'鍵の保持・貸与台帳を運用する',en:'Operate key possession & lending log'}, status:'todo', owner:'—' },
          { id:'T3-2', name:{ja:'受入原材料（企業・製造元・種別・日付）を記録する',en:'Log incoming materials: company, maker, type, date'}, status:'todo', owner:'—' },
          { id:'T3-3', name:{ja:'仕入先をA/B/Cで月次評価する',en:'Evaluate suppliers monthly on A/B/C scale'}, status:'todo', owner:'—' }
        ] }
    ]
  },
  {
    id:'PRJ-05',
    name:{ja:'在庫・備品管理',en:'Inventory & Stock Management'},
    category:'strategy',
    status:'doing',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'自区域の在庫を棚卸しリスト化した状態',en:'Area inventory tallied and listed'}, status:'doing',
        tasks:[
          { id:'T1-1', name:{ja:'自区域の必要物品を集計し在庫リストに追加する',en:'Tally area items and add to inventory list'}, status:'doing', owner:'—' },
          { id:'T1-2', name:{ja:'セキデラさんと施設を巡回し清揃対象箇所をリスト化する',en:'Tour facility with Sekidera, list cleaning spots'}, status:'todo', owner:'—' }
        ] },
      { id:'M2', name:{ja:'食品・工場部門の冷蔵庫・備品在庫管理を確立した状態',en:'F&B + factory fridge & equipment stock control established'}, status:'todo',
        tasks:[] }
    ]
  },
  {
    id:'PRJ-06',
    name:{ja:'BSGキノコ栽培',en:'BSG Mushroom Cultivation'},
    category:'product',
    status:'todo',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'BSG基質での初回栽培を完了した状態',en:'First cultivation on BSG substrate completed'}, status:'todo',
        tasks:[
          { id:'T1-1', name:{ja:'BSGと枝・おがくずでヒラタケ・ヤマブシタケを栽培する',en:"Cultivate oyster & lion's mane on BSG + branch sawdust"}, status:'todo', owner:'—' },
          { id:'T1-2', name:{ja:'トライアルパイロット用の資材をオンラインで購入する',en:'Buy online items for the trial pilot'}, status:'todo', owner:'—' },
          { id:'T1-3', name:{ja:'キノコの種菌（スポーン）を発注する',en:'Place an order for mushroom spores (spawn)'}, status:'todo', owner:'—' },
          { id:'T1-4', name:{ja:'パイロット用の装置をセットアップする',en:'Set up the apparatus for the pilot'}, status:'todo', owner:'—' }
        ] },
      { id:'M2', name:{ja:'グローキット小売モデルを検討した状態',en:'Grow-kit retail model scoped'}, status:'todo',
        tasks:[] }
    ]
  },
  {
    id:'PRJ-07',
    name:{ja:'酒粕BSF幼虫飼料',en:'Sake-kasu BSF Larvae Feed'},
    category:'product',
    status:'todo',
    owner:'—',
    milestones:[
      { id:'M1', name:{ja:'酒粕基盤の飼育試験を完了した状態',en:'Sake-kasu rearing trial completed'}, status:'todo',
        tasks:[
          { id:'T1-1', name:{ja:'酒粕と補完廃棄物でBSF幼虫を飼育する',en:'Rear BSF larvae on sake-kasu + complementary waste'}, status:'todo', owner:'—' },
          { id:'T1-2', name:{ja:'サワダさんの鹿肉残渣の受け入れと酒粕BSF飼料への接続計画を作成する',en:"Create a plan to take in Sawada-san's deer meat waste and connect it to Kunimare sake-kasu BSF feed"}, status:'todo', owner:'—' },
          { id:'T1-3', name:{ja:'試験運用のため北海道大学にBSF幼虫または成虫を依頼する',en:'Ask Hokkaido University for BSF larvae or adult flies for a trial run'}, status:'todo', owner:'—' }
        ] },
      { id:'M2', name:{ja:'飼料品質を検証した状態',en:'Feed quality validated'}, status:'todo',
        tasks:[] }
    ]
  },
  {
    id:'PRJ-08',
    name:{ja:'国稀ビアホール インディアンナイト',en:'Indian Night at Kunimare Beer Hall'},
    category:'product',
    status:'todo',
    owner:'Pratik',
    /* Early-September 2026 window — the exact event day is still being fixed (see M3). */
    start:'2026-09-01', end:'2026-09-07',
    milestones:[
      { id:'M1', name:{ja:'メニューとビールの組み合わせを確定した状態',en:'Menu and beer pairings finalized'}, status:'doing',
        tasks:[
          { id:'T1-1', name:{ja:'ビリヤニのレシピと提供分量を確定する',en:'Finalize the biriyani recipe and portion size'}, status:'done', owner:'Pratik' },
          { id:'T1-2', name:{ja:'ライタのレシピを確定する',en:'Finalize the raita recipe'}, status:'done', owner:'Pratik' },
          { id:'T1-3', name:{ja:'インド料理の献立を確定：ビリヤニ＆ライタ、揚げダルカチョリ、クリーミーチキンの副菜',en:'Indian dish lineup decided: biriyani & raita, fried dal kachori, creamy chicken side'}, status:'done', owner:'Pratik' },
          { id:'T1-4', name:{ja:'各料理に合わせるビアホールのクラフトビールを選ぶ',en:'Pick the beer-hall craft beer to pair with each dish'}, status:'todo', owner:'Pratik' },
          { id:'T1-5', name:{ja:'揚げダルカチョリのレシピを確定する',en:'Finalize the fried dal kachori recipe'}, status:'todo', owner:'Pratik' },
          { id:'T1-6', name:{ja:'クリーミーチキンの副菜レシピを確定する',en:'Finalize the creamy chicken side dish recipe'}, status:'todo', owner:'Pratik' },
          { id:'T1-7', name:{ja:'各料理の正式名称（メニュー名）を決める',en:'Decide the final menu item names'}, status:'todo', owner:'Pratik' }
        ] },
      { id:'M2', name:{ja:'仕入れと仕込み体制を整えた状態',en:'Ingredients sourced and kitchen prep planned'}, status:'doing',
        tasks:[
          { id:'T2-1', name:{ja:'スパイス・バスマティ米の調達先を確保（新宿ハラルオンラインストアに決定）',en:'Secure spices & basmati rice supplier (decided: Shinjuku Halal online store)'}, status:'done', owner:'Pratik' },
          { id:'T2-2', name:{ja:'提供予定数を見積もり必要量を算出する',en:'Estimate covers and calculate ingredient quantities'}, status:'todo', owner:'Pratik' },
          { id:'T2-3', name:{ja:'ビアホール厨房での仕込み手順と当日の動線を決める',en:'Define kitchen prep steps and day-of workflow'}, status:'todo', owner:'Pratik' },
          { id:'T2-4', name:{ja:'アレルゲン表示と辛さレベル表記を準備する',en:'Prepare allergen labelling and spice-level notes'}, status:'todo', owner:'Pratik' },
          { id:'T2-5', name:{ja:'装飾用の造花マリーゴールド（プラスチック）をAmazonで注文する（約¥2,500）',en:'Order plastic marigold decorations on Amazon (~¥2,500)'}, status:'todo', owner:'Pratik', start:'2026-08-26', end:'2026-08-26' }
        ] },
      { id:'M3', name:{ja:'開催日を決定し告知した状態',en:'Event date fixed and announced'}, status:'doing',
        tasks:[
          { id:'T3-1', name:{ja:'9月第1週あたりで開催日を確定する',en:'Fix the event date (around the first week of September)'}, status:'todo', owner:'Pratik' },
          { id:'T3-2', name:{ja:'SNS・店頭で告知を出す',en:'Announce the event on social media and in-store'}, status:'todo', owner:'Pratik' },
          { id:'T3-3', name:{ja:'予約受付の担当と方法を決める',en:'Decide who handles reservations and how'}, status:'todo', owner:'Pratik' },
          { id:'T3-4', name:{ja:'当日の厨房体制を確定：Pratik・藤屋・阿部',en:'Day-of kitchen team fixed: Pratik, Fujiya & Abe'}, status:'done', owner:'Pratik' }
        ] }
    ]
  }
];
