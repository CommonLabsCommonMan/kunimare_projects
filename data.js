const PROJECTS = [
  {
    id:'PRJ-01',
    name:{ja:'新クラフトビール立ち上げ',en:'New Craft Beer Launch'},
    category:'product',
    status:'doing',
    owner:'Pratik',
    start:'2026-06-01', end:'2026-09-30',
    milestones:[
      { id:'M1', name:{ja:'試作レシピが承認された状態',en:'Trial recipe approved'}, status:'done', start:'2026-06-01', end:'2026-06-20',
        tasks:[
          { id:'T1-1', name:{ja:'酵母Aで小仕込みテストを行う',en:'Run small trial batch with Yeast A'}, status:'done', start:'2026-06-01', end:'2026-06-05', owner:'Pratik'},
          { id:'T1-2', name:{ja:'官能評価会を1回実施する',en:'Hold one sensory evaluation session'}, status:'done', start:'2026-06-06', end:'2026-06-10', owner:'Team'},
          { id:'T1-3', name:{ja:'レシピを最終承認する',en:'Finalize recipe approval'}, status:'done', start:'2026-06-15', end:'2026-06-20', owner:'Pratik'}
        ]},
      { id:'M2', name:{ja:'本仕込みが完了した状態',en:'Main brew completed'}, status:'doing', start:'2026-06-21', end:'2026-08-15',
        tasks:[
          { id:'T2-1', name:{ja:'麦芽を発注する',en:'Order malt'}, status:'done', start:'2026-06-21', end:'2026-06-23', owner:'Pratik'},
          { id:'T2-2', name:{ja:'仕込み釜を準備する',en:'Prepare brew kettle'}, status:'doing', start:'2026-07-15', end:'2026-07-18', owner:'Team'},
          { id:'T2-3', name:{ja:'発酵管理表を作成する',en:'Create fermentation log sheet'}, status:'todo', start:'2026-07-20', end:'2026-07-22', owner:'Pratik'},
          { id:'T2-4', name:{ja:'本仕込みを実施する',en:'Execute main brew'}, status:'todo', start:'2026-07-25', end:'2026-08-10', owner:'Team'}
        ]},
      { id:'M3', name:{ja:'出荷判定が完了した状態',en:'Shipping approval completed'}, status:'todo', start:'2026-08-16', end:'2026-09-30',
        tasks:[
          { id:'T3-1', name:{ja:'ATP検査を実施する',en:'Run ATP sanitation test'}, status:'todo', start:'2026-08-16', end:'2026-08-18', owner:'Pratik'},
          { id:'T3-2', name:{ja:'品質検査を実施する',en:'Run quality inspection'}, status:'todo', start:'2026-08-20', end:'2026-08-25', owner:'Team'},
          { id:'T3-3', name:{ja:'出荷可否を判定する',en:'Decide shipping approval'}, status:'todo', start:'2026-09-01', end:'2026-09-05', owner:'Pratik'}
        ]}
    ]
  },
  {
    id:'PRJ-02',
    name:{ja:'CIP水量・時間の最適化',en:'CIP Water & Time Optimisation'},
    category:'quality',
    status:'doing',
    owner:'Pratik',
    start:'2026-07-01', end:'2026-10-15',
    milestones:[
      { id:'M1', name:{ja:'現状データが収集された状態',en:'Baseline data collected'}, status:'done', start:'2026-07-01', end:'2026-07-10',
        tasks:[
          { id:'T1-1', name:{ja:'現行CIPサイクル時間を記録する',en:'Log current CIP cycle time'}, status:'done', start:'2026-07-01', end:'2026-07-05', owner:'Pratik'},
          { id:'T1-2', name:{ja:'ATP測定を3点で実施する',en:'Run ATP test at 3 points'}, status:'done', start:'2026-07-06', end:'2026-07-10', owner:'Pratik'}
        ]},
      { id:'M2', name:{ja:'新プロトコルが検証された状態',en:'New protocol validated'}, status:'doing', start:'2026-07-11', end:'2026-09-15',
        tasks:[
          { id:'T2-1', name:{ja:'すすぎ終点の電導度基準を設定する',en:'Set conductivity endpoint for final rinse'}, status:'doing', start:'2026-07-15', end:'2026-07-25', owner:'Pratik'},
          { id:'T2-2', name:{ja:'FV-3で試験CIPを実施する',en:'Trial CIP run on FV-3'}, status:'todo', start:'2026-08-01', end:'2026-08-10', owner:'Team'},
          { id:'T2-3', name:{ja:'ATP結果を比較する',en:'Compare ATP results'}, status:'todo', start:'2026-08-11', end:'2026-08-15', owner:'Pratik'}
        ]},
      { id:'M3', name:{ja:'SOPが更新された状態',en:'SOP updated'}, status:'todo', start:'2026-09-16', end:'2026-10-15',
        tasks:[
          { id:'T3-1', name:{ja:'新SOPドラフトを作成する',en:'Draft new SOP'}, status:'todo', start:'2026-09-16', end:'2026-09-25', owner:'Pratik'},
          { id:'T3-2', name:{ja:'チームトレーニングを実施する',en:'Run team training'}, status:'todo', start:'2026-10-01', end:'2026-10-10', owner:'Team'}
        ]}
    ]
  },
  {
    id:'PRJ-03',
    name:{ja:'来期事業計画の策定',en:'Next-Term Business Plan'},
    category:'strategy',
    status:'todo',
    owner:'Pratik',
    start:'2026-09-01', end:'2026-12-20',
    milestones:[
      { id:'M1', name:{ja:'市場分析が完了した状態',en:'Market analysis completed'}, status:'todo', start:'2026-09-01', end:'2026-09-30',
        tasks:[
          { id:'T1-1', name:{ja:'競合ブルワリーを調査する',en:'Survey competitor breweries'}, status:'todo', start:'2026-09-01', end:'2026-09-15', owner:'Pratik'},
          { id:'T1-2', name:{ja:'観光需要データを収集する',en:'Collect tourism demand data'}, status:'todo', start:'2026-09-16', end:'2026-09-30', owner:'Team'}
        ]},
      { id:'M2', name:{ja:'計画案が承認された状態',en:'Draft plan approved'}, status:'todo', start:'2026-10-01', end:'2026-11-30',
        tasks:[
          { id:'T2-1', name:{ja:'事業計画書を作成する',en:'Draft business plan document'}, status:'todo', start:'2026-10-01', end:'2026-10-31', owner:'Pratik'},
          { id:'T2-2', name:{ja:'経営会議で説明する',en:'Present at management meeting'}, status:'todo', start:'2026-11-15', end:'2026-11-30', owner:'Pratik'}
        ]},
      { id:'M3', name:{ja:'予算が確定した状態',en:'Budget finalized'}, status:'todo', start:'2026-12-01', end:'2026-12-20',
        tasks:[
          { id:'T3-1', name:{ja:'部門別予算を配分する',en:'Allocate departmental budgets'}, status:'todo', start:'2026-12-01', end:'2026-12-15', owner:'Pratik'}
        ]}
    ]
  },
  {
    id:'PRJ-04',
    name:{ja:'ラベル・パッケージ更新',en:'Label & Packaging Refresh'},
    category:'product',
    status:'done',
    owner:'Team',
    start:'2026-04-01', end:'2026-06-30',
    milestones:[
      { id:'M1', name:{ja:'デザインが確定した状態',en:'Design finalized'}, status:'done', start:'2026-04-01', end:'2026-05-10',
        tasks:[
          { id:'T1-1', name:{ja:'デザイン案を3種作成する',en:'Create 3 design concepts'}, status:'done', start:'2026-04-01', end:'2026-04-20', owner:'Team'},
          { id:'T1-2', name:{ja:'デザインを最終承認する',en:'Approve final design'}, status:'done', start:'2026-05-01', end:'2026-05-10', owner:'Pratik'}
        ]},
      { id:'M2', name:{ja:'印刷データが校了した状態',en:'Print files finalized'}, status:'done', start:'2026-05-11', end:'2026-06-05',
        tasks:[
          { id:'T2-1', name:{ja:'ラベル校了データを送る',en:'Send final label print files'}, status:'done', start:'2026-05-11', end:'2026-06-05', owner:'Team'}
        ]},
      { id:'M3', name:{ja:'新ラベルが導入された状態',en:'New labels in production'}, status:'done', start:'2026-06-06', end:'2026-06-30',
        tasks:[
          { id:'T3-1', name:{ja:'新ラベルで初回充填を行う',en:'Run first fill with new labels'}, status:'done', start:'2026-06-06', end:'2026-06-30', owner:'Team'}
        ]}
    ]
  }
];
