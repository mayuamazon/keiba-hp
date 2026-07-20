// このファイルは scripts/jravan/export_graded.py により生成されます（手動編集は上書きされます）
// 出典: JRA-VAN 2021-2026 全着順データ 自社集計。editions は各年1着馬情報のみ掲載（全着順の掲載は JRA-VAN 規約上不可）

export interface GradedEdition {
  year: number
  date: string
  winner: string
  winnerPopularity: number | null
  winnerFrame: number | null
  winnerStyle: string | null
  winPayout: number | null
  fieldSize: number | null
}

export interface PopBandStat {
  count: number
  wins: number
  placeRate: number
}

export interface FrameBandStat {
  count: number
  placeRate: number
}

export interface GradedRace {
  raceName: string
  /** 正式名称（略記の展開。未収載レースは raceName と同じ） */
  displayName: string
  grade: 'G1' | 'G2' | 'G3'
  place: string
  trackId: string
  surface: 'turf' | 'dirt'
  distance: number
  editions: GradedEdition[]
  popularityStats: {
    pop1: PopBandStat
    pop23: PopBandStat
    pop46: PopBandStat
    pop7plus: PopBandStat
  }
  frameBandStats: {
    inner: FrameBandStat
    middle: FrameBandStat
    outer: FrameBandStat
  }
  styleWins: {
    '逃げ': number
    '先行': number
    '差し': number
    '追込': number
  }
}

export const gradedRaces: GradedRace[] = [
  {
    "raceName": "フェブラG1",
    "displayName": "フェブラリーステークス",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "dirt",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-21",
        "winner": "カフェファラオ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 330,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-02-20",
        "winner": "カフェファラオ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 510,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-02-19",
        "winner": "レモンポップ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 220,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-02-18",
        "winner": "ペプチドナイル",
        "winnerPopularity": 11,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 3800,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-02-23",
        "winner": "コスタノヴァ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-02-22",
        "winner": "コスタノヴァ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 340,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 60,
        "wins": 1,
        "placeRate": 6.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 8.3
      },
      "middle": {
        "count": 36,
        "placeRate": 30.6
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "ヴィクトG1",
    "displayName": "ヴィクトリアマイル",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-16",
        "winner": "グランアレグリア",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 130,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-05-15",
        "winner": "ソダシ",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 570,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-05-14",
        "winner": "ソングライン",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 760,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-05-12",
        "winner": "テンハッピーローズ",
        "winnerPopularity": 14,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 20860,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-05-18",
        "winner": "アスコリピチェーノ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 250,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-17",
        "winner": "エンブロイダリー",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 190,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 66,
        "wins": 1,
        "placeRate": 4.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 17.6
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 32,
        "placeRate": 9.4
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "優駿牝馬G1",
    "displayName": "優駿牝馬（オークス）",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-23",
        "winner": "ユーバーレーベン",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 890,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-05-22",
        "winner": "スターズオンアース",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 650,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-05-21",
        "winner": "リバティアイランド",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 140,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-19",
        "winner": "チェルヴィニア",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 460,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-05-25",
        "winner": "カムニャック",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 1430,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-24",
        "winner": "ジュウリョクピエロ",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 1090,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 75.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 71,
        "wins": 0,
        "placeRate": 5.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 35,
        "placeRate": 8.6
      },
      "middle": {
        "count": 36,
        "placeRate": 22.2
      },
      "outer": {
        "count": 36,
        "placeRate": 19.4
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 4,
      "追込": 1
    }
  },
  {
    "raceName": "天皇賞秋G1",
    "displayName": "天皇賞（秋）",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-31",
        "winner": "エフフォーリア",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 340,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-10-30",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-10-29",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 130,
        "fieldSize": 11
      },
      {
        "year": 2024,
        "date": "2024-10-27",
        "winner": "ドウデュース",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 380,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-11-02",
        "winner": "マスカレードボール",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 41,
        "wins": 0,
        "placeRate": 9.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 23,
        "placeRate": 26.1
      },
      "middle": {
        "count": 28,
        "placeRate": 28.6
      },
      "outer": {
        "count": 20,
        "placeRate": 5.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "安田記念G1",
    "displayName": "安田記念",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-06",
        "winner": "ダノンキングリー",
        "winnerPopularity": 8,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 4760,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-06-05",
        "winner": "ソングライン",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 820,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-06-04",
        "winner": "ソングライン",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 740,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-06-02",
        "winner": "ロマンチックウォリ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 360,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-06-08",
        "winner": "ジャンタルマンタル",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-06-07",
        "winner": "シックスペンス",
        "winnerPopularity": 8,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 2160,
        "fieldSize": 17
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 67,
        "wins": 2,
        "placeRate": 7.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 8.8
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 33,
        "placeRate": 24.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "東京優駿G1",
    "displayName": "東京優駿（日本ダービー）",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-30",
        "winner": "シャフリヤール",
        "winnerPopularity": 4,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1170,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-05-29",
        "winner": "ドウデュース",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 420,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-05-28",
        "winner": "タスティエーラ",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 830,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-26",
        "winner": "ダノンデサイル",
        "winnerPopularity": 9,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 4660,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-06-01",
        "winner": "クロワデュノール",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 210,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-31",
        "winner": "ロブチェン",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 70,
        "wins": 1,
        "placeRate": 7.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 16.7
      },
      "middle": {
        "count": 36,
        "placeRate": 11.1
      },
      "outer": {
        "count": 34,
        "placeRate": 23.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "ＪＣG1",
    "displayName": "ジャパンカップ",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-28",
        "winner": "コントレイル",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 160,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-11-27",
        "winner": "ヴェラアズール",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 450,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-11-26",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 130,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-11-24",
        "winner": "ドウデュース",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 230,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-11-30",
        "winner": "カランダガン",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 620,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 55,
        "wins": 0,
        "placeRate": 3.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 25.0
      },
      "middle": {
        "count": 30,
        "placeRate": 13.3
      },
      "outer": {
        "count": 27,
        "placeRate": 14.8
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 4,
      "追込": 0
    }
  },
  {
    "raceName": "ＮＨＫマG1",
    "displayName": "NHKマイルカップ",
    "grade": "G1",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-09",
        "winner": "シュネルマイスター",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-05-08",
        "winner": "ダノンスコーピオン",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 710,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-05-07",
        "winner": "シャンパンカラー",
        "winnerPopularity": 9,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 2220,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-05",
        "winner": "ジャンタルマンタル",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 290,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-05-11",
        "winner": "パンジャタワー",
        "winnerPopularity": 9,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 2610,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-10",
        "winner": "ロデオドライブ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 460,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 71,
        "wins": 2,
        "placeRate": 9.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 11.1
      },
      "middle": {
        "count": 35,
        "placeRate": 22.9
      },
      "outer": {
        "count": 36,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "スプリンG1",
    "displayName": "スプリンターズステークス",
    "grade": "G1",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-03",
        "winner": "ピクシーナイト",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 530,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-10-02",
        "winner": "ジャンダルム",
        "winnerPopularity": 8,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 2030,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-10-01",
        "winner": "ママコチャ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-09-29",
        "winner": "ルガル",
        "winnerPopularity": 9,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 2850,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-09-28",
        "winner": "ウインカーネリアン",
        "winnerPopularity": 11,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 5000,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 50,
        "wins": 3,
        "placeRate": 12.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 30.0
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "ホープフG1",
    "displayName": "ホープフルステークス",
    "grade": "G1",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-28",
        "winner": "キラーアビリティ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-12-28",
        "winner": "ドゥラエレーデ",
        "winnerPopularity": 14,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 9060,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-12-28",
        "winner": "レガレイラ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-12-28",
        "winner": "クロワデュノール",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-12-27",
        "winner": "ロブチェン",
        "winnerPopularity": 7,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1980,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 53,
        "wins": 2,
        "placeRate": 13.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 25.0
      },
      "middle": {
        "count": 30,
        "placeRate": 16.7
      },
      "outer": {
        "count": 25,
        "placeRate": 12.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "有馬記念G1",
    "displayName": "有馬記念",
    "grade": "G1",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2500,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-26",
        "winner": "エフフォーリア",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 210,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-12-25",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 230,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-12-24",
        "winner": "ドウデュース",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-12-22",
        "winner": "レガレイラ",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1090,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-12-28",
        "winner": "ミュージアムマイル",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 6.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 24.1
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 20,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "皐月賞G1",
    "displayName": "皐月賞",
    "grade": "G1",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-18",
        "winner": "エフフォーリア",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-17",
        "winner": "ジオグリフ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 910,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-04-16",
        "winner": "ソールオリエンス",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 520,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-04-14",
        "winner": "ジャスティンミラノ",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 480,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-04-20",
        "winner": "ミュージアムマイル",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 1060,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-04-19",
        "winner": "ロブチェン",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 400,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 4,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 69,
        "wins": 0,
        "placeRate": 4.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 11.1
      },
      "middle": {
        "count": 36,
        "placeRate": 22.2
      },
      "outer": {
        "count": 33,
        "placeRate": 18.2
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "チャンピG1",
    "displayName": "チャンピオンズカップ",
    "grade": "G1",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-05",
        "winner": "テーオーケインズ",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 330,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-12-04",
        "winner": "ジュンライトボルト",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 790,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-12-03",
        "winner": "レモンポップ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 380,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-12-01",
        "winner": "レモンポップ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 220,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-12-07",
        "winner": "ダブルハートボンド",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 730,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 10.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 24.1
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 20,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 1,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "高松宮記G1",
    "displayName": "高松宮記念",
    "grade": "G1",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-28",
        "winner": "ダノンスマッシュ",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 600,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-03-27",
        "winner": "ナランフレグ",
        "winnerPopularity": 8,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 2780,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-03-26",
        "winner": "ファストフォース",
        "winnerPopularity": 12,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 3230,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-03-24",
        "winner": "マッドクール",
        "winnerPopularity": 6,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 960,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-03-30",
        "winner": "サトノレーヴ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-03-29",
        "winner": "サトノレーヴ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 350,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 72,
        "wins": 2,
        "placeRate": 8.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 13.9
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 36,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "エリザベG1",
    "displayName": "エリザベス女王杯",
    "grade": "G1",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-14",
        "winner": "アカイイト",
        "winnerPopularity": 10,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 6490,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-11-13",
        "winner": "ジェラルディーナ",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 810,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-11-12",
        "winner": "ブレイディヴェーグ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 240,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-11-10",
        "winner": "スタニングローズ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 950,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-11-16",
        "winner": "レガレイラ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 230,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 53,
        "wins": 1,
        "placeRate": 11.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 24.1
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "マイルチG1",
    "displayName": "マイルチャンピオンシップ",
    "grade": "G1",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-21",
        "winner": "グランアレグリア",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 170,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-11-20",
        "winner": "セリフォス",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "追込",
        "winPayout": 920,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-11-19",
        "winner": "ナミュール",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 1730,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-11-17",
        "winner": "ソウルラッシュ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 530,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-11-23",
        "winner": "ジャンタルマンタル",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 54,
        "wins": 0,
        "placeRate": 9.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 30,
        "placeRate": 6.7
      },
      "outer": {
        "count": 24,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "天皇賞春G1",
    "displayName": "天皇賞（春）",
    "grade": "G1",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 3200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-02",
        "winner": "ワールドプレミア",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 520,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-05-01",
        "winner": "タイトルホルダー",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 490,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-04-30",
        "winner": "ジャスティンパレス",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-04-28",
        "winner": "テーオーロイヤル",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 280,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-05-04",
        "winner": "ヘデントール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-05-03",
        "winner": "クロワデュノール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 44.4
      },
      "pop7plus": {
        "count": 63,
        "wins": 0,
        "placeRate": 1.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 18.2
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 30,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 5,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "秋華賞G1",
    "displayName": "秋華賞",
    "grade": "G1",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-17",
        "winner": "アカイトリノムスメ",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 890,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-10-16",
        "winner": "スタニングローズ",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 570,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-10-15",
        "winner": "リバティアイランド",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 110,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-10-13",
        "winner": "チェルヴィニア",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 230,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-10-19",
        "winner": "エンブロイダリー",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 550,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 53,
        "wins": 0,
        "placeRate": 0.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 10.3
      },
      "middle": {
        "count": 30,
        "placeRate": 30.0
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "菊花賞G1",
    "displayName": "菊花賞",
    "grade": "G1",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 3000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-24",
        "winner": "タイトルホルダー",
        "winnerPopularity": 4,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 800,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-10-23",
        "winner": "アスクビクターモア",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-10-22",
        "winner": "ドゥレッツァ",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 730,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-10-20",
        "winner": "アーバンシック",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-10-26",
        "winner": "エネルジコ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 59,
        "wins": 0,
        "placeRate": 5.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 6.7
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 29,
        "placeRate": 34.5
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 3,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "フューチG1",
    "displayName": "朝日杯フューチュリティステークス",
    "grade": "G1",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-19",
        "winner": "ドウデュース",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 780,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-12-18",
        "winner": "ドルチェモア",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-12-17",
        "winner": "ジャンタルマンタル",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 270,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-12-15",
        "winner": "アドマイヤズーム",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 910,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-12-21",
        "winner": "カヴァレリッツォ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 360,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 2.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 27,
        "placeRate": 29.6
      },
      "middle": {
        "count": 30,
        "placeRate": 16.7
      },
      "outer": {
        "count": 22,
        "placeRate": 9.1
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "大阪杯G1",
    "displayName": "大阪杯",
    "grade": "G1",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-04",
        "winner": "レイパパレ",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 1220,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-04-03",
        "winner": "ポタジェ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 5870,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-04-02",
        "winner": "ジャックドール",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 360,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-31",
        "winner": "ベラジオオペラ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 550,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-04-06",
        "winner": "ベラジオオペラ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 510,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-04-05",
        "winner": "クロワデュノール",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 250,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 55,
        "wins": 1,
        "placeRate": 9.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 31,
        "placeRate": 12.9
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 4,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "宝塚記念G1",
    "displayName": "宝塚記念",
    "grade": "G1",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-27",
        "winner": "クロノジェネシス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-06-26",
        "winner": "タイトルホルダー",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-06-25",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 130,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-06-23",
        "winner": "ブローザホーン",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 750,
        "fieldSize": 13
      },
      {
        "year": 2025,
        "date": "2025-06-15",
        "winner": "メイショウタバル",
        "winnerPopularity": 7,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 1140,
        "fieldSize": 17
      },
      {
        "year": 2026,
        "date": "2026-06-14",
        "winner": "メイショウタバル",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 390,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 59,
        "wins": 1,
        "placeRate": 8.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 31.0
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 30,
        "placeRate": 6.7
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "桜花賞G1",
    "displayName": "桜花賞",
    "grade": "G1",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-11",
        "winner": "ソダシ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 360,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-04-10",
        "winner": "スターズオンアース",
        "winnerPopularity": 7,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 1450,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-04-09",
        "winner": "リバティアイランド",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 160,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-04-07",
        "winner": "ステレンボッシュ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 430,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-04-13",
        "winner": "エンブロイダリー",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 500,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-04-12",
        "winner": "スターアニス",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 290,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 72,
        "wins": 1,
        "placeRate": 5.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 16.7
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 36,
        "placeRate": 8.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 4,
      "追込": 1
    }
  },
  {
    "raceName": "阪神ジュG1",
    "displayName": "阪神ジュベナイルフィリーズ",
    "grade": "G1",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-12",
        "winner": "サークルオブライフ",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 560,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-12-11",
        "winner": "リバティアイランド",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-12-10",
        "winner": "アスコリピチェーノ",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 590,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-12-08",
        "winner": "アルマヴェローチェ",
        "winnerPopularity": 5,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 1050,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-12-14",
        "winner": "スターアニス",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 500,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 60,
        "wins": 0,
        "placeRate": 8.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 16.7
      },
      "middle": {
        "count": 30,
        "placeRate": 23.3
      },
      "outer": {
        "count": 30,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 5,
      "追込": 0
    }
  },
  {
    "raceName": "札幌記念G2",
    "displayName": "札幌記念",
    "grade": "G2",
    "place": "札幌",
    "trackId": "sapporo",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-22",
        "winner": "ソダシ",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-08-21",
        "winner": "ジャックドール",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 460,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-08-20",
        "winner": "プログノーシス",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 510,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-08-18",
        "winner": "ノースブリッジ",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1450,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-08-17",
        "winner": "トップナイフ",
        "winnerPopularity": 10,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 2560,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 41,
        "wins": 1,
        "placeRate": 9.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 22,
        "placeRate": 18.2
      },
      "middle": {
        "count": 29,
        "placeRate": 17.2
      },
      "outer": {
        "count": 20,
        "placeRate": 30.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "アイルラG2",
    "displayName": "アイルランドトロフィー",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-16",
        "winner": "シャドウディーヴァ",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 880,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-10-15",
        "winner": "イズジョーノキセキ",
        "winnerPopularity": 12,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 3480,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-10-14",
        "winner": "ディヴィーナ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 470,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-10-14",
        "winner": "ブレイディヴェーグ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 360,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-10-12",
        "winner": "ラヴァンダ",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 700,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 47,
        "wins": 1,
        "placeRate": 8.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 20.0
      },
      "middle": {
        "count": 30,
        "placeRate": 26.7
      },
      "outer": {
        "count": 22,
        "placeRate": 9.1
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 0,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "アルゼンＨG2",
    "displayName": "アルゼンチン共和国杯",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2500,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-07",
        "winner": "オーソリティ",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 300,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-11-06",
        "winner": "ブレークアップ",
        "winnerPopularity": 6,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1770,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-11-05",
        "winner": "ゼッフィーロ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "追込",
        "winPayout": 240,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-11-03",
        "winner": "ハヤヤッコ",
        "winnerPopularity": 10,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 3530,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-11-09",
        "winner": "ミステリーウェイ",
        "winnerPopularity": 9,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 2770,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 55,
        "wins": 2,
        "placeRate": 3.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 17.2
      },
      "middle": {
        "count": 30,
        "placeRate": 13.3
      },
      "outer": {
        "count": 26,
        "placeRate": 26.9
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 0,
      "追込": 2
    }
  },
  {
    "raceName": "フローラG2",
    "displayName": "フローラステークス",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-25",
        "winner": "クールキャット",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1180,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-04-24",
        "winner": "エリカヴィータ",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 1360,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-04-23",
        "winner": "ゴールデンハインド",
        "winnerPopularity": 7,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 1660,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-21",
        "winner": "アドマイヤベル",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 400,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-04-27",
        "winner": "カムニャック",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1470,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-04-26",
        "winner": "ラフターラインズ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 220,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 38.9
      },
      "pop7plus": {
        "count": 55,
        "wins": 2,
        "placeRate": 9.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 25.0
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 27,
        "placeRate": 14.8
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "京王杯スG2",
    "displayName": "京王杯スプリングカップ",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-15",
        "winner": "ラウダシオン",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-05-14",
        "winner": "メイケイエール",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-05-13",
        "winner": "レッドモンレーヴ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 520,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-11",
        "winner": "ウインマーベル",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-05-03",
        "winner": "トウシンマカオ",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 410,
        "fieldSize": 12
      },
      {
        "year": 2026,
        "date": "2026-05-02",
        "winner": "ワールズエンド",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 540,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 11.1
      },
      "pop7plus": {
        "count": 56,
        "wins": 0,
        "placeRate": 10.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 13.8
      },
      "middle": {
        "count": 34,
        "placeRate": 20.6
      },
      "outer": {
        "count": 29,
        "placeRate": 24.1
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "京王杯２G2",
    "displayName": "京王杯2歳ステークス",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-06",
        "winner": "キングエルメス",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 1640,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-11-05",
        "winner": "オオバンブルマイ",
        "winnerPopularity": 10,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 5100,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-11-04",
        "winner": "コラソンビート",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 320,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-11-02",
        "winner": "パンジャタワー",
        "winnerPopularity": 8,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 2100,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-11-08",
        "winner": "ダイヤモンドノット",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 10.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 44,
        "wins": 3,
        "placeRate": 18.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 23,
        "placeRate": 17.4
      },
      "middle": {
        "count": 29,
        "placeRate": 24.1
      },
      "outer": {
        "count": 22,
        "placeRate": 18.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "富士ＳG2",
    "displayName": "富士ステークス",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-23",
        "winner": "ソングライン",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 390,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-10-22",
        "winner": "セリフォス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 230,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-10-21",
        "winner": "ナミュール",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-10-19",
        "winner": "ジュンブロッサム",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 720,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-10-18",
        "winner": "ガイアフォース",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 710,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 45,
        "wins": 0,
        "placeRate": 6.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 4.0
      },
      "middle": {
        "count": 29,
        "placeRate": 20.7
      },
      "outer": {
        "count": 21,
        "placeRate": 38.1
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 4,
      "追込": 0
    }
  },
  {
    "raceName": "東京スポG2",
    "displayName": "東京スポーツ杯2歳ステークス",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-20",
        "winner": "イクイノックス",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-11-19",
        "winner": "ガストリック",
        "winnerPopularity": 5,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1240,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-11-18",
        "winner": "シュトラウス",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 580,
        "fieldSize": 10
      },
      {
        "year": 2024,
        "date": "2024-11-16",
        "winner": "クロワデュノール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 220,
        "fieldSize": 9
      },
      {
        "year": 2025,
        "date": "2025-11-24",
        "winner": "パントルナイーフ",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 730,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 24,
        "wins": 0,
        "placeRate": 4.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 40.0
      },
      "middle": {
        "count": 20,
        "placeRate": 20.0
      },
      "outer": {
        "count": 19,
        "placeRate": 26.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "毎日王冠G2",
    "displayName": "毎日王冠",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-10",
        "winner": "シュネルマイスター",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 260,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-10-09",
        "winner": "サリオス",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 300,
        "fieldSize": 10
      },
      {
        "year": 2023,
        "date": "2023-10-08",
        "winner": "エルトンバローズ",
        "winnerPopularity": 4,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1750,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-10-06",
        "winner": "シックスペンス",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 350,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-10-05",
        "winner": "レーベンスティール",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 770,
        "fieldSize": 11
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 30,
        "wins": 0,
        "placeRate": 0.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 16,
        "placeRate": 25.0
      },
      "middle": {
        "count": 24,
        "placeRate": 16.7
      },
      "outer": {
        "count": 20,
        "placeRate": 35.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "目黒記念ＨG2",
    "displayName": "目黒記念",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2500,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-30",
        "winner": "ウインキートス",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 1660,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-05-29",
        "winner": "ボッケリーニ",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-05-28",
        "winner": "ヒートオンビート",
        "winnerPopularity": 4,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 780,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-26",
        "winner": "シュトルーヴェ",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 350,
        "fieldSize": 13
      },
      {
        "year": 2025,
        "date": "2025-06-01",
        "winner": "アドマイヤテラ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 330,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-31",
        "winner": "ファイアンクランツ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 460,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 61,
        "wins": 1,
        "placeRate": 8.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 31,
        "placeRate": 16.1
      },
      "middle": {
        "count": 36,
        "placeRate": 27.8
      },
      "outer": {
        "count": 30,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "青葉賞G2",
    "displayName": "青葉賞",
    "grade": "G2",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-01",
        "winner": "ワンダフルタウン",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 500,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-04-30",
        "winner": "プラダリア",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 690,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-04-29",
        "winner": "スキルヴィング",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 170,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-27",
        "winner": "シュガークン",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-04-26",
        "winner": "エネルジコ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 260,
        "fieldSize": 13
      },
      {
        "year": 2026,
        "date": "2026-04-25",
        "winner": "ゴーイントゥスカイ",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 810,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 58,
        "wins": 0,
        "placeRate": 3.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 16.7
      },
      "middle": {
        "count": 35,
        "placeRate": 22.9
      },
      "outer": {
        "count": 29,
        "placeRate": 17.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 1,
      "追込": 2
    }
  },
  {
    "raceName": "アメリカG2",
    "displayName": "アメリカジョッキークラブカップ",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-24",
        "winner": "アリストテレス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 240,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-01-23",
        "winner": "キングオブコージ",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 780,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-01-22",
        "winner": "ノースブリッジ",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 860,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-01-21",
        "winner": "チャックネイト",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 650,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-01-26",
        "winner": "ダノンデサイル",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 260,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-01-25",
        "winner": "ショウヘイ",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 500,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 55,
        "wins": 0,
        "placeRate": 3.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 13.8
      },
      "middle": {
        "count": 35,
        "placeRate": 22.9
      },
      "outer": {
        "count": 27,
        "placeRate": 22.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "オールカG2",
    "displayName": "オールカマー",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-26",
        "winner": "ウインマリリン",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-09-25",
        "winner": "ジェラルディーナ",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1950,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-09-24",
        "winner": "ローシャムパーク",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 560,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-09-22",
        "winner": "レーベンスティール",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 150,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-09-21",
        "winner": "レガレイラ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 330,
        "fieldSize": 11
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 40,
        "wins": 0,
        "placeRate": 10.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 22,
        "placeRate": 36.4
      },
      "middle": {
        "count": 28,
        "placeRate": 14.3
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "ステイヤG2",
    "displayName": "ステイヤーズステークス",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 3600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-04",
        "winner": "ディバインフォース",
        "winnerPopularity": 6,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 770,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-12-03",
        "winner": "シルヴァーソニック",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 540,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-12-02",
        "winner": "アイアンバローズ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 1920,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-11-30",
        "winner": "シュヴァリエローズ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 360,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-12-06",
        "winner": "ホーエリート",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 46.7
      },
      "pop7plus": {
        "count": 41,
        "wins": 1,
        "placeRate": 4.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 21,
        "placeRate": 23.8
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 20,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "スプリンG2",
    "displayName": "スプリングステークス",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-21",
        "winner": "ヴィクティファルス",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 710,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-03-20",
        "winner": "ビーアストニッシド",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 700,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-03-19",
        "winner": "ベラジオオペラ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-17",
        "winner": "シックスペンス",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 290,
        "fieldSize": 10
      },
      {
        "year": 2025,
        "date": "2025-03-16",
        "winner": "ピコチャンブラック",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 12
      },
      {
        "year": 2026,
        "date": "2026-03-15",
        "winner": "アウダーシア",
        "winnerPopularity": 8,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 1940,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 46,
        "wins": 1,
        "placeRate": 13.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 26,
        "placeRate": 23.1
      },
      "middle": {
        "count": 32,
        "placeRate": 15.6
      },
      "outer": {
        "count": 24,
        "placeRate": 29.2
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "セントラG2",
    "displayName": "セントライト記念",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-20",
        "winner": "アサマノイタズラ",
        "winnerPopularity": 9,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 4270,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-09-19",
        "winner": "ガイアフォース",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 510,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-09-18",
        "winner": "レーベンスティール",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-09-16",
        "winner": "アーバンシック",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-09-15",
        "winner": "ミュージアムマイル",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 80.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 6.7
      },
      "pop7plus": {
        "count": 38,
        "wins": 1,
        "placeRate": 5.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 21.1
      },
      "middle": {
        "count": 29,
        "placeRate": 31.0
      },
      "outer": {
        "count": 20,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "ニュージG2",
    "displayName": "ニュージーランドトロフィー",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-10",
        "winner": "バスラットレオン",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 320,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-09",
        "winner": "ジャングロ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 700,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-04-08",
        "winner": "エエヤン",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-04-06",
        "winner": "エコロブルーム",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-04-12",
        "winner": "イミグラントソング",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 550,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-04-11",
        "winner": "レザベーション",
        "winnerPopularity": 6,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 4350,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 5,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 52,
        "wins": 0,
        "placeRate": 5.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 33.3
      },
      "middle": {
        "count": 34,
        "placeRate": 14.7
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 3,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "中山記念G2",
    "displayName": "中山記念",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-28",
        "winner": "ヒシイグアス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 250,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-02-27",
        "winner": "パンサラッサ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 440,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-02-26",
        "winner": "ヒシイグアス",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 920,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-02-25",
        "winner": "マテンロウスカイ",
        "winnerPopularity": 7,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1610,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-03-02",
        "winner": "シックスペンス",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-03-01",
        "winner": "レーベンスティール",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 54,
        "wins": 1,
        "placeRate": 9.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 20.0
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "弥生賞G2",
    "displayName": "弥生賞ディープインパクト記念",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-07",
        "winner": "タイトルホルダー",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 1790,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-03-06",
        "winner": "アスクビクターモア",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 670,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-03-05",
        "winner": "タスティエーラ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 10
      },
      {
        "year": 2024,
        "date": "2024-03-03",
        "winner": "コスモキュランダ",
        "winnerPopularity": 6,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 3490,
        "fieldSize": 11
      },
      {
        "year": 2025,
        "date": "2025-03-09",
        "winner": "ファウストラーゼン",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1690,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-03-08",
        "winner": "バステール",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 630,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 66.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 30,
        "wins": 1,
        "placeRate": 10.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 15.8
      },
      "middle": {
        "count": 23,
        "placeRate": 47.8
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "日経賞G2",
    "displayName": "日経賞",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2500,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-27",
        "winner": "ウインマリリン",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 850,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-03-26",
        "winner": "タイトルホルダー",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 160,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-03-25",
        "winner": "タイトルホルダー",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 240,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-03-23",
        "winner": "シュトルーヴェ",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 630,
        "fieldSize": 10
      },
      {
        "year": 2025,
        "date": "2025-03-29",
        "winner": "マイネルエンペラー",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 740,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-03-28",
        "winner": "マイユニバース",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 700,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 46,
        "wins": 0,
        "placeRate": 2.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 26,
        "placeRate": 15.4
      },
      "middle": {
        "count": 32,
        "placeRate": 34.4
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "紫苑ＳG2",
    "displayName": "紫苑ステークス",
    "grade": "G2",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2023,
        "date": "2023-09-09",
        "winner": "モリアーナ",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 660,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-09-07",
        "winner": "クリスマスパレード",
        "winnerPopularity": 5,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 660,
        "fieldSize": 13
      },
      {
        "year": 2025,
        "date": "2025-09-07",
        "winner": "ケリフレッドアスク",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 2490,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 3,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 6,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 9,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 25,
        "wins": 1,
        "placeRate": 8.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 12,
        "placeRate": 25.0
      },
      "middle": {
        "count": 18,
        "placeRate": 22.2
      },
      "outer": {
        "count": 13,
        "placeRate": 15.4
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "金鯱賞G2",
    "displayName": "金鯱賞",
    "grade": "G2",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-14",
        "winner": "ギベオン",
        "winnerPopularity": 10,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 22730,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-03-13",
        "winner": "ジャックドール",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 200,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-03-12",
        "winner": "プログノーシス",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 250,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-03-10",
        "winner": "プログノーシス",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 13
      },
      {
        "year": 2025,
        "date": "2025-03-16",
        "winner": "クイーンズウォーク",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 820,
        "fieldSize": 10
      },
      {
        "year": 2026,
        "date": "2026-03-15",
        "winner": "シェイクユアハート",
        "winnerPopularity": 8,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 1350,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 38.9
      },
      "pop7plus": {
        "count": 36,
        "wins": 2,
        "placeRate": 5.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 31.6
      },
      "middle": {
        "count": 29,
        "placeRate": 24.1
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 1,
      "差し": 1,
      "追込": 2
    }
  },
  {
    "raceName": "スワンＳG2",
    "displayName": "スワンステークス",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-30",
        "winner": "ダノンファンタジー",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-10-29",
        "winner": "ダイアトニック",
        "winnerPopularity": 4,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 660,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-10-28",
        "winner": "ウイングレイテスト",
        "winnerPopularity": 10,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 2160,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-10-26",
        "winner": "ダノンマッキンリー",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 1090,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-10-13",
        "winner": "オフトレイル",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 750,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 10.0
      },
      "pop46": {
        "count": 15,
        "wins": 3,
        "placeRate": 46.7
      },
      "pop7plus": {
        "count": 59,
        "wins": 1,
        "placeRate": 10.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 30.0
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 29,
        "placeRate": 10.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "デイリーG2",
    "displayName": "デイリー杯2歳ステークス",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-13",
        "winner": "セリフォス",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 240,
        "fieldSize": 7
      },
      {
        "year": 2022,
        "date": "2022-11-12",
        "winner": "オールパルフェ",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 590,
        "fieldSize": 10
      },
      {
        "year": 2023,
        "date": "2023-11-11",
        "winner": "ジャンタルマンタル",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 390,
        "fieldSize": 11
      },
      {
        "year": 2024,
        "date": "2024-11-09",
        "winner": "ランフォーヴァウ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 7
      },
      {
        "year": 2025,
        "date": "2025-11-15",
        "winner": "アドマイヤクワッズ",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 260,
        "fieldSize": 8
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 4,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 6.7
      },
      "pop7plus": {
        "count": 13,
        "wins": 0,
        "placeRate": 30.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 40.0
      },
      "middle": {
        "count": 16,
        "placeRate": 37.5
      },
      "outer": {
        "count": 12,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "プロキオG2",
    "displayName": "プロキオンステークス",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2025,
        "date": "2025-01-26",
        "winner": "サンデーファンデー",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 970,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-01-25",
        "winner": "ロードクロンヌ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 1,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 4,
        "wins": 0,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 6,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 20,
        "wins": 0,
        "placeRate": 10.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 12,
        "placeRate": 25.0
      },
      "middle": {
        "count": 12,
        "placeRate": 8.3
      },
      "outer": {
        "count": 8,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "マイラーG2",
    "displayName": "マイラーズカップ",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-25",
        "winner": "ケイデンスコール",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-24",
        "winner": "ソウルラッシュ",
        "winnerPopularity": 6,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 780,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-04-23",
        "winner": "シュネルマイスター",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 250,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-21",
        "winner": "ソウルラッシュ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 240,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-04-27",
        "winner": "ロングラン",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 1020,
        "fieldSize": 10
      },
      {
        "year": 2026,
        "date": "2026-04-26",
        "winner": "アドマイヤズーム",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 54,
        "wins": 0,
        "placeRate": 3.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 33,
        "placeRate": 18.2
      },
      "outer": {
        "count": 27,
        "placeRate": 18.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "京都大賞G2",
    "displayName": "京都大賞典",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-10",
        "winner": "マカヒキ",
        "winnerPopularity": 9,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 3210,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-10-10",
        "winner": "ヴェラアズール",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 740,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-10-09",
        "winner": "プラダリア",
        "winnerPopularity": 5,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 760,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-10-06",
        "winner": "シュヴァリエローズ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 2250,
        "fieldSize": 11
      },
      {
        "year": 2025,
        "date": "2025-10-05",
        "winner": "ディープモンスター",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1130,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 41,
        "wins": 2,
        "placeRate": 9.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 21,
        "placeRate": 23.8
      },
      "middle": {
        "count": 28,
        "placeRate": 28.6
      },
      "outer": {
        "count": 22,
        "placeRate": 9.1
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "京都新聞G2",
    "displayName": "京都新聞杯",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-08",
        "winner": "レッドジェネシス",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 430,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-05-07",
        "winner": "アスクワイルドモア",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1780,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-05-06",
        "winner": "サトノグランツ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 280,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-05-04",
        "winner": "ジューンテイク",
        "winnerPopularity": 8,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1770,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-05-10",
        "winner": "ショウヘイ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1070,
        "fieldSize": 10
      },
      {
        "year": 2026,
        "date": "2026-05-09",
        "winner": "コンジェスタス",
        "winnerPopularity": 6,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1370,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 40,
        "wins": 2,
        "placeRate": 12.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 23,
        "placeRate": 21.7
      },
      "middle": {
        "count": 29,
        "placeRate": 17.2
      },
      "outer": {
        "count": 24,
        "placeRate": 33.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 4,
      "追込": 0
    }
  },
  {
    "raceName": "京都記念G2",
    "displayName": "京都記念",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-14",
        "winner": "ラヴズオンリーユー",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-02-13",
        "winner": "アフリカンゴールド",
        "winnerPopularity": 12,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 5150,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-02-12",
        "winner": "ドウデュース",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 250,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-02-11",
        "winner": "プラダリア",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 400,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-02-16",
        "winner": "ヨーホーレイク",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 950,
        "fieldSize": 12
      },
      {
        "year": 2026,
        "date": "2026-02-15",
        "winner": "ジューンテイク",
        "winnerPopularity": 6,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1590,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 38.9
      },
      "pop7plus": {
        "count": 37,
        "wins": 1,
        "placeRate": 10.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 38.9
      },
      "middle": {
        "count": 31,
        "placeRate": 19.4
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "日経新春ＨG2",
    "displayName": "日経新春杯",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-17",
        "winner": "ショウリュウイクゾ",
        "winnerPopularity": 7,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1960,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-01-16",
        "winner": "ヨーホーレイク",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 560,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-15",
        "winner": "ヴェルトライゼンデ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-01-14",
        "winner": "ブローザホーン",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 410,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-01-19",
        "winner": "ロードデルレイ",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 720,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-01-18",
        "winner": "ゲルチュタール",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 230,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 53,
        "wins": 1,
        "placeRate": 13.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 17.2
      },
      "middle": {
        "count": 36,
        "placeRate": 22.2
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "東海ＳG2",
    "displayName": "東海ステークス",
    "grade": "G2",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-24",
        "winner": "オーヴェルニュ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 620,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-01-23",
        "winner": "スワーヴアラミス",
        "winnerPopularity": 7,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1570,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-22",
        "winner": "プロミストウォリア",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 510,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-01-21",
        "winner": "ウィリアムバローズ",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 550,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 0,
        "placeRate": 75.0
      },
      "pop23": {
        "count": 8,
        "wins": 3,
        "placeRate": 62.5
      },
      "pop46": {
        "count": 12,
        "wins": 0,
        "placeRate": 8.3
      },
      "pop7plus": {
        "count": 38,
        "wins": 1,
        "placeRate": 7.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 22,
        "placeRate": 13.6
      },
      "middle": {
        "count": 24,
        "placeRate": 16.7
      },
      "outer": {
        "count": 16,
        "placeRate": 31.2
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "セントウG2",
    "displayName": "セントウルステークス",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-12",
        "winner": "レシステンシア",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 190,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-09-11",
        "winner": "メイケイエール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 170,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-09-10",
        "winner": "テイエムスパーダ",
        "winnerPopularity": 14,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 11260,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-09-08",
        "winner": "トウシンマカオ",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 640,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-09-07",
        "winner": "カンチェンジュンガ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 1940,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 49,
        "wins": 2,
        "placeRate": 6.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 26,
        "placeRate": 7.7
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 23,
        "placeRate": 30.4
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "チューリG2",
    "displayName": "チューリップ賞",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-06",
        "winner": "メイケイエール",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 110,
        "fieldSize": 12
      },
      {
        "year": 2021,
        "date": "2021-03-06",
        "winner": "エリザベスタワー",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 240,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-03-05",
        "winner": "ナミュール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 220,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-03-04",
        "winner": "モズメイメイ",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 1620,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-03-02",
        "winner": "スウィープフィート",
        "winnerPopularity": 5,
        "winnerFrame": 3,
        "winnerStyle": "追込",
        "winPayout": 970,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-03-02",
        "winner": "クリノメイ",
        "winnerPopularity": 9,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 3930,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-03-01",
        "winner": "タイセイボーグ",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 440,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 53,
        "wins": 2,
        "placeRate": 13.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 20.7
      },
      "middle": {
        "count": 35,
        "placeRate": 17.1
      },
      "outer": {
        "count": 25,
        "placeRate": 24.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "フィリーG2",
    "displayName": "フィリーズレビュー",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-14",
        "winner": "シゲルピンクルビー",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1390,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-03-13",
        "winner": "サブライムアンセム",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "追込",
        "winPayout": 790,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-03-12",
        "winner": "シングザットソング",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 480,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-03-10",
        "winner": "エトヴプレ",
        "winnerPopularity": 11,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 3520,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-03-08",
        "winner": "ショウナンザナドゥ",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 670,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-03-07",
        "winner": "ギリーズボール",
        "winnerPopularity": 10,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 2450,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 11.1
      },
      "pop7plus": {
        "count": 65,
        "wins": 3,
        "placeRate": 13.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 20.6
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 31,
        "placeRate": 16.1
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "ローズＳG2",
    "displayName": "ローズステークス",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-19",
        "winner": "アンドヴァラナウト",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 580,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-09-18",
        "winner": "アートハウス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 270,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-09-17",
        "winner": "マスクトディーヴァ",
        "winnerPopularity": 7,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 2320,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-09-15",
        "winner": "クイーンズウォーク",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 490,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-09-14",
        "winner": "カムニャック",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 290,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 51,
        "wins": 1,
        "placeRate": 13.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 27,
        "placeRate": 11.1
      },
      "middle": {
        "count": 29,
        "placeRate": 34.5
      },
      "outer": {
        "count": 25,
        "placeRate": 8.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "神戸新聞G2",
    "displayName": "神戸新聞杯",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 2400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-26",
        "winner": "ステラヴェローチェ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "追込",
        "winPayout": 300,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-09-25",
        "winner": "ジャスティンパレス",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1100,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-09-24",
        "winner": "サトノグランツ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 500,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-09-22",
        "winner": "メイショウタバル",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 540,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-09-21",
        "winner": "エリキング",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 4,
        "placeRate": 70.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 34,
        "wins": 0,
        "placeRate": 8.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 26.3
      },
      "middle": {
        "count": 24,
        "placeRate": 29.2
      },
      "outer": {
        "count": 21,
        "placeRate": 14.3
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "阪神カッG2",
    "displayName": "阪神カップ",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-25",
        "winner": "グレナディアガーズ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 500,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-12-24",
        "winner": "ダイアトニック",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-12-23",
        "winner": "ウインマーベル",
        "winnerPopularity": 4,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 960,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-12-21",
        "winner": "ナムラクレア",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 370,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-12-27",
        "winner": "ルガル",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 710,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 57,
        "wins": 0,
        "placeRate": 3.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 10.0
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 27,
        "placeRate": 22.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "阪神大賞G2",
    "displayName": "阪神大賞典",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 3000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-21",
        "winner": "ディープボンド",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1030,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-03-20",
        "winner": "ディープボンド",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 120,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-03-19",
        "winner": "ジャスティンパレス",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-03-17",
        "winner": "テーオーロイヤル",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 330,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-03-23",
        "winner": "サンライズアース",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 570,
        "fieldSize": 11
      },
      {
        "year": 2026,
        "date": "2026-03-22",
        "winner": "アドマイヤテラ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 40,
        "wins": 0,
        "placeRate": 5.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 21,
        "placeRate": 23.8
      },
      "middle": {
        "count": 31,
        "placeRate": 32.3
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "阪神牝馬G2",
    "displayName": "阪神牝馬ステークス",
    "grade": "G2",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-10",
        "winner": "デゼル",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-04-09",
        "winner": "メイショウミモザ",
        "winnerPopularity": 9,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 6870,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-04-08",
        "winner": "サウンドビバーチェ",
        "winnerPopularity": 6,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1380,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-04-06",
        "winner": "マスクトディーヴァ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 170,
        "fieldSize": 11
      },
      {
        "year": 2025,
        "date": "2025-04-12",
        "winner": "サフィラ",
        "winnerPopularity": 9,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 2970,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-04-11",
        "winner": "エンブロイダリー",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 280,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 34,
        "wins": 2,
        "placeRate": 17.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 47.4
      },
      "middle": {
        "count": 27,
        "placeRate": 18.5
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "エルムＳG3",
    "displayName": "エルムステークス",
    "grade": "G3",
    "place": "札幌",
    "trackId": "sapporo",
    "surface": "dirt",
    "distance": 1700,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-08",
        "winner": "スワーヴアラミス",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 930,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-08-07",
        "winner": "フルデプスリーダー",
        "winnerPopularity": 9,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 1690,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-08-06",
        "winner": "セキフウ",
        "winnerPopularity": 6,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 1230,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-08-04",
        "winner": "ペイシャエス",
        "winnerPopularity": 5,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 980,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-08-09",
        "winner": "ペリエール",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 890,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 10.0
      },
      "pop46": {
        "count": 15,
        "wins": 4,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 40,
        "wins": 1,
        "placeRate": 15.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 20,
        "placeRate": 25.0
      },
      "middle": {
        "count": 30,
        "placeRate": 23.3
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "キーンラG3",
    "displayName": "キーンランドカップ",
    "grade": "G3",
    "place": "札幌",
    "trackId": "sapporo",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-29",
        "winner": "レイハリア",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-08-28",
        "winner": "ヴェントヴォーチェ",
        "winnerPopularity": 6,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 1230,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-08-27",
        "winner": "ナムラクレア",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 240,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-08-25",
        "winner": "サトノレーヴ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-08-24",
        "winner": "パンジャタワー",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 550,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 10.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 20.7
      },
      "middle": {
        "count": 30,
        "placeRate": 23.3
      },
      "outer": {
        "count": 20,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "札幌２歳G3",
    "displayName": "札幌2歳ステークス",
    "grade": "G3",
    "place": "札幌",
    "trackId": "sapporo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-04",
        "winner": "ジオグリフ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 210,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-09-03",
        "winner": "ドゥーラ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-09-02",
        "winner": "セットアップ",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 680,
        "fieldSize": 10
      },
      {
        "year": 2024,
        "date": "2024-08-31",
        "winner": "マジックサンズ",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-09-06",
        "winner": "ショウナンガルフ",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 340,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 3,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 46.7
      },
      "pop7plus": {
        "count": 27,
        "wins": 0,
        "placeRate": 3.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 26.7
      },
      "middle": {
        "count": 22,
        "placeRate": 13.6
      },
      "outer": {
        "count": 20,
        "placeRate": 40.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "函館スプG3",
    "displayName": "函館スプリントステークス",
    "grade": "G3",
    "place": "函館",
    "trackId": "hakodate",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-13",
        "winner": "ビアンフェ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 800,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-06-12",
        "winner": "ナムラクレア",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 210,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-06-11",
        "winner": "キミワクイーン",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 610,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-06-09",
        "winner": "サトノレーヴ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 360,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-06-14",
        "winner": "カピリナ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 620,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-06-13",
        "winner": "ピューロマジック",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 810,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 56,
        "wins": 0,
        "placeRate": 5.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 21.2
      },
      "middle": {
        "count": 35,
        "placeRate": 17.1
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "函館記念ＨG3",
    "displayName": "函館記念",
    "grade": "G3",
    "place": "函館",
    "trackId": "hakodate",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-18",
        "winner": "トーセンスーリヤ",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-07-17",
        "winner": "ハヤヤッコ",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1880,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-07-16",
        "winner": "ローシャムパーク",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 410,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-07-14",
        "winner": "ホウオウビスケッツ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 720,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-06-29",
        "winner": "ヴェローチェエラ",
        "winnerPopularity": 10,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1300,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-06-28",
        "winner": "ファウストラーゼン",
        "winnerPopularity": 10,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 1400,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 57,
        "wins": 3,
        "placeRate": 15.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 21.2
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 8.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "函館２歳G3",
    "displayName": "函館2歳ステークス",
    "grade": "G3",
    "place": "函館",
    "trackId": "hakodate",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-17",
        "winner": "ナムラリコリス",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 740,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-07-16",
        "winner": "ブトンドール",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 700,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-07-15",
        "winner": "ゼルトザーム",
        "winnerPopularity": 10,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 2980,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-07-13",
        "winner": "サトノカルナバル",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 340,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-07-20",
        "winner": "エイシンディード",
        "winnerPopularity": 9,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 4870,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 35,
        "wins": 2,
        "placeRate": 14.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 33.3
      },
      "middle": {
        "count": 27,
        "placeRate": 22.2
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "ラジオNIＨG3",
    "displayName": "ラジオNIKKEI賞",
    "grade": "G3",
    "place": "福島",
    "trackId": "fukushima",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-04",
        "winner": "ヴァイスメテオール",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 780,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-07-03",
        "winner": "フェーングロッテン",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 720,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-07-02",
        "winner": "エルトンバローズ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 830,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-06-30",
        "winner": "オフトレイル",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "追込",
        "winPayout": 1120,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-06-29",
        "winner": "エキサイトバイオ",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 760,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-06-28",
        "winner": "サノノグレーター",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 540,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 51,
        "wins": 0,
        "placeRate": 9.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 25.0
      },
      "middle": {
        "count": 35,
        "placeRate": 22.9
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "七夕賞ＨG3",
    "displayName": "七夕賞",
    "grade": "G3",
    "place": "福島",
    "trackId": "fukushima",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-11",
        "winner": "トーラスジェミニ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 590,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-07-10",
        "winner": "エヒト",
        "winnerPopularity": 6,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1620,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-07-09",
        "winner": "セイウンハーデス",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-07-07",
        "winner": "レッドラディエンス",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 430,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-07-13",
        "winner": "コスモフリーゲン",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 420,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-07-12",
        "winner": "アスクナイスショー",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 500,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 5,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 11.1
      },
      "pop7plus": {
        "count": 58,
        "wins": 0,
        "placeRate": 12.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 26.5
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "福島牝馬G3",
    "displayName": "福島牝馬ステークス",
    "grade": "G3",
    "place": "福島",
    "trackId": "fukushima",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-24",
        "winner": "ディアンドル",
        "winnerPopularity": 7,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 1540,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-23",
        "winner": "アナザーリリック",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 690,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-04-22",
        "winner": "ステラリア",
        "winnerPopularity": 8,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1380,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-20",
        "winner": "コスタボニータ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-04-20",
        "winner": "アドマイヤマツリ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-04-19",
        "winner": "コガネノソラ",
        "winnerPopularity": 9,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 2920,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 58,
        "wins": 3,
        "placeRate": 12.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 20.6
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "福島記念ＨG3",
    "displayName": "福島記念",
    "grade": "G3",
    "place": "福島",
    "trackId": "fukushima",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-14",
        "winner": "パンサラッサ",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 900,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-11-13",
        "winner": "ユニコーンライオン",
        "winnerPopularity": 10,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 2430,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-11-12",
        "winner": "ホウオウエミーズ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 550,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-11-10",
        "winner": "アラタ",
        "winnerPopularity": 7,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1260,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-11-22",
        "winner": "ニシノティアモ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 390,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 50,
        "wins": 2,
        "placeRate": 8.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 20.0
      },
      "middle": {
        "count": 30,
        "placeRate": 30.0
      },
      "outer": {
        "count": 20,
        "placeRate": 0.0
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "アイビスG3",
    "displayName": "アイビスサマーダッシュ",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 1000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-25",
        "winner": "オールアットワンス",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-07-31",
        "winner": "ビリーバー",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 1730,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-07-30",
        "winner": "オールアットワンス",
        "winnerPopularity": 9,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 3920,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-07-28",
        "winner": "モズメイメイ",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 760,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-08-03",
        "winner": "ピューロマジック",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 460,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 6.7
      },
      "pop7plus": {
        "count": 58,
        "wins": 2,
        "placeRate": 12.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 16.7
      },
      "middle": {
        "count": 30,
        "placeRate": 13.3
      },
      "outer": {
        "count": 28,
        "placeRate": 21.4
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "レパードG3",
    "displayName": "レパードステークス",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-08",
        "winner": "メイショウムラクモ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 280,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-08-07",
        "winner": "カフジオクタゴン",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 2160,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-08-06",
        "winner": "ライオットガール",
        "winnerPopularity": 5,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 1190,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-08-04",
        "winner": "ミッキーファイト",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 220,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-08-10",
        "winner": "ドンインザムード",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 890,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 45,
        "wins": 1,
        "placeRate": 13.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 24.0
      },
      "middle": {
        "count": 30,
        "placeRate": 16.7
      },
      "outer": {
        "count": 20,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "新潟大賞ＨG3",
    "displayName": "新潟大賞典",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-09",
        "winner": "サンレイポケット",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 550,
        "fieldSize": 14
      },
      {
        "year": 2022,
        "date": "2022-05-08",
        "winner": "レッドガラン",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1420,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-05-07",
        "winner": "カラテ",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 780,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-05-05",
        "winner": "ヤマニンサルバム",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 1590,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-05-17",
        "winner": "シリウスコルト",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 1960,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-05-16",
        "winner": "グランディア",
        "winnerPopularity": 7,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1530,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 11.1
      },
      "pop7plus": {
        "count": 56,
        "wins": 4,
        "placeRate": 16.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 32,
        "placeRate": 18.8
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 24,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "新潟記念G3",
    "displayName": "新潟記念",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2025,
        "date": "2025-08-31",
        "winner": "シランケド",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 340,
        "fieldSize": 17
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 0,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 2,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 3,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop7plus": {
        "count": 10,
        "wins": 0,
        "placeRate": 10.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 5,
        "placeRate": 0.0
      },
      "middle": {
        "count": 6,
        "placeRate": 33.3
      },
      "outer": {
        "count": 5,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "新潟記念ＨG3",
    "displayName": "新潟記念",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-05",
        "winner": "マイネルファンロン",
        "winnerPopularity": 12,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 4280,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-09-04",
        "winner": "カラテ",
        "winnerPopularity": 10,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 2200,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-09-03",
        "winner": "ノッキングポイント",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 500,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-09-01",
        "winner": "シンリョクカ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 2600,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 0,
        "placeRate": 25.0
      },
      "pop23": {
        "count": 8,
        "wins": 1,
        "placeRate": 62.5
      },
      "pop46": {
        "count": 12,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop7plus": {
        "count": 36,
        "wins": 3,
        "placeRate": 16.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 11.1
      },
      "middle": {
        "count": 23,
        "placeRate": 17.4
      },
      "outer": {
        "count": 19,
        "placeRate": 31.6
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "新潟２歳G3",
    "displayName": "新潟2歳ステークス",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-29",
        "winner": "セリフォス",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 450,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-08-28",
        "winner": "キタウイング",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 810,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-08-27",
        "winner": "アスコリピチェーノ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-08-25",
        "winner": "トータルクラリティ",
        "winnerPopularity": 6,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1170,
        "fieldSize": 11
      },
      {
        "year": 2025,
        "date": "2025-08-24",
        "winner": "リアライズシリウス",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 230,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 26,
        "wins": 0,
        "placeRate": 3.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 13.3
      },
      "middle": {
        "count": 21,
        "placeRate": 28.6
      },
      "outer": {
        "count": 20,
        "placeRate": 35.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "関屋記念G3",
    "displayName": "関屋記念",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-15",
        "winner": "ロータスランド",
        "winnerPopularity": 4,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 970,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-08-14",
        "winner": "ウインカーネリアン",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-08-13",
        "winner": "アヴェラーレ",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 680,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-08-11",
        "winner": "トゥードジボン",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 660,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 1,
        "placeRate": 75.0
      },
      "pop23": {
        "count": 8,
        "wins": 1,
        "placeRate": 37.5
      },
      "pop46": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 42,
        "wins": 0,
        "placeRate": 4.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 22,
        "placeRate": 18.2
      },
      "middle": {
        "count": 24,
        "placeRate": 12.5
      },
      "outer": {
        "count": 20,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "関屋記念ＨG3",
    "displayName": "関屋記念",
    "grade": "G3",
    "place": "新潟",
    "trackId": "niigata",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2025,
        "date": "2025-07-27",
        "winner": "カナテープ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 440,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 1,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 2,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 3,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop7plus": {
        "count": 12,
        "wins": 0,
        "placeRate": 8.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 6,
        "placeRate": 16.7
      },
      "middle": {
        "count": 6,
        "placeRate": 16.7
      },
      "outer": {
        "count": 6,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "アルテミG3",
    "displayName": "アルテミスステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-30",
        "winner": "サークルオブライフ",
        "winnerPopularity": 7,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 2190,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-10-29",
        "winner": "ラヴェル",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 790,
        "fieldSize": 10
      },
      {
        "year": 2023,
        "date": "2023-10-28",
        "winner": "チェルヴィニア",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 150,
        "fieldSize": 10
      },
      {
        "year": 2024,
        "date": "2024-10-26",
        "winner": "ブラウンラチェット",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 11
      },
      {
        "year": 2025,
        "date": "2025-10-25",
        "winner": "フィロステファニ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 390,
        "fieldSize": 10
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 70.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 22,
        "wins": 1,
        "placeRate": 18.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 40.0
      },
      "middle": {
        "count": 17,
        "placeRate": 23.5
      },
      "outer": {
        "count": 20,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 0,
      "追込": 2
    }
  },
  {
    "raceName": "エプソムG3",
    "displayName": "エプソムカップ",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-13",
        "winner": "ザダル",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 680,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-06-12",
        "winner": "ノースブリッジ",
        "winnerPopularity": 4,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 730,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-06-11",
        "winner": "ジャスティンカフェ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 320,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-06-09",
        "winner": "レーベンスティール",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 360,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-05-10",
        "winner": "セイウンハーデス",
        "winnerPopularity": 6,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 1320,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-05-09",
        "winner": "トロヴァトーレ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 410,
        "fieldSize": 17
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 64,
        "wins": 0,
        "placeRate": 9.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 12.1
      },
      "middle": {
        "count": 35,
        "placeRate": 17.1
      },
      "outer": {
        "count": 32,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 5,
      "追込": 0
    }
  },
  {
    "raceName": "クイーンG3",
    "displayName": "クイーンステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-13",
        "winner": "アカイトリノムスメ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 16
      },
      {
        "year": 2021,
        "date": "2021-08-01",
        "winner": "テルツェット",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 500,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-02-12",
        "winner": "プレサージュリフト",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-07-31",
        "winner": "テルツェット",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 670,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-02-11",
        "winner": "ハーパー",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1260,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-07-30",
        "winner": "ドゥーラ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-02-10",
        "winner": "クイーンズウォーク",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 310,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-07-28",
        "winner": "コガネノソラ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 960,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-02-15",
        "winner": "エンブロイダリー",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-08-03",
        "winner": "アルジーヌ",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 290,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-02-14",
        "winner": "ドリームコア",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 340,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 11,
        "wins": 3,
        "placeRate": 54.5
      },
      "pop23": {
        "count": 22,
        "wins": 6,
        "placeRate": 63.6
      },
      "pop46": {
        "count": 33,
        "wins": 2,
        "placeRate": 18.2
      },
      "pop7plus": {
        "count": 93,
        "wins": 0,
        "placeRate": 7.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 50,
        "placeRate": 32.0
      },
      "middle": {
        "count": 65,
        "placeRate": 16.9
      },
      "outer": {
        "count": 44,
        "placeRate": 13.6
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 6,
      "差し": 3,
      "追込": 2
    }
  },
  {
    "raceName": "サウジアG3",
    "displayName": "サウジアラビアロイヤルカップ",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-09",
        "winner": "コマンドライン",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 220,
        "fieldSize": 7
      },
      {
        "year": 2022,
        "date": "2022-10-08",
        "winner": "ドルチェモア",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 680,
        "fieldSize": 9
      },
      {
        "year": 2023,
        "date": "2023-10-07",
        "winner": "ゴンバデカーブース",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 960,
        "fieldSize": 9
      },
      {
        "year": 2024,
        "date": "2024-10-05",
        "winner": "アルテヴェローチェ",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 350,
        "fieldSize": 7
      },
      {
        "year": 2025,
        "date": "2025-10-11",
        "winner": "エコロアルバ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 360,
        "fieldSize": 8
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 4,
        "placeRate": 80.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 10,
        "wins": 0,
        "placeRate": 20.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 53.3
      },
      "middle": {
        "count": 15,
        "placeRate": 33.3
      },
      "outer": {
        "count": 10,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 0,
      "追込": 3
    }
  },
  {
    "raceName": "ダイヤモＨG3",
    "displayName": "ダイヤモンドステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 3400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-20",
        "winner": "グロンディオーズ",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1720,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-02-19",
        "winner": "テーオーロイヤル",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 400,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-02-18",
        "winner": "ミクソロジー",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-02-17",
        "winner": "テーオーロイヤル",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 10
      },
      {
        "year": 2025,
        "date": "2025-02-22",
        "winner": "ヘデントール",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 190,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-02-21",
        "winner": "スティンガーグラス",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 300,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 5.6
      },
      "pop7plus": {
        "count": 51,
        "wins": 1,
        "placeRate": 11.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 33,
        "placeRate": 18.2
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "共同通信G3",
    "displayName": "共同通信杯",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-14",
        "winner": "エフフォーリア",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 680,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-02-13",
        "winner": "ダノンベルーガ",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 390,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-02-12",
        "winner": "ファントムシーフ",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-02-11",
        "winner": "ジャスティンミラノ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 660,
        "fieldSize": 10
      },
      {
        "year": 2025,
        "date": "2025-02-16",
        "winner": "マスカレードボール",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 9
      },
      {
        "year": 2026,
        "date": "2026-02-15",
        "winner": "リアライズシリウス",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "逃げ",
        "winPayout": 370,
        "fieldSize": 9
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 27,
        "wins": 0,
        "placeRate": 11.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 11.1
      },
      "middle": {
        "count": 23,
        "placeRate": 30.4
      },
      "outer": {
        "count": 22,
        "placeRate": 40.9
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "府中牝馬ＨG3",
    "displayName": "府中牝馬ステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2025,
        "date": "2025-06-22",
        "winner": "セキトバイースト",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 710,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-06-21",
        "winner": "セキトバイースト",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 940,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop23": {
        "count": 4,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 6,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 18,
        "wins": 0,
        "placeRate": 11.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 10,
        "placeRate": 20.0
      },
      "middle": {
        "count": 12,
        "placeRate": 16.7
      },
      "outer": {
        "count": 8,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "東京新聞G3",
    "displayName": "東京新聞杯",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-07",
        "winner": "カラテ",
        "winnerPopularity": 5,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 1160,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-02-06",
        "winner": "イルーシヴパンサー",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 530,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-02-05",
        "winner": "ウインカーネリアン",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 950,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-02-04",
        "winner": "サクラトゥジュール",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 3380,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-02-09",
        "winner": "ウォーターリヒト",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 740,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-02-10",
        "winner": "トロヴァトーレ",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 560,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 59,
        "wins": 1,
        "placeRate": 6.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 35,
        "placeRate": 20.0
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 8.3
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 2,
      "追込": 2
    }
  },
  {
    "raceName": "根岸ＳG3",
    "displayName": "根岸ステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "dirt",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-31",
        "winner": "レッドルゼル",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 250,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-01-30",
        "winner": "テイエムサウスダン",
        "winnerPopularity": 6,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 1150,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-29",
        "winner": "レモンポップ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 160,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-01-28",
        "winner": "エンペラーワケア",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 250,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-02-02",
        "winner": "コスタノヴァ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 460,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-02-01",
        "winner": "ロードフォンス",
        "winnerPopularity": 6,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1320,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 60,
        "wins": 0,
        "placeRate": 5.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 13.9
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "武蔵野ＳG3",
    "displayName": "武蔵野ステークス",
    "grade": "G3",
    "place": "東京",
    "trackId": "tokyo",
    "surface": "dirt",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-13",
        "winner": "ソリストサンダー",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 660,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-11-12",
        "winner": "ギルデッドミラー",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 600,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-11-11",
        "winner": "ドライスタウト",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-11-09",
        "winner": "エンペラーワケア",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 170,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-11-15",
        "winner": "ルクソールカフェ",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 4,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 2.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 17.2
      },
      "middle": {
        "count": 30,
        "placeRate": 20.0
      },
      "outer": {
        "count": 20,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "オーシャG3",
    "displayName": "オーシャンステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-06",
        "winner": "コントラチェック",
        "winnerPopularity": 11,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 3340,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-03-05",
        "winner": "ジャンダルム",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 540,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-03-04",
        "winner": "ヴェントヴォーチェ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-02",
        "winner": "トウシンマカオ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 330,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-03-01",
        "winner": "ママコチャ",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 270,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-02-28",
        "winner": "ペアポルックス",
        "winnerPopularity": 7,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 1670,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 58,
        "wins": 2,
        "placeRate": 5.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 23.5
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 5,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "オータムＨG3",
    "displayName": "京成杯オータムハンデキャップ",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-12",
        "winner": "カテドラル",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 1540,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-09-11",
        "winner": "ファルコニア",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-09-10",
        "winner": "ソウルラッシュ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 11
      },
      {
        "year": 2024,
        "date": "2024-09-08",
        "winner": "アスコリピチェーノ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 150,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-09-06",
        "winner": "ホウオウラスカーズ",
        "winnerPopularity": 13,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 8950,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 6.7
      },
      "pop7plus": {
        "count": 42,
        "wins": 2,
        "placeRate": 19.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 24.0
      },
      "middle": {
        "count": 27,
        "placeRate": 14.8
      },
      "outer": {
        "count": 20,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "カペラＳG3",
    "displayName": "カペラステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "dirt",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-12",
        "winner": "ダンシングプリンス",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 640,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-12-11",
        "winner": "リメイク",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-12-10",
        "winner": "テイエムトッキュウ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 480,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-12-08",
        "winner": "ガビーズシスター",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 330,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-12-14",
        "winner": "テーオーエルビス",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 320,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 49,
        "wins": 0,
        "placeRate": 8.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 29,
        "placeRate": 34.5
      },
      "middle": {
        "count": 30,
        "placeRate": 6.7
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "ターコイＨG3",
    "displayName": "ターコイズステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-18",
        "winner": "ミスニューヨーク",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 680,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-12-17",
        "winner": "ミスニューヨーク",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 560,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-12-16",
        "winner": "フィアスプライド",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 520,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-12-14",
        "winner": "アルジーヌ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 530,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-12-20",
        "winner": "ドロップオブライト",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1050,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop7plus": {
        "count": 50,
        "wins": 0,
        "placeRate": 8.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 20,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "ダービーＨG3",
    "displayName": "ダービー卿チャレンジトロフィー",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-03",
        "winner": "テルツェット",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 630,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-02",
        "winner": "タイムトゥヘヴン",
        "winnerPopularity": 11,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 2740,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-04-01",
        "winner": "インダストリア",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 810,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-30",
        "winner": "パラレルヴィジョン",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 610,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-04-05",
        "winner": "トロヴァトーレ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 170,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-04-04",
        "winner": "スズハローム",
        "winnerPopularity": 10,
        "winnerFrame": 6,
        "winnerStyle": "追込",
        "winPayout": 1590,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 55,
        "wins": 2,
        "placeRate": 7.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 21.2
      },
      "middle": {
        "count": 35,
        "placeRate": 25.7
      },
      "outer": {
        "count": 23,
        "placeRate": 8.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 3,
      "追込": 2
    }
  },
  {
    "raceName": "フェアリG3",
    "displayName": "フェアリーステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-11",
        "winner": "ファインルージュ",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 550,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-01-10",
        "winner": "ライラック",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 710,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-09",
        "winner": "キタウイング",
        "winnerPopularity": 11,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 3580,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-01-07",
        "winner": "イフェイオン",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1260,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-01-12",
        "winner": "エリカエクスプレス",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 590,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-01-11",
        "winner": "ブラックチャリス",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1100,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 16.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 44.4
      },
      "pop7plus": {
        "count": 58,
        "wins": 1,
        "placeRate": 12.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 23.5
      },
      "middle": {
        "count": 36,
        "placeRate": 13.9
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "フラワーG3",
    "displayName": "フラワーカップ",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-20",
        "winner": "ホウオウイクセル",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 930,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-03-21",
        "winner": "スタニングローズ",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-03-18",
        "winner": "エミュー",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 640,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-16",
        "winner": "ミアネーロ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-03-22",
        "winner": "レーゼドラマ",
        "winnerPopularity": 5,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 1440,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-03-21",
        "winner": "スマートプリエール",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1280,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 52,
        "wins": 0,
        "placeRate": 7.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 34,
        "placeRate": 23.5
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "マーチＳＨG3",
    "displayName": "マーチステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-28",
        "winner": "レピアーウィット",
        "winnerPopularity": 6,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 2140,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-03-27",
        "winner": "メイショウハリオ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 580,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-03-26",
        "winner": "ハヤブサナンデクン",
        "winnerPopularity": 5,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 880,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-03-24",
        "winner": "ヴァルツァーシャル",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 1140,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-03-30",
        "winner": "ブライアンセンス",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 460,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-03-29",
        "winner": "サンデーファンデー",
        "winnerPopularity": 8,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1280,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 56,
        "wins": 2,
        "placeRate": 10.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 32,
        "placeRate": 18.8
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 24,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "中山牝馬ＨG3",
    "displayName": "中山牝馬ステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-13",
        "winner": "ランブリングアレー",
        "winnerPopularity": 7,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 1110,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-03-12",
        "winner": "クリノプレミアム",
        "winnerPopularity": 15,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 9740,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-03-11",
        "winner": "スルーセブンシーズ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-03-09",
        "winner": "コンクシェル",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 880,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-03-08",
        "winner": "シランケド",
        "winnerPopularity": 3,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 580,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-03-07",
        "winner": "エセルフリーダ",
        "winnerPopularity": 6,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 1530,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 44.4
      },
      "pop7plus": {
        "count": 56,
        "wins": 2,
        "placeRate": 8.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 32,
        "placeRate": 15.6
      },
      "middle": {
        "count": 36,
        "placeRate": 19.4
      },
      "outer": {
        "count": 24,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "中山金杯ＨG3",
    "displayName": "中山金杯",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-05",
        "winner": "ヒシイグアス",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-01-05",
        "winner": "レッドガラン",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1590,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-01-05",
        "winner": "ラーグルフ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-01-06",
        "winner": "リカンカブール",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 780,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-01-05",
        "winner": "アルナシーム",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 840,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-01-04",
        "winner": "カラマティアノス",
        "winnerPopularity": 7,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1480,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 0,
        "placeRate": 8.3
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 38.9
      },
      "pop7plus": {
        "count": 64,
        "wins": 1,
        "placeRate": 9.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 34,
        "placeRate": 23.5
      },
      "middle": {
        "count": 36,
        "placeRate": 13.9
      },
      "outer": {
        "count": 30,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 6,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "京成杯G3",
    "displayName": "京成杯",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-17",
        "winner": "グラティアス",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-01-16",
        "winner": "オニャンコポン",
        "winnerPopularity": 6,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1320,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-15",
        "winner": "ソールオリエンス",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 9
      },
      {
        "year": 2024,
        "date": "2024-01-14",
        "winner": "ダノンデサイル",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1150,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-01-19",
        "winner": "ニシノエージェント",
        "winnerPopularity": 11,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 4940,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-01-18",
        "winner": "グリーンエナジー",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 430,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 44,
        "wins": 1,
        "placeRate": 13.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 24.0
      },
      "middle": {
        "count": 32,
        "placeRate": 21.9
      },
      "outer": {
        "count": 23,
        "placeRate": 21.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 4,
      "追込": 0
    }
  },
  {
    "raceName": "紫苑ＳG3",
    "displayName": "紫苑ステークス",
    "grade": "G3",
    "place": "中山",
    "trackId": "nakayama",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-11",
        "winner": "ファインルージュ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 450,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-09-10",
        "winner": "スタニングローズ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 280,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 4,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 18,
        "wins": 0,
        "placeRate": 5.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 9,
        "placeRate": 22.2
      },
      "middle": {
        "count": 11,
        "placeRate": 18.2
      },
      "outer": {
        "count": 10,
        "placeRate": 20.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "ファルコG3",
    "displayName": "ファルコンステークス",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-20",
        "winner": "ルークズネスト",
        "winnerPopularity": 3,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 760,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-03-19",
        "winner": "プルパレイ",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 460,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-03-18",
        "winner": "タマモブラックタイ",
        "winnerPopularity": 8,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 2720,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-03-16",
        "winner": "ダノンマッキンリー",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 1360,
        "fieldSize": 17
      },
      {
        "year": 2025,
        "date": "2025-03-22",
        "winner": "ヤンキーバローズ",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 630,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-03-21",
        "winner": "ダイヤモンドノット",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 160,
        "fieldSize": 17
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 63,
        "wins": 2,
        "placeRate": 9.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 24.2
      },
      "middle": {
        "count": 36,
        "placeRate": 13.9
      },
      "outer": {
        "count": 30,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "中京記念G3",
    "displayName": "中京記念",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2025,
        "date": "2025-08-17",
        "winner": "マピュース",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 870,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop23": {
        "count": 2,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop46": {
        "count": 3,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 3,
        "placeRate": 33.3
      },
      "middle": {
        "count": 5,
        "placeRate": 40.0
      },
      "outer": {
        "count": 4,
        "placeRate": 0.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "中京２歳G3",
    "displayName": "中京2歳ステークス",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2025,
        "date": "2025-08-31",
        "winner": "キャンディード",
        "winnerPopularity": 6,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 1320,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 0,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 2,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 3,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 7,
        "wins": 0,
        "placeRate": 0.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 3,
        "placeRate": 33.3
      },
      "middle": {
        "count": 6,
        "placeRate": 33.3
      },
      "outer": {
        "count": 4,
        "placeRate": 0.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "中日新聞ＨG3",
    "displayName": "中日新聞杯",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-11",
        "winner": "ショウナンバルディ",
        "winnerPopularity": 8,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 1970,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-12-10",
        "winner": "キラーアビリティ",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 760,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-12-09",
        "winner": "ヤマニンサルバム",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 17
      },
      {
        "year": 2024,
        "date": "2024-12-07",
        "winner": "デシエルト",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 520,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-12-13",
        "winner": "シェイクユアハート",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 540,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 3,
        "placeRate": 30.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 59,
        "wins": 1,
        "placeRate": 10.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 16.7
      },
      "middle": {
        "count": 30,
        "placeRate": 26.7
      },
      "outer": {
        "count": 29,
        "placeRate": 6.9
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 1,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "小倉２歳G3",
    "displayName": "小倉2歳ステークス",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-09-05",
        "winner": "ナムラクレア",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 640,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-09-04",
        "winner": "ロンドンプラン",
        "winnerPopularity": 4,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 740,
        "fieldSize": 13
      },
      {
        "year": 2023,
        "date": "2023-09-03",
        "winner": "アスクワンタイム",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 710,
        "fieldSize": 10
      },
      {
        "year": 2024,
        "date": "2024-09-01",
        "winner": "エイシンワンド",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 410,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop23": {
        "count": 8,
        "wins": 0,
        "placeRate": 37.5
      },
      "pop46": {
        "count": 12,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 22,
        "wins": 0,
        "placeRate": 18.2
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 12,
        "placeRate": 16.7
      },
      "middle": {
        "count": 18,
        "placeRate": 11.1
      },
      "outer": {
        "count": 16,
        "placeRate": 50.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 1,
      "追込": 2
    }
  },
  {
    "raceName": "愛知杯G3",
    "displayName": "愛知杯",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2025,
        "date": "2025-03-23",
        "winner": "ワイドラトゥール",
        "winnerPopularity": 10,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 2550,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-03-22",
        "winner": "アイサンサン",
        "winnerPopularity": 12,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 2760,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 4,
        "wins": 0,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 24,
        "wins": 2,
        "placeRate": 12.5
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 12,
        "placeRate": 8.3
      },
      "middle": {
        "count": 12,
        "placeRate": 25.0
      },
      "outer": {
        "count": 12,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 0,
      "差し": 0,
      "追込": 1
    }
  },
  {
    "raceName": "東海ＳG3",
    "displayName": "東海ステークス",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "dirt",
    "distance": 1400,
    "editions": [
      {
        "year": 2025,
        "date": "2025-07-27",
        "winner": "ヤマニンウルス",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 750,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 0,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 2,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 3,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 10,
        "wins": 0,
        "placeRate": 0.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 6,
        "placeRate": 16.7
      },
      "middle": {
        "count": 6,
        "placeRate": 33.3
      },
      "outer": {
        "count": 4,
        "placeRate": 0.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "ＣＢＣ賞ＨG3",
    "displayName": "CBC賞",
    "grade": "G3",
    "place": "中京",
    "trackId": "chukyo",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-04",
        "winner": "ファストフォース",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 1820,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-07-03",
        "winner": "テイエムスパーダ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 500,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-07-02",
        "winner": "ジャスパークローネ",
        "winnerPopularity": 7,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 2820,
        "fieldSize": 12
      },
      {
        "year": 2024,
        "date": "2024-08-18",
        "winner": "ドロップオブライト",
        "winnerPopularity": 6,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1080,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-08-10",
        "winner": "インビンシブルパパ",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 1390,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 47,
        "wins": 2,
        "placeRate": 6.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 24,
        "placeRate": 29.2
      },
      "middle": {
        "count": 28,
        "placeRate": 14.3
      },
      "outer": {
        "count": 25,
        "placeRate": 16.0
      }
    },
    "styleWins": {
      "逃げ": 4,
      "先行": 1,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "きさらぎG3",
    "displayName": "きさらぎ賞",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-07",
        "winner": "ラーゴム",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-02-06",
        "winner": "マテンロウレオ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 400,
        "fieldSize": 11
      },
      {
        "year": 2023,
        "date": "2023-02-05",
        "winner": "フリームファクシ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 130,
        "fieldSize": 8
      },
      {
        "year": 2024,
        "date": "2024-02-04",
        "winner": "ビザンチンドリーム",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 230,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-02-09",
        "winner": "サトノシャイニング",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 270,
        "fieldSize": 10
      },
      {
        "year": 2026,
        "date": "2026-02-10",
        "winner": "ゾロアストロ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 350,
        "fieldSize": 9
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 4,
        "placeRate": 83.3
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 25,
        "wins": 0,
        "placeRate": 12.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 55.6
      },
      "middle": {
        "count": 22,
        "placeRate": 4.5
      },
      "outer": {
        "count": 21,
        "placeRate": 33.3
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "みやこＳG3",
    "displayName": "みやこステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-07",
        "winner": "メイショウハリオ",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 1300,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-11-06",
        "winner": "サンライズホープ",
        "winnerPopularity": 11,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 9070,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-11-05",
        "winner": "セラフィックコール",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 260,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-11-03",
        "winner": "サンライズジパング",
        "winnerPopularity": 3,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 660,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-11-09",
        "winner": "ダブルハートボンド",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 600,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 48,
        "wins": 1,
        "placeRate": 10.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 17.9
      },
      "middle": {
        "count": 30,
        "placeRate": 13.3
      },
      "outer": {
        "count": 20,
        "placeRate": 30.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "シルクロＨG3",
    "displayName": "シルクロードステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-31",
        "winner": "シヴァージ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 660,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-01-30",
        "winner": "メイケイエール",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 400,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-01-29",
        "winner": "ナムラクレア",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 480,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-01-28",
        "winner": "ルガル",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 330,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-02-02",
        "winner": "エイシンフェンサー",
        "winnerPopularity": 9,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 2740,
        "fieldSize": 17
      },
      {
        "year": 2026,
        "date": "2026-02-01",
        "winner": "フィオライア",
        "winnerPopularity": 16,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 8750,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 67,
        "wins": 2,
        "placeRate": 9.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 35,
        "placeRate": 17.1
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 32,
        "placeRate": 18.8
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "シンザンG3",
    "displayName": "シンザン記念",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-10",
        "winner": "ピクシーナイト",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 1300,
        "fieldSize": 15
      },
      {
        "year": 2022,
        "date": "2022-01-09",
        "winner": "マテンロウオリオン",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 1020,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-01-08",
        "winner": "ライトクオンタム",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 300,
        "fieldSize": 7
      },
      {
        "year": 2024,
        "date": "2024-01-08",
        "winner": "ノーブルロジャー",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 490,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-01-13",
        "winner": "リラエンブレム",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 470,
        "fieldSize": 15
      },
      {
        "year": 2026,
        "date": "2026-01-12",
        "winner": "サンダーストラック",
        "winnerPopularity": 9,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 1950,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 66.7
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 50,
        "wins": 1,
        "placeRate": 8.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 23.3
      },
      "middle": {
        "count": 33,
        "placeRate": 15.2
      },
      "outer": {
        "count": 23,
        "placeRate": 26.1
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "チャレンG3",
    "displayName": "チャレンジカップ",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-12-04",
        "winner": "ソーヴァリアント",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 170,
        "fieldSize": 11
      },
      {
        "year": 2022,
        "date": "2022-12-03",
        "winner": "ソーヴァリアント",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 190,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-12-02",
        "winner": "ベラジオオペラ",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 550,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-11-30",
        "winner": "ラヴェル",
        "winnerPopularity": 3,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 650,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 8,
        "wins": 2,
        "placeRate": 37.5
      },
      "pop46": {
        "count": 12,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 29,
        "wins": 0,
        "placeRate": 10.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 15,
        "placeRate": 26.7
      },
      "middle": {
        "count": 22,
        "placeRate": 31.8
      },
      "outer": {
        "count": 16,
        "placeRate": 6.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "ファンタG3",
    "displayName": "ファンタジーステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-06",
        "winner": "ウォーターナビレラ",
        "winnerPopularity": 2,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-11-05",
        "winner": "リバーラ",
        "winnerPopularity": 10,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 7070,
        "fieldSize": 12
      },
      {
        "year": 2023,
        "date": "2023-11-04",
        "winner": "カルチャーデイ",
        "winnerPopularity": 15,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 7080,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-11-02",
        "winner": "ダンツエラン",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 950,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-11-01",
        "winner": "フェスティバルヒル",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 280,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 13.3
      },
      "pop7plus": {
        "count": 37,
        "wins": 2,
        "placeRate": 18.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 20,
        "placeRate": 25.0
      },
      "middle": {
        "count": 25,
        "placeRate": 28.0
      },
      "outer": {
        "count": 22,
        "placeRate": 13.6
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "マーメイＨG3",
    "displayName": "マーメイドステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-20",
        "winner": "シャムロックヒル",
        "winnerPopularity": 10,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 2050,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-06-19",
        "winner": "ウインマイティー",
        "winnerPopularity": 10,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 1460,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-06-18",
        "winner": "ビッグリボン",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 370,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-06-16",
        "winner": "アリスヴェリテ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 910,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 1,
        "placeRate": 75.0
      },
      "pop23": {
        "count": 8,
        "wins": 0,
        "placeRate": 12.5
      },
      "pop46": {
        "count": 12,
        "wins": 1,
        "placeRate": 41.7
      },
      "pop7plus": {
        "count": 37,
        "wins": 2,
        "placeRate": 8.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 21,
        "placeRate": 19.0
      },
      "middle": {
        "count": 24,
        "placeRate": 20.8
      },
      "outer": {
        "count": 16,
        "placeRate": 18.8
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "ユニコーG3",
    "displayName": "ユニコーンステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "dirt",
    "distance": 1900,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-20",
        "winner": "スマッシャー",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 1340,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-06-19",
        "winner": "ペイシャエス",
        "winnerPopularity": 7,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 2010,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-06-18",
        "winner": "ペリエール",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 280,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-27",
        "winner": "ラムジェット",
        "winnerPopularity": 3,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 730,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-05-03",
        "winner": "カナルビーグル",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 600,
        "fieldSize": 13
      },
      {
        "year": 2026,
        "date": "2026-05-02",
        "winner": "シルバーレシオ",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 280,
        "fieldSize": 12
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 3,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 11.1
      },
      "pop7plus": {
        "count": 51,
        "wins": 2,
        "placeRate": 11.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 28,
        "placeRate": 25.0
      },
      "middle": {
        "count": 35,
        "placeRate": 20.0
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 4,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "京都牝馬G3",
    "displayName": "京都牝馬ステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-20",
        "winner": "イベリス",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 550,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-02-19",
        "winner": "ロータスランド",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 690,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-02-18",
        "winner": "ララクリスティーヌ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 510,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-02-17",
        "winner": "ソーダズリング",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 0,
        "placeRate": 75.0
      },
      "pop23": {
        "count": 8,
        "wins": 3,
        "placeRate": 62.5
      },
      "pop46": {
        "count": 12,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 46,
        "wins": 0,
        "placeRate": 4.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 24,
        "placeRate": 12.5
      },
      "middle": {
        "count": 24,
        "placeRate": 12.5
      },
      "outer": {
        "count": 22,
        "placeRate": 27.3
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 1,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "京都金杯ＨG3",
    "displayName": "京都金杯",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-05",
        "winner": "ケイデンスコール",
        "winnerPopularity": 12,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 4330,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-01-05",
        "winner": "ザダル",
        "winnerPopularity": 7,
        "winnerFrame": 4,
        "winnerStyle": "追込",
        "winPayout": 1390,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-05",
        "winner": "イルーシヴパンサー",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 740,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-01-06",
        "winner": "コレペティトール",
        "winnerPopularity": 8,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1650,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-01-05",
        "winner": "サクラトゥジュール",
        "winnerPopularity": 6,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 1200,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-01-04",
        "winner": "ブエナオンダ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 780,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop23": {
        "count": 12,
        "wins": 0,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 64,
        "wins": 3,
        "placeRate": 9.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 19.4
      },
      "middle": {
        "count": 36,
        "placeRate": 22.2
      },
      "outer": {
        "count": 28,
        "placeRate": 10.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "京都２歳G3",
    "displayName": "京都2歳ステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-27",
        "winner": "ジャスティンロック",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 910,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-11-26",
        "winner": "グリューネグリーン",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 1440,
        "fieldSize": 15
      },
      {
        "year": 2023,
        "date": "2023-11-25",
        "winner": "シンエンペラー",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 370,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-11-23",
        "winner": "エリキング",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 190,
        "fieldSize": 8
      },
      {
        "year": 2025,
        "date": "2025-11-29",
        "winner": "ジャスティンビスタ",
        "winnerPopularity": 9,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 2500,
        "fieldSize": 11
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 20.0
      },
      "pop7plus": {
        "count": 28,
        "wins": 1,
        "placeRate": 17.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 16.7
      },
      "middle": {
        "count": 22,
        "placeRate": 27.3
      },
      "outer": {
        "count": 18,
        "placeRate": 33.3
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 2,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "京阪杯G3",
    "displayName": "京阪杯",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-11-28",
        "winner": "エイティーンガール",
        "winnerPopularity": 10,
        "winnerFrame": 1,
        "winnerStyle": "追込",
        "winPayout": 2250,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-11-27",
        "winner": "トウシンマカオ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-11-26",
        "winner": "トウシンマカオ",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 720,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-11-24",
        "winner": "ビッグシーザー",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 470,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-11-30",
        "winner": "エーティーマクフィ",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1170,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 2,
        "placeRate": 80.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 56,
        "wins": 2,
        "placeRate": 7.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 33.3
      },
      "middle": {
        "count": 30,
        "placeRate": 10.0
      },
      "outer": {
        "count": 26,
        "placeRate": 7.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "平安ＳG3",
    "displayName": "平安ステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "dirt",
    "distance": 1900,
    "editions": [
      {
        "year": 2021,
        "date": "2021-05-22",
        "winner": "オーヴェルニュ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-05-21",
        "winner": "テーオーケインズ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-05-20",
        "winner": "グロリアムンディ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 280,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-05-18",
        "winner": "ミトノオー",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "逃げ",
        "winPayout": 880,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-05-24",
        "winner": "アウトレンジ",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 600,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-05-23",
        "winner": "ロードクロンヌ",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 250,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 3,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 58.3
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 60,
        "wins": 0,
        "placeRate": 6.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 36,
        "placeRate": 25.0
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 24,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 5,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "葵ＳG3",
    "displayName": "葵ステークス",
    "grade": "G3",
    "place": "京都",
    "trackId": "kyoto",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2022,
        "date": "2022-05-28",
        "winner": "ウインマーベル",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 460,
        "fieldSize": 17
      },
      {
        "year": 2023,
        "date": "2023-05-27",
        "winner": "モズメイメイ",
        "winnerPopularity": 4,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 870,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-05-25",
        "winner": "ピューロマジック",
        "winnerPopularity": 8,
        "winnerFrame": 8,
        "winnerStyle": "逃げ",
        "winPayout": 2410,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-05-31",
        "winner": "アブキールベイ",
        "winnerPopularity": 15,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 6050,
        "fieldSize": 16
      },
      {
        "year": 2026,
        "date": "2026-05-30",
        "winner": "デアヴェローチェ",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 870,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 20.0
      },
      "pop46": {
        "count": 15,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 55,
        "wins": 2,
        "placeRate": 10.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 30,
        "placeRate": 13.3
      },
      "middle": {
        "count": 30,
        "placeRate": 13.3
      },
      "outer": {
        "count": 25,
        "placeRate": 28.0
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 1,
      "差し": 2,
      "追込": 0
    }
  },
  {
    "raceName": "しらさぎG3",
    "displayName": "しらさぎステークス",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2025,
        "date": "2025-06-22",
        "winner": "キープカルム",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "追込",
        "winPayout": 800,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-06-21",
        "winner": "エルトンバローズ",
        "winnerPopularity": 7,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 1290,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 0,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 4,
        "wins": 0,
        "placeRate": 0.0
      },
      "pop46": {
        "count": 6,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 20,
        "wins": 1,
        "placeRate": 10.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 10,
        "placeRate": 10.0
      },
      "middle": {
        "count": 12,
        "placeRate": 33.3
      },
      "outer": {
        "count": 10,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "アンタレG3",
    "displayName": "アンタレスステークス",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "dirt",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-18",
        "winner": "テーオーケインズ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 290,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-04-17",
        "winner": "オメガパフューム",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 380,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-04-16",
        "winner": "プロミストウォリア",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 190,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-04-14",
        "winner": "ミッキーヌチバナ",
        "winnerPopularity": 5,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 890,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-04-19",
        "winner": "ミッキーファイト",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 180,
        "fieldSize": 13
      },
      {
        "year": 2026,
        "date": "2026-04-18",
        "winner": "ムルソー",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "逃げ",
        "winPayout": 400,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 4,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop46": {
        "count": 18,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 55,
        "wins": 0,
        "placeRate": 9.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 31,
        "placeRate": 16.1
      },
      "middle": {
        "count": 36,
        "placeRate": 22.2
      },
      "outer": {
        "count": 24,
        "placeRate": 20.8
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 3,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "アーリンG3",
    "displayName": "アーリントンカップ",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2021,
        "date": "2021-04-17",
        "winner": "ホウオウアマゾン",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "先行",
        "winPayout": 340,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-04-16",
        "winner": "ダノンスコーピオン",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 250,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-04-15",
        "winner": "オオバンブルマイ",
        "winnerPopularity": 5,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 700,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-04-13",
        "winner": "ディスペランツァ",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 320,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 3,
        "placeRate": 75.0
      },
      "pop23": {
        "count": 8,
        "wins": 0,
        "placeRate": 12.5
      },
      "pop46": {
        "count": 12,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 46,
        "wins": 0,
        "placeRate": 8.7
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 24,
        "placeRate": 25.0
      },
      "middle": {
        "count": 24,
        "placeRate": 20.8
      },
      "outer": {
        "count": 22,
        "placeRate": 4.5
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "シリウスＨG3",
    "displayName": "シリウスステークス",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "dirt",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-10-02",
        "winner": "サンライズホープ",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "先行",
        "winPayout": 630,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-10-01",
        "winner": "ジュンライトボルト",
        "winnerPopularity": 4,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 770,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-09-30",
        "winner": "ハギノアレグリアス",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 310,
        "fieldSize": 14
      },
      {
        "year": 2024,
        "date": "2024-09-28",
        "winner": "ハギノアレグリアス",
        "winnerPopularity": 5,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1080,
        "fieldSize": 15
      },
      {
        "year": 2025,
        "date": "2025-09-27",
        "winner": "ホウオウルーレット",
        "winnerPopularity": 8,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 2350,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 0,
        "placeRate": 40.0
      },
      "pop46": {
        "count": 15,
        "wins": 3,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 45,
        "wins": 1,
        "placeRate": 8.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 25,
        "placeRate": 24.0
      },
      "middle": {
        "count": 30,
        "placeRate": 23.3
      },
      "outer": {
        "count": 20,
        "placeRate": 10.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 1
    }
  },
  {
    "raceName": "チャレンＨG3",
    "displayName": "チャレンジカップ",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2025,
        "date": "2025-09-13",
        "winner": "オールナット",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 470,
        "fieldSize": 15
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 1,
        "wins": 0,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 2,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 3,
        "wins": 0,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 9,
        "wins": 0,
        "placeRate": 0.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 5,
        "placeRate": 20.0
      },
      "middle": {
        "count": 6,
        "placeRate": 16.7
      },
      "outer": {
        "count": 4,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 0,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "チャーチG3",
    "displayName": "チャーチG3",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1600,
    "editions": [
      {
        "year": 2025,
        "date": "2025-04-05",
        "winner": "ランスオブカオス",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 300,
        "fieldSize": 11
      },
      {
        "year": 2026,
        "date": "2026-04-04",
        "winner": "アスクイキゴミ",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 1380,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 0,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 4,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 6,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 13,
        "wins": 0,
        "placeRate": 15.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 7,
        "placeRate": 0.0
      },
      "middle": {
        "count": 10,
        "placeRate": 40.0
      },
      "outer": {
        "count": 8,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 1,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "毎日杯G3",
    "displayName": "毎日杯",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-03-27",
        "winner": "シャフリヤール",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "差し",
        "winPayout": 290,
        "fieldSize": 9
      },
      {
        "year": 2022,
        "date": "2022-03-26",
        "winner": "ピースオブエイト",
        "winnerPopularity": 4,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 650,
        "fieldSize": 10
      },
      {
        "year": 2023,
        "date": "2023-03-25",
        "winner": "シーズンリッチ",
        "winnerPopularity": 5,
        "winnerFrame": 3,
        "winnerStyle": "差し",
        "winPayout": 1160,
        "fieldSize": 13
      },
      {
        "year": 2024,
        "date": "2024-03-23",
        "winner": "メイショウタバル",
        "winnerPopularity": 5,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 940,
        "fieldSize": 10
      },
      {
        "year": 2025,
        "date": "2025-03-29",
        "winner": "ファンダム",
        "winnerPopularity": 2,
        "winnerFrame": 7,
        "winnerStyle": "追込",
        "winPayout": 450,
        "fieldSize": 10
      },
      {
        "year": 2026,
        "date": "2026-03-28",
        "winner": "アルトラムス",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 240,
        "fieldSize": 7
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 3,
        "placeRate": 38.9
      },
      "pop7plus": {
        "count": 22,
        "wins": 0,
        "placeRate": 9.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 18,
        "placeRate": 44.4
      },
      "middle": {
        "count": 21,
        "placeRate": 28.6
      },
      "outer": {
        "count": 19,
        "placeRate": 21.1
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 0,
      "差し": 3,
      "追込": 1
    }
  },
  {
    "raceName": "阪急杯G3",
    "displayName": "阪急杯",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1400,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-28",
        "winner": "レシステンシア",
        "winnerPopularity": 1,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 240,
        "fieldSize": 17
      },
      {
        "year": 2022,
        "date": "2022-02-27",
        "winner": "ダイアトニック",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 310,
        "fieldSize": 14
      },
      {
        "year": 2023,
        "date": "2023-02-26",
        "winner": "アグリ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 380,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-02-25",
        "winner": "ウインマーベル",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 340,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-02-22",
        "winner": "カンチェンジュンガ",
        "winnerPopularity": 7,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 1860,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-02-21",
        "winner": "ソンシ",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 420,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 4,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 41.7
      },
      "pop46": {
        "count": 18,
        "wins": 0,
        "placeRate": 22.2
      },
      "pop7plus": {
        "count": 64,
        "wins": 1,
        "placeRate": 7.8
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 27.3
      },
      "middle": {
        "count": 36,
        "placeRate": 11.1
      },
      "outer": {
        "count": 31,
        "placeRate": 16.1
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 4,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "鳴尾記念G3",
    "displayName": "鳴尾記念",
    "grade": "G3",
    "place": "阪神",
    "trackId": "hanshin",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-06-05",
        "winner": "ユニコーンライオン",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 2060,
        "fieldSize": 13
      },
      {
        "year": 2022,
        "date": "2022-06-04",
        "winner": "ヴェルトライゼンデ",
        "winnerPopularity": 2,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 490,
        "fieldSize": 10
      },
      {
        "year": 2023,
        "date": "2023-06-03",
        "winner": "ボッケリーニ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 1120,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-06-01",
        "winner": "ヨーホーレイク",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 250,
        "fieldSize": 14
      },
      {
        "year": 2025,
        "date": "2025-12-06",
        "winner": "デビットバローズ",
        "winnerPopularity": 2,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 430,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 20.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 35,
        "wins": 1,
        "placeRate": 8.6
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 42.1
      },
      "middle": {
        "count": 26,
        "placeRate": 15.4
      },
      "outer": {
        "count": 20,
        "placeRate": 15.0
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "プロキオG3",
    "displayName": "プロキオンステークス",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "dirt",
    "distance": 1700,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-11",
        "winner": "メイショウカズサ",
        "winnerPopularity": 9,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 1980,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-07-10",
        "winner": "ゲンパチルシファー",
        "winnerPopularity": 4,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 700,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-07-09",
        "winner": "ドンフランキー",
        "winnerPopularity": 2,
        "winnerFrame": 4,
        "winnerStyle": "逃げ",
        "winPayout": 480,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-07-07",
        "winner": "ヤマニンウルス",
        "winnerPopularity": 1,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 170,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 8,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 12,
        "wins": 1,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 39,
        "wins": 1,
        "placeRate": 15.4
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 23,
        "placeRate": 17.4
      },
      "middle": {
        "count": 24,
        "placeRate": 25.0
      },
      "outer": {
        "count": 16,
        "placeRate": 12.5
      }
    },
    "styleWins": {
      "逃げ": 1,
      "先行": 3,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "中京記念ＨG3",
    "displayName": "中京記念",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-07-18",
        "winner": "アンドラステ",
        "winnerPopularity": 1,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 440,
        "fieldSize": 12
      },
      {
        "year": 2022,
        "date": "2022-07-24",
        "winner": "ベレヌス",
        "winnerPopularity": 6,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 1160,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-07-23",
        "winner": "セルバーグ",
        "winnerPopularity": 8,
        "winnerFrame": 3,
        "winnerStyle": "逃げ",
        "winPayout": 1660,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-07-21",
        "winner": "アルナシーム",
        "winnerPopularity": 5,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 820,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 1,
        "placeRate": 100.0
      },
      "pop23": {
        "count": 8,
        "wins": 0,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 12,
        "wins": 2,
        "placeRate": 33.3
      },
      "pop7plus": {
        "count": 34,
        "wins": 1,
        "placeRate": 5.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 19,
        "placeRate": 15.8
      },
      "middle": {
        "count": 23,
        "placeRate": 21.7
      },
      "outer": {
        "count": 16,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 2,
      "差し": 0,
      "追込": 0
    }
  },
  {
    "raceName": "北九州記ＨG3",
    "displayName": "北九州記念",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 1200,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-22",
        "winner": "ヨカヨカ",
        "winnerPopularity": 5,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 880,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-08-21",
        "winner": "ボンボヤージ",
        "winnerPopularity": 16,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 16430,
        "fieldSize": 18
      },
      {
        "year": 2023,
        "date": "2023-08-20",
        "winner": "ジャスパークローネ",
        "winnerPopularity": 5,
        "winnerFrame": 7,
        "winnerStyle": "逃げ",
        "winPayout": 1310,
        "fieldSize": 18
      },
      {
        "year": 2024,
        "date": "2024-06-30",
        "winner": "ピューロマジック",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "逃げ",
        "winPayout": 730,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-07-06",
        "winner": "ヤマニンアルリフラ",
        "winnerPopularity": 1,
        "winnerFrame": 5,
        "winnerStyle": "差し",
        "winPayout": 570,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-07-05",
        "winner": "フリッカージャブ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 300,
        "fieldSize": 13
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 2,
        "placeRate": 66.7
      },
      "pop23": {
        "count": 12,
        "wins": 1,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 27.8
      },
      "pop7plus": {
        "count": 67,
        "wins": 1,
        "placeRate": 9.0
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 33,
        "placeRate": 15.2
      },
      "middle": {
        "count": 36,
        "placeRate": 16.7
      },
      "outer": {
        "count": 34,
        "placeRate": 20.6
      }
    },
    "styleWins": {
      "逃げ": 2,
      "先行": 3,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "小倉大賞ＨG3",
    "displayName": "小倉大賞典",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 1800,
    "editions": [
      {
        "year": 2021,
        "date": "2021-02-21",
        "winner": "テリトーリアル",
        "winnerPopularity": 11,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 2380,
        "fieldSize": 16
      },
      {
        "year": 2022,
        "date": "2022-02-20",
        "winner": "アリーヴォ",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 440,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-02-19",
        "winner": "ヒンドゥタイムズ",
        "winnerPopularity": 2,
        "winnerFrame": 3,
        "winnerStyle": "先行",
        "winPayout": 490,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-02-18",
        "winner": "エピファニー",
        "winnerPopularity": 3,
        "winnerFrame": 6,
        "winnerStyle": "先行",
        "winPayout": 580,
        "fieldSize": 16
      },
      {
        "year": 2025,
        "date": "2025-02-23",
        "winner": "ロングラン",
        "winnerPopularity": 4,
        "winnerFrame": 2,
        "winnerStyle": "差し",
        "winPayout": 660,
        "fieldSize": 14
      },
      {
        "year": 2026,
        "date": "2026-02-22",
        "winner": "タガノデュード",
        "winnerPopularity": 4,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 740,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 6,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 12,
        "wins": 2,
        "placeRate": 25.0
      },
      "pop46": {
        "count": 18,
        "wins": 2,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 56,
        "wins": 1,
        "placeRate": 16.1
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 32,
        "placeRate": 15.6
      },
      "middle": {
        "count": 36,
        "placeRate": 25.0
      },
      "outer": {
        "count": 24,
        "placeRate": 16.7
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 3,
      "追込": 0
    }
  },
  {
    "raceName": "小倉牝馬ＨG3",
    "displayName": "小倉牝馬ステークス",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2025,
        "date": "2025-01-25",
        "winner": "フェアエールング",
        "winnerPopularity": 7,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 680,
        "fieldSize": 18
      },
      {
        "year": 2025,
        "date": "2025-01-25",
        "winner": "シンティレーション",
        "winnerPopularity": 3,
        "winnerFrame": 4,
        "winnerStyle": "差し",
        "winPayout": 410,
        "fieldSize": 18
      },
      {
        "year": 2026,
        "date": "2026-01-24",
        "winner": "ジョスラン",
        "winnerPopularity": 1,
        "winnerFrame": 8,
        "winnerStyle": "先行",
        "winPayout": 360,
        "fieldSize": 18
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 2,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 4,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 6,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 24,
        "wins": 1,
        "placeRate": 8.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 12,
        "placeRate": 8.3
      },
      "middle": {
        "count": 12,
        "placeRate": 16.7
      },
      "outer": {
        "count": 12,
        "placeRate": 25.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 1,
      "追込": 0
    }
  },
  {
    "raceName": "小倉記念ＨG3",
    "displayName": "小倉記念",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-08-15",
        "winner": "モズナガレボシ",
        "winnerPopularity": 6,
        "winnerFrame": 8,
        "winnerStyle": "追込",
        "winPayout": 960,
        "fieldSize": 10
      },
      {
        "year": 2022,
        "date": "2022-08-14",
        "winner": "マリアエレーナ",
        "winnerPopularity": 2,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 500,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-08-13",
        "winner": "エヒト",
        "winnerPopularity": 3,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 680,
        "fieldSize": 16
      },
      {
        "year": 2024,
        "date": "2024-08-11",
        "winner": "リフレーミング",
        "winnerPopularity": 1,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 420,
        "fieldSize": 12
      },
      {
        "year": 2025,
        "date": "2025-07-20",
        "winner": "イングランドアイズ",
        "winnerPopularity": 9,
        "winnerFrame": 1,
        "winnerStyle": "先行",
        "winPayout": 1630,
        "fieldSize": 16
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 5,
        "wins": 1,
        "placeRate": 40.0
      },
      "pop23": {
        "count": 10,
        "wins": 2,
        "placeRate": 60.0
      },
      "pop46": {
        "count": 15,
        "wins": 1,
        "placeRate": 26.7
      },
      "pop7plus": {
        "count": 38,
        "wins": 1,
        "placeRate": 7.9
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 23,
        "placeRate": 30.4
      },
      "middle": {
        "count": 25,
        "placeRate": 8.0
      },
      "outer": {
        "count": 20,
        "placeRate": 30.0
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 3,
      "差し": 1,
      "追込": 1
    }
  },
  {
    "raceName": "愛知杯ＨG3",
    "displayName": "愛知杯",
    "grade": "G3",
    "place": "小倉",
    "trackId": "kokura",
    "surface": "turf",
    "distance": 2000,
    "editions": [
      {
        "year": 2021,
        "date": "2021-01-16",
        "winner": "マジックキャッスル",
        "winnerPopularity": 2,
        "winnerFrame": 8,
        "winnerStyle": "差し",
        "winPayout": 630,
        "fieldSize": 18
      },
      {
        "year": 2022,
        "date": "2022-01-15",
        "winner": "ルビーカサブランカ",
        "winnerPopularity": 7,
        "winnerFrame": 1,
        "winnerStyle": "差し",
        "winPayout": 1270,
        "fieldSize": 16
      },
      {
        "year": 2023,
        "date": "2023-01-14",
        "winner": "アートハウス",
        "winnerPopularity": 1,
        "winnerFrame": 2,
        "winnerStyle": "先行",
        "winPayout": 390,
        "fieldSize": 15
      },
      {
        "year": 2024,
        "date": "2024-01-13",
        "winner": "ミッキーゴージャス",
        "winnerPopularity": 1,
        "winnerFrame": 7,
        "winnerStyle": "先行",
        "winPayout": 200,
        "fieldSize": 14
      }
    ],
    "popularityStats": {
      "pop1": {
        "count": 4,
        "wins": 2,
        "placeRate": 50.0
      },
      "pop23": {
        "count": 8,
        "wins": 1,
        "placeRate": 50.0
      },
      "pop46": {
        "count": 12,
        "wins": 0,
        "placeRate": 16.7
      },
      "pop7plus": {
        "count": 39,
        "wins": 1,
        "placeRate": 10.3
      }
    },
    "frameBandStats": {
      "inner": {
        "count": 21,
        "placeRate": 33.3
      },
      "middle": {
        "count": 24,
        "placeRate": 4.2
      },
      "outer": {
        "count": 18,
        "placeRate": 22.2
      }
    },
    "styleWins": {
      "逃げ": 0,
      "先行": 2,
      "差し": 2,
      "追込": 0
    }
  }
]
