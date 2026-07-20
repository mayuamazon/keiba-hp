// このファイルは scripts/jravan/export_jockeys.py により生成されます（手動編集は上書きされます）
// 出典: JRA-VAN 2021-2026 全着順データ 自社集計
// 掲載条件: 最終騎乗日 2026-01-20 以降（引退者除外）・全国200騎乗以上 / 場別50騎乗以上

export interface JockeyRankRow {
  name: string
  rides: number
  wins: number
  winRate: number
  placeRate: number
  winRoi: number
}

/** キー: `{trackId|"all"}-{turf|dirt|"all"}-{sprint|mile|middle|long|"all"}` */
export const jockeyRankings: Record<string, JockeyRankRow[]> = {
  "all-all-all": [
    {
      "name": "ルメール",
      "rides": 2112,
      "wins": 504,
      "winRate": 23.9,
      "placeRate": 53.1,
      "winRoi": 73.0
    },
    {
      "name": "川田将雅",
      "rides": 1817,
      "wins": 461,
      "winRate": 25.4,
      "placeRate": 55.4,
      "winRoi": 83.1
    },
    {
      "name": "戸崎圭太",
      "rides": 2561,
      "wins": 368,
      "winRate": 14.4,
      "placeRate": 37.2,
      "winRoi": 74.0
    },
    {
      "name": "松山弘平",
      "rides": 2767,
      "wins": 367,
      "winRate": 13.3,
      "placeRate": 34.4,
      "winRoi": 75.4
    },
    {
      "name": "岩田望来",
      "rides": 2651,
      "wins": 333,
      "winRate": 12.6,
      "placeRate": 33.0,
      "winRoi": 89.5
    },
    {
      "name": "横山武史",
      "rides": 2505,
      "wins": 322,
      "winRate": 12.9,
      "placeRate": 34.1,
      "winRoi": 68.2
    },
    {
      "name": "坂井瑠星",
      "rides": 2241,
      "wins": 297,
      "winRate": 13.3,
      "placeRate": 34.4,
      "winRoi": 70.9
    },
    {
      "name": "武豊",
      "rides": 1989,
      "wins": 251,
      "winRate": 12.6,
      "placeRate": 35.7,
      "winRoi": 76.0
    },
    {
      "name": "鮫島克駿",
      "rides": 2698,
      "wins": 233,
      "winRate": 8.6,
      "placeRate": 26.2,
      "winRoi": 73.8
    },
    {
      "name": "西村淳也",
      "rides": 2327,
      "wins": 228,
      "winRate": 9.8,
      "placeRate": 28.3,
      "winRoi": 86.1
    },
    {
      "name": "横山和生",
      "rides": 1913,
      "wins": 224,
      "winRate": 11.7,
      "placeRate": 30.2,
      "winRoi": 90.3
    },
    {
      "name": "丹内祐次",
      "rides": 2748,
      "wins": 217,
      "winRate": 7.9,
      "placeRate": 26.3,
      "winRoi": 87.7
    },
    {
      "name": "菅原明良",
      "rides": 2393,
      "wins": 202,
      "winRate": 8.4,
      "placeRate": 25.7,
      "winRoi": 78.2
    },
    {
      "name": "団野大成",
      "rides": 2220,
      "wins": 177,
      "winRate": 8.0,
      "placeRate": 26.3,
      "winRoi": 81.8
    },
    {
      "name": "幸英明",
      "rides": 2499,
      "wins": 174,
      "winRate": 7.0,
      "placeRate": 22.2,
      "winRoi": 69.4
    },
    {
      "name": "吉田隼人",
      "rides": 1708,
      "wins": 153,
      "winRate": 9.0,
      "placeRate": 27.2,
      "winRoi": 73.6
    },
    {
      "name": "三浦皇成",
      "rides": 2084,
      "wins": 151,
      "winRate": 7.2,
      "placeRate": 26.7,
      "winRoi": 59.2
    },
    {
      "name": "田辺裕信",
      "rides": 1678,
      "wins": 151,
      "winRate": 9.0,
      "placeRate": 27.2,
      "winRoi": 96.4
    },
    {
      "name": "津村明秀",
      "rides": 2036,
      "wins": 145,
      "winRate": 7.1,
      "placeRate": 23.3,
      "winRoi": 77.2
    },
    {
      "name": "佐々木大",
      "rides": 1734,
      "wins": 145,
      "winRate": 8.4,
      "placeRate": 23.4,
      "winRoi": 85.0
    }
  ],
  "all-all-sprint": [
    {
      "name": "松山弘平",
      "rides": 1024,
      "wins": 145,
      "winRate": 14.2,
      "placeRate": 33.8,
      "winRoi": 88.3
    },
    {
      "name": "川田将雅",
      "rides": 557,
      "wins": 134,
      "winRate": 24.1,
      "placeRate": 51.3,
      "winRoi": 81.7
    },
    {
      "name": "岩田望来",
      "rides": 1010,
      "wins": 124,
      "winRate": 12.3,
      "placeRate": 32.0,
      "winRoi": 100.4
    },
    {
      "name": "戸崎圭太",
      "rides": 825,
      "wins": 122,
      "winRate": 14.8,
      "placeRate": 35.2,
      "winRoi": 76.3
    },
    {
      "name": "ルメール",
      "rides": 599,
      "wins": 118,
      "winRate": 19.7,
      "placeRate": 46.6,
      "winRoi": 65.8
    },
    {
      "name": "坂井瑠星",
      "rides": 807,
      "wins": 103,
      "winRate": 12.8,
      "placeRate": 34.1,
      "winRoi": 71.1
    },
    {
      "name": "鮫島克駿",
      "rides": 1050,
      "wins": 99,
      "winRate": 9.4,
      "placeRate": 26.3,
      "winRoi": 66.8
    },
    {
      "name": "横山武史",
      "rides": 822,
      "wins": 95,
      "winRate": 11.6,
      "placeRate": 34.4,
      "winRoi": 64.1
    },
    {
      "name": "菅原明良",
      "rides": 867,
      "wins": 89,
      "winRate": 10.3,
      "placeRate": 27.0,
      "winRoi": 85.8
    },
    {
      "name": "武豊",
      "rides": 734,
      "wins": 87,
      "winRate": 11.9,
      "placeRate": 34.1,
      "winRoi": 79.8
    },
    {
      "name": "団野大成",
      "rides": 907,
      "wins": 84,
      "winRate": 9.3,
      "placeRate": 25.8,
      "winRoi": 106.8
    },
    {
      "name": "幸英明",
      "rides": 997,
      "wins": 75,
      "winRate": 7.5,
      "placeRate": 21.4,
      "winRoi": 78.8
    },
    {
      "name": "丹内祐次",
      "rides": 995,
      "wins": 73,
      "winRate": 7.3,
      "placeRate": 24.7,
      "winRoi": 90.6
    },
    {
      "name": "西村淳也",
      "rides": 901,
      "wins": 66,
      "winRate": 7.3,
      "placeRate": 23.6,
      "winRoi": 65.9
    },
    {
      "name": "三浦皇成",
      "rides": 736,
      "wins": 64,
      "winRate": 8.7,
      "placeRate": 28.7,
      "winRoi": 71.5
    },
    {
      "name": "横山和生",
      "rides": 609,
      "wins": 56,
      "winRate": 9.2,
      "placeRate": 28.2,
      "winRoi": 92.9
    },
    {
      "name": "斎藤新",
      "rides": 789,
      "wins": 53,
      "winRate": 6.7,
      "placeRate": 19.1,
      "winRoi": 109.4
    },
    {
      "name": "荻野極",
      "rides": 616,
      "wins": 51,
      "winRate": 8.3,
      "placeRate": 22.2,
      "winRoi": 107.6
    },
    {
      "name": "北村友一",
      "rides": 545,
      "wins": 50,
      "winRate": 9.2,
      "placeRate": 24.2,
      "winRoi": 67.4
    },
    {
      "name": "津村明秀",
      "rides": 743,
      "wins": 49,
      "winRate": 6.6,
      "placeRate": 21.4,
      "winRoi": 71.0
    }
  ],
  "all-all-mile": [
    {
      "name": "ルメール",
      "rides": 488,
      "wins": 121,
      "winRate": 24.8,
      "placeRate": 52.5,
      "winRoi": 78.1
    },
    {
      "name": "川田将雅",
      "rides": 289,
      "wins": 71,
      "winRate": 24.6,
      "placeRate": 55.0,
      "winRoi": 106.3
    },
    {
      "name": "戸崎圭太",
      "rides": 534,
      "wins": 66,
      "winRate": 12.4,
      "placeRate": 34.5,
      "winRoi": 74.6
    },
    {
      "name": "横山武史",
      "rides": 475,
      "wins": 51,
      "winRate": 10.7,
      "placeRate": 30.9,
      "winRoi": 64.5
    },
    {
      "name": "松山弘平",
      "rides": 368,
      "wins": 44,
      "winRate": 12.0,
      "placeRate": 29.9,
      "winRoi": 86.8
    },
    {
      "name": "岩田望来",
      "rides": 347,
      "wins": 43,
      "winRate": 12.4,
      "placeRate": 32.3,
      "winRoi": 87.2
    },
    {
      "name": "坂井瑠星",
      "rides": 307,
      "wins": 40,
      "winRate": 13.0,
      "placeRate": 32.6,
      "winRoi": 72.4
    },
    {
      "name": "横山和生",
      "rides": 322,
      "wins": 38,
      "winRate": 11.8,
      "placeRate": 29.5,
      "winRoi": 79.8
    },
    {
      "name": "Ｍ．デム",
      "rides": 307,
      "wins": 36,
      "winRate": 11.7,
      "placeRate": 32.2,
      "winRoi": 74.5
    },
    {
      "name": "菅原明良",
      "rides": 448,
      "wins": 35,
      "winRate": 7.8,
      "placeRate": 25.4,
      "winRoi": 85.1
    },
    {
      "name": "田辺裕信",
      "rides": 364,
      "wins": 27,
      "winRate": 7.4,
      "placeRate": 24.2,
      "winRoi": 80.5
    },
    {
      "name": "三浦皇成",
      "rides": 445,
      "wins": 26,
      "winRate": 5.8,
      "placeRate": 22.7,
      "winRoi": 48.0
    },
    {
      "name": "津村明秀",
      "rides": 383,
      "wins": 25,
      "winRate": 6.5,
      "placeRate": 23.8,
      "winRoi": 93.3
    },
    {
      "name": "大野拓弥",
      "rides": 355,
      "wins": 23,
      "winRate": 6.5,
      "placeRate": 22.3,
      "winRoi": 84.2
    },
    {
      "name": "武豊",
      "rides": 274,
      "wins": 23,
      "winRate": 8.4,
      "placeRate": 28.8,
      "winRoi": 65.7
    },
    {
      "name": "横山典弘",
      "rides": 239,
      "wins": 23,
      "winRate": 9.6,
      "placeRate": 26.8,
      "winRoi": 72.8
    },
    {
      "name": "西村淳也",
      "rides": 214,
      "wins": 18,
      "winRate": 8.4,
      "placeRate": 30.8,
      "winRoi": 134.8
    },
    {
      "name": "石川裕紀",
      "rides": 323,
      "wins": 17,
      "winRate": 5.3,
      "placeRate": 19.8,
      "winRoi": 85.2
    },
    {
      "name": "鮫島克駿",
      "rides": 245,
      "wins": 17,
      "winRate": 6.9,
      "placeRate": 19.6,
      "winRoi": 151.7
    },
    {
      "name": "団野大成",
      "rides": 210,
      "wins": 16,
      "winRate": 7.6,
      "placeRate": 29.5,
      "winRoi": 85.9
    }
  ],
  "all-all-middle": [
    {
      "name": "川田将雅",
      "rides": 852,
      "wins": 228,
      "winRate": 26.8,
      "placeRate": 59.0,
      "winRoi": 79.3
    },
    {
      "name": "ルメール",
      "rides": 837,
      "wins": 204,
      "winRate": 24.4,
      "placeRate": 54.1,
      "winRoi": 69.4
    },
    {
      "name": "松山弘平",
      "rides": 1235,
      "wins": 165,
      "winRate": 13.4,
      "placeRate": 36.8,
      "winRoi": 66.1
    },
    {
      "name": "横山武史",
      "rides": 1038,
      "wins": 160,
      "winRate": 15.4,
      "placeRate": 36.1,
      "winRoi": 78.0
    },
    {
      "name": "戸崎圭太",
      "rides": 1010,
      "wins": 159,
      "winRate": 15.7,
      "placeRate": 40.1,
      "winRoi": 74.3
    },
    {
      "name": "岩田望来",
      "rides": 1163,
      "wins": 153,
      "winRate": 13.2,
      "placeRate": 34.8,
      "winRoi": 85.0
    },
    {
      "name": "坂井瑠星",
      "rides": 997,
      "wins": 138,
      "winRate": 13.8,
      "placeRate": 34.9,
      "winRoi": 65.1
    },
    {
      "name": "西村淳也",
      "rides": 1101,
      "wins": 131,
      "winRate": 11.9,
      "placeRate": 31.4,
      "winRoi": 96.8
    },
    {
      "name": "武豊",
      "rides": 861,
      "wins": 125,
      "winRate": 14.5,
      "placeRate": 39.6,
      "winRoi": 77.9
    },
    {
      "name": "丹内祐次",
      "rides": 1309,
      "wins": 108,
      "winRate": 8.3,
      "placeRate": 28.1,
      "winRoi": 89.4
    },
    {
      "name": "横山和生",
      "rides": 835,
      "wins": 108,
      "winRate": 12.9,
      "placeRate": 31.3,
      "winRoi": 91.2
    },
    {
      "name": "鮫島克駿",
      "rides": 1246,
      "wins": 101,
      "winRate": 8.1,
      "placeRate": 27.7,
      "winRoi": 62.8
    },
    {
      "name": "吉田隼人",
      "rides": 807,
      "wins": 89,
      "winRate": 11.0,
      "placeRate": 31.8,
      "winRoi": 90.2
    },
    {
      "name": "幸英明",
      "rides": 1157,
      "wins": 84,
      "winRate": 7.3,
      "placeRate": 23.9,
      "winRoi": 67.6
    },
    {
      "name": "団野大成",
      "rides": 1013,
      "wins": 74,
      "winRate": 7.3,
      "placeRate": 26.5,
      "winRoi": 61.9
    },
    {
      "name": "藤岡佑介",
      "rides": 671,
      "wins": 74,
      "winRate": 11.0,
      "placeRate": 31.1,
      "winRoi": 82.7
    },
    {
      "name": "池添謙一",
      "rides": 651,
      "wins": 70,
      "winRate": 10.8,
      "placeRate": 28.1,
      "winRoi": 91.4
    },
    {
      "name": "田辺裕信",
      "rides": 664,
      "wins": 69,
      "winRate": 10.4,
      "placeRate": 29.7,
      "winRoi": 91.3
    },
    {
      "name": "斎藤新",
      "rides": 900,
      "wins": 67,
      "winRate": 7.4,
      "placeRate": 19.7,
      "winRoi": 90.4
    },
    {
      "name": "佐々木大",
      "rides": 746,
      "wins": 65,
      "winRate": 8.7,
      "placeRate": 24.0,
      "winRoi": 73.8
    }
  ],
  "all-all-long": [
    {
      "name": "丹内祐次",
      "rides": 251,
      "wins": 24,
      "winRate": 9.6,
      "placeRate": 31.1,
      "winRoi": 81.3
    }
  ],
  "all-turf-all": [
    {
      "name": "ルメール",
      "rides": 1282,
      "wins": 324,
      "winRate": 25.3,
      "placeRate": 56.9,
      "winRoi": 79.1
    },
    {
      "name": "川田将雅",
      "rides": 1060,
      "wins": 274,
      "winRate": 25.8,
      "placeRate": 56.2,
      "winRoi": 88.6
    },
    {
      "name": "戸崎圭太",
      "rides": 1398,
      "wins": 187,
      "winRate": 13.4,
      "placeRate": 36.8,
      "winRoi": 68.9
    },
    {
      "name": "横山武史",
      "rides": 1411,
      "wins": 182,
      "winRate": 12.9,
      "placeRate": 36.0,
      "winRoi": 70.8
    },
    {
      "name": "岩田望来",
      "rides": 1325,
      "wins": 177,
      "winRate": 13.4,
      "placeRate": 34.9,
      "winRoi": 102.3
    },
    {
      "name": "松山弘平",
      "rides": 1400,
      "wins": 166,
      "winRate": 11.9,
      "placeRate": 31.3,
      "winRoi": 64.7
    },
    {
      "name": "坂井瑠星",
      "rides": 1157,
      "wins": 150,
      "winRate": 13.0,
      "placeRate": 33.8,
      "winRoi": 80.4
    },
    {
      "name": "丹内祐次",
      "rides": 1551,
      "wins": 135,
      "winRate": 8.7,
      "placeRate": 28.3,
      "winRoi": 88.5
    },
    {
      "name": "武豊",
      "rides": 1151,
      "wins": 135,
      "winRate": 11.7,
      "placeRate": 33.8,
      "winRoi": 65.9
    },
    {
      "name": "西村淳也",
      "rides": 1186,
      "wins": 124,
      "winRate": 10.5,
      "placeRate": 29.4,
      "winRoi": 100.9
    },
    {
      "name": "横山和生",
      "rides": 1021,
      "wins": 124,
      "winRate": 12.1,
      "placeRate": 29.1,
      "winRoi": 87.9
    },
    {
      "name": "鮫島克駿",
      "rides": 1379,
      "wins": 114,
      "winRate": 8.3,
      "placeRate": 25.6,
      "winRoi": 87.0
    },
    {
      "name": "菅原明良",
      "rides": 1189,
      "wins": 111,
      "winRate": 9.3,
      "placeRate": 27.1,
      "winRoi": 82.0
    },
    {
      "name": "津村明秀",
      "rides": 1087,
      "wins": 87,
      "winRate": 8.0,
      "placeRate": 26.0,
      "winRoi": 105.3
    },
    {
      "name": "Ｍ．デム",
      "rides": 902,
      "wins": 87,
      "winRate": 9.6,
      "placeRate": 30.7,
      "winRoi": 70.3
    },
    {
      "name": "池添謙一",
      "rides": 894,
      "wins": 87,
      "winRate": 9.7,
      "placeRate": 27.0,
      "winRoi": 88.8
    },
    {
      "name": "藤岡佑介",
      "rides": 879,
      "wins": 87,
      "winRate": 9.9,
      "placeRate": 30.1,
      "winRoi": 73.5
    },
    {
      "name": "佐々木大",
      "rides": 891,
      "wins": 85,
      "winRate": 9.5,
      "placeRate": 25.5,
      "winRoi": 79.1
    },
    {
      "name": "吉田隼人",
      "rides": 998,
      "wins": 84,
      "winRate": 8.4,
      "placeRate": 26.9,
      "winRoi": 76.5
    },
    {
      "name": "田辺裕信",
      "rides": 845,
      "wins": 84,
      "winRate": 9.9,
      "placeRate": 29.9,
      "winRoi": 121.7
    }
  ],
  "all-turf-sprint": [
    {
      "name": "ルメール",
      "rides": 272,
      "wins": 59,
      "winRate": 21.7,
      "placeRate": 51.5,
      "winRoi": 75.0
    },
    {
      "name": "岩田望来",
      "rides": 372,
      "wins": 53,
      "winRate": 14.2,
      "placeRate": 36.3,
      "winRoi": 158.6
    },
    {
      "name": "武豊",
      "rides": 354,
      "wins": 49,
      "winRate": 13.8,
      "placeRate": 35.9,
      "winRoi": 83.9
    },
    {
      "name": "横山武史",
      "rides": 350,
      "wins": 49,
      "winRate": 14.0,
      "placeRate": 41.4,
      "winRoi": 84.7
    },
    {
      "name": "鮫島克駿",
      "rides": 487,
      "wins": 46,
      "winRate": 9.4,
      "placeRate": 27.5,
      "winRoi": 65.4
    },
    {
      "name": "戸崎圭太",
      "rides": 325,
      "wins": 46,
      "winRate": 14.2,
      "placeRate": 35.4,
      "winRoi": 72.0
    },
    {
      "name": "丹内祐次",
      "rides": 554,
      "wins": 44,
      "winRate": 7.9,
      "placeRate": 28.0,
      "winRoi": 79.8
    },
    {
      "name": "松山弘平",
      "rides": 384,
      "wins": 43,
      "winRate": 11.2,
      "placeRate": 29.2,
      "winRoi": 65.7
    },
    {
      "name": "坂井瑠星",
      "rides": 310,
      "wins": 43,
      "winRate": 13.9,
      "placeRate": 34.5,
      "winRoi": 94.6
    },
    {
      "name": "川田将雅",
      "rides": 204,
      "wins": 42,
      "winRate": 20.6,
      "placeRate": 46.1,
      "winRoi": 82.3
    },
    {
      "name": "幸英明",
      "rides": 381,
      "wins": 40,
      "winRate": 10.5,
      "placeRate": 24.1,
      "winRoi": 125.4
    },
    {
      "name": "菅原明良",
      "rides": 346,
      "wins": 39,
      "winRate": 11.3,
      "placeRate": 26.6,
      "winRoi": 82.7
    },
    {
      "name": "団野大成",
      "rides": 387,
      "wins": 34,
      "winRate": 8.8,
      "placeRate": 27.4,
      "winRoi": 82.7
    },
    {
      "name": "横山和生",
      "rides": 281,
      "wins": 30,
      "winRate": 10.7,
      "placeRate": 29.2,
      "winRoi": 74.7
    },
    {
      "name": "西村淳也",
      "rides": 401,
      "wins": 29,
      "winRate": 7.2,
      "placeRate": 23.9,
      "winRoi": 48.1
    },
    {
      "name": "荻野極",
      "rides": 319,
      "wins": 28,
      "winRate": 8.8,
      "placeRate": 21.6,
      "winRoi": 111.2
    },
    {
      "name": "北村友一",
      "rides": 273,
      "wins": 28,
      "winRate": 10.3,
      "placeRate": 26.4,
      "winRoi": 62.2
    },
    {
      "name": "浜中俊",
      "rides": 265,
      "wins": 28,
      "winRate": 10.6,
      "placeRate": 27.5,
      "winRoi": 81.4
    },
    {
      "name": "斎藤新",
      "rides": 437,
      "wins": 27,
      "winRate": 6.2,
      "placeRate": 16.5,
      "winRoi": 117.2
    },
    {
      "name": "佐々木大",
      "rides": 315,
      "wins": 23,
      "winRate": 7.3,
      "placeRate": 23.5,
      "winRoi": 81.4
    }
  ],
  "all-turf-mile": [
    {
      "name": "ルメール",
      "rides": 312,
      "wins": 75,
      "winRate": 24.0,
      "placeRate": 52.2,
      "winRoi": 76.4
    },
    {
      "name": "川田将雅",
      "rides": 254,
      "wins": 62,
      "winRate": 24.4,
      "placeRate": 55.9,
      "winRoi": 109.5
    },
    {
      "name": "岩田望来",
      "rides": 288,
      "wins": 37,
      "winRate": 12.8,
      "placeRate": 33.7,
      "winRoi": 64.4
    },
    {
      "name": "戸崎圭太",
      "rides": 317,
      "wins": 36,
      "winRate": 11.4,
      "placeRate": 33.8,
      "winRoi": 71.0
    },
    {
      "name": "松山弘平",
      "rides": 302,
      "wins": 36,
      "winRate": 11.9,
      "placeRate": 29.1,
      "winRoi": 84.7
    },
    {
      "name": "坂井瑠星",
      "rides": 259,
      "wins": 34,
      "winRate": 13.1,
      "placeRate": 31.3,
      "winRoi": 71.0
    },
    {
      "name": "横山武史",
      "rides": 321,
      "wins": 33,
      "winRate": 10.3,
      "placeRate": 32.4,
      "winRoi": 50.9
    },
    {
      "name": "Ｍ．デム",
      "rides": 221,
      "wins": 29,
      "winRate": 13.1,
      "placeRate": 33.9,
      "winRoi": 73.9
    },
    {
      "name": "菅原明良",
      "rides": 257,
      "wins": 24,
      "winRate": 9.3,
      "placeRate": 26.1,
      "winRoi": 81.0
    },
    {
      "name": "津村明秀",
      "rides": 236,
      "wins": 19,
      "winRate": 8.1,
      "placeRate": 26.7,
      "winRoi": 143.5
    },
    {
      "name": "武豊",
      "rides": 230,
      "wins": 17,
      "winRate": 7.4,
      "placeRate": 27.8,
      "winRoi": 55.5
    },
    {
      "name": "田辺裕信",
      "rides": 208,
      "wins": 17,
      "winRate": 8.2,
      "placeRate": 27.4,
      "winRoi": 61.7
    },
    {
      "name": "大野拓弥",
      "rides": 216,
      "wins": 16,
      "winRate": 7.4,
      "placeRate": 24.5,
      "winRoi": 98.7
    },
    {
      "name": "鮫島克駿",
      "rides": 212,
      "wins": 15,
      "winRate": 7.1,
      "placeRate": 19.3,
      "winRoi": 170.8
    },
    {
      "name": "三浦皇成",
      "rides": 255,
      "wins": 12,
      "winRate": 4.7,
      "placeRate": 19.2,
      "winRoi": 38.4
    },
    {
      "name": "幸英明",
      "rides": 225,
      "wins": 9,
      "winRate": 4.0,
      "placeRate": 18.7,
      "winRoi": 21.8
    }
  ],
  "all-turf-middle": [
    {
      "name": "川田将雅",
      "rides": 484,
      "wins": 143,
      "winRate": 29.5,
      "placeRate": 62.4,
      "winRoi": 87.3
    },
    {
      "name": "ルメール",
      "rides": 526,
      "wins": 132,
      "winRate": 25.1,
      "placeRate": 57.2,
      "winRoi": 74.4
    },
    {
      "name": "戸崎圭太",
      "rides": 592,
      "wins": 90,
      "winRate": 15.2,
      "placeRate": 39.0,
      "winRoi": 71.9
    },
    {
      "name": "横山武史",
      "rides": 599,
      "wins": 88,
      "winRate": 14.7,
      "placeRate": 36.7,
      "winRoi": 80.7
    },
    {
      "name": "松山弘平",
      "rides": 576,
      "wins": 75,
      "winRate": 13.0,
      "placeRate": 34.5,
      "winRoi": 61.3
    },
    {
      "name": "岩田望来",
      "rides": 537,
      "wins": 74,
      "winRate": 13.8,
      "placeRate": 36.3,
      "winRoi": 95.9
    },
    {
      "name": "西村淳也",
      "rides": 497,
      "wins": 65,
      "winRate": 13.1,
      "placeRate": 32.8,
      "winRoi": 133.1
    },
    {
      "name": "丹内祐次",
      "rides": 652,
      "wins": 64,
      "winRate": 9.8,
      "placeRate": 30.4,
      "winRoi": 101.6
    },
    {
      "name": "坂井瑠星",
      "rides": 467,
      "wins": 58,
      "winRate": 12.4,
      "placeRate": 34.3,
      "winRoi": 71.1
    },
    {
      "name": "武豊",
      "rides": 450,
      "wins": 54,
      "winRate": 12.0,
      "placeRate": 35.6,
      "winRoi": 57.8
    },
    {
      "name": "横山和生",
      "rides": 436,
      "wins": 53,
      "winRate": 12.2,
      "placeRate": 27.5,
      "winRoi": 99.0
    },
    {
      "name": "池添謙一",
      "rides": 339,
      "wins": 42,
      "winRate": 12.4,
      "placeRate": 34.2,
      "winRoi": 79.4
    },
    {
      "name": "鮫島克駿",
      "rides": 539,
      "wins": 38,
      "winRate": 7.1,
      "placeRate": 26.3,
      "winRoi": 71.9
    },
    {
      "name": "吉田隼人",
      "rides": 406,
      "wins": 38,
      "winRate": 9.4,
      "placeRate": 29.6,
      "winRoi": 88.9
    },
    {
      "name": "藤岡佑介",
      "rides": 343,
      "wins": 38,
      "winRate": 11.1,
      "placeRate": 33.5,
      "winRoi": 91.7
    },
    {
      "name": "津村明秀",
      "rides": 449,
      "wins": 37,
      "winRate": 8.2,
      "placeRate": 26.9,
      "winRoi": 92.4
    },
    {
      "name": "菅原明良",
      "rides": 458,
      "wins": 36,
      "winRate": 7.9,
      "placeRate": 28.2,
      "winRoi": 84.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 374,
      "wins": 36,
      "winRate": 9.6,
      "placeRate": 31.3,
      "winRoi": 84.9
    },
    {
      "name": "田辺裕信",
      "rides": 354,
      "wins": 36,
      "winRate": 10.2,
      "placeRate": 28.2,
      "winRoi": 107.0
    },
    {
      "name": "佐々木大",
      "rides": 352,
      "wins": 33,
      "winRate": 9.4,
      "placeRate": 23.9,
      "winRoi": 69.8
    }
  ],
  "all-dirt-all": [
    {
      "name": "松山弘平",
      "rides": 1367,
      "wins": 201,
      "winRate": 14.7,
      "placeRate": 37.5,
      "winRoi": 86.4
    },
    {
      "name": "川田将雅",
      "rides": 757,
      "wins": 187,
      "winRate": 24.7,
      "placeRate": 54.3,
      "winRoi": 75.5
    },
    {
      "name": "戸崎圭太",
      "rides": 1163,
      "wins": 181,
      "winRate": 15.6,
      "placeRate": 37.7,
      "winRoi": 80.1
    },
    {
      "name": "ルメール",
      "rides": 830,
      "wins": 180,
      "winRate": 21.7,
      "placeRate": 47.1,
      "winRoi": 63.7
    },
    {
      "name": "岩田望来",
      "rides": 1326,
      "wins": 156,
      "winRate": 11.8,
      "placeRate": 31.1,
      "winRoi": 76.6
    },
    {
      "name": "坂井瑠星",
      "rides": 1084,
      "wins": 147,
      "winRate": 13.6,
      "placeRate": 35.1,
      "winRoi": 60.8
    },
    {
      "name": "横山武史",
      "rides": 1094,
      "wins": 140,
      "winRate": 12.8,
      "placeRate": 31.6,
      "winRoi": 64.9
    },
    {
      "name": "鮫島克駿",
      "rides": 1319,
      "wins": 119,
      "winRate": 9.0,
      "placeRate": 26.9,
      "winRoi": 60.0
    },
    {
      "name": "武豊",
      "rides": 838,
      "wins": 116,
      "winRate": 13.8,
      "placeRate": 38.3,
      "winRoi": 90.0
    },
    {
      "name": "西村淳也",
      "rides": 1141,
      "wins": 104,
      "winRate": 9.1,
      "placeRate": 27.2,
      "winRoi": 70.7
    },
    {
      "name": "幸英明",
      "rides": 1353,
      "wins": 100,
      "winRate": 7.4,
      "placeRate": 23.7,
      "winRoi": 65.8
    },
    {
      "name": "三浦皇成",
      "rides": 1045,
      "wins": 100,
      "winRate": 9.6,
      "placeRate": 30.0,
      "winRoi": 67.3
    },
    {
      "name": "横山和生",
      "rides": 892,
      "wins": 100,
      "winRate": 11.2,
      "placeRate": 31.4,
      "winRoi": 93.0
    },
    {
      "name": "団野大成",
      "rides": 1123,
      "wins": 95,
      "winRate": 8.5,
      "placeRate": 25.8,
      "winRoi": 88.7
    },
    {
      "name": "菅原明良",
      "rides": 1204,
      "wins": 91,
      "winRate": 7.6,
      "placeRate": 24.3,
      "winRoi": 74.5
    },
    {
      "name": "丹内祐次",
      "rides": 1197,
      "wins": 82,
      "winRate": 6.9,
      "placeRate": 23.7,
      "winRoi": 86.8
    },
    {
      "name": "吉田隼人",
      "rides": 710,
      "wins": 69,
      "winRate": 9.7,
      "placeRate": 27.6,
      "winRoi": 69.7
    },
    {
      "name": "田辺裕信",
      "rides": 833,
      "wins": 67,
      "winRate": 8.0,
      "placeRate": 24.5,
      "winRoi": 70.7
    },
    {
      "name": "斎藤新",
      "rides": 873,
      "wins": 65,
      "winRate": 7.4,
      "placeRate": 21.0,
      "winRoi": 84.7
    },
    {
      "name": "松若風馬",
      "rides": 960,
      "wins": 61,
      "winRate": 6.4,
      "placeRate": 19.6,
      "winRoi": 53.7
    }
  ],
  "all-dirt-sprint": [
    {
      "name": "松山弘平",
      "rides": 640,
      "wins": 102,
      "winRate": 15.9,
      "placeRate": 36.6,
      "winRoi": 101.9
    },
    {
      "name": "川田将雅",
      "rides": 353,
      "wins": 92,
      "winRate": 26.1,
      "placeRate": 54.4,
      "winRoi": 81.3
    },
    {
      "name": "戸崎圭太",
      "rides": 500,
      "wins": 76,
      "winRate": 15.2,
      "placeRate": 35.0,
      "winRoi": 79.1
    },
    {
      "name": "岩田望来",
      "rides": 638,
      "wins": 71,
      "winRate": 11.1,
      "placeRate": 29.5,
      "winRoi": 66.5
    },
    {
      "name": "坂井瑠星",
      "rides": 497,
      "wins": 60,
      "winRate": 12.1,
      "placeRate": 33.8,
      "winRoi": 56.5
    },
    {
      "name": "ルメール",
      "rides": 327,
      "wins": 59,
      "winRate": 18.0,
      "placeRate": 42.5,
      "winRoi": 58.2
    },
    {
      "name": "鮫島克駿",
      "rides": 563,
      "wins": 53,
      "winRate": 9.4,
      "placeRate": 25.2,
      "winRoi": 68.1
    },
    {
      "name": "菅原明良",
      "rides": 521,
      "wins": 50,
      "winRate": 9.6,
      "placeRate": 27.3,
      "winRoi": 87.8
    },
    {
      "name": "団野大成",
      "rides": 520,
      "wins": 50,
      "winRate": 9.6,
      "placeRate": 24.6,
      "winRoi": 124.7
    },
    {
      "name": "三浦皇成",
      "rides": 466,
      "wins": 49,
      "winRate": 10.5,
      "placeRate": 30.0,
      "winRoi": 72.3
    },
    {
      "name": "横山武史",
      "rides": 472,
      "wins": 46,
      "winRate": 9.7,
      "placeRate": 29.2,
      "winRoi": 48.7
    },
    {
      "name": "武豊",
      "rides": 380,
      "wins": 38,
      "winRate": 10.0,
      "placeRate": 32.4,
      "winRoi": 75.9
    },
    {
      "name": "西村淳也",
      "rides": 500,
      "wins": 37,
      "winRate": 7.4,
      "placeRate": 23.4,
      "winRoi": 80.2
    },
    {
      "name": "幸英明",
      "rides": 616,
      "wins": 35,
      "winRate": 5.7,
      "placeRate": 19.6,
      "winRoi": 50.0
    },
    {
      "name": "高杉吏麒",
      "rides": 264,
      "wins": 33,
      "winRate": 12.5,
      "placeRate": 29.5,
      "winRoi": 108.9
    },
    {
      "name": "松若風馬",
      "rides": 456,
      "wins": 30,
      "winRate": 6.6,
      "placeRate": 18.0,
      "winRoi": 51.2
    },
    {
      "name": "丹内祐次",
      "rides": 441,
      "wins": 29,
      "winRate": 6.6,
      "placeRate": 20.6,
      "winRoi": 104.0
    },
    {
      "name": "津村明秀",
      "rides": 451,
      "wins": 28,
      "winRate": 6.2,
      "placeRate": 19.7,
      "winRoi": 61.6
    },
    {
      "name": "石橋脩",
      "rides": 325,
      "wins": 27,
      "winRate": 8.3,
      "placeRate": 25.8,
      "winRoi": 78.1
    },
    {
      "name": "斎藤新",
      "rides": 352,
      "wins": 26,
      "winRate": 7.4,
      "placeRate": 22.4,
      "winRoi": 99.7
    }
  ],
  "all-dirt-mile": [
    {
      "name": "戸崎圭太",
      "rides": 217,
      "wins": 30,
      "winRate": 13.8,
      "placeRate": 35.5,
      "winRoi": 79.9
    }
  ],
  "all-dirt-middle": [
    {
      "name": "松山弘平",
      "rides": 659,
      "wins": 90,
      "winRate": 13.7,
      "placeRate": 38.8,
      "winRoi": 70.3
    },
    {
      "name": "川田将雅",
      "rides": 368,
      "wins": 85,
      "winRate": 23.1,
      "placeRate": 54.6,
      "winRoi": 68.9
    },
    {
      "name": "坂井瑠星",
      "rides": 530,
      "wins": 80,
      "winRate": 15.1,
      "placeRate": 35.5,
      "winRoi": 59.8
    },
    {
      "name": "岩田望来",
      "rides": 626,
      "wins": 79,
      "winRate": 12.6,
      "placeRate": 33.5,
      "winRoi": 75.8
    },
    {
      "name": "横山武史",
      "rides": 439,
      "wins": 72,
      "winRate": 16.4,
      "placeRate": 35.3,
      "winRoi": 74.2
    },
    {
      "name": "ルメール",
      "rides": 311,
      "wins": 72,
      "winRate": 23.2,
      "placeRate": 48.9,
      "winRoi": 61.1
    },
    {
      "name": "武豊",
      "rides": 411,
      "wins": 71,
      "winRate": 17.3,
      "placeRate": 44.0,
      "winRoi": 99.9
    },
    {
      "name": "戸崎圭太",
      "rides": 418,
      "wins": 69,
      "winRate": 16.5,
      "placeRate": 41.6,
      "winRoi": 77.6
    },
    {
      "name": "西村淳也",
      "rides": 604,
      "wins": 66,
      "winRate": 10.9,
      "placeRate": 30.3,
      "winRoi": 66.9
    },
    {
      "name": "幸英明",
      "rides": 720,
      "wins": 64,
      "winRate": 8.9,
      "placeRate": 27.1,
      "winRoi": 80.6
    },
    {
      "name": "鮫島克駿",
      "rides": 707,
      "wins": 63,
      "winRate": 8.9,
      "placeRate": 28.7,
      "winRoi": 55.8
    },
    {
      "name": "横山和生",
      "rides": 399,
      "wins": 55,
      "winRate": 13.8,
      "placeRate": 35.3,
      "winRoi": 82.7
    },
    {
      "name": "吉田隼人",
      "rides": 401,
      "wins": 51,
      "winRate": 12.7,
      "placeRate": 34.2,
      "winRoi": 91.5
    },
    {
      "name": "団野大成",
      "rides": 580,
      "wins": 45,
      "winRate": 7.8,
      "placeRate": 26.9,
      "winRoi": 59.9
    },
    {
      "name": "丹内祐次",
      "rides": 657,
      "wins": 44,
      "winRate": 6.7,
      "placeRate": 25.9,
      "winRoi": 77.4
    },
    {
      "name": "斎藤新",
      "rides": 485,
      "wins": 38,
      "winRate": 7.8,
      "placeRate": 20.2,
      "winRoi": 79.6
    },
    {
      "name": "三浦皇成",
      "rides": 373,
      "wins": 37,
      "winRate": 9.9,
      "placeRate": 31.6,
      "winRoi": 67.2
    },
    {
      "name": "小沢大仁",
      "rides": 513,
      "wins": 36,
      "winRate": 7.0,
      "placeRate": 17.9,
      "winRoi": 107.0
    },
    {
      "name": "藤岡佑介",
      "rides": 328,
      "wins": 36,
      "winRate": 11.0,
      "placeRate": 28.7,
      "winRoi": 73.2
    },
    {
      "name": "岩田康誠",
      "rides": 388,
      "wins": 33,
      "winRate": 8.5,
      "placeRate": 25.8,
      "winRoi": 98.0
    }
  ],
  "sapporo-all-all": [
    {
      "name": "横山武史",
      "rides": 278,
      "wins": 44,
      "winRate": 15.8,
      "placeRate": 44.2,
      "winRoi": 97.8
    },
    {
      "name": "武豊",
      "rides": 212,
      "wins": 34,
      "winRate": 16.0,
      "placeRate": 37.7,
      "winRoi": 119.5
    },
    {
      "name": "横山和生",
      "rides": 181,
      "wins": 31,
      "winRate": 17.1,
      "placeRate": 35.9,
      "winRoi": 108.0
    },
    {
      "name": "丹内祐次",
      "rides": 341,
      "wins": 28,
      "winRate": 8.2,
      "placeRate": 30.2,
      "winRoi": 153.7
    },
    {
      "name": "鮫島克駿",
      "rides": 210,
      "wins": 21,
      "winRate": 10.0,
      "placeRate": 32.4,
      "winRoi": 50.6
    },
    {
      "name": "ルメール",
      "rides": 110,
      "wins": 20,
      "winRate": 18.2,
      "placeRate": 41.8,
      "winRoi": 64.1
    },
    {
      "name": "池添謙一",
      "rides": 156,
      "wins": 19,
      "winRate": 12.2,
      "placeRate": 30.1,
      "winRoi": 59.0
    },
    {
      "name": "佐々木大",
      "rides": 181,
      "wins": 18,
      "winRate": 9.9,
      "placeRate": 22.7,
      "winRoi": 86.5
    },
    {
      "name": "藤岡佑介",
      "rides": 168,
      "wins": 13,
      "winRate": 7.7,
      "placeRate": 32.7,
      "winRoi": 36.8
    },
    {
      "name": "吉田隼人",
      "rides": 168,
      "wins": 12,
      "winRate": 7.1,
      "placeRate": 22.6,
      "winRoi": 39.8
    },
    {
      "name": "浜中俊",
      "rides": 131,
      "wins": 12,
      "winRate": 9.2,
      "placeRate": 29.8,
      "winRoi": 66.0
    },
    {
      "name": "斎藤新",
      "rides": 129,
      "wins": 10,
      "winRate": 7.8,
      "placeRate": 21.7,
      "winRoi": 138.6
    },
    {
      "name": "黛弘人",
      "rides": 155,
      "wins": 9,
      "winRate": 5.8,
      "placeRate": 16.1,
      "winRoi": 181.6
    },
    {
      "name": "大野拓弥",
      "rides": 77,
      "wins": 9,
      "winRate": 11.7,
      "placeRate": 27.3,
      "winRoi": 92.6
    },
    {
      "name": "菱田裕二",
      "rides": 158,
      "wins": 8,
      "winRate": 5.1,
      "placeRate": 18.4,
      "winRoi": 22.5
    },
    {
      "name": "北村友一",
      "rides": 93,
      "wins": 7,
      "winRate": 7.5,
      "placeRate": 23.7,
      "winRoi": 81.3
    },
    {
      "name": "秋山稔樹",
      "rides": 78,
      "wins": 7,
      "winRate": 9.0,
      "placeRate": 17.9,
      "winRoi": 80.5
    },
    {
      "name": "古川吉洋",
      "rides": 199,
      "wins": 6,
      "winRate": 3.0,
      "placeRate": 10.6,
      "winRoi": 64.6
    },
    {
      "name": "角田大和",
      "rides": 69,
      "wins": 5,
      "winRate": 7.2,
      "placeRate": 23.2,
      "winRoi": 113.8
    },
    {
      "name": "岩田康誠",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 24.5,
      "winRoi": 117.9
    }
  ],
  "sapporo-all-sprint": [
    {
      "name": "武豊",
      "rides": 62,
      "wins": 14,
      "winRate": 22.6,
      "placeRate": 41.9,
      "winRoi": 135.3
    },
    {
      "name": "鮫島克駿",
      "rides": 56,
      "wins": 9,
      "winRate": 16.1,
      "placeRate": 33.9,
      "winRoi": 84.3
    },
    {
      "name": "横山武史",
      "rides": 73,
      "wins": 8,
      "winRate": 11.0,
      "placeRate": 43.8,
      "winRoi": 110.3
    },
    {
      "name": "丹内祐次",
      "rides": 94,
      "wins": 7,
      "winRate": 7.4,
      "placeRate": 21.3,
      "winRoi": 133.9
    },
    {
      "name": "佐々木大",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 20.4,
      "winRoi": 81.3
    },
    {
      "name": "黛弘人",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 17.0,
      "winRoi": 184.9
    },
    {
      "name": "古川吉洋",
      "rides": 61,
      "wins": 2,
      "winRate": 3.3,
      "placeRate": 9.8,
      "winRoi": 82.5
    }
  ],
  "sapporo-all-middle": [
    {
      "name": "横山武史",
      "rides": 157,
      "wins": 31,
      "winRate": 19.7,
      "placeRate": 46.5,
      "winRoi": 110.8
    },
    {
      "name": "武豊",
      "rides": 107,
      "wins": 17,
      "winRate": 15.9,
      "placeRate": 43.0,
      "winRoi": 145.1
    },
    {
      "name": "横山和生",
      "rides": 106,
      "wins": 17,
      "winRate": 16.0,
      "placeRate": 35.8,
      "winRoi": 121.6
    },
    {
      "name": "丹内祐次",
      "rides": 178,
      "wins": 15,
      "winRate": 8.4,
      "placeRate": 34.8,
      "winRoi": 163.0
    },
    {
      "name": "鮫島克駿",
      "rides": 106,
      "wins": 10,
      "winRate": 9.4,
      "placeRate": 35.8,
      "winRoi": 40.0
    },
    {
      "name": "池添謙一",
      "rides": 82,
      "wins": 10,
      "winRate": 12.2,
      "placeRate": 29.3,
      "winRoi": 54.8
    },
    {
      "name": "佐々木大",
      "rides": 91,
      "wins": 9,
      "winRate": 9.9,
      "placeRate": 20.9,
      "winRoi": 96.2
    },
    {
      "name": "吉田隼人",
      "rides": 87,
      "wins": 9,
      "winRate": 10.3,
      "placeRate": 26.4,
      "winRoi": 63.6
    },
    {
      "name": "ルメール",
      "rides": 60,
      "wins": 9,
      "winRate": 15.0,
      "placeRate": 36.7,
      "winRoi": 43.3
    },
    {
      "name": "藤岡佑介",
      "rides": 88,
      "wins": 8,
      "winRate": 9.1,
      "placeRate": 34.1,
      "winRoi": 29.3
    },
    {
      "name": "菱田裕二",
      "rides": 80,
      "wins": 6,
      "winRate": 7.5,
      "placeRate": 16.2,
      "winRoi": 32.6
    },
    {
      "name": "斎藤新",
      "rides": 68,
      "wins": 6,
      "winRate": 8.8,
      "placeRate": 20.6,
      "winRoi": 87.2
    },
    {
      "name": "北村友一",
      "rides": 52,
      "wins": 6,
      "winRate": 11.5,
      "placeRate": 26.9,
      "winRoi": 138.8
    },
    {
      "name": "浜中俊",
      "rides": 72,
      "wins": 5,
      "winRate": 6.9,
      "placeRate": 26.4,
      "winRoi": 55.1
    },
    {
      "name": "古川吉洋",
      "rides": 98,
      "wins": 4,
      "winRate": 4.1,
      "placeRate": 12.2,
      "winRoi": 79.8
    },
    {
      "name": "黛弘人",
      "rides": 79,
      "wins": 3,
      "winRate": 3.8,
      "placeRate": 12.7,
      "winRoi": 189.7
    },
    {
      "name": "古川奈穂",
      "rides": 52,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 9.6,
      "winRoi": 6.5
    },
    {
      "name": "小林凌大",
      "rides": 52,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 15.4,
      "winRoi": 0.0
    }
  ],
  "sapporo-turf-all": [
    {
      "name": "横山武史",
      "rides": 187,
      "wins": 28,
      "winRate": 15.0,
      "placeRate": 45.5,
      "winRoi": 99.2
    },
    {
      "name": "横山和生",
      "rides": 119,
      "wins": 20,
      "winRate": 16.8,
      "placeRate": 34.5,
      "winRoi": 82.3
    },
    {
      "name": "丹内祐次",
      "rides": 215,
      "wins": 19,
      "winRate": 8.8,
      "placeRate": 31.2,
      "winRoi": 159.1
    },
    {
      "name": "武豊",
      "rides": 154,
      "wins": 16,
      "winRate": 10.4,
      "placeRate": 30.5,
      "winRoi": 60.1
    },
    {
      "name": "佐々木大",
      "rides": 111,
      "wins": 14,
      "winRate": 12.6,
      "placeRate": 27.9,
      "winRoi": 115.5
    },
    {
      "name": "鮫島克駿",
      "rides": 141,
      "wins": 13,
      "winRate": 9.2,
      "placeRate": 33.3,
      "winRoi": 52.4
    },
    {
      "name": "池添謙一",
      "rides": 105,
      "wins": 12,
      "winRate": 11.4,
      "placeRate": 30.5,
      "winRoi": 62.2
    },
    {
      "name": "ルメール",
      "rides": 79,
      "wins": 12,
      "winRate": 15.2,
      "placeRate": 44.3,
      "winRoi": 61.1
    },
    {
      "name": "浜中俊",
      "rides": 96,
      "wins": 10,
      "winRate": 10.4,
      "placeRate": 31.2,
      "winRoi": 85.3
    },
    {
      "name": "藤岡佑介",
      "rides": 127,
      "wins": 8,
      "winRate": 6.3,
      "placeRate": 34.6,
      "winRoi": 32.2
    },
    {
      "name": "大野拓弥",
      "rides": 55,
      "wins": 8,
      "winRate": 14.5,
      "placeRate": 29.1,
      "winRoi": 124.2
    },
    {
      "name": "吉田隼人",
      "rides": 114,
      "wins": 7,
      "winRate": 6.1,
      "placeRate": 22.8,
      "winRoi": 26.6
    },
    {
      "name": "菱田裕二",
      "rides": 106,
      "wins": 5,
      "winRate": 4.7,
      "placeRate": 15.1,
      "winRoi": 22.8
    },
    {
      "name": "黛弘人",
      "rides": 91,
      "wins": 5,
      "winRate": 5.5,
      "placeRate": 14.3,
      "winRoi": 265.9
    },
    {
      "name": "斎藤新",
      "rides": 88,
      "wins": 5,
      "winRate": 5.7,
      "placeRate": 18.2,
      "winRoi": 111.6
    },
    {
      "name": "古川吉洋",
      "rides": 121,
      "wins": 3,
      "winRate": 2.5,
      "placeRate": 11.6,
      "winRoi": 56.2
    },
    {
      "name": "北村友一",
      "rides": 64,
      "wins": 3,
      "winRate": 4.7,
      "placeRate": 21.9,
      "winRoi": 97.0
    }
  ],
  "sapporo-turf-sprint": [
    {
      "name": "武豊",
      "rides": 51,
      "wins": 10,
      "winRate": 19.6,
      "placeRate": 41.2,
      "winRoi": 128.4
    },
    {
      "name": "横山武史",
      "rides": 56,
      "wins": 7,
      "winRate": 12.5,
      "placeRate": 44.6,
      "winRoi": 135.2
    },
    {
      "name": "丹内祐次",
      "rides": 65,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 26.2,
      "winRoi": 93.1
    }
  ],
  "sapporo-turf-middle": [
    {
      "name": "横山武史",
      "rides": 84,
      "wins": 16,
      "winRate": 19.0,
      "placeRate": 50.0,
      "winRoi": 109.9
    },
    {
      "name": "丹内祐次",
      "rides": 84,
      "wins": 9,
      "winRate": 10.7,
      "placeRate": 35.7,
      "winRoi": 206.3
    },
    {
      "name": "横山和生",
      "rides": 56,
      "wins": 9,
      "winRate": 16.1,
      "placeRate": 30.4,
      "winRoi": 87.7
    },
    {
      "name": "鮫島克駿",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 39.6,
      "winRoi": 36.6
    },
    {
      "name": "藤岡佑介",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 39.2,
      "winRoi": 22.4
    },
    {
      "name": "武豊",
      "rides": 60,
      "wins": 3,
      "winRate": 5.0,
      "placeRate": 30.0,
      "winRoi": 21.5
    }
  ],
  "sapporo-dirt-all": [
    {
      "name": "武豊",
      "rides": 58,
      "wins": 18,
      "winRate": 31.0,
      "placeRate": 56.9,
      "winRoi": 277.2
    },
    {
      "name": "横山武史",
      "rides": 91,
      "wins": 16,
      "winRate": 17.6,
      "placeRate": 41.8,
      "winRoi": 94.9
    },
    {
      "name": "横山和生",
      "rides": 62,
      "wins": 11,
      "winRate": 17.7,
      "placeRate": 38.7,
      "winRoi": 157.3
    },
    {
      "name": "丹内祐次",
      "rides": 126,
      "wins": 9,
      "winRate": 7.1,
      "placeRate": 28.6,
      "winRoi": 144.6
    },
    {
      "name": "鮫島克駿",
      "rides": 69,
      "wins": 8,
      "winRate": 11.6,
      "placeRate": 30.4,
      "winRoi": 47.0
    },
    {
      "name": "池添謙一",
      "rides": 51,
      "wins": 7,
      "winRate": 13.7,
      "placeRate": 29.4,
      "winRoi": 52.4
    },
    {
      "name": "吉田隼人",
      "rides": 54,
      "wins": 5,
      "winRate": 9.3,
      "placeRate": 22.2,
      "winRoi": 67.6
    },
    {
      "name": "佐々木大",
      "rides": 70,
      "wins": 4,
      "winRate": 5.7,
      "placeRate": 14.3,
      "winRoi": 40.4
    },
    {
      "name": "黛弘人",
      "rides": 64,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 18.8,
      "winRoi": 61.7
    },
    {
      "name": "古川吉洋",
      "rides": 78,
      "wins": 3,
      "winRate": 3.8,
      "placeRate": 9.0,
      "winRoi": 77.6
    },
    {
      "name": "菱田裕二",
      "rides": 52,
      "wins": 3,
      "winRate": 5.8,
      "placeRate": 25.0,
      "winRoi": 21.7
    },
    {
      "name": "小林凌大",
      "rides": 63,
      "wins": 1,
      "winRate": 1.6,
      "placeRate": 19.0,
      "winRoi": 5.1
    }
  ],
  "sapporo-dirt-middle": [
    {
      "name": "横山武史",
      "rides": 73,
      "wins": 15,
      "winRate": 20.5,
      "placeRate": 42.5,
      "winRoi": 111.8
    },
    {
      "name": "横山和生",
      "rides": 50,
      "wins": 8,
      "winRate": 16.0,
      "placeRate": 42.0,
      "winRoi": 159.6
    },
    {
      "name": "丹内祐次",
      "rides": 94,
      "wins": 6,
      "winRate": 6.4,
      "placeRate": 34.0,
      "winRoi": 124.3
    },
    {
      "name": "鮫島克駿",
      "rides": 53,
      "wins": 6,
      "winRate": 11.3,
      "placeRate": 32.1,
      "winRoi": 43.4
    },
    {
      "name": "古川吉洋",
      "rides": 57,
      "wins": 3,
      "winRate": 5.3,
      "placeRate": 10.5,
      "winRoi": 106.1
    }
  ],
  "hakodate-all-all": [
    {
      "name": "横山武史",
      "rides": 237,
      "wins": 37,
      "winRate": 15.6,
      "placeRate": 40.9,
      "winRoi": 65.9
    },
    {
      "name": "横山和生",
      "rides": 227,
      "wins": 28,
      "winRate": 12.3,
      "placeRate": 33.0,
      "winRoi": 66.2
    },
    {
      "name": "武豊",
      "rides": 211,
      "wins": 25,
      "winRate": 11.8,
      "placeRate": 37.4,
      "winRoi": 65.7
    },
    {
      "name": "鮫島克駿",
      "rides": 229,
      "wins": 23,
      "winRate": 10.0,
      "placeRate": 28.4,
      "winRoi": 72.6
    },
    {
      "name": "佐々木大",
      "rides": 205,
      "wins": 23,
      "winRate": 11.2,
      "placeRate": 31.2,
      "winRoi": 57.4
    },
    {
      "name": "丹内祐次",
      "rides": 335,
      "wins": 20,
      "winRate": 6.0,
      "placeRate": 30.1,
      "winRoi": 45.7
    },
    {
      "name": "藤岡佑介",
      "rides": 161,
      "wins": 17,
      "winRate": 10.6,
      "placeRate": 24.2,
      "winRoi": 85.3
    },
    {
      "name": "浜中俊",
      "rides": 131,
      "wins": 16,
      "winRate": 12.2,
      "placeRate": 31.3,
      "winRoi": 123.7
    },
    {
      "name": "吉田隼人",
      "rides": 155,
      "wins": 14,
      "winRate": 9.0,
      "placeRate": 28.4,
      "winRoi": 67.5
    },
    {
      "name": "池添謙一",
      "rides": 133,
      "wins": 12,
      "winRate": 9.0,
      "placeRate": 19.5,
      "winRoi": 62.9
    },
    {
      "name": "岩田康誠",
      "rides": 127,
      "wins": 11,
      "winRate": 8.7,
      "placeRate": 24.4,
      "winRoi": 85.5
    },
    {
      "name": "北村友一",
      "rides": 103,
      "wins": 11,
      "winRate": 10.7,
      "placeRate": 34.0,
      "winRoi": 104.7
    },
    {
      "name": "ルメール",
      "rides": 53,
      "wins": 10,
      "winRate": 18.9,
      "placeRate": 43.4,
      "winRoi": 62.8
    },
    {
      "name": "斎藤新",
      "rides": 153,
      "wins": 9,
      "winRate": 5.9,
      "placeRate": 17.6,
      "winRoi": 79.7
    },
    {
      "name": "大野拓弥",
      "rides": 78,
      "wins": 9,
      "winRate": 11.5,
      "placeRate": 33.3,
      "winRoi": 106.0
    },
    {
      "name": "小林美駒",
      "rides": 72,
      "wins": 9,
      "winRate": 12.5,
      "placeRate": 22.2,
      "winRoi": 141.2
    },
    {
      "name": "舟山瑠泉",
      "rides": 58,
      "wins": 8,
      "winRate": 13.8,
      "placeRate": 29.3,
      "winRoi": 76.9
    },
    {
      "name": "菱田裕二",
      "rides": 133,
      "wins": 7,
      "winRate": 5.3,
      "placeRate": 23.3,
      "winRoi": 67.0
    },
    {
      "name": "小林凌大",
      "rides": 69,
      "wins": 7,
      "winRate": 10.1,
      "placeRate": 18.8,
      "winRoi": 46.8
    },
    {
      "name": "泉谷楓真",
      "rides": 68,
      "wins": 7,
      "winRate": 10.3,
      "placeRate": 26.5,
      "winRoi": 162.1
    }
  ],
  "hakodate-all-sprint": [
    {
      "name": "横山武史",
      "rides": 97,
      "wins": 18,
      "winRate": 18.6,
      "placeRate": 48.5,
      "winRoi": 72.1
    },
    {
      "name": "武豊",
      "rides": 86,
      "wins": 12,
      "winRate": 14.0,
      "placeRate": 38.4,
      "winRoi": 94.1
    },
    {
      "name": "鮫島克駿",
      "rides": 89,
      "wins": 9,
      "winRate": 10.1,
      "placeRate": 31.5,
      "winRoi": 68.1
    },
    {
      "name": "丹内祐次",
      "rides": 137,
      "wins": 7,
      "winRate": 5.1,
      "placeRate": 24.8,
      "winRoi": 34.7
    },
    {
      "name": "佐々木大",
      "rides": 81,
      "wins": 7,
      "winRate": 8.6,
      "placeRate": 27.2,
      "winRoi": 50.9
    },
    {
      "name": "横山和生",
      "rides": 78,
      "wins": 6,
      "winRate": 7.7,
      "placeRate": 30.8,
      "winRoi": 37.2
    },
    {
      "name": "斎藤新",
      "rides": 59,
      "wins": 6,
      "winRate": 10.2,
      "placeRate": 16.9,
      "winRoi": 165.3
    },
    {
      "name": "藤岡佑介",
      "rides": 59,
      "wins": 6,
      "winRate": 10.2,
      "placeRate": 20.3,
      "winRoi": 89.8
    },
    {
      "name": "池添謙一",
      "rides": 62,
      "wins": 5,
      "winRate": 8.1,
      "placeRate": 14.5,
      "winRoi": 91.8
    },
    {
      "name": "岩田康誠",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 15.1,
      "winRoi": 66.2
    },
    {
      "name": "菱田裕二",
      "rides": 56,
      "wins": 3,
      "winRate": 5.4,
      "placeRate": 21.4,
      "winRoi": 34.5
    },
    {
      "name": "吉田隼人",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 22.0,
      "winRoi": 40.2
    },
    {
      "name": "古川吉洋",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 13.8,
      "winRoi": 74.2
    },
    {
      "name": "黛弘人",
      "rides": 64,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 25.0,
      "winRoi": 0.0
    }
  ],
  "hakodate-all-middle": [
    {
      "name": "横山和生",
      "rides": 131,
      "wins": 19,
      "winRate": 14.5,
      "placeRate": 32.1,
      "winRoi": 85.0
    },
    {
      "name": "横山武史",
      "rides": 127,
      "wins": 18,
      "winRate": 14.2,
      "placeRate": 37.8,
      "winRoi": 62.8
    },
    {
      "name": "鮫島克駿",
      "rides": 122,
      "wins": 14,
      "winRate": 11.5,
      "placeRate": 28.7,
      "winRoi": 86.6
    },
    {
      "name": "佐々木大",
      "rides": 107,
      "wins": 13,
      "winRate": 12.1,
      "placeRate": 31.8,
      "winRoi": 63.8
    },
    {
      "name": "丹内祐次",
      "rides": 171,
      "wins": 11,
      "winRate": 6.4,
      "placeRate": 33.9,
      "winRoi": 41.1
    },
    {
      "name": "武豊",
      "rides": 112,
      "wins": 11,
      "winRate": 9.8,
      "placeRate": 37.5,
      "winRoi": 47.3
    },
    {
      "name": "藤岡佑介",
      "rides": 88,
      "wins": 8,
      "winRate": 9.1,
      "placeRate": 26.1,
      "winRoi": 84.9
    },
    {
      "name": "浜中俊",
      "rides": 76,
      "wins": 8,
      "winRate": 10.5,
      "placeRate": 26.3,
      "winRoi": 121.7
    },
    {
      "name": "吉田隼人",
      "rides": 88,
      "wins": 7,
      "winRate": 8.0,
      "placeRate": 30.7,
      "winRoi": 76.8
    },
    {
      "name": "池添謙一",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 25.4,
      "winRoi": 40.0
    },
    {
      "name": "岩田康誠",
      "rides": 64,
      "wins": 7,
      "winRate": 10.9,
      "placeRate": 31.2,
      "winRoi": 114.8
    },
    {
      "name": "北村友一",
      "rides": 56,
      "wins": 6,
      "winRate": 10.7,
      "placeRate": 33.9,
      "winRoi": 144.6
    },
    {
      "name": "菱田裕二",
      "rides": 70,
      "wins": 4,
      "winRate": 5.7,
      "placeRate": 27.1,
      "winRoi": 99.7
    },
    {
      "name": "小沢大仁",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 18.9,
      "winRoi": 69.6
    },
    {
      "name": "古川吉洋",
      "rides": 88,
      "wins": 3,
      "winRate": 3.4,
      "placeRate": 10.2,
      "winRoi": 57.6
    },
    {
      "name": "斎藤新",
      "rides": 85,
      "wins": 3,
      "winRate": 3.5,
      "placeRate": 18.8,
      "winRoi": 28.8
    },
    {
      "name": "黛弘人",
      "rides": 75,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 14.7,
      "winRoi": 50.9
    }
  ],
  "hakodate-turf-all": [
    {
      "name": "横山武史",
      "rides": 162,
      "wins": 23,
      "winRate": 14.2,
      "placeRate": 40.7,
      "winRoi": 53.1
    },
    {
      "name": "武豊",
      "rides": 144,
      "wins": 20,
      "winRate": 13.9,
      "placeRate": 40.3,
      "winRoi": 83.3
    },
    {
      "name": "横山和生",
      "rides": 146,
      "wins": 19,
      "winRate": 13.0,
      "placeRate": 35.6,
      "winRoi": 65.3
    },
    {
      "name": "鮫島克駿",
      "rides": 143,
      "wins": 16,
      "winRate": 11.2,
      "placeRate": 26.6,
      "winRoi": 89.9
    },
    {
      "name": "丹内祐次",
      "rides": 214,
      "wins": 15,
      "winRate": 7.0,
      "placeRate": 30.4,
      "winRoi": 56.2
    },
    {
      "name": "佐々木大",
      "rides": 126,
      "wins": 14,
      "winRate": 11.1,
      "placeRate": 32.5,
      "winRoi": 61.6
    },
    {
      "name": "浜中俊",
      "rides": 92,
      "wins": 11,
      "winRate": 12.0,
      "placeRate": 30.4,
      "winRoi": 109.6
    },
    {
      "name": "藤岡佑介",
      "rides": 114,
      "wins": 10,
      "winRate": 8.8,
      "placeRate": 21.1,
      "winRoi": 68.5
    },
    {
      "name": "池添謙一",
      "rides": 91,
      "wins": 9,
      "winRate": 9.9,
      "placeRate": 19.8,
      "winRoi": 82.0
    },
    {
      "name": "大野拓弥",
      "rides": 56,
      "wins": 9,
      "winRate": 16.1,
      "placeRate": 39.3,
      "winRoi": 147.7
    },
    {
      "name": "吉田隼人",
      "rides": 104,
      "wins": 8,
      "winRate": 7.7,
      "placeRate": 26.0,
      "winRoi": 45.8
    },
    {
      "name": "北村友一",
      "rides": 69,
      "wins": 7,
      "winRate": 10.1,
      "placeRate": 27.5,
      "winRoi": 114.9
    },
    {
      "name": "斎藤新",
      "rides": 111,
      "wins": 6,
      "winRate": 5.4,
      "placeRate": 15.3,
      "winRoi": 81.9
    },
    {
      "name": "古川吉洋",
      "rides": 100,
      "wins": 6,
      "winRate": 6.0,
      "placeRate": 15.0,
      "winRoi": 110.8
    },
    {
      "name": "岩田康誠",
      "rides": 84,
      "wins": 6,
      "winRate": 7.1,
      "placeRate": 16.7,
      "winRoi": 87.1
    },
    {
      "name": "黛弘人",
      "rides": 89,
      "wins": 2,
      "winRate": 2.2,
      "placeRate": 20.2,
      "winRoi": 19.8
    },
    {
      "name": "菱田裕二",
      "rides": 82,
      "wins": 1,
      "winRate": 1.2,
      "placeRate": 19.5,
      "winRoi": 13.2
    },
    {
      "name": "小沢大仁",
      "rides": 59,
      "wins": 1,
      "winRate": 1.7,
      "placeRate": 15.3,
      "winRoi": 11.2
    },
    {
      "name": "横山琉人",
      "rides": 55,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 7.3,
      "winRoi": 0.0
    }
  ],
  "hakodate-turf-sprint": [
    {
      "name": "横山武史",
      "rides": 78,
      "wins": 13,
      "winRate": 16.7,
      "placeRate": 46.2,
      "winRoi": 63.8
    },
    {
      "name": "武豊",
      "rides": 73,
      "wins": 12,
      "winRate": 16.4,
      "placeRate": 39.7,
      "winRoi": 110.8
    },
    {
      "name": "鮫島克駿",
      "rides": 72,
      "wins": 8,
      "winRate": 11.1,
      "placeRate": 31.9,
      "winRoi": 82.2
    },
    {
      "name": "横山和生",
      "rides": 64,
      "wins": 6,
      "winRate": 9.4,
      "placeRate": 34.4,
      "winRoi": 45.3
    },
    {
      "name": "藤岡佑介",
      "rides": 53,
      "wins": 6,
      "winRate": 11.3,
      "placeRate": 20.8,
      "winRoi": 100.0
    },
    {
      "name": "丹内祐次",
      "rides": 97,
      "wins": 5,
      "winRate": 5.2,
      "placeRate": 25.8,
      "winRoi": 33.2
    },
    {
      "name": "佐々木大",
      "rides": 62,
      "wins": 5,
      "winRate": 8.1,
      "placeRate": 29.0,
      "winRoi": 57.4
    },
    {
      "name": "池添謙一",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 11.1,
      "winRoi": 99.6
    },
    {
      "name": "斎藤新",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 15.1,
      "winRoi": 146.8
    }
  ],
  "hakodate-turf-middle": [
    {
      "name": "横山和生",
      "rides": 67,
      "wins": 11,
      "winRate": 16.4,
      "placeRate": 32.8,
      "winRoi": 88.5
    },
    {
      "name": "丹内祐次",
      "rides": 95,
      "wins": 9,
      "winRate": 9.5,
      "placeRate": 34.7,
      "winRoi": 61.4
    },
    {
      "name": "横山武史",
      "rides": 73,
      "wins": 9,
      "winRate": 12.3,
      "placeRate": 38.4,
      "winRoi": 40.7
    },
    {
      "name": "鮫島克駿",
      "rides": 57,
      "wins": 8,
      "winRate": 14.0,
      "placeRate": 24.6,
      "winRoi": 121.8
    },
    {
      "name": "武豊",
      "rides": 61,
      "wins": 7,
      "winRate": 11.5,
      "placeRate": 44.3,
      "winRoi": 61.0
    },
    {
      "name": "佐々木大",
      "rides": 51,
      "wins": 7,
      "winRate": 13.7,
      "placeRate": 31.4,
      "winRoi": 72.2
    },
    {
      "name": "斎藤新",
      "rides": 51,
      "wins": 2,
      "winRate": 3.9,
      "placeRate": 15.7,
      "winRoi": 25.7
    }
  ],
  "hakodate-dirt-all": [
    {
      "name": "横山武史",
      "rides": 75,
      "wins": 14,
      "winRate": 18.7,
      "placeRate": 41.3,
      "winRoi": 93.6
    },
    {
      "name": "横山和生",
      "rides": 81,
      "wins": 9,
      "winRate": 11.1,
      "placeRate": 28.4,
      "winRoi": 67.7
    },
    {
      "name": "佐々木大",
      "rides": 79,
      "wins": 9,
      "winRate": 11.4,
      "placeRate": 29.1,
      "winRoi": 50.8
    },
    {
      "name": "鮫島克駿",
      "rides": 86,
      "wins": 7,
      "winRate": 8.1,
      "placeRate": 31.4,
      "winRoi": 43.7
    },
    {
      "name": "吉田隼人",
      "rides": 51,
      "wins": 6,
      "winRate": 11.8,
      "placeRate": 33.3,
      "winRoi": 111.8
    },
    {
      "name": "菱田裕二",
      "rides": 51,
      "wins": 6,
      "winRate": 11.8,
      "placeRate": 29.4,
      "winRoi": 153.5
    },
    {
      "name": "丹内祐次",
      "rides": 121,
      "wins": 5,
      "winRate": 4.1,
      "placeRate": 29.8,
      "winRoi": 27.1
    },
    {
      "name": "武豊",
      "rides": 67,
      "wins": 5,
      "winRate": 7.5,
      "placeRate": 31.3,
      "winRoi": 28.1
    },
    {
      "name": "黛弘人",
      "rides": 58,
      "wins": 1,
      "winRate": 1.7,
      "placeRate": 19.0,
      "winRoi": 43.8
    },
    {
      "name": "古川吉洋",
      "rides": 64,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 10.9,
      "winRoi": 0.0
    }
  ],
  "hakodate-dirt-middle": [
    {
      "name": "横山武史",
      "rides": 54,
      "wins": 9,
      "winRate": 16.7,
      "placeRate": 37.0,
      "winRoi": 92.8
    },
    {
      "name": "横山和生",
      "rides": 64,
      "wins": 8,
      "winRate": 12.5,
      "placeRate": 31.2,
      "winRoi": 81.2
    },
    {
      "name": "鮫島克駿",
      "rides": 65,
      "wins": 6,
      "winRate": 9.2,
      "placeRate": 32.3,
      "winRoi": 55.7
    },
    {
      "name": "佐々木大",
      "rides": 56,
      "wins": 6,
      "winRate": 10.7,
      "placeRate": 32.1,
      "winRoi": 56.2
    },
    {
      "name": "武豊",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 29.4,
      "winRoi": 31.0
    },
    {
      "name": "丹内祐次",
      "rides": 76,
      "wins": 2,
      "winRate": 2.6,
      "placeRate": 32.9,
      "winRoi": 15.7
    }
  ],
  "fukushima-all-all": [
    {
      "name": "戸崎圭太",
      "rides": 181,
      "wins": 40,
      "winRate": 22.1,
      "placeRate": 45.3,
      "winRoi": 84.2
    },
    {
      "name": "斎藤新",
      "rides": 233,
      "wins": 26,
      "winRate": 11.2,
      "placeRate": 24.5,
      "winRoi": 99.6
    },
    {
      "name": "丹内祐次",
      "rides": 282,
      "wins": 25,
      "winRate": 8.9,
      "placeRate": 27.3,
      "winRoi": 74.2
    },
    {
      "name": "荻野極",
      "rides": 219,
      "wins": 24,
      "winRate": 11.0,
      "placeRate": 24.7,
      "winRoi": 112.4
    },
    {
      "name": "田辺裕信",
      "rides": 132,
      "wins": 24,
      "winRate": 18.2,
      "placeRate": 40.9,
      "winRoi": 91.1
    },
    {
      "name": "丸山元気",
      "rides": 273,
      "wins": 20,
      "winRate": 7.3,
      "placeRate": 22.0,
      "winRoi": 54.9
    },
    {
      "name": "菅原明良",
      "rides": 200,
      "wins": 20,
      "winRate": 10.0,
      "placeRate": 31.5,
      "winRoi": 111.4
    },
    {
      "name": "菊沢一樹",
      "rides": 354,
      "wins": 19,
      "winRate": 5.4,
      "placeRate": 16.9,
      "winRoi": 103.0
    },
    {
      "name": "津村明秀",
      "rides": 158,
      "wins": 18,
      "winRate": 11.4,
      "placeRate": 29.1,
      "winRoi": 70.9
    },
    {
      "name": "西村淳也",
      "rides": 121,
      "wins": 16,
      "winRate": 13.2,
      "placeRate": 33.9,
      "winRoi": 79.5
    },
    {
      "name": "永島まな",
      "rides": 179,
      "wins": 14,
      "winRate": 7.8,
      "placeRate": 19.6,
      "winRoi": 65.9
    },
    {
      "name": "三浦皇成",
      "rides": 160,
      "wins": 13,
      "winRate": 8.1,
      "placeRate": 31.9,
      "winRoi": 59.6
    },
    {
      "name": "石橋脩",
      "rides": 145,
      "wins": 13,
      "winRate": 9.0,
      "placeRate": 25.5,
      "winRoi": 101.9
    },
    {
      "name": "菱田裕二",
      "rides": 119,
      "wins": 13,
      "winRate": 10.9,
      "placeRate": 31.9,
      "winRoi": 69.0
    },
    {
      "name": "角田大和",
      "rides": 160,
      "wins": 12,
      "winRate": 7.5,
      "placeRate": 23.8,
      "winRoi": 56.0
    },
    {
      "name": "小沢大仁",
      "rides": 180,
      "wins": 11,
      "winRate": 6.1,
      "placeRate": 19.4,
      "winRoi": 98.7
    },
    {
      "name": "木幡巧也",
      "rides": 156,
      "wins": 11,
      "winRate": 7.1,
      "placeRate": 17.3,
      "winRoi": 176.9
    },
    {
      "name": "石川裕紀",
      "rides": 152,
      "wins": 11,
      "winRate": 7.2,
      "placeRate": 23.7,
      "winRoi": 96.2
    },
    {
      "name": "横山琉人",
      "rides": 207,
      "wins": 10,
      "winRate": 4.8,
      "placeRate": 16.9,
      "winRoi": 96.6
    },
    {
      "name": "亀田温心",
      "rides": 180,
      "wins": 10,
      "winRate": 5.6,
      "placeRate": 24.4,
      "winRoi": 50.6
    }
  ],
  "fukushima-all-sprint": [
    {
      "name": "戸崎圭太",
      "rides": 65,
      "wins": 13,
      "winRate": 20.0,
      "placeRate": 41.5,
      "winRoi": 88.0
    },
    {
      "name": "菅原明良",
      "rides": 77,
      "wins": 11,
      "winRate": 14.3,
      "placeRate": 32.5,
      "winRoi": 186.2
    },
    {
      "name": "丹内祐次",
      "rides": 120,
      "wins": 10,
      "winRate": 8.3,
      "placeRate": 27.5,
      "winRoi": 54.6
    },
    {
      "name": "斎藤新",
      "rides": 94,
      "wins": 10,
      "winRate": 10.6,
      "placeRate": 23.4,
      "winRoi": 111.3
    },
    {
      "name": "荻野極",
      "rides": 81,
      "wins": 10,
      "winRate": 12.3,
      "placeRate": 23.5,
      "winRoi": 117.7
    },
    {
      "name": "三浦皇成",
      "rides": 58,
      "wins": 8,
      "winRate": 13.8,
      "placeRate": 31.0,
      "winRoi": 66.9
    },
    {
      "name": "石橋脩",
      "rides": 54,
      "wins": 8,
      "winRate": 14.8,
      "placeRate": 29.6,
      "winRoi": 159.3
    },
    {
      "name": "丸山元気",
      "rides": 114,
      "wins": 7,
      "winRate": 6.1,
      "placeRate": 18.4,
      "winRoi": 36.9
    },
    {
      "name": "角田大和",
      "rides": 74,
      "wins": 7,
      "winRate": 9.5,
      "placeRate": 21.6,
      "winRoi": 48.0
    },
    {
      "name": "松本大輝",
      "rides": 63,
      "wins": 7,
      "winRate": 11.1,
      "placeRate": 22.2,
      "winRoi": 109.4
    },
    {
      "name": "菊沢一樹",
      "rides": 154,
      "wins": 6,
      "winRate": 3.9,
      "placeRate": 16.9,
      "winRoi": 37.3
    },
    {
      "name": "杉原誠人",
      "rides": 86,
      "wins": 6,
      "winRate": 7.0,
      "placeRate": 20.9,
      "winRoi": 119.0
    },
    {
      "name": "永島まな",
      "rides": 81,
      "wins": 6,
      "winRate": 7.4,
      "placeRate": 17.3,
      "winRoi": 76.5
    },
    {
      "name": "武藤雅",
      "rides": 84,
      "wins": 5,
      "winRate": 6.0,
      "placeRate": 19.0,
      "winRoi": 96.7
    },
    {
      "name": "亀田温心",
      "rides": 79,
      "wins": 5,
      "winRate": 6.3,
      "placeRate": 26.6,
      "winRoi": 90.8
    },
    {
      "name": "木幡巧也",
      "rides": 69,
      "wins": 5,
      "winRate": 7.2,
      "placeRate": 17.4,
      "winRoi": 99.4
    },
    {
      "name": "小林脩斗",
      "rides": 61,
      "wins": 4,
      "winRate": 6.6,
      "placeRate": 13.1,
      "winRoi": 21.8
    },
    {
      "name": "津村明秀",
      "rides": 56,
      "wins": 4,
      "winRate": 7.1,
      "placeRate": 26.8,
      "winRoi": 57.3
    },
    {
      "name": "秋山稔樹",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 18.9,
      "winRoi": 97.2
    },
    {
      "name": "横山琉人",
      "rides": 83,
      "wins": 3,
      "winRate": 3.6,
      "placeRate": 13.3,
      "winRoi": 81.7
    }
  ],
  "fukushima-all-middle": [
    {
      "name": "戸崎圭太",
      "rides": 104,
      "wins": 25,
      "winRate": 24.0,
      "placeRate": 49.0,
      "winRoi": 84.4
    },
    {
      "name": "田辺裕信",
      "rides": 77,
      "wins": 15,
      "winRate": 19.5,
      "placeRate": 39.0,
      "winRoi": 92.9
    },
    {
      "name": "菊沢一樹",
      "rides": 171,
      "wins": 12,
      "winRate": 7.0,
      "placeRate": 18.1,
      "winRoi": 178.0
    },
    {
      "name": "荻野極",
      "rides": 118,
      "wins": 12,
      "winRate": 10.2,
      "placeRate": 26.3,
      "winRoi": 115.8
    },
    {
      "name": "斎藤新",
      "rides": 116,
      "wins": 12,
      "winRate": 10.3,
      "placeRate": 24.1,
      "winRoi": 83.9
    },
    {
      "name": "丹内祐次",
      "rides": 131,
      "wins": 11,
      "winRate": 8.4,
      "placeRate": 23.7,
      "winRoi": 100.2
    },
    {
      "name": "西村淳也",
      "rides": 72,
      "wins": 11,
      "winRate": 15.3,
      "placeRate": 33.3,
      "winRoi": 89.9
    },
    {
      "name": "丸山元気",
      "rides": 129,
      "wins": 10,
      "winRate": 7.8,
      "placeRate": 22.5,
      "winRoi": 61.3
    },
    {
      "name": "津村明秀",
      "rides": 92,
      "wins": 10,
      "winRate": 10.9,
      "placeRate": 27.2,
      "winRoi": 69.0
    },
    {
      "name": "菅原明良",
      "rides": 109,
      "wins": 9,
      "winRate": 8.3,
      "placeRate": 29.4,
      "winRoi": 72.8
    },
    {
      "name": "石川裕紀",
      "rides": 83,
      "wins": 9,
      "winRate": 10.8,
      "placeRate": 26.5,
      "winRoi": 124.0
    },
    {
      "name": "佐々木大",
      "rides": 58,
      "wins": 9,
      "winRate": 15.5,
      "placeRate": 24.1,
      "winRoi": 231.0
    },
    {
      "name": "小沢大仁",
      "rides": 88,
      "wins": 8,
      "winRate": 9.1,
      "placeRate": 21.6,
      "winRoi": 187.0
    },
    {
      "name": "横山琉人",
      "rides": 104,
      "wins": 7,
      "winRate": 6.7,
      "placeRate": 20.2,
      "winRoi": 127.0
    },
    {
      "name": "永島まな",
      "rides": 83,
      "wins": 6,
      "winRate": 7.2,
      "placeRate": 20.5,
      "winRoi": 56.3
    },
    {
      "name": "吉田隼人",
      "rides": 65,
      "wins": 6,
      "winRate": 9.2,
      "placeRate": 33.8,
      "winRoi": 120.6
    },
    {
      "name": "菱田裕二",
      "rides": 58,
      "wins": 6,
      "winRate": 10.3,
      "placeRate": 25.9,
      "winRoi": 82.2
    },
    {
      "name": "原優介",
      "rides": 122,
      "wins": 5,
      "winRate": 4.1,
      "placeRate": 18.9,
      "winRoi": 81.0
    },
    {
      "name": "木幡巧也",
      "rides": 74,
      "wins": 5,
      "winRate": 6.8,
      "placeRate": 18.9,
      "winRoi": 276.8
    },
    {
      "name": "富田暁",
      "rides": 67,
      "wins": 5,
      "winRate": 7.5,
      "placeRate": 19.4,
      "winRoi": 153.0
    }
  ],
  "fukushima-turf-all": [
    {
      "name": "戸崎圭太",
      "rides": 101,
      "wins": 24,
      "winRate": 23.8,
      "placeRate": 47.5,
      "winRoi": 90.1
    },
    {
      "name": "丹内祐次",
      "rides": 163,
      "wins": 16,
      "winRate": 9.8,
      "placeRate": 31.3,
      "winRoi": 48.3
    },
    {
      "name": "荻野極",
      "rides": 129,
      "wins": 15,
      "winRate": 11.6,
      "placeRate": 24.0,
      "winRoi": 104.0
    },
    {
      "name": "津村明秀",
      "rides": 89,
      "wins": 14,
      "winRate": 15.7,
      "placeRate": 32.6,
      "winRoi": 107.1
    },
    {
      "name": "斎藤新",
      "rides": 134,
      "wins": 13,
      "winRate": 9.7,
      "placeRate": 20.1,
      "winRoi": 92.4
    },
    {
      "name": "菅原明良",
      "rides": 116,
      "wins": 12,
      "winRate": 10.3,
      "placeRate": 31.9,
      "winRoi": 71.5
    },
    {
      "name": "田辺裕信",
      "rides": 73,
      "wins": 12,
      "winRate": 16.4,
      "placeRate": 37.0,
      "winRoi": 94.9
    },
    {
      "name": "菊沢一樹",
      "rides": 182,
      "wins": 11,
      "winRate": 6.0,
      "placeRate": 17.0,
      "winRoi": 70.5
    },
    {
      "name": "丸山元気",
      "rides": 177,
      "wins": 11,
      "winRate": 6.2,
      "placeRate": 24.3,
      "winRoi": 49.9
    },
    {
      "name": "西村淳也",
      "rides": 64,
      "wins": 10,
      "winRate": 15.6,
      "placeRate": 34.4,
      "winRoi": 76.7
    },
    {
      "name": "永島まな",
      "rides": 92,
      "wins": 9,
      "winRate": 9.8,
      "placeRate": 15.2,
      "winRoi": 95.2
    },
    {
      "name": "角田大和",
      "rides": 89,
      "wins": 9,
      "winRate": 10.1,
      "placeRate": 28.1,
      "winRoi": 86.1
    },
    {
      "name": "杉原誠人",
      "rides": 102,
      "wins": 8,
      "winRate": 7.8,
      "placeRate": 25.5,
      "winRoi": 118.0
    },
    {
      "name": "原優介",
      "rides": 122,
      "wins": 6,
      "winRate": 4.9,
      "placeRate": 16.4,
      "winRoi": 92.7
    },
    {
      "name": "武藤雅",
      "rides": 121,
      "wins": 6,
      "winRate": 5.0,
      "placeRate": 14.0,
      "winRoi": 87.4
    },
    {
      "name": "亀田温心",
      "rides": 99,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 23.2,
      "winRoi": 45.5
    },
    {
      "name": "石川裕紀",
      "rides": 89,
      "wins": 6,
      "winRate": 6.7,
      "placeRate": 22.5,
      "winRoi": 98.0
    },
    {
      "name": "黛弘人",
      "rides": 77,
      "wins": 6,
      "winRate": 7.8,
      "placeRate": 20.8,
      "winRoi": 71.4
    },
    {
      "name": "小沢大仁",
      "rides": 106,
      "wins": 5,
      "winRate": 4.7,
      "placeRate": 20.8,
      "winRoi": 27.5
    },
    {
      "name": "三浦皇成",
      "rides": 82,
      "wins": 5,
      "winRate": 6.1,
      "placeRate": 30.5,
      "winRoi": 53.0
    }
  ],
  "fukushima-turf-sprint": [
    {
      "name": "丹内祐次",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 31.3,
      "winRoi": 45.5
    },
    {
      "name": "杉原誠人",
      "rides": 54,
      "wins": 6,
      "winRate": 11.1,
      "placeRate": 27.8,
      "winRoi": 189.4
    },
    {
      "name": "菅原明良",
      "rides": 50,
      "wins": 6,
      "winRate": 12.0,
      "placeRate": 26.0,
      "winRoi": 61.0
    },
    {
      "name": "菊沢一樹",
      "rides": 83,
      "wins": 5,
      "winRate": 6.0,
      "placeRate": 20.5,
      "winRoi": 58.7
    },
    {
      "name": "斎藤新",
      "rides": 61,
      "wins": 5,
      "winRate": 8.2,
      "placeRate": 14.8,
      "winRoi": 100.8
    },
    {
      "name": "丸山元気",
      "rides": 73,
      "wins": 4,
      "winRate": 5.5,
      "placeRate": 21.9,
      "winRoi": 38.8
    },
    {
      "name": "亀田温心",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 26.0,
      "winRoi": 66.8
    },
    {
      "name": "横山琉人",
      "rides": 54,
      "wins": 2,
      "winRate": 3.7,
      "placeRate": 13.0,
      "winRoi": 25.4
    }
  ],
  "fukushima-turf-middle": [
    {
      "name": "戸崎圭太",
      "rides": 55,
      "wins": 12,
      "winRate": 21.8,
      "placeRate": 50.9,
      "winRoi": 81.8
    },
    {
      "name": "荻野極",
      "rides": 62,
      "wins": 7,
      "winRate": 11.3,
      "placeRate": 27.4,
      "winRoi": 111.3
    },
    {
      "name": "菅原明良",
      "rides": 53,
      "wins": 6,
      "winRate": 11.3,
      "placeRate": 34.0,
      "winRoi": 98.9
    },
    {
      "name": "丸山元気",
      "rides": 76,
      "wins": 5,
      "winRate": 6.6,
      "placeRate": 23.7,
      "winRoi": 51.8
    },
    {
      "name": "菊沢一樹",
      "rides": 76,
      "wins": 5,
      "winRate": 6.6,
      "placeRate": 14.5,
      "winRoi": 100.9
    },
    {
      "name": "丹内祐次",
      "rides": 70,
      "wins": 5,
      "winRate": 7.1,
      "placeRate": 25.7,
      "winRoi": 51.1
    },
    {
      "name": "斎藤新",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 20.4,
      "winRoi": 59.4
    },
    {
      "name": "原優介",
      "rides": 57,
      "wins": 3,
      "winRate": 5.3,
      "placeRate": 17.5,
      "winRoi": 143.9
    },
    {
      "name": "武藤雅",
      "rides": 54,
      "wins": 3,
      "winRate": 5.6,
      "placeRate": 13.0,
      "winRoi": 65.4
    }
  ],
  "fukushima-dirt-all": [
    {
      "name": "戸崎圭太",
      "rides": 80,
      "wins": 16,
      "winRate": 20.0,
      "placeRate": 42.5,
      "winRoi": 76.8
    },
    {
      "name": "斎藤新",
      "rides": 99,
      "wins": 13,
      "winRate": 13.1,
      "placeRate": 30.3,
      "winRoi": 109.4
    },
    {
      "name": "田辺裕信",
      "rides": 59,
      "wins": 12,
      "winRate": 20.3,
      "placeRate": 45.8,
      "winRoi": 86.3
    },
    {
      "name": "丹内祐次",
      "rides": 119,
      "wins": 9,
      "winRate": 7.6,
      "placeRate": 21.8,
      "winRoi": 109.7
    },
    {
      "name": "丸山元気",
      "rides": 96,
      "wins": 9,
      "winRate": 9.4,
      "placeRate": 17.7,
      "winRoi": 64.3
    },
    {
      "name": "荻野極",
      "rides": 90,
      "wins": 9,
      "winRate": 10.0,
      "placeRate": 25.6,
      "winRoi": 124.6
    },
    {
      "name": "菊沢一樹",
      "rides": 172,
      "wins": 8,
      "winRate": 4.7,
      "placeRate": 16.9,
      "winRoi": 137.4
    },
    {
      "name": "菅原明良",
      "rides": 84,
      "wins": 8,
      "winRate": 9.5,
      "placeRate": 31.0,
      "winRoi": 166.5
    },
    {
      "name": "三浦皇成",
      "rides": 78,
      "wins": 8,
      "winRate": 10.3,
      "placeRate": 33.3,
      "winRoi": 66.4
    },
    {
      "name": "石橋脩",
      "rides": 66,
      "wins": 8,
      "winRate": 12.1,
      "placeRate": 31.8,
      "winRoi": 133.0
    },
    {
      "name": "菱田裕二",
      "rides": 52,
      "wins": 8,
      "winRate": 15.4,
      "placeRate": 36.5,
      "winRoi": 101.5
    },
    {
      "name": "松本大輝",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 23.9,
      "winRoi": 83.7
    },
    {
      "name": "横山琉人",
      "rides": 86,
      "wins": 6,
      "winRate": 7.0,
      "placeRate": 19.8,
      "winRoi": 179.4
    },
    {
      "name": "木幡巧也",
      "rides": 78,
      "wins": 6,
      "winRate": 7.7,
      "placeRate": 15.4,
      "winRoi": 330.6
    },
    {
      "name": "小沢大仁",
      "rides": 74,
      "wins": 6,
      "winRate": 8.1,
      "placeRate": 17.6,
      "winRoi": 200.7
    },
    {
      "name": "西村淳也",
      "rides": 57,
      "wins": 6,
      "winRate": 10.5,
      "placeRate": 33.3,
      "winRoi": 82.6
    },
    {
      "name": "永島まな",
      "rides": 87,
      "wins": 5,
      "winRate": 5.7,
      "placeRate": 24.1,
      "winRoi": 34.9
    },
    {
      "name": "石川裕紀",
      "rides": 63,
      "wins": 5,
      "winRate": 7.9,
      "placeRate": 25.4,
      "winRoi": 93.8
    },
    {
      "name": "佐々木大",
      "rides": 59,
      "wins": 5,
      "winRate": 8.5,
      "placeRate": 22.0,
      "winRoi": 158.1
    },
    {
      "name": "亀田温心",
      "rides": 81,
      "wins": 4,
      "winRate": 4.9,
      "placeRate": 25.9,
      "winRoi": 56.9
    }
  ],
  "fukushima-dirt-sprint": [
    {
      "name": "丹内祐次",
      "rides": 53,
      "wins": 3,
      "winRate": 5.7,
      "placeRate": 22.6,
      "winRoi": 66.0
    },
    {
      "name": "菊沢一樹",
      "rides": 71,
      "wins": 1,
      "winRate": 1.4,
      "placeRate": 12.7,
      "winRoi": 12.3
    },
    {
      "name": "原優介",
      "rides": 52,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 11.5,
      "winRoi": 0.0
    }
  ],
  "fukushima-dirt-middle": [
    {
      "name": "斎藤新",
      "rides": 62,
      "wins": 8,
      "winRate": 12.9,
      "placeRate": 27.4,
      "winRoi": 105.2
    },
    {
      "name": "菊沢一樹",
      "rides": 95,
      "wins": 7,
      "winRate": 7.4,
      "placeRate": 21.1,
      "winRoi": 239.6
    },
    {
      "name": "丹内祐次",
      "rides": 61,
      "wins": 6,
      "winRate": 9.8,
      "placeRate": 21.3,
      "winRoi": 156.6
    },
    {
      "name": "荻野極",
      "rides": 56,
      "wins": 5,
      "winRate": 8.9,
      "placeRate": 25.0,
      "winRoi": 120.9
    },
    {
      "name": "横山琉人",
      "rides": 55,
      "wins": 5,
      "winRate": 9.1,
      "placeRate": 21.8,
      "winRoi": 182.2
    },
    {
      "name": "丸山元気",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 20.8,
      "winRoi": 74.9
    },
    {
      "name": "菅原明良",
      "rides": 56,
      "wins": 3,
      "winRate": 5.4,
      "placeRate": 25.0,
      "winRoi": 48.2
    },
    {
      "name": "原優介",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 20.0,
      "winRoi": 25.8
    },
    {
      "name": "武藤雅",
      "rides": 57,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 8.8,
      "winRoi": 0.0
    }
  ],
  "niigata-all-all": [
    {
      "name": "菅原明良",
      "rides": 310,
      "wins": 41,
      "winRate": 13.2,
      "placeRate": 30.0,
      "winRoi": 88.1
    },
    {
      "name": "丹内祐次",
      "rides": 347,
      "wins": 35,
      "winRate": 10.1,
      "placeRate": 30.8,
      "winRoi": 69.5
    },
    {
      "name": "津村明秀",
      "rides": 327,
      "wins": 32,
      "winRate": 9.8,
      "placeRate": 32.7,
      "winRoi": 100.2
    },
    {
      "name": "戸崎圭太",
      "rides": 198,
      "wins": 29,
      "winRate": 14.6,
      "placeRate": 38.4,
      "winRoi": 65.1
    },
    {
      "name": "菊沢一樹",
      "rides": 459,
      "wins": 26,
      "winRate": 5.7,
      "placeRate": 20.5,
      "winRoi": 83.9
    },
    {
      "name": "丸山元気",
      "rides": 330,
      "wins": 25,
      "winRate": 7.6,
      "placeRate": 22.4,
      "winRoi": 56.1
    },
    {
      "name": "斎藤新",
      "rides": 297,
      "wins": 25,
      "winRate": 8.4,
      "placeRate": 18.9,
      "winRoi": 77.5
    },
    {
      "name": "荻野極",
      "rides": 259,
      "wins": 24,
      "winRate": 9.3,
      "placeRate": 27.0,
      "winRoi": 98.3
    },
    {
      "name": "亀田温心",
      "rides": 246,
      "wins": 22,
      "winRate": 8.9,
      "placeRate": 19.1,
      "winRoi": 70.7
    },
    {
      "name": "佐々木大",
      "rides": 194,
      "wins": 22,
      "winRate": 11.3,
      "placeRate": 27.3,
      "winRoi": 101.1
    },
    {
      "name": "菱田裕二",
      "rides": 206,
      "wins": 21,
      "winRate": 10.2,
      "placeRate": 25.7,
      "winRoi": 85.2
    },
    {
      "name": "西村淳也",
      "rides": 198,
      "wins": 21,
      "winRate": 10.6,
      "placeRate": 31.8,
      "winRoi": 70.7
    },
    {
      "name": "ルメール",
      "rides": 76,
      "wins": 20,
      "winRate": 26.3,
      "placeRate": 64.5,
      "winRoi": 66.8
    },
    {
      "name": "川田将雅",
      "rides": 67,
      "wins": 20,
      "winRate": 29.9,
      "placeRate": 52.2,
      "winRoi": 109.3
    },
    {
      "name": "坂井瑠星",
      "rides": 104,
      "wins": 18,
      "winRate": 17.3,
      "placeRate": 36.5,
      "winRoi": 100.3
    },
    {
      "name": "今村聖奈",
      "rides": 155,
      "wins": 17,
      "winRate": 11.0,
      "placeRate": 27.1,
      "winRoi": 89.7
    },
    {
      "name": "三浦皇成",
      "rides": 184,
      "wins": 15,
      "winRate": 8.2,
      "placeRate": 26.6,
      "winRoi": 34.3
    },
    {
      "name": "西塚洸二",
      "rides": 147,
      "wins": 13,
      "winRate": 8.8,
      "placeRate": 26.5,
      "winRoi": 48.8
    },
    {
      "name": "吉田隼人",
      "rides": 139,
      "wins": 13,
      "winRate": 9.4,
      "placeRate": 33.8,
      "winRoi": 73.0
    },
    {
      "name": "鮫島克駿",
      "rides": 101,
      "wins": 13,
      "winRate": 12.9,
      "placeRate": 29.7,
      "winRoi": 144.6
    }
  ],
  "niigata-all-sprint": [
    {
      "name": "菅原明良",
      "rides": 133,
      "wins": 19,
      "winRate": 14.3,
      "placeRate": 28.6,
      "winRoi": 76.8
    },
    {
      "name": "菊沢一樹",
      "rides": 229,
      "wins": 16,
      "winRate": 7.0,
      "placeRate": 23.1,
      "winRoi": 78.2
    },
    {
      "name": "津村明秀",
      "rides": 143,
      "wins": 16,
      "winRate": 11.2,
      "placeRate": 32.9,
      "winRoi": 125.0
    },
    {
      "name": "丹内祐次",
      "rides": 158,
      "wins": 13,
      "winRate": 8.2,
      "placeRate": 27.2,
      "winRoi": 75.9
    },
    {
      "name": "今村聖奈",
      "rides": 91,
      "wins": 12,
      "winRate": 13.2,
      "placeRate": 31.9,
      "winRoi": 108.7
    },
    {
      "name": "丸山元気",
      "rides": 148,
      "wins": 11,
      "winRate": 7.4,
      "placeRate": 23.6,
      "winRoi": 67.5
    },
    {
      "name": "菱田裕二",
      "rides": 95,
      "wins": 11,
      "winRate": 11.6,
      "placeRate": 26.3,
      "winRoi": 75.7
    },
    {
      "name": "斎藤新",
      "rides": 138,
      "wins": 10,
      "winRate": 7.2,
      "placeRate": 17.4,
      "winRoi": 80.3
    },
    {
      "name": "亀田温心",
      "rides": 116,
      "wins": 10,
      "winRate": 8.6,
      "placeRate": 15.5,
      "winRoi": 58.1
    },
    {
      "name": "荻野極",
      "rides": 107,
      "wins": 10,
      "winRate": 9.3,
      "placeRate": 24.3,
      "winRoi": 182.8
    },
    {
      "name": "永島まな",
      "rides": 124,
      "wins": 9,
      "winRate": 7.3,
      "placeRate": 21.8,
      "winRoi": 177.9
    },
    {
      "name": "戸崎圭太",
      "rides": 72,
      "wins": 9,
      "winRate": 12.5,
      "placeRate": 36.1,
      "winRoi": 54.2
    },
    {
      "name": "佐々木大",
      "rides": 91,
      "wins": 8,
      "winRate": 8.8,
      "placeRate": 29.7,
      "winRoi": 75.7
    },
    {
      "name": "嶋田純次",
      "rides": 98,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 23.5,
      "winRoi": 41.6
    },
    {
      "name": "西塚洸二",
      "rides": 74,
      "wins": 6,
      "winRate": 8.1,
      "placeRate": 24.3,
      "winRoi": 48.9
    },
    {
      "name": "三浦皇成",
      "rides": 70,
      "wins": 6,
      "winRate": 8.6,
      "placeRate": 31.4,
      "winRoi": 37.7
    },
    {
      "name": "石川裕紀",
      "rides": 68,
      "wins": 6,
      "winRate": 8.8,
      "placeRate": 17.6,
      "winRoi": 143.4
    },
    {
      "name": "秋山稔樹",
      "rides": 104,
      "wins": 5,
      "winRate": 4.8,
      "placeRate": 12.5,
      "winRoi": 39.4
    },
    {
      "name": "石橋脩",
      "rides": 89,
      "wins": 5,
      "winRate": 5.6,
      "placeRate": 24.7,
      "winRoi": 48.9
    },
    {
      "name": "江田照男",
      "rides": 68,
      "wins": 5,
      "winRate": 7.4,
      "placeRate": 10.3,
      "winRoi": 80.3
    }
  ],
  "niigata-all-middle": [
    {
      "name": "丹内祐次",
      "rides": 165,
      "wins": 17,
      "winRate": 10.3,
      "placeRate": 32.7,
      "winRoi": 62.0
    },
    {
      "name": "戸崎圭太",
      "rides": 97,
      "wins": 17,
      "winRate": 17.5,
      "placeRate": 42.3,
      "winRoi": 75.6
    },
    {
      "name": "菅原明良",
      "rides": 140,
      "wins": 15,
      "winRate": 10.7,
      "placeRate": 30.0,
      "winRoi": 97.1
    },
    {
      "name": "西村淳也",
      "rides": 106,
      "wins": 14,
      "winRate": 13.2,
      "placeRate": 32.1,
      "winRoi": 86.5
    },
    {
      "name": "丸山元気",
      "rides": 152,
      "wins": 13,
      "winRate": 8.6,
      "placeRate": 20.4,
      "winRoi": 53.8
    },
    {
      "name": "津村明秀",
      "rides": 145,
      "wins": 13,
      "winRate": 9.0,
      "placeRate": 31.0,
      "winRoi": 92.4
    },
    {
      "name": "斎藤新",
      "rides": 135,
      "wins": 13,
      "winRate": 9.6,
      "placeRate": 20.7,
      "winRoi": 64.7
    },
    {
      "name": "亀田温心",
      "rides": 112,
      "wins": 12,
      "winRate": 10.7,
      "placeRate": 25.0,
      "winRoi": 95.1
    },
    {
      "name": "荻野極",
      "rides": 124,
      "wins": 11,
      "winRate": 8.9,
      "placeRate": 29.8,
      "winRoi": 37.2
    },
    {
      "name": "佐々木大",
      "rides": 93,
      "wins": 11,
      "winRate": 11.8,
      "placeRate": 23.7,
      "winRoi": 51.7
    },
    {
      "name": "菊沢一樹",
      "rides": 201,
      "wins": 10,
      "winRate": 5.0,
      "placeRate": 18.4,
      "winRoi": 102.4
    },
    {
      "name": "菱田裕二",
      "rides": 91,
      "wins": 10,
      "winRate": 11.0,
      "placeRate": 28.6,
      "winRoi": 113.8
    },
    {
      "name": "坂井瑠星",
      "rides": 52,
      "wins": 10,
      "winRate": 19.2,
      "placeRate": 42.3,
      "winRoi": 109.0
    },
    {
      "name": "吉田隼人",
      "rides": 73,
      "wins": 9,
      "winRate": 12.3,
      "placeRate": 43.8,
      "winRoi": 116.4
    },
    {
      "name": "横山琉人",
      "rides": 109,
      "wins": 7,
      "winRate": 6.4,
      "placeRate": 24.8,
      "winRoi": 112.9
    },
    {
      "name": "小沢大仁",
      "rides": 102,
      "wins": 7,
      "winRate": 6.9,
      "placeRate": 20.6,
      "winRoi": 75.1
    },
    {
      "name": "秋山稔樹",
      "rides": 99,
      "wins": 7,
      "winRate": 7.1,
      "placeRate": 14.1,
      "winRoi": 284.2
    },
    {
      "name": "西塚洸二",
      "rides": 63,
      "wins": 7,
      "winRate": 11.1,
      "placeRate": 31.7,
      "winRoi": 56.5
    },
    {
      "name": "三浦皇成",
      "rides": 86,
      "wins": 6,
      "winRate": 7.0,
      "placeRate": 26.7,
      "winRoi": 21.6
    },
    {
      "name": "角田大和",
      "rides": 62,
      "wins": 6,
      "winRate": 9.7,
      "placeRate": 33.9,
      "winRoi": 32.1
    }
  ],
  "niigata-turf-all": [
    {
      "name": "菅原明良",
      "rides": 166,
      "wins": 26,
      "winRate": 15.7,
      "placeRate": 31.3,
      "winRoi": 109.6
    },
    {
      "name": "丹内祐次",
      "rides": 186,
      "wins": 20,
      "winRate": 10.8,
      "placeRate": 31.2,
      "winRoi": 77.3
    },
    {
      "name": "津村明秀",
      "rides": 199,
      "wins": 17,
      "winRate": 8.5,
      "placeRate": 32.7,
      "winRoi": 111.6
    },
    {
      "name": "戸崎圭太",
      "rides": 123,
      "wins": 17,
      "winRate": 13.8,
      "placeRate": 35.0,
      "winRoi": 54.1
    },
    {
      "name": "菊沢一樹",
      "rides": 242,
      "wins": 16,
      "winRate": 6.6,
      "placeRate": 21.1,
      "winRoi": 104.8
    },
    {
      "name": "荻野極",
      "rides": 163,
      "wins": 15,
      "winRate": 9.2,
      "placeRate": 26.4,
      "winRoi": 111.8
    },
    {
      "name": "ルメール",
      "rides": 51,
      "wins": 15,
      "winRate": 29.4,
      "placeRate": 66.7,
      "winRoi": 75.1
    },
    {
      "name": "斎藤新",
      "rides": 175,
      "wins": 14,
      "winRate": 8.0,
      "placeRate": 17.1,
      "winRoi": 85.3
    },
    {
      "name": "西村淳也",
      "rides": 103,
      "wins": 13,
      "winRate": 12.6,
      "placeRate": 32.0,
      "winRoi": 97.1
    },
    {
      "name": "丸山元気",
      "rides": 196,
      "wins": 12,
      "winRate": 6.1,
      "placeRate": 20.9,
      "winRoi": 41.7
    },
    {
      "name": "亀田温心",
      "rides": 137,
      "wins": 12,
      "winRate": 8.8,
      "placeRate": 19.0,
      "winRoi": 70.5
    },
    {
      "name": "菱田裕二",
      "rides": 119,
      "wins": 12,
      "winRate": 10.1,
      "placeRate": 21.8,
      "winRoi": 51.2
    },
    {
      "name": "坂井瑠星",
      "rides": 63,
      "wins": 12,
      "winRate": 19.0,
      "placeRate": 36.5,
      "winRoi": 84.8
    },
    {
      "name": "佐々木大",
      "rides": 99,
      "wins": 11,
      "winRate": 11.1,
      "placeRate": 24.2,
      "winRoi": 155.3
    },
    {
      "name": "石川裕紀",
      "rides": 110,
      "wins": 10,
      "winRate": 9.1,
      "placeRate": 20.9,
      "winRoi": 99.6
    },
    {
      "name": "岩田望来",
      "rides": 52,
      "wins": 9,
      "winRate": 17.3,
      "placeRate": 34.6,
      "winRoi": 190.0
    },
    {
      "name": "永島まな",
      "rides": 105,
      "wins": 8,
      "winRate": 7.6,
      "placeRate": 19.0,
      "winRoi": 207.4
    },
    {
      "name": "Ｍ．デム",
      "rides": 65,
      "wins": 8,
      "winRate": 12.3,
      "placeRate": 29.2,
      "winRoi": 109.2
    },
    {
      "name": "横山琉人",
      "rides": 137,
      "wins": 7,
      "winRate": 5.1,
      "placeRate": 19.0,
      "winRoi": 64.7
    },
    {
      "name": "吉田隼人",
      "rides": 83,
      "wins": 7,
      "winRate": 8.4,
      "placeRate": 30.1,
      "winRoi": 83.1
    }
  ],
  "niigata-turf-sprint": [
    {
      "name": "菊沢一樹",
      "rides": 128,
      "wins": 12,
      "winRate": 9.4,
      "placeRate": 25.0,
      "winRoi": 104.9
    },
    {
      "name": "丹内祐次",
      "rides": 92,
      "wins": 10,
      "winRate": 10.9,
      "placeRate": 30.4,
      "winRoi": 98.6
    },
    {
      "name": "菅原明良",
      "rides": 69,
      "wins": 10,
      "winRate": 14.5,
      "placeRate": 24.6,
      "winRoi": 82.9
    },
    {
      "name": "津村明秀",
      "rides": 86,
      "wins": 8,
      "winRate": 9.3,
      "placeRate": 31.4,
      "winRoi": 119.9
    },
    {
      "name": "荻野極",
      "rides": 66,
      "wins": 7,
      "winRate": 10.6,
      "placeRate": 24.2,
      "winRoi": 223.2
    },
    {
      "name": "永島まな",
      "rides": 59,
      "wins": 7,
      "winRate": 11.9,
      "placeRate": 23.7,
      "winRoi": 355.4
    },
    {
      "name": "丸山元気",
      "rides": 89,
      "wins": 6,
      "winRate": 6.7,
      "placeRate": 23.6,
      "winRoi": 49.2
    },
    {
      "name": "斎藤新",
      "rides": 85,
      "wins": 6,
      "winRate": 7.1,
      "placeRate": 15.3,
      "winRoi": 94.4
    },
    {
      "name": "菱田裕二",
      "rides": 56,
      "wins": 6,
      "winRate": 10.7,
      "placeRate": 19.6,
      "winRoi": 63.9
    },
    {
      "name": "嶋田純次",
      "rides": 75,
      "wins": 5,
      "winRate": 6.7,
      "placeRate": 22.7,
      "winRoi": 39.2
    },
    {
      "name": "杉原誠人",
      "rides": 88,
      "wins": 4,
      "winRate": 4.5,
      "placeRate": 13.6,
      "winRoi": 101.4
    },
    {
      "name": "亀田温心",
      "rides": 70,
      "wins": 4,
      "winRate": 5.7,
      "placeRate": 12.9,
      "winRoi": 34.3
    },
    {
      "name": "横山琉人",
      "rides": 68,
      "wins": 3,
      "winRate": 4.4,
      "placeRate": 13.2,
      "winRoi": 29.6
    },
    {
      "name": "石橋脩",
      "rides": 51,
      "wins": 3,
      "winRate": 5.9,
      "placeRate": 19.6,
      "winRoi": 69.0
    },
    {
      "name": "武藤雅",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 9.2,
      "winRoi": 28.5
    },
    {
      "name": "小沢大仁",
      "rides": 51,
      "wins": 2,
      "winRate": 3.9,
      "placeRate": 3.9,
      "winRoi": 43.3
    },
    {
      "name": "富田暁",
      "rides": 59,
      "wins": 1,
      "winRate": 1.7,
      "placeRate": 25.4,
      "winRoi": 6.1
    },
    {
      "name": "原優介",
      "rides": 55,
      "wins": 1,
      "winRate": 1.8,
      "placeRate": 12.7,
      "winRoi": 40.2
    },
    {
      "name": "秋山稔樹",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 3.8,
      "winRoi": 23.6
    },
    {
      "name": "松本大輝",
      "rides": 51,
      "wins": 1,
      "winRate": 2.0,
      "placeRate": 13.7,
      "winRoi": 8.6
    }
  ],
  "niigata-turf-middle": [
    {
      "name": "戸崎圭太",
      "rides": 56,
      "wins": 10,
      "winRate": 17.9,
      "placeRate": 41.1,
      "winRoi": 62.0
    },
    {
      "name": "菅原明良",
      "rides": 62,
      "wins": 9,
      "winRate": 14.5,
      "placeRate": 37.1,
      "winRoi": 145.0
    },
    {
      "name": "亀田温心",
      "rides": 52,
      "wins": 8,
      "winRate": 15.4,
      "placeRate": 30.8,
      "winRoi": 139.6
    },
    {
      "name": "丹内祐次",
      "rides": 74,
      "wins": 7,
      "winRate": 9.5,
      "placeRate": 31.1,
      "winRoi": 57.2
    },
    {
      "name": "津村明秀",
      "rides": 74,
      "wins": 6,
      "winRate": 8.1,
      "placeRate": 31.1,
      "winRoi": 140.4
    },
    {
      "name": "荻野極",
      "rides": 71,
      "wins": 6,
      "winRate": 8.5,
      "placeRate": 29.6,
      "winRoi": 33.9
    },
    {
      "name": "斎藤新",
      "rides": 67,
      "wins": 6,
      "winRate": 9.0,
      "placeRate": 19.4,
      "winRoi": 55.4
    },
    {
      "name": "丸山元気",
      "rides": 80,
      "wins": 5,
      "winRate": 6.2,
      "placeRate": 16.2,
      "winRoi": 43.2
    },
    {
      "name": "菊沢一樹",
      "rides": 88,
      "wins": 4,
      "winRate": 4.5,
      "placeRate": 17.0,
      "winRoi": 135.5
    },
    {
      "name": "横山琉人",
      "rides": 55,
      "wins": 4,
      "winRate": 7.3,
      "placeRate": 29.1,
      "winRoi": 124.5
    },
    {
      "name": "石橋脩",
      "rides": 64,
      "wins": 1,
      "winRate": 1.6,
      "placeRate": 17.2,
      "winRoi": 7.7
    },
    {
      "name": "杉原誠人",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 20.8,
      "winRoi": 7.7
    }
  ],
  "niigata-dirt-all": [
    {
      "name": "丹内祐次",
      "rides": 161,
      "wins": 15,
      "winRate": 9.3,
      "placeRate": 30.4,
      "winRoi": 60.4
    },
    {
      "name": "菅原明良",
      "rides": 144,
      "wins": 15,
      "winRate": 10.4,
      "placeRate": 28.5,
      "winRoi": 63.3
    },
    {
      "name": "津村明秀",
      "rides": 128,
      "wins": 15,
      "winRate": 11.7,
      "placeRate": 32.8,
      "winRoi": 82.6
    },
    {
      "name": "丸山元気",
      "rides": 134,
      "wins": 13,
      "winRate": 9.7,
      "placeRate": 24.6,
      "winRoi": 77.1
    },
    {
      "name": "今村聖奈",
      "rides": 84,
      "wins": 13,
      "winRate": 15.5,
      "placeRate": 35.7,
      "winRoi": 106.3
    },
    {
      "name": "戸崎圭太",
      "rides": 75,
      "wins": 12,
      "winRate": 16.0,
      "placeRate": 44.0,
      "winRoi": 83.1
    },
    {
      "name": "斎藤新",
      "rides": 122,
      "wins": 11,
      "winRate": 9.0,
      "placeRate": 21.3,
      "winRoi": 66.3
    },
    {
      "name": "佐々木大",
      "rides": 95,
      "wins": 11,
      "winRate": 11.6,
      "placeRate": 30.5,
      "winRoi": 44.6
    },
    {
      "name": "菊沢一樹",
      "rides": 217,
      "wins": 10,
      "winRate": 4.6,
      "placeRate": 19.8,
      "winRoi": 60.6
    },
    {
      "name": "亀田温心",
      "rides": 109,
      "wins": 10,
      "winRate": 9.2,
      "placeRate": 19.3,
      "winRoi": 70.9
    },
    {
      "name": "三浦皇成",
      "rides": 79,
      "wins": 10,
      "winRate": 12.7,
      "placeRate": 29.1,
      "winRoi": 48.1
    },
    {
      "name": "秋山稔樹",
      "rides": 115,
      "wins": 9,
      "winRate": 7.8,
      "placeRate": 18.3,
      "winRoi": 251.3
    },
    {
      "name": "荻野極",
      "rides": 96,
      "wins": 9,
      "winRate": 9.4,
      "placeRate": 28.1,
      "winRoi": 75.4
    },
    {
      "name": "菱田裕二",
      "rides": 87,
      "wins": 9,
      "winRate": 10.3,
      "placeRate": 31.0,
      "winRoi": 131.7
    },
    {
      "name": "小沢大仁",
      "rides": 114,
      "wins": 8,
      "winRate": 7.0,
      "placeRate": 22.8,
      "winRoi": 76.1
    },
    {
      "name": "西村淳也",
      "rides": 95,
      "wins": 8,
      "winRate": 8.4,
      "placeRate": 31.6,
      "winRoi": 42.0
    },
    {
      "name": "西塚洸二",
      "rides": 74,
      "wins": 8,
      "winRate": 10.8,
      "placeRate": 32.4,
      "winRoi": 60.7
    },
    {
      "name": "原優介",
      "rides": 132,
      "wins": 6,
      "winRate": 4.5,
      "placeRate": 18.9,
      "winRoi": 28.3
    },
    {
      "name": "松本大輝",
      "rides": 99,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 17.2,
      "winRoi": 69.0
    },
    {
      "name": "小林美駒",
      "rides": 59,
      "wins": 6,
      "winRate": 10.2,
      "placeRate": 20.3,
      "winRoi": 134.2
    }
  ],
  "niigata-dirt-sprint": [
    {
      "name": "菅原明良",
      "rides": 64,
      "wins": 9,
      "winRate": 14.1,
      "placeRate": 32.8,
      "winRoi": 70.3
    },
    {
      "name": "津村明秀",
      "rides": 57,
      "wins": 8,
      "winRate": 14.0,
      "placeRate": 35.1,
      "winRoi": 132.6
    },
    {
      "name": "丸山元気",
      "rides": 59,
      "wins": 5,
      "winRate": 8.5,
      "placeRate": 23.7,
      "winRoi": 95.1
    },
    {
      "name": "菊沢一樹",
      "rides": 101,
      "wins": 4,
      "winRate": 4.0,
      "placeRate": 20.8,
      "winRoi": 44.4
    },
    {
      "name": "斎藤新",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 20.8,
      "winRoi": 57.7
    },
    {
      "name": "秋山稔樹",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 21.6,
      "winRoi": 55.9
    },
    {
      "name": "丹内祐次",
      "rides": 66,
      "wins": 3,
      "winRate": 4.5,
      "placeRate": 22.7,
      "winRoi": 44.2
    },
    {
      "name": "松本大輝",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 14.0,
      "winRoi": 105.8
    },
    {
      "name": "原優介",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 16.9,
      "winRoi": 10.9
    },
    {
      "name": "永島まな",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 20.0,
      "winRoi": 16.8
    },
    {
      "name": "小林脩斗",
      "rides": 54,
      "wins": 2,
      "winRate": 3.7,
      "placeRate": 18.5,
      "winRoi": 39.1
    }
  ],
  "niigata-dirt-middle": [
    {
      "name": "丹内祐次",
      "rides": 91,
      "wins": 10,
      "winRate": 11.0,
      "placeRate": 34.1,
      "winRoi": 65.9
    },
    {
      "name": "丸山元気",
      "rides": 72,
      "wins": 8,
      "winRate": 11.1,
      "placeRate": 25.0,
      "winRoi": 65.6
    },
    {
      "name": "津村明秀",
      "rides": 71,
      "wins": 7,
      "winRate": 9.9,
      "placeRate": 31.0,
      "winRoi": 42.4
    },
    {
      "name": "斎藤新",
      "rides": 68,
      "wins": 7,
      "winRate": 10.3,
      "placeRate": 22.1,
      "winRoi": 74.0
    },
    {
      "name": "菊沢一樹",
      "rides": 113,
      "wins": 6,
      "winRate": 5.3,
      "placeRate": 19.5,
      "winRoi": 76.6
    },
    {
      "name": "菅原明良",
      "rides": 78,
      "wins": 6,
      "winRate": 7.7,
      "placeRate": 24.4,
      "winRoi": 59.1
    },
    {
      "name": "西村淳也",
      "rides": 58,
      "wins": 6,
      "winRate": 10.3,
      "placeRate": 32.8,
      "winRoi": 52.2
    },
    {
      "name": "秋山稔樹",
      "rides": 62,
      "wins": 5,
      "winRate": 8.1,
      "placeRate": 14.5,
      "winRoi": 420.2
    },
    {
      "name": "小沢大仁",
      "rides": 61,
      "wins": 5,
      "winRate": 8.2,
      "placeRate": 23.0,
      "winRoi": 109.0
    },
    {
      "name": "荻野極",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 30.2,
      "winRoi": 41.5
    },
    {
      "name": "原優介",
      "rides": 66,
      "wins": 4,
      "winRate": 6.1,
      "placeRate": 21.2,
      "winRoi": 45.9
    },
    {
      "name": "亀田温心",
      "rides": 60,
      "wins": 4,
      "winRate": 6.7,
      "placeRate": 20.0,
      "winRoi": 56.5
    },
    {
      "name": "武藤雅",
      "rides": 55,
      "wins": 4,
      "winRate": 7.3,
      "placeRate": 18.2,
      "winRoi": 69.6
    },
    {
      "name": "横山琉人",
      "rides": 54,
      "wins": 3,
      "winRate": 5.6,
      "placeRate": 20.4,
      "winRoi": 101.1
    },
    {
      "name": "石橋脩",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 36.0,
      "winRoi": 34.6
    },
    {
      "name": "富田暁",
      "rides": 60,
      "wins": 2,
      "winRate": 3.3,
      "placeRate": 21.7,
      "winRoi": 57.7
    },
    {
      "name": "木幡巧也",
      "rides": 50,
      "wins": 2,
      "winRate": 4.0,
      "placeRate": 14.0,
      "winRoi": 12.4
    },
    {
      "name": "永島まな",
      "rides": 55,
      "wins": 1,
      "winRate": 1.8,
      "placeRate": 16.4,
      "winRoi": 9.8
    }
  ],
  "tokyo-all-all": [
    {
      "name": "ルメール",
      "rides": 909,
      "wins": 256,
      "winRate": 28.2,
      "placeRate": 58.9,
      "winRoi": 84.8
    },
    {
      "name": "戸崎圭太",
      "rides": 1067,
      "wins": 133,
      "winRate": 12.5,
      "placeRate": 36.8,
      "winRoi": 65.3
    },
    {
      "name": "横山武史",
      "rides": 863,
      "wins": 85,
      "winRate": 9.8,
      "placeRate": 28.4,
      "winRoi": 67.7
    },
    {
      "name": "田辺裕信",
      "rides": 747,
      "wins": 64,
      "winRate": 8.6,
      "placeRate": 25.4,
      "winRoi": 117.3
    },
    {
      "name": "川田将雅",
      "rides": 289,
      "wins": 63,
      "winRate": 21.8,
      "placeRate": 51.9,
      "winRoi": 93.5
    },
    {
      "name": "三浦皇成",
      "rides": 826,
      "wins": 59,
      "winRate": 7.1,
      "placeRate": 26.5,
      "winRoi": 66.0
    },
    {
      "name": "菅原明良",
      "rides": 842,
      "wins": 56,
      "winRate": 6.7,
      "placeRate": 24.3,
      "winRoi": 71.4
    },
    {
      "name": "レーン",
      "rides": 288,
      "wins": 56,
      "winRate": 19.4,
      "placeRate": 44.8,
      "winRoi": 69.7
    },
    {
      "name": "横山和生",
      "rides": 533,
      "wins": 53,
      "winRate": 9.9,
      "placeRate": 26.8,
      "winRoi": 86.1
    },
    {
      "name": "Ｍ．デム",
      "rides": 421,
      "wins": 39,
      "winRate": 9.3,
      "placeRate": 30.2,
      "winRoi": 61.7
    },
    {
      "name": "松山弘平",
      "rides": 353,
      "wins": 38,
      "winRate": 10.8,
      "placeRate": 30.9,
      "winRoi": 91.4
    },
    {
      "name": "津村明秀",
      "rides": 734,
      "wins": 37,
      "winRate": 5.0,
      "placeRate": 18.7,
      "winRoi": 70.4
    },
    {
      "name": "石川裕紀",
      "rides": 655,
      "wins": 32,
      "winRate": 4.9,
      "placeRate": 17.4,
      "winRoi": 94.5
    },
    {
      "name": "大野拓弥",
      "rides": 677,
      "wins": 31,
      "winRate": 4.6,
      "placeRate": 19.2,
      "winRoi": 59.2
    },
    {
      "name": "横山典弘",
      "rides": 268,
      "wins": 29,
      "winRate": 10.8,
      "placeRate": 25.4,
      "winRoi": 87.5
    },
    {
      "name": "石橋脩",
      "rides": 522,
      "wins": 28,
      "winRate": 5.4,
      "placeRate": 18.4,
      "winRoi": 44.7
    },
    {
      "name": "武豊",
      "rides": 265,
      "wins": 27,
      "winRate": 10.2,
      "placeRate": 32.1,
      "winRoi": 72.7
    },
    {
      "name": "木幡巧也",
      "rides": 691,
      "wins": 25,
      "winRate": 3.6,
      "placeRate": 13.6,
      "winRoi": 63.5
    },
    {
      "name": "岩田望来",
      "rides": 278,
      "wins": 24,
      "winRate": 8.6,
      "placeRate": 23.4,
      "winRoi": 83.3
    },
    {
      "name": "坂井瑠星",
      "rides": 269,
      "wins": 24,
      "winRate": 8.9,
      "placeRate": 27.1,
      "winRoi": 70.3
    }
  ],
  "tokyo-all-sprint": [
    {
      "name": "ルメール",
      "rides": 240,
      "wins": 55,
      "winRate": 22.9,
      "placeRate": 47.9,
      "winRoi": 76.5
    },
    {
      "name": "戸崎圭太",
      "rides": 331,
      "wins": 46,
      "winRate": 13.9,
      "placeRate": 38.1,
      "winRoi": 76.6
    },
    {
      "name": "横山武史",
      "rides": 281,
      "wins": 27,
      "winRate": 9.6,
      "placeRate": 30.6,
      "winRoi": 67.6
    },
    {
      "name": "三浦皇成",
      "rides": 280,
      "wins": 25,
      "winRate": 8.9,
      "placeRate": 28.6,
      "winRoi": 72.2
    },
    {
      "name": "菅原明良",
      "rides": 293,
      "wins": 20,
      "winRate": 6.8,
      "placeRate": 25.3,
      "winRoi": 55.1
    },
    {
      "name": "田辺裕信",
      "rides": 232,
      "wins": 17,
      "winRate": 7.3,
      "placeRate": 22.8,
      "winRoi": 188.5
    },
    {
      "name": "松山弘平",
      "rides": 92,
      "wins": 17,
      "winRate": 18.5,
      "placeRate": 34.8,
      "winRoi": 159.1
    },
    {
      "name": "石川裕紀",
      "rides": 227,
      "wins": 16,
      "winRate": 7.0,
      "placeRate": 18.5,
      "winRoi": 148.1
    },
    {
      "name": "津村明秀",
      "rides": 269,
      "wins": 15,
      "winRate": 5.6,
      "placeRate": 17.8,
      "winRoi": 53.4
    },
    {
      "name": "横山和生",
      "rides": 179,
      "wins": 15,
      "winRate": 8.4,
      "placeRate": 29.6,
      "winRoi": 52.5
    },
    {
      "name": "レーン",
      "rides": 81,
      "wins": 13,
      "winRate": 16.0,
      "placeRate": 37.0,
      "winRoi": 37.3
    },
    {
      "name": "川田将雅",
      "rides": 64,
      "wins": 13,
      "winRate": 20.3,
      "placeRate": 50.0,
      "winRoi": 75.5
    },
    {
      "name": "横山典弘",
      "rides": 88,
      "wins": 11,
      "winRate": 12.5,
      "placeRate": 29.5,
      "winRoi": 84.1
    },
    {
      "name": "大野拓弥",
      "rides": 233,
      "wins": 10,
      "winRate": 4.3,
      "placeRate": 16.3,
      "winRoi": 47.8
    },
    {
      "name": "Ｍ．デム",
      "rides": 118,
      "wins": 10,
      "winRate": 8.5,
      "placeRate": 33.1,
      "winRoi": 51.4
    },
    {
      "name": "岩田望来",
      "rides": 85,
      "wins": 10,
      "winRate": 11.8,
      "placeRate": 23.5,
      "winRoi": 63.6
    },
    {
      "name": "吉田豊",
      "rides": 195,
      "wins": 8,
      "winRate": 4.1,
      "placeRate": 14.4,
      "winRoi": 36.6
    },
    {
      "name": "石橋脩",
      "rides": 188,
      "wins": 8,
      "winRate": 4.3,
      "placeRate": 14.4,
      "winRoi": 42.4
    },
    {
      "name": "武豊",
      "rides": 74,
      "wins": 7,
      "winRate": 9.5,
      "placeRate": 24.3,
      "winRoi": 54.7
    },
    {
      "name": "木幡巧也",
      "rides": 248,
      "wins": 6,
      "winRate": 2.4,
      "placeRate": 10.9,
      "winRoi": 49.4
    }
  ],
  "tokyo-all-mile": [
    {
      "name": "ルメール",
      "rides": 314,
      "wins": 90,
      "winRate": 28.7,
      "placeRate": 56.1,
      "winRoi": 85.1
    },
    {
      "name": "戸崎圭太",
      "rides": 357,
      "wins": 47,
      "winRate": 13.2,
      "placeRate": 36.4,
      "winRoi": 73.1
    },
    {
      "name": "川田将雅",
      "rides": 99,
      "wins": 26,
      "winRate": 26.3,
      "placeRate": 50.5,
      "winRoi": 150.8
    },
    {
      "name": "横山武史",
      "rides": 281,
      "wins": 25,
      "winRate": 8.9,
      "placeRate": 27.4,
      "winRoi": 72.6
    },
    {
      "name": "横山和生",
      "rides": 193,
      "wins": 22,
      "winRate": 11.4,
      "placeRate": 28.5,
      "winRoi": 77.7
    },
    {
      "name": "菅原明良",
      "rides": 293,
      "wins": 20,
      "winRate": 6.8,
      "placeRate": 23.9,
      "winRoi": 89.9
    },
    {
      "name": "田辺裕信",
      "rides": 248,
      "wins": 20,
      "winRate": 8.1,
      "placeRate": 24.6,
      "winRoi": 94.8
    },
    {
      "name": "三浦皇成",
      "rides": 292,
      "wins": 18,
      "winRate": 6.2,
      "placeRate": 24.3,
      "winRoi": 58.8
    },
    {
      "name": "レーン",
      "rides": 98,
      "wins": 16,
      "winRate": 16.3,
      "placeRate": 44.9,
      "winRoi": 66.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 141,
      "wins": 13,
      "winRate": 9.2,
      "placeRate": 24.8,
      "winRoi": 77.6
    },
    {
      "name": "大野拓弥",
      "rides": 215,
      "wins": 11,
      "winRate": 5.1,
      "placeRate": 19.5,
      "winRoi": 81.3
    },
    {
      "name": "石川裕紀",
      "rides": 208,
      "wins": 11,
      "winRate": 5.3,
      "placeRate": 18.8,
      "winRoi": 62.5
    },
    {
      "name": "松山弘平",
      "rides": 126,
      "wins": 11,
      "winRate": 8.7,
      "placeRate": 30.2,
      "winRoi": 86.7
    },
    {
      "name": "荻野極",
      "rides": 60,
      "wins": 11,
      "winRate": 18.3,
      "placeRate": 35.0,
      "winRoi": 101.3
    },
    {
      "name": "津村明秀",
      "rides": 234,
      "wins": 10,
      "winRate": 4.3,
      "placeRate": 20.9,
      "winRoi": 102.0
    },
    {
      "name": "木幡巧也",
      "rides": 233,
      "wins": 9,
      "winRate": 3.9,
      "placeRate": 14.2,
      "winRoi": 101.8
    },
    {
      "name": "横山典弘",
      "rides": 99,
      "wins": 9,
      "winRate": 9.1,
      "placeRate": 21.2,
      "winRoi": 79.8
    },
    {
      "name": "坂井瑠星",
      "rides": 92,
      "wins": 9,
      "winRate": 9.8,
      "placeRate": 29.3,
      "winRoi": 58.6
    },
    {
      "name": "原優介",
      "rides": 181,
      "wins": 8,
      "winRate": 4.4,
      "placeRate": 17.7,
      "winRoi": 44.8
    },
    {
      "name": "石橋脩",
      "rides": 162,
      "wins": 8,
      "winRate": 4.9,
      "placeRate": 22.8,
      "winRoi": 26.2
    }
  ],
  "tokyo-all-middle": [
    {
      "name": "ルメール",
      "rides": 246,
      "wins": 73,
      "winRate": 29.7,
      "placeRate": 66.3,
      "winRoi": 84.7
    },
    {
      "name": "戸崎圭太",
      "rides": 284,
      "wins": 33,
      "winRate": 11.6,
      "placeRate": 37.7,
      "winRoi": 48.6
    },
    {
      "name": "横山武史",
      "rides": 228,
      "wins": 27,
      "winRate": 11.8,
      "placeRate": 27.6,
      "winRoi": 73.6
    },
    {
      "name": "レーン",
      "rides": 64,
      "wins": 19,
      "winRate": 29.7,
      "placeRate": 53.1,
      "winRoi": 106.9
    },
    {
      "name": "川田将雅",
      "rides": 85,
      "wins": 18,
      "winRate": 21.2,
      "placeRate": 56.5,
      "winRoi": 60.9
    },
    {
      "name": "田辺裕信",
      "rides": 200,
      "wins": 17,
      "winRate": 8.5,
      "placeRate": 23.5,
      "winRoi": 55.8
    },
    {
      "name": "菅原明良",
      "rides": 193,
      "wins": 13,
      "winRate": 6.7,
      "placeRate": 25.4,
      "winRoi": 62.2
    },
    {
      "name": "横山和生",
      "rides": 124,
      "wins": 13,
      "winRate": 10.5,
      "placeRate": 22.6,
      "winRoi": 165.2
    },
    {
      "name": "三浦皇成",
      "rides": 190,
      "wins": 12,
      "winRate": 6.3,
      "placeRate": 26.3,
      "winRoi": 69.3
    },
    {
      "name": "石橋脩",
      "rides": 131,
      "wins": 12,
      "winRate": 9.2,
      "placeRate": 22.1,
      "winRoi": 84.8
    },
    {
      "name": "Ｍ．デム",
      "rides": 111,
      "wins": 12,
      "winRate": 10.8,
      "placeRate": 32.4,
      "winRoi": 66.3
    },
    {
      "name": "津村明秀",
      "rides": 174,
      "wins": 10,
      "winRate": 5.7,
      "placeRate": 16.7,
      "winRoi": 35.8
    },
    {
      "name": "大野拓弥",
      "rides": 176,
      "wins": 9,
      "winRate": 5.1,
      "placeRate": 22.7,
      "winRoi": 62.8
    },
    {
      "name": "木幡巧也",
      "rides": 175,
      "wins": 9,
      "winRate": 5.1,
      "placeRate": 17.1,
      "winRoi": 38.9
    },
    {
      "name": "松山弘平",
      "rides": 98,
      "wins": 9,
      "winRate": 9.2,
      "placeRate": 33.7,
      "winRoi": 65.6
    },
    {
      "name": "坂井瑠星",
      "rides": 71,
      "wins": 8,
      "winRate": 11.3,
      "placeRate": 28.2,
      "winRoi": 89.4
    },
    {
      "name": "武豊",
      "rides": 67,
      "wins": 8,
      "winRate": 11.9,
      "placeRate": 44.8,
      "winRoi": 83.3
    },
    {
      "name": "北村宏司",
      "rides": 131,
      "wins": 7,
      "winRate": 5.3,
      "placeRate": 19.1,
      "winRoi": 33.7
    },
    {
      "name": "岩田望来",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 26.9,
      "winRoi": 68.4
    },
    {
      "name": "原優介",
      "rides": 114,
      "wins": 6,
      "winRate": 5.3,
      "placeRate": 13.2,
      "winRoi": 41.1
    }
  ],
  "tokyo-all-long": [
    {
      "name": "ルメール",
      "rides": 109,
      "wins": 38,
      "winRate": 34.9,
      "placeRate": 74.3,
      "winRoi": 102.6
    },
    {
      "name": "田辺裕信",
      "rides": 67,
      "wins": 10,
      "winRate": 14.9,
      "placeRate": 43.3,
      "winRoi": 137.3
    },
    {
      "name": "戸崎圭太",
      "rides": 95,
      "wins": 7,
      "winRate": 7.4,
      "placeRate": 31.6,
      "winRoi": 46.8
    },
    {
      "name": "横山武史",
      "rides": 73,
      "wins": 6,
      "winRate": 8.2,
      "placeRate": 26.0,
      "winRoi": 30.8
    },
    {
      "name": "三浦皇成",
      "rides": 64,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 28.1,
      "winRoi": 61.6
    },
    {
      "name": "Ｍ．デム",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 33.3,
      "winRoi": 31.8
    },
    {
      "name": "菅原明良",
      "rides": 63,
      "wins": 3,
      "winRate": 4.8,
      "placeRate": 19.0,
      "winRoi": 89.0
    },
    {
      "name": "吉田豊",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 16.0,
      "winRoi": 121.0
    },
    {
      "name": "津村明秀",
      "rides": 57,
      "wins": 2,
      "winRate": 3.5,
      "placeRate": 19.3,
      "winRoi": 126.1
    },
    {
      "name": "大野拓弥",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 18.9,
      "winRoi": 8.3
    }
  ],
  "tokyo-turf-all": [
    {
      "name": "ルメール",
      "rides": 533,
      "wins": 163,
      "winRate": 30.6,
      "placeRate": 65.5,
      "winRoi": 90.1
    },
    {
      "name": "戸崎圭太",
      "rides": 547,
      "wins": 62,
      "winRate": 11.3,
      "placeRate": 38.2,
      "winRoi": 60.6
    },
    {
      "name": "横山武史",
      "rides": 447,
      "wins": 46,
      "winRate": 10.3,
      "placeRate": 29.3,
      "winRoi": 72.5
    },
    {
      "name": "川田将雅",
      "rides": 188,
      "wins": 40,
      "winRate": 21.3,
      "placeRate": 51.6,
      "winRoi": 105.8
    },
    {
      "name": "田辺裕信",
      "rides": 356,
      "wins": 38,
      "winRate": 10.7,
      "placeRate": 32.9,
      "winRoi": 160.2
    },
    {
      "name": "レーン",
      "rides": 166,
      "wins": 29,
      "winRate": 17.5,
      "placeRate": 45.2,
      "winRoi": 71.3
    },
    {
      "name": "菅原明良",
      "rides": 375,
      "wins": 26,
      "winRate": 6.9,
      "placeRate": 25.1,
      "winRoi": 76.8
    },
    {
      "name": "横山和生",
      "rides": 250,
      "wins": 26,
      "winRate": 10.4,
      "placeRate": 23.6,
      "winRoi": 105.1
    },
    {
      "name": "Ｍ．デム",
      "rides": 236,
      "wins": 23,
      "winRate": 9.7,
      "placeRate": 31.8,
      "winRoi": 58.6
    },
    {
      "name": "三浦皇成",
      "rides": 392,
      "wins": 22,
      "winRate": 5.6,
      "placeRate": 23.5,
      "winRoi": 76.0
    },
    {
      "name": "津村明秀",
      "rides": 361,
      "wins": 22,
      "winRate": 6.1,
      "placeRate": 21.9,
      "winRoi": 110.5
    },
    {
      "name": "松山弘平",
      "rides": 194,
      "wins": 15,
      "winRate": 7.7,
      "placeRate": 26.8,
      "winRoi": 71.9
    },
    {
      "name": "石川裕紀",
      "rides": 280,
      "wins": 14,
      "winRate": 5.0,
      "placeRate": 19.3,
      "winRoi": 87.9
    },
    {
      "name": "石橋脩",
      "rides": 219,
      "wins": 12,
      "winRate": 5.5,
      "placeRate": 14.2,
      "winRoi": 52.1
    },
    {
      "name": "武豊",
      "rides": 156,
      "wins": 12,
      "winRate": 7.7,
      "placeRate": 29.5,
      "winRoi": 50.2
    },
    {
      "name": "大野拓弥",
      "rides": 301,
      "wins": 11,
      "winRate": 3.7,
      "placeRate": 19.3,
      "winRoi": 55.7
    },
    {
      "name": "北村宏司",
      "rides": 246,
      "wins": 11,
      "winRate": 4.5,
      "placeRate": 17.9,
      "winRoi": 101.4
    },
    {
      "name": "坂井瑠星",
      "rides": 142,
      "wins": 11,
      "winRate": 7.7,
      "placeRate": 23.2,
      "winRoi": 86.1
    },
    {
      "name": "横山典弘",
      "rides": 132,
      "wins": 10,
      "winRate": 7.6,
      "placeRate": 18.2,
      "winRoi": 72.2
    },
    {
      "name": "池添謙一",
      "rides": 73,
      "wins": 10,
      "winRate": 13.7,
      "placeRate": 21.9,
      "winRoi": 105.2
    }
  ],
  "tokyo-turf-sprint": [
    {
      "name": "ルメール",
      "rides": 105,
      "wins": 26,
      "winRate": 24.8,
      "placeRate": 56.2,
      "winRoi": 80.9
    },
    {
      "name": "戸崎圭太",
      "rides": 122,
      "wins": 14,
      "winRate": 11.5,
      "placeRate": 41.0,
      "winRoi": 86.1
    },
    {
      "name": "横山武史",
      "rides": 86,
      "wins": 13,
      "winRate": 15.1,
      "placeRate": 40.7,
      "winRoi": 117.3
    },
    {
      "name": "津村明秀",
      "rides": 94,
      "wins": 8,
      "winRate": 8.5,
      "placeRate": 25.5,
      "winRoi": 58.9
    },
    {
      "name": "三浦皇成",
      "rides": 93,
      "wins": 7,
      "winRate": 7.5,
      "placeRate": 26.9,
      "winRoi": 101.3
    },
    {
      "name": "菅原明良",
      "rides": 88,
      "wins": 7,
      "winRate": 8.0,
      "placeRate": 26.1,
      "winRoi": 81.5
    },
    {
      "name": "田辺裕信",
      "rides": 73,
      "wins": 7,
      "winRate": 9.6,
      "placeRate": 34.2,
      "winRoi": 458.2
    },
    {
      "name": "石川裕紀",
      "rides": 73,
      "wins": 7,
      "winRate": 9.6,
      "placeRate": 20.5,
      "winRoi": 94.0
    },
    {
      "name": "横山和生",
      "rides": 57,
      "wins": 5,
      "winRate": 8.8,
      "placeRate": 29.8,
      "winRoi": 56.8
    },
    {
      "name": "木幡巧也",
      "rides": 75,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 13.3,
      "winRoi": 20.9
    },
    {
      "name": "北村宏司",
      "rides": 67,
      "wins": 2,
      "winRate": 3.0,
      "placeRate": 14.9,
      "winRoi": 192.5
    },
    {
      "name": "石橋脩",
      "rides": 53,
      "wins": 2,
      "winRate": 3.8,
      "placeRate": 7.5,
      "winRoi": 54.9
    },
    {
      "name": "大野拓弥",
      "rides": 76,
      "wins": 1,
      "winRate": 1.3,
      "placeRate": 14.5,
      "winRoi": 51.4
    },
    {
      "name": "吉田豊",
      "rides": 59,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 8.5,
      "winRoi": 0.0
    }
  ],
  "tokyo-turf-mile": [
    {
      "name": "ルメール",
      "rides": 138,
      "wins": 44,
      "winRate": 31.9,
      "placeRate": 60.1,
      "winRoi": 90.3
    },
    {
      "name": "戸崎圭太",
      "rides": 140,
      "wins": 17,
      "winRate": 12.1,
      "placeRate": 37.9,
      "winRoi": 62.6
    },
    {
      "name": "川田将雅",
      "rides": 64,
      "wins": 17,
      "winRate": 26.6,
      "placeRate": 51.6,
      "winRoi": 187.7
    },
    {
      "name": "田辺裕信",
      "rides": 92,
      "wins": 10,
      "winRate": 10.9,
      "placeRate": 32.6,
      "winRoi": 76.7
    },
    {
      "name": "菅原明良",
      "rides": 102,
      "wins": 9,
      "winRate": 8.8,
      "placeRate": 22.5,
      "winRoi": 88.4
    },
    {
      "name": "横山和生",
      "rides": 66,
      "wins": 8,
      "winRate": 12.1,
      "placeRate": 22.7,
      "winRoi": 73.8
    },
    {
      "name": "横山武史",
      "rides": 127,
      "wins": 7,
      "winRate": 5.5,
      "placeRate": 26.8,
      "winRoi": 48.3
    },
    {
      "name": "Ｍ．デム",
      "rides": 55,
      "wins": 6,
      "winRate": 10.9,
      "placeRate": 20.0,
      "winRoi": 80.4
    },
    {
      "name": "三浦皇成",
      "rides": 102,
      "wins": 4,
      "winRate": 3.9,
      "placeRate": 18.6,
      "winRoi": 54.9
    },
    {
      "name": "津村明秀",
      "rides": 87,
      "wins": 4,
      "winRate": 4.6,
      "placeRate": 24.1,
      "winRoi": 253.1
    },
    {
      "name": "大野拓弥",
      "rides": 76,
      "wins": 4,
      "winRate": 5.3,
      "placeRate": 21.1,
      "winRoi": 117.2
    },
    {
      "name": "石川裕紀",
      "rides": 62,
      "wins": 4,
      "winRate": 6.5,
      "placeRate": 24.2,
      "winRoi": 97.6
    },
    {
      "name": "松山弘平",
      "rides": 60,
      "wins": 3,
      "winRate": 5.0,
      "placeRate": 26.7,
      "winRoi": 76.0
    },
    {
      "name": "吉田豊",
      "rides": 57,
      "wins": 3,
      "winRate": 5.3,
      "placeRate": 24.6,
      "winRoi": 54.7
    },
    {
      "name": "北村宏司",
      "rides": 53,
      "wins": 2,
      "winRate": 3.8,
      "placeRate": 20.8,
      "winRoi": 97.0
    },
    {
      "name": "木幡巧也",
      "rides": 54,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 11.1,
      "winRoi": 26.9
    }
  ],
  "tokyo-turf-middle": [
    {
      "name": "ルメール",
      "rides": 181,
      "wins": 55,
      "winRate": 30.4,
      "placeRate": 69.6,
      "winRoi": 87.7
    },
    {
      "name": "戸崎圭太",
      "rides": 190,
      "wins": 24,
      "winRate": 12.6,
      "placeRate": 40.0,
      "winRoi": 49.6
    },
    {
      "name": "横山武史",
      "rides": 161,
      "wins": 20,
      "winRate": 12.4,
      "placeRate": 26.7,
      "winRoi": 86.6
    },
    {
      "name": "川田将雅",
      "rides": 65,
      "wins": 14,
      "winRate": 21.5,
      "placeRate": 58.5,
      "winRoi": 61.4
    },
    {
      "name": "田辺裕信",
      "rides": 124,
      "wins": 11,
      "winRate": 8.9,
      "placeRate": 26.6,
      "winRoi": 59.0
    },
    {
      "name": "横山和生",
      "rides": 90,
      "wins": 10,
      "winRate": 11.1,
      "placeRate": 22.2,
      "winRoi": 190.6
    },
    {
      "name": "Ｍ．デム",
      "rides": 85,
      "wins": 10,
      "winRate": 11.8,
      "placeRate": 34.1,
      "winRoi": 70.7
    },
    {
      "name": "津村明秀",
      "rides": 123,
      "wins": 8,
      "winRate": 6.5,
      "placeRate": 18.7,
      "winRoi": 41.8
    },
    {
      "name": "石橋脩",
      "rides": 79,
      "wins": 8,
      "winRate": 10.1,
      "placeRate": 24.1,
      "winRoi": 88.0
    },
    {
      "name": "三浦皇成",
      "rides": 133,
      "wins": 7,
      "winRate": 5.3,
      "placeRate": 22.6,
      "winRoi": 81.6
    },
    {
      "name": "菅原明良",
      "rides": 122,
      "wins": 7,
      "winRate": 5.7,
      "placeRate": 29.5,
      "winRoi": 57.5
    },
    {
      "name": "松山弘平",
      "rides": 66,
      "wins": 7,
      "winRate": 10.6,
      "placeRate": 30.3,
      "winRoi": 73.9
    },
    {
      "name": "大野拓弥",
      "rides": 96,
      "wins": 5,
      "winRate": 5.2,
      "placeRate": 21.9,
      "winRoi": 36.6
    },
    {
      "name": "北村宏司",
      "rides": 83,
      "wins": 5,
      "winRate": 6.0,
      "placeRate": 21.7,
      "winRoi": 24.1
    },
    {
      "name": "石川裕紀",
      "rides": 100,
      "wins": 3,
      "winRate": 3.0,
      "placeRate": 20.0,
      "winRoi": 117.1
    },
    {
      "name": "木幡巧也",
      "rides": 88,
      "wins": 3,
      "winRate": 3.4,
      "placeRate": 12.5,
      "winRoi": 17.8
    },
    {
      "name": "柴田大知",
      "rides": 76,
      "wins": 2,
      "winRate": 2.6,
      "placeRate": 9.2,
      "winRoi": 73.6
    },
    {
      "name": "吉田豊",
      "rides": 65,
      "wins": 1,
      "winRate": 1.5,
      "placeRate": 16.9,
      "winRoi": 16.8
    },
    {
      "name": "原優介",
      "rides": 55,
      "wins": 1,
      "winRate": 1.8,
      "placeRate": 5.5,
      "winRoi": 2.5
    },
    {
      "name": "松岡正海",
      "rides": 62,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 16.1,
      "winRoi": 0.0
    }
  ],
  "tokyo-turf-long": [
    {
      "name": "ルメール",
      "rides": 109,
      "wins": 38,
      "winRate": 34.9,
      "placeRate": 74.3,
      "winRoi": 102.6
    },
    {
      "name": "田辺裕信",
      "rides": 67,
      "wins": 10,
      "winRate": 14.9,
      "placeRate": 43.3,
      "winRoi": 137.3
    },
    {
      "name": "戸崎圭太",
      "rides": 95,
      "wins": 7,
      "winRate": 7.4,
      "placeRate": 31.6,
      "winRoi": 46.8
    },
    {
      "name": "横山武史",
      "rides": 73,
      "wins": 6,
      "winRate": 8.2,
      "placeRate": 26.0,
      "winRoi": 30.8
    },
    {
      "name": "三浦皇成",
      "rides": 64,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 28.1,
      "winRoi": 61.6
    },
    {
      "name": "Ｍ．デム",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 33.3,
      "winRoi": 31.8
    },
    {
      "name": "菅原明良",
      "rides": 63,
      "wins": 3,
      "winRate": 4.8,
      "placeRate": 19.0,
      "winRoi": 89.0
    },
    {
      "name": "吉田豊",
      "rides": 50,
      "wins": 3,
      "winRate": 6.0,
      "placeRate": 16.0,
      "winRoi": 121.0
    },
    {
      "name": "津村明秀",
      "rides": 57,
      "wins": 2,
      "winRate": 3.5,
      "placeRate": 19.3,
      "winRoi": 126.1
    },
    {
      "name": "大野拓弥",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 18.9,
      "winRoi": 8.3
    }
  ],
  "tokyo-dirt-all": [
    {
      "name": "ルメール",
      "rides": 376,
      "wins": 93,
      "winRate": 24.7,
      "placeRate": 49.5,
      "winRoi": 77.4
    },
    {
      "name": "戸崎圭太",
      "rides": 520,
      "wins": 71,
      "winRate": 13.7,
      "placeRate": 35.4,
      "winRoi": 70.3
    },
    {
      "name": "横山武史",
      "rides": 416,
      "wins": 39,
      "winRate": 9.4,
      "placeRate": 27.4,
      "winRoi": 62.5
    },
    {
      "name": "三浦皇成",
      "rides": 434,
      "wins": 37,
      "winRate": 8.5,
      "placeRate": 29.3,
      "winRoi": 56.9
    },
    {
      "name": "菅原明良",
      "rides": 467,
      "wins": 30,
      "winRate": 6.4,
      "placeRate": 23.8,
      "winRoi": 67.0
    },
    {
      "name": "横山和生",
      "rides": 283,
      "wins": 27,
      "winRate": 9.5,
      "placeRate": 29.7,
      "winRoi": 69.3
    },
    {
      "name": "レーン",
      "rides": 122,
      "wins": 27,
      "winRate": 22.1,
      "placeRate": 44.3,
      "winRoi": 67.4
    },
    {
      "name": "田辺裕信",
      "rides": 391,
      "wins": 26,
      "winRate": 6.6,
      "placeRate": 18.7,
      "winRoi": 78.2
    },
    {
      "name": "松山弘平",
      "rides": 159,
      "wins": 23,
      "winRate": 14.5,
      "placeRate": 35.8,
      "winRoi": 115.2
    },
    {
      "name": "川田将雅",
      "rides": 101,
      "wins": 23,
      "winRate": 22.8,
      "placeRate": 52.5,
      "winRoi": 70.7
    },
    {
      "name": "大野拓弥",
      "rides": 376,
      "wins": 20,
      "winRate": 5.3,
      "placeRate": 19.1,
      "winRoi": 62.1
    },
    {
      "name": "横山典弘",
      "rides": 136,
      "wins": 19,
      "winRate": 14.0,
      "placeRate": 32.4,
      "winRoi": 102.3
    },
    {
      "name": "木幡巧也",
      "rides": 439,
      "wins": 18,
      "winRate": 4.1,
      "placeRate": 14.4,
      "winRoi": 87.0
    },
    {
      "name": "石川裕紀",
      "rides": 375,
      "wins": 18,
      "winRate": 4.8,
      "placeRate": 16.0,
      "winRoi": 99.3
    },
    {
      "name": "原優介",
      "rides": 342,
      "wins": 17,
      "winRate": 5.0,
      "placeRate": 16.7,
      "winRoi": 47.2
    },
    {
      "name": "石橋脩",
      "rides": 303,
      "wins": 16,
      "winRate": 5.3,
      "placeRate": 21.5,
      "winRoi": 39.3
    },
    {
      "name": "Ｍ．デム",
      "rides": 185,
      "wins": 16,
      "winRate": 8.6,
      "placeRate": 28.1,
      "winRoi": 65.7
    },
    {
      "name": "津村明秀",
      "rides": 373,
      "wins": 15,
      "winRate": 4.0,
      "placeRate": 15.5,
      "winRoi": 31.6
    },
    {
      "name": "吉田豊",
      "rides": 331,
      "wins": 15,
      "winRate": 4.5,
      "placeRate": 14.5,
      "winRoi": 37.1
    },
    {
      "name": "岩田望来",
      "rides": 137,
      "wins": 15,
      "winRate": 10.9,
      "placeRate": 21.9,
      "winRoi": 105.3
    }
  ],
  "tokyo-dirt-sprint": [
    {
      "name": "戸崎圭太",
      "rides": 209,
      "wins": 32,
      "winRate": 15.3,
      "placeRate": 36.4,
      "winRoi": 71.1
    },
    {
      "name": "ルメール",
      "rides": 135,
      "wins": 29,
      "winRate": 21.5,
      "placeRate": 41.5,
      "winRoi": 73.2
    },
    {
      "name": "三浦皇成",
      "rides": 187,
      "wins": 18,
      "winRate": 9.6,
      "placeRate": 29.4,
      "winRoi": 57.8
    },
    {
      "name": "横山武史",
      "rides": 195,
      "wins": 14,
      "winRate": 7.2,
      "placeRate": 26.2,
      "winRoi": 45.6
    },
    {
      "name": "菅原明良",
      "rides": 205,
      "wins": 13,
      "winRate": 6.3,
      "placeRate": 24.9,
      "winRoi": 43.7
    },
    {
      "name": "松山弘平",
      "rides": 61,
      "wins": 13,
      "winRate": 21.3,
      "placeRate": 36.1,
      "winRoi": 170.5
    },
    {
      "name": "田辺裕信",
      "rides": 159,
      "wins": 10,
      "winRate": 6.3,
      "placeRate": 17.6,
      "winRoi": 64.7
    },
    {
      "name": "横山和生",
      "rides": 122,
      "wins": 10,
      "winRate": 8.2,
      "placeRate": 29.5,
      "winRoi": 50.4
    },
    {
      "name": "大野拓弥",
      "rides": 157,
      "wins": 9,
      "winRate": 5.7,
      "placeRate": 17.2,
      "winRoi": 46.0
    },
    {
      "name": "石川裕紀",
      "rides": 154,
      "wins": 9,
      "winRate": 5.8,
      "placeRate": 17.5,
      "winRoi": 173.7
    },
    {
      "name": "横山典弘",
      "rides": 59,
      "wins": 9,
      "winRate": 15.3,
      "placeRate": 37.3,
      "winRoi": 90.7
    },
    {
      "name": "吉田豊",
      "rides": 136,
      "wins": 8,
      "winRate": 5.9,
      "placeRate": 16.9,
      "winRoi": 52.4
    },
    {
      "name": "岩田望来",
      "rides": 60,
      "wins": 8,
      "winRate": 13.3,
      "placeRate": 20.0,
      "winRoi": 42.8
    },
    {
      "name": "津村明秀",
      "rides": 175,
      "wins": 7,
      "winRate": 4.0,
      "placeRate": 13.7,
      "winRoi": 50.5
    },
    {
      "name": "Ｍ．デム",
      "rides": 73,
      "wins": 7,
      "winRate": 9.6,
      "placeRate": 28.8,
      "winRoi": 58.8
    },
    {
      "name": "石橋脩",
      "rides": 135,
      "wins": 6,
      "winRate": 4.4,
      "placeRate": 17.0,
      "winRoi": 37.5
    },
    {
      "name": "木幡巧也",
      "rides": 173,
      "wins": 4,
      "winRate": 2.3,
      "placeRate": 9.8,
      "winRoi": 61.7
    },
    {
      "name": "原優介",
      "rides": 147,
      "wins": 4,
      "winRate": 2.7,
      "placeRate": 10.2,
      "winRoi": 23.8
    },
    {
      "name": "北村宏司",
      "rides": 121,
      "wins": 4,
      "winRate": 3.3,
      "placeRate": 19.0,
      "winRoi": 49.3
    },
    {
      "name": "野中悠太",
      "rides": 104,
      "wins": 4,
      "winRate": 3.8,
      "placeRate": 11.5,
      "winRoi": 89.9
    }
  ],
  "tokyo-dirt-mile": [
    {
      "name": "ルメール",
      "rides": 176,
      "wins": 46,
      "winRate": 26.1,
      "placeRate": 52.8,
      "winRoi": 81.0
    },
    {
      "name": "戸崎圭太",
      "rides": 217,
      "wins": 30,
      "winRate": 13.8,
      "placeRate": 35.5,
      "winRoi": 79.9
    },
    {
      "name": "横山武史",
      "rides": 154,
      "wins": 18,
      "winRate": 11.7,
      "placeRate": 27.9,
      "winRoi": 92.7
    },
    {
      "name": "三浦皇成",
      "rides": 190,
      "wins": 14,
      "winRate": 7.4,
      "placeRate": 27.4,
      "winRoi": 60.9
    },
    {
      "name": "横山和生",
      "rides": 127,
      "wins": 14,
      "winRate": 11.0,
      "placeRate": 31.5,
      "winRoi": 79.7
    },
    {
      "name": "レーン",
      "rides": 59,
      "wins": 12,
      "winRate": 20.3,
      "placeRate": 49.2,
      "winRoi": 77.5
    },
    {
      "name": "菅原明良",
      "rides": 191,
      "wins": 11,
      "winRate": 5.8,
      "placeRate": 24.6,
      "winRoi": 90.7
    },
    {
      "name": "田辺裕信",
      "rides": 156,
      "wins": 10,
      "winRate": 6.4,
      "placeRate": 19.9,
      "winRoi": 105.5
    },
    {
      "name": "木幡巧也",
      "rides": 179,
      "wins": 8,
      "winRate": 4.5,
      "placeRate": 15.1,
      "winRoi": 124.5
    },
    {
      "name": "原優介",
      "rides": 136,
      "wins": 8,
      "winRate": 5.9,
      "placeRate": 22.1,
      "winRoi": 59.6
    },
    {
      "name": "松山弘平",
      "rides": 66,
      "wins": 8,
      "winRate": 12.1,
      "placeRate": 33.3,
      "winRoi": 96.5
    },
    {
      "name": "横山典弘",
      "rides": 62,
      "wins": 8,
      "winRate": 12.9,
      "placeRate": 25.8,
      "winRoi": 119.8
    },
    {
      "name": "石川裕紀",
      "rides": 146,
      "wins": 7,
      "winRate": 4.8,
      "placeRate": 16.4,
      "winRoi": 47.5
    },
    {
      "name": "大野拓弥",
      "rides": 139,
      "wins": 7,
      "winRate": 5.0,
      "placeRate": 18.7,
      "winRoi": 61.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 86,
      "wins": 7,
      "winRate": 8.1,
      "placeRate": 27.9,
      "winRoi": 75.8
    },
    {
      "name": "津村明秀",
      "rides": 147,
      "wins": 6,
      "winRate": 4.1,
      "placeRate": 19.0,
      "winRoi": 12.6
    },
    {
      "name": "石橋脩",
      "rides": 116,
      "wins": 6,
      "winRate": 5.2,
      "placeRate": 27.6,
      "winRoi": 23.1
    },
    {
      "name": "岩田望来",
      "rides": 59,
      "wins": 6,
      "winRate": 10.2,
      "placeRate": 25.4,
      "winRoi": 198.3
    },
    {
      "name": "北村宏司",
      "rides": 117,
      "wins": 5,
      "winRate": 4.3,
      "placeRate": 17.1,
      "winRoi": 71.7
    },
    {
      "name": "佐々木大",
      "rides": 61,
      "wins": 5,
      "winRate": 8.2,
      "placeRate": 19.7,
      "winRoi": 75.7
    }
  ],
  "tokyo-dirt-middle": [
    {
      "name": "ルメール",
      "rides": 65,
      "wins": 18,
      "winRate": 27.7,
      "placeRate": 56.9,
      "winRoi": 76.5
    },
    {
      "name": "戸崎圭太",
      "rides": 94,
      "wins": 9,
      "winRate": 9.6,
      "placeRate": 33.0,
      "winRoi": 46.6
    },
    {
      "name": "横山武史",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 29.9,
      "winRoi": 42.4
    },
    {
      "name": "木幡巧也",
      "rides": 87,
      "wins": 6,
      "winRate": 6.9,
      "placeRate": 21.8,
      "winRoi": 60.1
    },
    {
      "name": "田辺裕信",
      "rides": 76,
      "wins": 6,
      "winRate": 7.9,
      "placeRate": 18.4,
      "winRoi": 50.5
    },
    {
      "name": "菅原明良",
      "rides": 71,
      "wins": 6,
      "winRate": 8.5,
      "placeRate": 18.3,
      "winRoi": 70.4
    },
    {
      "name": "原優介",
      "rides": 59,
      "wins": 5,
      "winRate": 8.5,
      "placeRate": 20.3,
      "winRoi": 77.1
    },
    {
      "name": "三浦皇成",
      "rides": 57,
      "wins": 5,
      "winRate": 8.8,
      "placeRate": 35.1,
      "winRoi": 40.7
    },
    {
      "name": "大野拓弥",
      "rides": 80,
      "wins": 4,
      "winRate": 5.0,
      "placeRate": 23.8,
      "winRoi": 94.4
    },
    {
      "name": "石橋脩",
      "rides": 52,
      "wins": 4,
      "winRate": 7.7,
      "placeRate": 19.2,
      "winRoi": 80.0
    },
    {
      "name": "吉田豊",
      "rides": 53,
      "wins": 3,
      "winRate": 5.7,
      "placeRate": 17.0,
      "winRoi": 37.5
    },
    {
      "name": "石川裕紀",
      "rides": 75,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 12.0,
      "winRoi": 47.5
    },
    {
      "name": "津村明秀",
      "rides": 51,
      "wins": 2,
      "winRate": 3.9,
      "placeRate": 11.8,
      "winRoi": 21.4
    }
  ],
  "nakayama-all-all": [
    {
      "name": "戸崎圭太",
      "rides": 865,
      "wins": 146,
      "winRate": 16.9,
      "placeRate": 38.8,
      "winRoi": 90.9
    },
    {
      "name": "横山武史",
      "rides": 876,
      "wins": 137,
      "winRate": 15.6,
      "placeRate": 36.0,
      "winRoi": 69.9
    },
    {
      "name": "ルメール",
      "rides": 495,
      "wins": 106,
      "winRate": 21.4,
      "placeRate": 50.7,
      "winRoi": 65.1
    },
    {
      "name": "菅原明良",
      "rides": 810,
      "wins": 60,
      "winRate": 7.4,
      "placeRate": 23.8,
      "winRoi": 69.3
    },
    {
      "name": "横山和生",
      "rides": 586,
      "wins": 58,
      "winRate": 9.9,
      "placeRate": 28.0,
      "winRoi": 101.1
    },
    {
      "name": "津村明秀",
      "rides": 722,
      "wins": 55,
      "winRate": 7.6,
      "placeRate": 24.1,
      "winRoi": 70.4
    },
    {
      "name": "丹内祐次",
      "rides": 712,
      "wins": 54,
      "winRate": 7.6,
      "placeRate": 21.2,
      "winRoi": 92.9
    },
    {
      "name": "三浦皇成",
      "rides": 715,
      "wins": 49,
      "winRate": 6.9,
      "placeRate": 27.8,
      "winRoi": 57.0
    },
    {
      "name": "田辺裕信",
      "rides": 620,
      "wins": 48,
      "winRate": 7.7,
      "placeRate": 27.6,
      "winRoi": 81.4
    },
    {
      "name": "Ｍ．デム",
      "rides": 313,
      "wins": 44,
      "winRate": 14.1,
      "placeRate": 35.8,
      "winRoi": 110.2
    },
    {
      "name": "大野拓弥",
      "rides": 702,
      "wins": 42,
      "winRate": 6.0,
      "placeRate": 17.9,
      "winRoi": 48.6
    },
    {
      "name": "石橋脩",
      "rides": 484,
      "wins": 36,
      "winRate": 7.4,
      "placeRate": 24.2,
      "winRoi": 67.3
    },
    {
      "name": "石川裕紀",
      "rides": 606,
      "wins": 33,
      "winRate": 5.4,
      "placeRate": 19.1,
      "winRoi": 65.5
    },
    {
      "name": "佐々木大",
      "rides": 400,
      "wins": 26,
      "winRate": 6.5,
      "placeRate": 21.8,
      "winRoi": 69.3
    },
    {
      "name": "吉田豊",
      "rides": 474,
      "wins": 23,
      "winRate": 4.9,
      "placeRate": 15.8,
      "winRoi": 59.2
    },
    {
      "name": "荻野極",
      "rides": 199,
      "wins": 22,
      "winRate": 11.1,
      "placeRate": 28.1,
      "winRoi": 74.6
    },
    {
      "name": "川田将雅",
      "rides": 118,
      "wins": 20,
      "winRate": 16.9,
      "placeRate": 38.1,
      "winRoi": 62.4
    },
    {
      "name": "北村宏司",
      "rides": 425,
      "wins": 19,
      "winRate": 4.5,
      "placeRate": 18.8,
      "winRoi": 48.2
    },
    {
      "name": "横山琉人",
      "rides": 324,
      "wins": 19,
      "winRate": 5.9,
      "placeRate": 14.8,
      "winRoi": 173.1
    },
    {
      "name": "原優介",
      "rides": 488,
      "wins": 18,
      "winRate": 3.7,
      "placeRate": 13.9,
      "winRoi": 131.0
    }
  ],
  "nakayama-all-sprint": [
    {
      "name": "戸崎圭太",
      "rides": 255,
      "wins": 44,
      "winRate": 17.3,
      "placeRate": 32.5,
      "winRoi": 84.7
    },
    {
      "name": "横山武史",
      "rides": 278,
      "wins": 37,
      "winRate": 13.3,
      "placeRate": 35.3,
      "winRoi": 58.2
    },
    {
      "name": "ルメール",
      "rides": 129,
      "wins": 28,
      "winRate": 21.7,
      "placeRate": 45.7,
      "winRoi": 69.1
    },
    {
      "name": "菅原明良",
      "rides": 260,
      "wins": 25,
      "winRate": 9.6,
      "placeRate": 25.4,
      "winRoi": 80.5
    },
    {
      "name": "丹内祐次",
      "rides": 223,
      "wins": 19,
      "winRate": 8.5,
      "placeRate": 23.3,
      "winRoi": 129.6
    },
    {
      "name": "三浦皇成",
      "rides": 249,
      "wins": 18,
      "winRate": 7.2,
      "placeRate": 30.5,
      "winRoi": 80.8
    },
    {
      "name": "横山和生",
      "rides": 172,
      "wins": 14,
      "winRate": 8.1,
      "placeRate": 29.1,
      "winRoi": 161.7
    },
    {
      "name": "津村明秀",
      "rides": 238,
      "wins": 13,
      "winRate": 5.5,
      "placeRate": 18.9,
      "winRoi": 47.6
    },
    {
      "name": "石川裕紀",
      "rides": 188,
      "wins": 13,
      "winRate": 6.9,
      "placeRate": 18.1,
      "winRoi": 81.0
    },
    {
      "name": "吉田豊",
      "rides": 170,
      "wins": 13,
      "winRate": 7.6,
      "placeRate": 15.9,
      "winRoi": 98.9
    },
    {
      "name": "石橋脩",
      "rides": 153,
      "wins": 13,
      "winRate": 8.5,
      "placeRate": 28.1,
      "winRoi": 90.6
    },
    {
      "name": "Ｍ．デム",
      "rides": 86,
      "wins": 12,
      "winRate": 14.0,
      "placeRate": 31.4,
      "winRoi": 122.2
    },
    {
      "name": "田辺裕信",
      "rides": 173,
      "wins": 10,
      "winRate": 5.8,
      "placeRate": 23.1,
      "winRoi": 33.3
    },
    {
      "name": "荻野極",
      "rides": 62,
      "wins": 10,
      "winRate": 16.1,
      "placeRate": 30.6,
      "winRoi": 104.8
    },
    {
      "name": "大野拓弥",
      "rides": 233,
      "wins": 9,
      "winRate": 3.9,
      "placeRate": 18.9,
      "winRoi": 17.9
    },
    {
      "name": "佐々木大",
      "rides": 136,
      "wins": 9,
      "winRate": 6.6,
      "placeRate": 19.1,
      "winRoi": 60.2
    },
    {
      "name": "原優介",
      "rides": 193,
      "wins": 7,
      "winRate": 3.6,
      "placeRate": 14.5,
      "winRoi": 237.8
    },
    {
      "name": "丸田恭介",
      "rides": 123,
      "wins": 7,
      "winRate": 5.7,
      "placeRate": 18.7,
      "winRoi": 247.2
    },
    {
      "name": "北村宏司",
      "rides": 119,
      "wins": 7,
      "winRate": 5.9,
      "placeRate": 20.2,
      "winRoi": 85.5
    },
    {
      "name": "横山琉人",
      "rides": 117,
      "wins": 7,
      "winRate": 6.0,
      "placeRate": 16.2,
      "winRoi": 284.5
    }
  ],
  "nakayama-all-mile": [
    {
      "name": "横山武史",
      "rides": 125,
      "wins": 19,
      "winRate": 15.2,
      "placeRate": 30.4,
      "winRoi": 61.0
    },
    {
      "name": "戸崎圭太",
      "rides": 130,
      "wins": 17,
      "winRate": 13.1,
      "placeRate": 33.8,
      "winRoi": 94.2
    },
    {
      "name": "ルメール",
      "rides": 92,
      "wins": 17,
      "winRate": 18.5,
      "placeRate": 47.8,
      "winRoi": 69.5
    },
    {
      "name": "Ｍ．デム",
      "rides": 61,
      "wins": 13,
      "winRate": 21.3,
      "placeRate": 42.6,
      "winRoi": 124.3
    },
    {
      "name": "津村明秀",
      "rides": 107,
      "wins": 12,
      "winRate": 11.2,
      "placeRate": 29.0,
      "winRoi": 96.6
    },
    {
      "name": "横山和生",
      "rides": 81,
      "wins": 10,
      "winRate": 12.3,
      "placeRate": 32.1,
      "winRoi": 92.0
    },
    {
      "name": "大野拓弥",
      "rides": 113,
      "wins": 9,
      "winRate": 8.0,
      "placeRate": 24.8,
      "winRoi": 76.9
    },
    {
      "name": "菅原明良",
      "rides": 109,
      "wins": 7,
      "winRate": 6.4,
      "placeRate": 26.6,
      "winRoi": 63.7
    },
    {
      "name": "佐々木大",
      "rides": 58,
      "wins": 7,
      "winRate": 12.1,
      "placeRate": 31.0,
      "winRoi": 63.6
    },
    {
      "name": "田辺裕信",
      "rides": 89,
      "wins": 6,
      "winRate": 6.7,
      "placeRate": 23.6,
      "winRoi": 54.0
    },
    {
      "name": "北村宏司",
      "rides": 67,
      "wins": 5,
      "winRate": 7.5,
      "placeRate": 29.9,
      "winRoi": 42.7
    },
    {
      "name": "三浦皇成",
      "rides": 100,
      "wins": 4,
      "winRate": 4.0,
      "placeRate": 23.0,
      "winRoi": 19.7
    },
    {
      "name": "石川裕紀",
      "rides": 88,
      "wins": 4,
      "winRate": 4.5,
      "placeRate": 21.6,
      "winRoi": 78.5
    },
    {
      "name": "石橋脩",
      "rides": 61,
      "wins": 4,
      "winRate": 6.6,
      "placeRate": 18.0,
      "winRoi": 42.3
    },
    {
      "name": "杉原誠人",
      "rides": 55,
      "wins": 3,
      "winRate": 5.5,
      "placeRate": 14.5,
      "winRoi": 102.9
    },
    {
      "name": "吉田豊",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 9.2,
      "winRoi": 9.5
    },
    {
      "name": "木幡巧也",
      "rides": 53,
      "wins": 2,
      "winRate": 3.8,
      "placeRate": 17.0,
      "winRoi": 319.4
    },
    {
      "name": "丹内祐次",
      "rides": 82,
      "wins": 1,
      "winRate": 1.2,
      "placeRate": 8.5,
      "winRoi": 5.7
    }
  ],
  "nakayama-all-middle": [
    {
      "name": "横山武史",
      "rides": 416,
      "wins": 74,
      "winRate": 17.8,
      "placeRate": 37.7,
      "winRoi": 84.2
    },
    {
      "name": "戸崎圭太",
      "rides": 412,
      "wins": 74,
      "winRate": 18.0,
      "placeRate": 42.5,
      "winRoi": 93.3
    },
    {
      "name": "ルメール",
      "rides": 240,
      "wins": 53,
      "winRate": 22.1,
      "placeRate": 52.1,
      "winRoi": 60.4
    },
    {
      "name": "田辺裕信",
      "rides": 310,
      "wins": 28,
      "winRate": 9.0,
      "placeRate": 31.9,
      "winRoi": 115.5
    },
    {
      "name": "三浦皇成",
      "rides": 330,
      "wins": 27,
      "winRate": 8.2,
      "placeRate": 28.5,
      "winRoi": 56.6
    },
    {
      "name": "横山和生",
      "rides": 282,
      "wins": 27,
      "winRate": 9.6,
      "placeRate": 25.5,
      "winRoi": 56.7
    },
    {
      "name": "丹内祐次",
      "rides": 335,
      "wins": 26,
      "winRate": 7.8,
      "placeRate": 21.5,
      "winRoi": 92.0
    },
    {
      "name": "津村明秀",
      "rides": 332,
      "wins": 25,
      "winRate": 7.5,
      "placeRate": 26.2,
      "winRoi": 70.8
    },
    {
      "name": "菅原明良",
      "rides": 382,
      "wins": 23,
      "winRate": 6.0,
      "placeRate": 22.0,
      "winRoi": 67.6
    },
    {
      "name": "大野拓弥",
      "rides": 307,
      "wins": 19,
      "winRate": 6.2,
      "placeRate": 15.3,
      "winRoi": 58.9
    },
    {
      "name": "Ｍ．デム",
      "rides": 152,
      "wins": 18,
      "winRate": 11.8,
      "placeRate": 36.2,
      "winRoi": 105.6
    },
    {
      "name": "石川裕紀",
      "rides": 290,
      "wins": 15,
      "winRate": 5.2,
      "placeRate": 20.0,
      "winRoi": 53.0
    },
    {
      "name": "石橋脩",
      "rides": 232,
      "wins": 15,
      "winRate": 6.5,
      "placeRate": 22.4,
      "winRoi": 54.9
    },
    {
      "name": "川田将雅",
      "rides": 59,
      "wins": 12,
      "winRate": 20.3,
      "placeRate": 42.4,
      "winRoi": 84.2
    },
    {
      "name": "松山弘平",
      "rides": 64,
      "wins": 10,
      "winRate": 15.6,
      "placeRate": 28.1,
      "winRoi": 93.9
    },
    {
      "name": "松岡正海",
      "rides": 169,
      "wins": 9,
      "winRate": 5.3,
      "placeRate": 16.6,
      "winRoi": 107.3
    },
    {
      "name": "横山琉人",
      "rides": 138,
      "wins": 9,
      "winRate": 6.5,
      "placeRate": 13.0,
      "winRoi": 154.2
    },
    {
      "name": "柴田大知",
      "rides": 211,
      "wins": 8,
      "winRate": 3.8,
      "placeRate": 15.2,
      "winRoi": 39.2
    },
    {
      "name": "吉田豊",
      "rides": 198,
      "wins": 8,
      "winRate": 4.0,
      "placeRate": 18.2,
      "winRoi": 53.7
    },
    {
      "name": "佐々木大",
      "rides": 177,
      "wins": 8,
      "winRate": 4.5,
      "placeRate": 20.9,
      "winRoi": 84.1
    }
  ],
  "nakayama-all-long": [
    {
      "name": "戸崎圭太",
      "rides": 68,
      "wins": 11,
      "winRate": 16.2,
      "placeRate": 50.0,
      "winRoi": 93.4
    },
    {
      "name": "丹内祐次",
      "rides": 72,
      "wins": 8,
      "winRate": 11.1,
      "placeRate": 27.8,
      "winRoi": 82.4
    },
    {
      "name": "横山武史",
      "rides": 57,
      "wins": 7,
      "winRate": 12.3,
      "placeRate": 38.6,
      "winRoi": 41.9
    },
    {
      "name": "横山和生",
      "rides": 51,
      "wins": 7,
      "winRate": 13.7,
      "placeRate": 31.4,
      "winRoi": 156.9
    },
    {
      "name": "菅原明良",
      "rides": 59,
      "wins": 5,
      "winRate": 8.5,
      "placeRate": 23.7,
      "winRoi": 41.9
    }
  ],
  "nakayama-turf-all": [
    {
      "name": "戸崎圭太",
      "rides": 483,
      "wins": 77,
      "winRate": 15.9,
      "placeRate": 37.7,
      "winRoi": 90.9
    },
    {
      "name": "横山武史",
      "rides": 473,
      "wins": 73,
      "winRate": 15.4,
      "placeRate": 37.4,
      "winRoi": 74.5
    },
    {
      "name": "ルメール",
      "rides": 296,
      "wins": 58,
      "winRate": 19.6,
      "placeRate": 51.4,
      "winRoi": 66.1
    },
    {
      "name": "津村明秀",
      "rides": 385,
      "wins": 32,
      "winRate": 8.3,
      "placeRate": 26.5,
      "winRoi": 92.2
    },
    {
      "name": "田辺裕信",
      "rides": 317,
      "wins": 29,
      "winRate": 9.1,
      "placeRate": 26.5,
      "winRoi": 111.8
    },
    {
      "name": "菅原明良",
      "rides": 399,
      "wins": 28,
      "winRate": 7.0,
      "placeRate": 24.6,
      "winRoi": 64.9
    },
    {
      "name": "丹内祐次",
      "rides": 339,
      "wins": 28,
      "winRate": 8.3,
      "placeRate": 19.8,
      "winRoi": 62.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 187,
      "wins": 28,
      "winRate": 15.0,
      "placeRate": 37.4,
      "winRoi": 116.6
    },
    {
      "name": "横山和生",
      "rides": 285,
      "wins": 25,
      "winRate": 8.8,
      "placeRate": 27.7,
      "winRoi": 73.9
    },
    {
      "name": "大野拓弥",
      "rides": 342,
      "wins": 23,
      "winRate": 6.7,
      "placeRate": 19.6,
      "winRoi": 58.1
    },
    {
      "name": "石橋脩",
      "rides": 233,
      "wins": 15,
      "winRate": 6.4,
      "placeRate": 21.5,
      "winRoi": 46.6
    },
    {
      "name": "三浦皇成",
      "rides": 353,
      "wins": 14,
      "winRate": 4.0,
      "placeRate": 22.4,
      "winRoi": 36.7
    },
    {
      "name": "佐々木大",
      "rides": 180,
      "wins": 14,
      "winRate": 7.8,
      "placeRate": 24.4,
      "winRoi": 66.4
    },
    {
      "name": "石川裕紀",
      "rides": 306,
      "wins": 13,
      "winRate": 4.2,
      "placeRate": 22.2,
      "winRoi": 44.2
    },
    {
      "name": "川田将雅",
      "rides": 82,
      "wins": 12,
      "winRate": 14.6,
      "placeRate": 37.8,
      "winRoi": 57.7
    },
    {
      "name": "北村宏司",
      "rides": 209,
      "wins": 11,
      "winRate": 5.3,
      "placeRate": 21.1,
      "winRoi": 38.2
    },
    {
      "name": "松山弘平",
      "rides": 85,
      "wins": 11,
      "winRate": 12.9,
      "placeRate": 28.2,
      "winRoi": 75.1
    },
    {
      "name": "横山典弘",
      "rides": 123,
      "wins": 10,
      "winRate": 8.1,
      "placeRate": 24.4,
      "winRoi": 68.1
    },
    {
      "name": "荻野極",
      "rides": 104,
      "wins": 10,
      "winRate": 9.6,
      "placeRate": 26.9,
      "winRoi": 85.5
    },
    {
      "name": "丸田恭介",
      "rides": 127,
      "wins": 9,
      "winRate": 7.1,
      "placeRate": 17.3,
      "winRoi": 136.2
    }
  ],
  "nakayama-turf-sprint": [
    {
      "name": "戸崎圭太",
      "rides": 84,
      "wins": 15,
      "winRate": 17.9,
      "placeRate": 32.1,
      "winRoi": 70.8
    },
    {
      "name": "横山武史",
      "rides": 96,
      "wins": 14,
      "winRate": 14.6,
      "placeRate": 39.6,
      "winRoi": 62.8
    },
    {
      "name": "菅原明良",
      "rides": 84,
      "wins": 7,
      "winRate": 8.3,
      "placeRate": 25.0,
      "winRoi": 49.6
    },
    {
      "name": "丹内祐次",
      "rides": 73,
      "wins": 7,
      "winRate": 9.6,
      "placeRate": 26.0,
      "winRoi": 72.6
    },
    {
      "name": "横山和生",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 32.1,
      "winRoi": 41.9
    },
    {
      "name": "石川裕紀",
      "rides": 57,
      "wins": 4,
      "winRate": 7.0,
      "placeRate": 26.3,
      "winRoi": 70.2
    },
    {
      "name": "三浦皇成",
      "rides": 74,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 21.6,
      "winRoi": 76.5
    },
    {
      "name": "大野拓弥",
      "rides": 74,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 14.9,
      "winRoi": 23.4
    },
    {
      "name": "杉原誠人",
      "rides": 54,
      "wins": 2,
      "winRate": 3.7,
      "placeRate": 7.4,
      "winRoi": 43.3
    },
    {
      "name": "津村明秀",
      "rides": 67,
      "wins": 1,
      "winRate": 1.5,
      "placeRate": 9.0,
      "winRoi": 9.3
    },
    {
      "name": "木幡巧也",
      "rides": 54,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 16.7,
      "winRoi": 39.6
    }
  ],
  "nakayama-turf-mile": [
    {
      "name": "横山武史",
      "rides": 125,
      "wins": 19,
      "winRate": 15.2,
      "placeRate": 30.4,
      "winRoi": 61.0
    },
    {
      "name": "戸崎圭太",
      "rides": 130,
      "wins": 17,
      "winRate": 13.1,
      "placeRate": 33.8,
      "winRoi": 94.2
    },
    {
      "name": "ルメール",
      "rides": 92,
      "wins": 17,
      "winRate": 18.5,
      "placeRate": 47.8,
      "winRoi": 69.5
    },
    {
      "name": "Ｍ．デム",
      "rides": 61,
      "wins": 13,
      "winRate": 21.3,
      "placeRate": 42.6,
      "winRoi": 124.3
    },
    {
      "name": "津村明秀",
      "rides": 107,
      "wins": 12,
      "winRate": 11.2,
      "placeRate": 29.0,
      "winRoi": 96.6
    },
    {
      "name": "横山和生",
      "rides": 81,
      "wins": 10,
      "winRate": 12.3,
      "placeRate": 32.1,
      "winRoi": 92.0
    },
    {
      "name": "大野拓弥",
      "rides": 113,
      "wins": 9,
      "winRate": 8.0,
      "placeRate": 24.8,
      "winRoi": 76.9
    },
    {
      "name": "菅原明良",
      "rides": 109,
      "wins": 7,
      "winRate": 6.4,
      "placeRate": 26.6,
      "winRoi": 63.7
    },
    {
      "name": "佐々木大",
      "rides": 58,
      "wins": 7,
      "winRate": 12.1,
      "placeRate": 31.0,
      "winRoi": 63.6
    },
    {
      "name": "田辺裕信",
      "rides": 89,
      "wins": 6,
      "winRate": 6.7,
      "placeRate": 23.6,
      "winRoi": 54.0
    },
    {
      "name": "北村宏司",
      "rides": 67,
      "wins": 5,
      "winRate": 7.5,
      "placeRate": 29.9,
      "winRoi": 42.7
    },
    {
      "name": "三浦皇成",
      "rides": 100,
      "wins": 4,
      "winRate": 4.0,
      "placeRate": 23.0,
      "winRoi": 19.7
    },
    {
      "name": "石川裕紀",
      "rides": 88,
      "wins": 4,
      "winRate": 4.5,
      "placeRate": 21.6,
      "winRoi": 78.5
    },
    {
      "name": "石橋脩",
      "rides": 61,
      "wins": 4,
      "winRate": 6.6,
      "placeRate": 18.0,
      "winRoi": 42.3
    },
    {
      "name": "杉原誠人",
      "rides": 55,
      "wins": 3,
      "winRate": 5.5,
      "placeRate": 14.5,
      "winRoi": 102.9
    },
    {
      "name": "吉田豊",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 9.2,
      "winRoi": 9.5
    },
    {
      "name": "木幡巧也",
      "rides": 53,
      "wins": 2,
      "winRate": 3.8,
      "placeRate": 17.0,
      "winRoi": 319.4
    },
    {
      "name": "丹内祐次",
      "rides": 82,
      "wins": 1,
      "winRate": 1.2,
      "placeRate": 8.5,
      "winRoi": 5.7
    }
  ],
  "nakayama-turf-middle": [
    {
      "name": "戸崎圭太",
      "rides": 228,
      "wins": 40,
      "winRate": 17.5,
      "placeRate": 39.5,
      "winRoi": 101.8
    },
    {
      "name": "横山武史",
      "rides": 221,
      "wins": 37,
      "winRate": 16.7,
      "placeRate": 40.3,
      "winRoi": 91.9
    },
    {
      "name": "ルメール",
      "rides": 140,
      "wins": 26,
      "winRate": 18.6,
      "placeRate": 51.4,
      "winRoi": 55.2
    },
    {
      "name": "田辺裕信",
      "rides": 155,
      "wins": 16,
      "winRate": 10.3,
      "placeRate": 27.7,
      "winRoi": 158.5
    },
    {
      "name": "津村明秀",
      "rides": 181,
      "wins": 15,
      "winRate": 8.3,
      "placeRate": 32.0,
      "winRoi": 106.7
    },
    {
      "name": "丹内祐次",
      "rides": 149,
      "wins": 15,
      "winRate": 10.1,
      "placeRate": 22.1,
      "winRoi": 91.1
    },
    {
      "name": "菅原明良",
      "rides": 176,
      "wins": 11,
      "winRate": 6.2,
      "placeRate": 23.9,
      "winRoi": 77.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 92,
      "wins": 10,
      "winRate": 10.9,
      "placeRate": 37.0,
      "winRoi": 122.5
    },
    {
      "name": "三浦皇成",
      "rides": 158,
      "wins": 8,
      "winRate": 5.1,
      "placeRate": 22.8,
      "winRoi": 33.7
    },
    {
      "name": "大野拓弥",
      "rides": 134,
      "wins": 8,
      "winRate": 6.0,
      "placeRate": 17.9,
      "winRoi": 61.0
    },
    {
      "name": "石橋脩",
      "rides": 106,
      "wins": 7,
      "winRate": 6.6,
      "placeRate": 21.7,
      "winRoi": 29.6
    },
    {
      "name": "横山和生",
      "rides": 129,
      "wins": 6,
      "winRate": 4.7,
      "placeRate": 19.4,
      "winRoi": 50.0
    },
    {
      "name": "柴田大知",
      "rides": 114,
      "wins": 6,
      "winRate": 5.3,
      "placeRate": 19.3,
      "winRoi": 28.2
    },
    {
      "name": "石川裕紀",
      "rides": 145,
      "wins": 5,
      "winRate": 3.4,
      "placeRate": 22.1,
      "winRoi": 18.1
    },
    {
      "name": "松岡正海",
      "rides": 79,
      "wins": 5,
      "winRate": 6.3,
      "placeRate": 20.3,
      "winRoi": 182.3
    },
    {
      "name": "横山典弘",
      "rides": 59,
      "wins": 5,
      "winRate": 8.5,
      "placeRate": 25.4,
      "winRoi": 76.3
    },
    {
      "name": "北村宏司",
      "rides": 96,
      "wins": 3,
      "winRate": 3.1,
      "placeRate": 16.7,
      "winRoi": 20.1
    },
    {
      "name": "佐々木大",
      "rides": 78,
      "wins": 3,
      "winRate": 3.8,
      "placeRate": 20.5,
      "winRoi": 63.3
    },
    {
      "name": "吉田豊",
      "rides": 70,
      "wins": 3,
      "winRate": 4.3,
      "placeRate": 12.9,
      "winRoi": 57.9
    },
    {
      "name": "木幡巧也",
      "rides": 93,
      "wins": 2,
      "winRate": 2.2,
      "placeRate": 9.7,
      "winRoi": 23.3
    }
  ],
  "nakayama-dirt-all": [
    {
      "name": "戸崎圭太",
      "rides": 382,
      "wins": 69,
      "winRate": 18.1,
      "placeRate": 40.3,
      "winRoi": 90.8
    },
    {
      "name": "横山武史",
      "rides": 403,
      "wins": 64,
      "winRate": 15.9,
      "placeRate": 34.2,
      "winRoi": 64.4
    },
    {
      "name": "ルメール",
      "rides": 199,
      "wins": 48,
      "winRate": 24.1,
      "placeRate": 49.7,
      "winRoi": 63.5
    },
    {
      "name": "三浦皇成",
      "rides": 362,
      "wins": 35,
      "winRate": 9.7,
      "placeRate": 33.1,
      "winRoi": 76.8
    },
    {
      "name": "横山和生",
      "rides": 301,
      "wins": 33,
      "winRate": 11.0,
      "placeRate": 28.2,
      "winRoi": 126.9
    },
    {
      "name": "菅原明良",
      "rides": 411,
      "wins": 32,
      "winRate": 7.8,
      "placeRate": 23.1,
      "winRoi": 73.6
    },
    {
      "name": "丹内祐次",
      "rides": 373,
      "wins": 26,
      "winRate": 7.0,
      "placeRate": 22.5,
      "winRoi": 120.3
    },
    {
      "name": "津村明秀",
      "rides": 337,
      "wins": 23,
      "winRate": 6.8,
      "placeRate": 21.4,
      "winRoi": 45.5
    },
    {
      "name": "石橋脩",
      "rides": 251,
      "wins": 21,
      "winRate": 8.4,
      "placeRate": 26.7,
      "winRoi": 86.5
    },
    {
      "name": "石川裕紀",
      "rides": 300,
      "wins": 20,
      "winRate": 6.7,
      "placeRate": 16.0,
      "winRoi": 87.3
    },
    {
      "name": "大野拓弥",
      "rides": 360,
      "wins": 19,
      "winRate": 5.3,
      "placeRate": 16.4,
      "winRoi": 39.6
    },
    {
      "name": "田辺裕信",
      "rides": 303,
      "wins": 19,
      "winRate": 6.3,
      "placeRate": 28.7,
      "winRoi": 49.6
    },
    {
      "name": "吉田豊",
      "rides": 272,
      "wins": 17,
      "winRate": 6.2,
      "placeRate": 19.5,
      "winRoi": 70.4
    },
    {
      "name": "Ｍ．デム",
      "rides": 126,
      "wins": 16,
      "winRate": 12.7,
      "placeRate": 33.3,
      "winRoi": 100.6
    },
    {
      "name": "横山琉人",
      "rides": 202,
      "wins": 15,
      "winRate": 7.4,
      "placeRate": 16.3,
      "winRoi": 247.5
    },
    {
      "name": "佐々木大",
      "rides": 220,
      "wins": 12,
      "winRate": 5.5,
      "placeRate": 19.5,
      "winRoi": 71.7
    },
    {
      "name": "荻野極",
      "rides": 95,
      "wins": 12,
      "winRate": 12.6,
      "placeRate": 29.5,
      "winRoi": 62.7
    },
    {
      "name": "原優介",
      "rides": 301,
      "wins": 10,
      "winRate": 3.3,
      "placeRate": 15.9,
      "winRoi": 152.8
    },
    {
      "name": "武藤雅",
      "rides": 170,
      "wins": 10,
      "winRate": 5.9,
      "placeRate": 19.4,
      "winRoi": 31.0
    },
    {
      "name": "木幡巧也",
      "rides": 346,
      "wins": 9,
      "winRate": 2.6,
      "placeRate": 13.3,
      "winRoi": 33.6
    }
  ],
  "nakayama-dirt-sprint": [
    {
      "name": "戸崎圭太",
      "rides": 171,
      "wins": 29,
      "winRate": 17.0,
      "placeRate": 32.7,
      "winRoi": 91.5
    },
    {
      "name": "横山武史",
      "rides": 182,
      "wins": 23,
      "winRate": 12.6,
      "placeRate": 33.0,
      "winRoi": 55.7
    },
    {
      "name": "ルメール",
      "rides": 89,
      "wins": 20,
      "winRate": 22.5,
      "placeRate": 47.2,
      "winRoi": 62.5
    },
    {
      "name": "菅原明良",
      "rides": 176,
      "wins": 18,
      "winRate": 10.2,
      "placeRate": 25.6,
      "winRoi": 95.2
    },
    {
      "name": "三浦皇成",
      "rides": 175,
      "wins": 16,
      "winRate": 9.1,
      "placeRate": 34.3,
      "winRoi": 82.6
    },
    {
      "name": "津村明秀",
      "rides": 171,
      "wins": 12,
      "winRate": 7.0,
      "placeRate": 22.8,
      "winRoi": 62.7
    },
    {
      "name": "丹内祐次",
      "rides": 150,
      "wins": 12,
      "winRate": 8.0,
      "placeRate": 22.0,
      "winRoi": 157.3
    },
    {
      "name": "吉田豊",
      "rides": 122,
      "wins": 12,
      "winRate": 9.8,
      "placeRate": 18.0,
      "winRoi": 102.9
    },
    {
      "name": "石橋脩",
      "rides": 109,
      "wins": 10,
      "winRate": 9.2,
      "placeRate": 29.4,
      "winRoi": 97.6
    },
    {
      "name": "石川裕紀",
      "rides": 131,
      "wins": 9,
      "winRate": 6.9,
      "placeRate": 14.5,
      "winRoi": 85.7
    },
    {
      "name": "横山和生",
      "rides": 119,
      "wins": 9,
      "winRate": 7.6,
      "placeRate": 27.7,
      "winRoi": 215.1
    },
    {
      "name": "大野拓弥",
      "rides": 159,
      "wins": 7,
      "winRate": 4.4,
      "placeRate": 20.8,
      "winRoi": 15.3
    },
    {
      "name": "田辺裕信",
      "rides": 129,
      "wins": 7,
      "winRate": 5.4,
      "placeRate": 20.9,
      "winRoi": 29.5
    },
    {
      "name": "佐々木大",
      "rides": 105,
      "wins": 7,
      "winRate": 6.7,
      "placeRate": 18.1,
      "winRoi": 55.5
    },
    {
      "name": "Ｍ．デム",
      "rides": 61,
      "wins": 7,
      "winRate": 11.5,
      "placeRate": 32.8,
      "winRoi": 123.8
    },
    {
      "name": "原優介",
      "rides": 144,
      "wins": 6,
      "winRate": 4.2,
      "placeRate": 18.1,
      "winRoi": 298.7
    },
    {
      "name": "武藤雅",
      "rides": 93,
      "wins": 6,
      "winRate": 6.5,
      "placeRate": 18.3,
      "winRoi": 39.4
    },
    {
      "name": "横山琉人",
      "rides": 87,
      "wins": 6,
      "winRate": 6.9,
      "placeRate": 17.2,
      "winRoi": 334.5
    },
    {
      "name": "江田照男",
      "rides": 118,
      "wins": 5,
      "winRate": 4.2,
      "placeRate": 11.9,
      "winRoi": 68.1
    },
    {
      "name": "小林脩斗",
      "rides": 104,
      "wins": 5,
      "winRate": 4.8,
      "placeRate": 17.3,
      "winRoi": 35.6
    }
  ],
  "nakayama-dirt-middle": [
    {
      "name": "横山武史",
      "rides": 195,
      "wins": 37,
      "winRate": 19.0,
      "placeRate": 34.9,
      "winRoi": 75.4
    },
    {
      "name": "戸崎圭太",
      "rides": 184,
      "wins": 34,
      "winRate": 18.5,
      "placeRate": 46.2,
      "winRoi": 82.7
    },
    {
      "name": "ルメール",
      "rides": 100,
      "wins": 27,
      "winRate": 27.0,
      "placeRate": 53.0,
      "winRoi": 67.7
    },
    {
      "name": "横山和生",
      "rides": 153,
      "wins": 21,
      "winRate": 13.7,
      "placeRate": 30.7,
      "winRoi": 62.4
    },
    {
      "name": "三浦皇成",
      "rides": 172,
      "wins": 19,
      "winRate": 11.0,
      "placeRate": 33.7,
      "winRoi": 77.7
    },
    {
      "name": "菅原明良",
      "rides": 206,
      "wins": 12,
      "winRate": 5.8,
      "placeRate": 20.4,
      "winRoi": 58.9
    },
    {
      "name": "田辺裕信",
      "rides": 155,
      "wins": 12,
      "winRate": 7.7,
      "placeRate": 36.1,
      "winRoi": 72.5
    },
    {
      "name": "丹内祐次",
      "rides": 186,
      "wins": 11,
      "winRate": 5.9,
      "placeRate": 21.0,
      "winRoi": 92.7
    },
    {
      "name": "大野拓弥",
      "rides": 173,
      "wins": 11,
      "winRate": 6.4,
      "placeRate": 13.3,
      "winRoi": 57.3
    },
    {
      "name": "津村明秀",
      "rides": 151,
      "wins": 10,
      "winRate": 6.6,
      "placeRate": 19.2,
      "winRoi": 27.7
    },
    {
      "name": "石川裕紀",
      "rides": 145,
      "wins": 10,
      "winRate": 6.9,
      "placeRate": 17.9,
      "winRoi": 87.9
    },
    {
      "name": "石橋脩",
      "rides": 126,
      "wins": 8,
      "winRate": 6.3,
      "placeRate": 23.0,
      "winRoi": 76.2
    },
    {
      "name": "横山琉人",
      "rides": 97,
      "wins": 8,
      "winRate": 8.2,
      "placeRate": 14.4,
      "winRoi": 213.1
    },
    {
      "name": "Ｍ．デム",
      "rides": 60,
      "wins": 8,
      "winRate": 13.3,
      "placeRate": 35.0,
      "winRoi": 79.7
    },
    {
      "name": "吉田豊",
      "rides": 128,
      "wins": 5,
      "winRate": 3.9,
      "placeRate": 21.1,
      "winRoi": 51.5
    },
    {
      "name": "菊沢一樹",
      "rides": 108,
      "wins": 5,
      "winRate": 4.6,
      "placeRate": 12.0,
      "winRoi": 54.5
    },
    {
      "name": "佐々木大",
      "rides": 99,
      "wins": 5,
      "winRate": 5.1,
      "placeRate": 21.2,
      "winRoi": 100.5
    },
    {
      "name": "原優介",
      "rides": 138,
      "wins": 4,
      "winRate": 2.9,
      "placeRate": 15.2,
      "winRoi": 21.6
    },
    {
      "name": "松岡正海",
      "rides": 90,
      "wins": 4,
      "winRate": 4.4,
      "placeRate": 13.3,
      "winRoi": 41.4
    },
    {
      "name": "杉原誠人",
      "rides": 76,
      "wins": 4,
      "winRate": 5.3,
      "placeRate": 15.8,
      "winRoi": 43.3
    }
  ],
  "chukyo-all-all": [
    {
      "name": "川田将雅",
      "rides": 377,
      "wins": 105,
      "winRate": 27.9,
      "placeRate": 59.7,
      "winRoi": 83.5
    },
    {
      "name": "松山弘平",
      "rides": 636,
      "wins": 103,
      "winRate": 16.2,
      "placeRate": 35.4,
      "winRoi": 97.7
    },
    {
      "name": "岩田望来",
      "rides": 529,
      "wins": 60,
      "winRate": 11.3,
      "placeRate": 32.3,
      "winRoi": 83.3
    },
    {
      "name": "坂井瑠星",
      "rides": 424,
      "wins": 55,
      "winRate": 13.0,
      "placeRate": 35.1,
      "winRoi": 61.8
    },
    {
      "name": "西村淳也",
      "rides": 432,
      "wins": 52,
      "winRate": 12.0,
      "placeRate": 29.9,
      "winRoi": 128.0
    },
    {
      "name": "幸英明",
      "rides": 608,
      "wins": 44,
      "winRate": 7.2,
      "placeRate": 25.2,
      "winRoi": 74.9
    },
    {
      "name": "鮫島克駿",
      "rides": 458,
      "wins": 38,
      "winRate": 8.3,
      "placeRate": 25.1,
      "winRoi": 91.3
    },
    {
      "name": "吉田隼人",
      "rides": 384,
      "wins": 36,
      "winRate": 9.4,
      "placeRate": 26.3,
      "winRoi": 74.6
    },
    {
      "name": "団野大成",
      "rides": 431,
      "wins": 35,
      "winRate": 8.1,
      "placeRate": 24.6,
      "winRoi": 72.8
    },
    {
      "name": "武豊",
      "rides": 277,
      "wins": 32,
      "winRate": 11.6,
      "placeRate": 36.1,
      "winRoi": 69.6
    },
    {
      "name": "池添謙一",
      "rides": 244,
      "wins": 25,
      "winRate": 10.2,
      "placeRate": 26.2,
      "winRoi": 81.8
    },
    {
      "name": "ルメール",
      "rides": 124,
      "wins": 23,
      "winRate": 18.5,
      "placeRate": 40.3,
      "winRoi": 53.5
    },
    {
      "name": "松若風馬",
      "rides": 393,
      "wins": 22,
      "winRate": 5.6,
      "placeRate": 21.6,
      "winRoi": 64.8
    },
    {
      "name": "富田暁",
      "rides": 349,
      "wins": 20,
      "winRate": 5.7,
      "placeRate": 20.6,
      "winRoi": 73.6
    },
    {
      "name": "酒井学",
      "rides": 298,
      "wins": 18,
      "winRate": 6.0,
      "placeRate": 15.8,
      "winRoi": 116.1
    },
    {
      "name": "荻野極",
      "rides": 226,
      "wins": 18,
      "winRate": 8.0,
      "placeRate": 19.0,
      "winRoi": 112.7
    },
    {
      "name": "岩田康誠",
      "rides": 250,
      "wins": 17,
      "winRate": 6.8,
      "placeRate": 24.8,
      "winRoi": 61.9
    },
    {
      "name": "藤岡佑介",
      "rides": 199,
      "wins": 17,
      "winRate": 8.5,
      "placeRate": 35.2,
      "winRoi": 34.8
    },
    {
      "name": "小沢大仁",
      "rides": 436,
      "wins": 16,
      "winRate": 3.7,
      "placeRate": 14.2,
      "winRoi": 96.1
    },
    {
      "name": "永島まな",
      "rides": 359,
      "wins": 16,
      "winRate": 4.5,
      "placeRate": 13.9,
      "winRoi": 66.7
    }
  ],
  "chukyo-all-sprint": [
    {
      "name": "松山弘平",
      "rides": 257,
      "wins": 41,
      "winRate": 16.0,
      "placeRate": 34.2,
      "winRoi": 100.8
    },
    {
      "name": "川田将雅",
      "rides": 131,
      "wins": 38,
      "winRate": 29.0,
      "placeRate": 53.4,
      "winRoi": 84.0
    },
    {
      "name": "幸英明",
      "rides": 257,
      "wins": 24,
      "winRate": 9.3,
      "placeRate": 23.0,
      "winRoi": 120.4
    },
    {
      "name": "岩田望来",
      "rides": 227,
      "wins": 21,
      "winRate": 9.3,
      "placeRate": 32.6,
      "winRoi": 58.8
    },
    {
      "name": "坂井瑠星",
      "rides": 171,
      "wins": 21,
      "winRate": 12.3,
      "placeRate": 34.5,
      "winRoi": 59.9
    },
    {
      "name": "鮫島克駿",
      "rides": 200,
      "wins": 16,
      "winRate": 8.0,
      "placeRate": 24.5,
      "winRoi": 67.7
    },
    {
      "name": "西村淳也",
      "rides": 191,
      "wins": 15,
      "winRate": 7.9,
      "placeRate": 26.2,
      "winRoi": 72.9
    },
    {
      "name": "武豊",
      "rides": 114,
      "wins": 14,
      "winRate": 12.3,
      "placeRate": 36.0,
      "winRoi": 92.9
    },
    {
      "name": "団野大成",
      "rides": 182,
      "wins": 12,
      "winRate": 6.6,
      "placeRate": 22.5,
      "winRoi": 69.7
    },
    {
      "name": "吉田隼人",
      "rides": 160,
      "wins": 11,
      "winRate": 6.9,
      "placeRate": 20.0,
      "winRoi": 45.7
    },
    {
      "name": "池添謙一",
      "rides": 100,
      "wins": 11,
      "winRate": 11.0,
      "placeRate": 23.0,
      "winRoi": 77.4
    },
    {
      "name": "松若風馬",
      "rides": 184,
      "wins": 10,
      "winRate": 5.4,
      "placeRate": 21.7,
      "winRoi": 44.0
    },
    {
      "name": "荻野極",
      "rides": 105,
      "wins": 10,
      "winRate": 9.5,
      "placeRate": 21.9,
      "winRoi": 206.9
    },
    {
      "name": "Ｍ．デム",
      "rides": 75,
      "wins": 10,
      "winRate": 13.3,
      "placeRate": 34.7,
      "winRoi": 127.7
    },
    {
      "name": "小沢大仁",
      "rides": 203,
      "wins": 9,
      "winRate": 4.4,
      "placeRate": 12.3,
      "winRoi": 161.4
    },
    {
      "name": "岩田康誠",
      "rides": 110,
      "wins": 9,
      "winRate": 8.2,
      "placeRate": 24.5,
      "winRoi": 55.9
    },
    {
      "name": "高杉吏麒",
      "rides": 76,
      "wins": 9,
      "winRate": 11.8,
      "placeRate": 30.3,
      "winRoi": 114.5
    },
    {
      "name": "斎藤新",
      "rides": 140,
      "wins": 8,
      "winRate": 5.7,
      "placeRate": 22.1,
      "winRoi": 94.9
    },
    {
      "name": "永島まな",
      "rides": 183,
      "wins": 7,
      "winRate": 3.8,
      "placeRate": 14.2,
      "winRoi": 45.4
    },
    {
      "name": "酒井学",
      "rides": 152,
      "wins": 7,
      "winRate": 4.6,
      "placeRate": 14.5,
      "winRoi": 131.4
    }
  ],
  "chukyo-all-mile": [
    {
      "name": "松山弘平",
      "rides": 71,
      "wins": 15,
      "winRate": 21.1,
      "placeRate": 36.6,
      "winRoi": 134.8
    },
    {
      "name": "川田将雅",
      "rides": 50,
      "wins": 11,
      "winRate": 22.0,
      "placeRate": 60.0,
      "winRoi": 74.2
    },
    {
      "name": "岩田望来",
      "rides": 54,
      "wins": 8,
      "winRate": 14.8,
      "placeRate": 48.1,
      "winRoi": 81.5
    },
    {
      "name": "幸英明",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 20.4,
      "winRoi": 50.4
    },
    {
      "name": "吉田隼人",
      "rides": 51,
      "wins": 3,
      "winRate": 5.9,
      "placeRate": 31.4,
      "winRoi": 35.9
    }
  ],
  "chukyo-all-middle": [
    {
      "name": "川田将雅",
      "rides": 195,
      "wins": 56,
      "winRate": 28.7,
      "placeRate": 63.6,
      "winRoi": 86.0
    },
    {
      "name": "松山弘平",
      "rides": 305,
      "wins": 46,
      "winRate": 15.1,
      "placeRate": 36.1,
      "winRoi": 86.7
    },
    {
      "name": "岩田望来",
      "rides": 246,
      "wins": 31,
      "winRate": 12.6,
      "placeRate": 28.9,
      "winRoi": 107.0
    },
    {
      "name": "坂井瑠星",
      "rides": 205,
      "wins": 30,
      "winRate": 14.6,
      "placeRate": 37.1,
      "winRoi": 65.1
    },
    {
      "name": "西村淳也",
      "rides": 199,
      "wins": 30,
      "winRate": 15.1,
      "placeRate": 34.2,
      "winRoi": 190.8
    },
    {
      "name": "吉田隼人",
      "rides": 171,
      "wins": 22,
      "winRate": 12.9,
      "placeRate": 30.4,
      "winRoi": 114.0
    },
    {
      "name": "鮫島克駿",
      "rides": 212,
      "wins": 19,
      "winRate": 9.0,
      "placeRate": 25.9,
      "winRoi": 54.9
    },
    {
      "name": "武豊",
      "rides": 126,
      "wins": 17,
      "winRate": 13.5,
      "placeRate": 40.5,
      "winRoi": 66.5
    },
    {
      "name": "幸英明",
      "rides": 294,
      "wins": 16,
      "winRate": 5.4,
      "placeRate": 27.9,
      "winRoi": 40.3
    },
    {
      "name": "団野大成",
      "rides": 201,
      "wins": 16,
      "winRate": 8.0,
      "placeRate": 24.9,
      "winRoi": 55.8
    },
    {
      "name": "ルメール",
      "rides": 62,
      "wins": 15,
      "winRate": 24.2,
      "placeRate": 41.9,
      "winRoi": 69.5
    },
    {
      "name": "富田暁",
      "rides": 164,
      "wins": 12,
      "winRate": 7.3,
      "placeRate": 21.3,
      "winRoi": 86.0
    },
    {
      "name": "池添謙一",
      "rides": 116,
      "wins": 12,
      "winRate": 10.3,
      "placeRate": 28.4,
      "winRoi": 60.7
    },
    {
      "name": "菱田裕二",
      "rides": 133,
      "wins": 11,
      "winRate": 8.3,
      "placeRate": 19.5,
      "winRoi": 81.1
    },
    {
      "name": "角田大和",
      "rides": 140,
      "wins": 10,
      "winRate": 7.1,
      "placeRate": 22.9,
      "winRoi": 162.1
    },
    {
      "name": "酒井学",
      "rides": 118,
      "wins": 10,
      "winRate": 8.5,
      "placeRate": 19.5,
      "winRoi": 108.6
    },
    {
      "name": "松若風馬",
      "rides": 173,
      "wins": 9,
      "winRate": 5.2,
      "placeRate": 21.4,
      "winRoi": 59.9
    },
    {
      "name": "浜中俊",
      "rides": 92,
      "wins": 9,
      "winRate": 9.8,
      "placeRate": 32.6,
      "winRoi": 97.3
    },
    {
      "name": "藤岡佑介",
      "rides": 91,
      "wins": 9,
      "winRate": 9.9,
      "placeRate": 38.5,
      "winRoi": 40.7
    },
    {
      "name": "永島まな",
      "rides": 142,
      "wins": 7,
      "winRate": 4.9,
      "placeRate": 12.7,
      "winRoi": 75.2
    }
  ],
  "chukyo-turf-all": [
    {
      "name": "川田将雅",
      "rides": 201,
      "wins": 59,
      "winRate": 29.4,
      "placeRate": 61.7,
      "winRoi": 83.0
    },
    {
      "name": "松山弘平",
      "rides": 297,
      "wins": 43,
      "winRate": 14.5,
      "placeRate": 32.0,
      "winRoi": 77.3
    },
    {
      "name": "岩田望来",
      "rides": 247,
      "wins": 31,
      "winRate": 12.6,
      "placeRate": 35.2,
      "winRoi": 93.1
    },
    {
      "name": "坂井瑠星",
      "rides": 198,
      "wins": 25,
      "winRate": 12.6,
      "placeRate": 33.8,
      "winRoi": 82.0
    },
    {
      "name": "西村淳也",
      "rides": 189,
      "wins": 22,
      "winRate": 11.6,
      "placeRate": 25.9,
      "winRoi": 183.8
    },
    {
      "name": "団野大成",
      "rides": 198,
      "wins": 21,
      "winRate": 10.6,
      "placeRate": 25.8,
      "winRoi": 117.6
    },
    {
      "name": "幸英明",
      "rides": 247,
      "wins": 20,
      "winRate": 8.1,
      "placeRate": 24.7,
      "winRoi": 104.1
    },
    {
      "name": "吉田隼人",
      "rides": 192,
      "wins": 19,
      "winRate": 9.9,
      "placeRate": 27.1,
      "winRoi": 89.7
    },
    {
      "name": "ルメール",
      "rides": 76,
      "wins": 18,
      "winRate": 23.7,
      "placeRate": 44.7,
      "winRoi": 69.1
    },
    {
      "name": "池添謙一",
      "rides": 129,
      "wins": 16,
      "winRate": 12.4,
      "placeRate": 31.8,
      "winRoi": 113.6
    },
    {
      "name": "武豊",
      "rides": 141,
      "wins": 13,
      "winRate": 9.2,
      "placeRate": 31.9,
      "winRoi": 44.7
    },
    {
      "name": "鮫島克駿",
      "rides": 201,
      "wins": 11,
      "winRate": 5.5,
      "placeRate": 22.4,
      "winRoi": 121.5
    },
    {
      "name": "浜中俊",
      "rides": 121,
      "wins": 11,
      "winRate": 9.1,
      "placeRate": 29.8,
      "winRoi": 81.5
    },
    {
      "name": "北村友一",
      "rides": 110,
      "wins": 9,
      "winRate": 8.2,
      "placeRate": 21.8,
      "winRoi": 109.7
    },
    {
      "name": "藤岡佑介",
      "rides": 110,
      "wins": 9,
      "winRate": 8.2,
      "placeRate": 36.4,
      "winRoi": 32.1
    },
    {
      "name": "岩田康誠",
      "rides": 109,
      "wins": 9,
      "winRate": 8.3,
      "placeRate": 24.8,
      "winRoi": 91.7
    },
    {
      "name": "西塚洸二",
      "rides": 98,
      "wins": 9,
      "winRate": 9.2,
      "placeRate": 28.6,
      "winRoi": 82.4
    },
    {
      "name": "斎藤新",
      "rides": 126,
      "wins": 8,
      "winRate": 6.3,
      "placeRate": 19.8,
      "winRoi": 151.8
    },
    {
      "name": "荻野極",
      "rides": 108,
      "wins": 8,
      "winRate": 7.4,
      "placeRate": 18.5,
      "winRoi": 71.7
    },
    {
      "name": "Ｍ．デム",
      "rides": 83,
      "wins": 8,
      "winRate": 9.6,
      "placeRate": 37.3,
      "winRoi": 65.7
    }
  ],
  "chukyo-turf-sprint": [
    {
      "name": "幸英明",
      "rides": 86,
      "wins": 14,
      "winRate": 16.3,
      "placeRate": 25.6,
      "winRoi": 231.2
    },
    {
      "name": "坂井瑠星",
      "rides": 64,
      "wins": 10,
      "winRate": 15.6,
      "placeRate": 35.9,
      "winRoi": 95.8
    },
    {
      "name": "岩田望来",
      "rides": 80,
      "wins": 8,
      "winRate": 10.0,
      "placeRate": 32.5,
      "winRoi": 59.6
    },
    {
      "name": "吉田隼人",
      "rides": 64,
      "wins": 7,
      "winRate": 10.9,
      "placeRate": 21.9,
      "winRoi": 93.6
    },
    {
      "name": "松山弘平",
      "rides": 86,
      "wins": 6,
      "winRate": 7.0,
      "placeRate": 22.1,
      "winRoi": 29.3
    },
    {
      "name": "団野大成",
      "rides": 74,
      "wins": 6,
      "winRate": 8.1,
      "placeRate": 25.7,
      "winRoi": 121.1
    },
    {
      "name": "西村淳也",
      "rides": 68,
      "wins": 5,
      "winRate": 7.4,
      "placeRate": 23.5,
      "winRoi": 37.4
    },
    {
      "name": "永島まな",
      "rides": 58,
      "wins": 4,
      "winRate": 6.9,
      "placeRate": 15.5,
      "winRoi": 94.0
    },
    {
      "name": "斎藤新",
      "rides": 52,
      "wins": 4,
      "winRate": 7.7,
      "placeRate": 19.2,
      "winRoi": 131.5
    },
    {
      "name": "鮫島克駿",
      "rides": 70,
      "wins": 3,
      "winRate": 4.3,
      "placeRate": 24.3,
      "winRoi": 54.7
    },
    {
      "name": "小沢大仁",
      "rides": 68,
      "wins": 3,
      "winRate": 4.4,
      "placeRate": 14.7,
      "winRoi": 25.6
    },
    {
      "name": "酒井学",
      "rides": 54,
      "wins": 2,
      "winRate": 3.7,
      "placeRate": 14.8,
      "winRoi": 216.7
    },
    {
      "name": "松若風馬",
      "rides": 66,
      "wins": 1,
      "winRate": 1.5,
      "placeRate": 24.2,
      "winRoi": 35.2
    },
    {
      "name": "亀田温心",
      "rides": 52,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 11.5,
      "winRoi": 159.6
    },
    {
      "name": "菱田裕二",
      "rides": 55,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 10.9,
      "winRoi": 0.0
    }
  ],
  "chukyo-turf-mile": [
    {
      "name": "松山弘平",
      "rides": 71,
      "wins": 15,
      "winRate": 21.1,
      "placeRate": 36.6,
      "winRoi": 134.8
    },
    {
      "name": "川田将雅",
      "rides": 50,
      "wins": 11,
      "winRate": 22.0,
      "placeRate": 60.0,
      "winRoi": 74.2
    },
    {
      "name": "岩田望来",
      "rides": 54,
      "wins": 8,
      "winRate": 14.8,
      "placeRate": 48.1,
      "winRoi": 81.5
    },
    {
      "name": "幸英明",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 20.4,
      "winRoi": 50.4
    },
    {
      "name": "吉田隼人",
      "rides": 51,
      "wins": 3,
      "winRate": 5.9,
      "placeRate": 31.4,
      "winRoi": 35.9
    }
  ],
  "chukyo-turf-middle": [
    {
      "name": "川田将雅",
      "rides": 106,
      "wins": 36,
      "winRate": 34.0,
      "placeRate": 65.1,
      "winRoi": 87.9
    },
    {
      "name": "松山弘平",
      "rides": 137,
      "wins": 21,
      "winRate": 15.3,
      "placeRate": 35.8,
      "winRoi": 77.7
    },
    {
      "name": "岩田望来",
      "rides": 111,
      "wins": 15,
      "winRate": 13.5,
      "placeRate": 31.5,
      "winRoi": 124.5
    },
    {
      "name": "坂井瑠星",
      "rides": 86,
      "wins": 11,
      "winRate": 12.8,
      "placeRate": 34.9,
      "winRoi": 87.0
    },
    {
      "name": "西村淳也",
      "rides": 79,
      "wins": 10,
      "winRate": 12.7,
      "placeRate": 27.8,
      "winRoi": 364.4
    },
    {
      "name": "吉田隼人",
      "rides": 75,
      "wins": 9,
      "winRate": 12.0,
      "placeRate": 28.0,
      "winRoi": 125.5
    },
    {
      "name": "団野大成",
      "rides": 76,
      "wins": 8,
      "winRate": 10.5,
      "placeRate": 22.4,
      "winRoi": 89.9
    },
    {
      "name": "池添謙一",
      "rides": 56,
      "wins": 7,
      "winRate": 12.5,
      "placeRate": 35.7,
      "winRoi": 68.6
    },
    {
      "name": "浜中俊",
      "rides": 52,
      "wins": 7,
      "winRate": 13.5,
      "placeRate": 38.5,
      "winRoi": 157.3
    },
    {
      "name": "武豊",
      "rides": 58,
      "wins": 6,
      "winRate": 10.3,
      "placeRate": 36.2,
      "winRoi": 54.7
    },
    {
      "name": "鮫島克駿",
      "rides": 85,
      "wins": 5,
      "winRate": 5.9,
      "placeRate": 20.0,
      "winRoi": 46.6
    },
    {
      "name": "菱田裕二",
      "rides": 51,
      "wins": 4,
      "winRate": 7.8,
      "placeRate": 17.6,
      "winRoi": 29.4
    },
    {
      "name": "松若風馬",
      "rides": 74,
      "wins": 3,
      "winRate": 4.1,
      "placeRate": 23.0,
      "winRoi": 76.6
    },
    {
      "name": "幸英明",
      "rides": 104,
      "wins": 2,
      "winRate": 1.9,
      "placeRate": 26.0,
      "winRoi": 29.9
    },
    {
      "name": "富田暁",
      "rides": 54,
      "wins": 2,
      "winRate": 3.7,
      "placeRate": 14.8,
      "winRoi": 13.9
    },
    {
      "name": "小沢大仁",
      "rides": 54,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 16.7,
      "winRoi": 18.5
    }
  ],
  "chukyo-dirt-all": [
    {
      "name": "松山弘平",
      "rides": 339,
      "wins": 60,
      "winRate": 17.7,
      "placeRate": 38.3,
      "winRoi": 115.5
    },
    {
      "name": "川田将雅",
      "rides": 176,
      "wins": 46,
      "winRate": 26.1,
      "placeRate": 57.4,
      "winRoi": 84.1
    },
    {
      "name": "西村淳也",
      "rides": 243,
      "wins": 30,
      "winRate": 12.3,
      "placeRate": 32.9,
      "winRoi": 84.6
    },
    {
      "name": "坂井瑠星",
      "rides": 226,
      "wins": 30,
      "winRate": 13.3,
      "placeRate": 36.3,
      "winRoi": 44.2
    },
    {
      "name": "岩田望来",
      "rides": 282,
      "wins": 29,
      "winRate": 10.3,
      "placeRate": 29.8,
      "winRoi": 74.8
    },
    {
      "name": "鮫島克駿",
      "rides": 257,
      "wins": 27,
      "winRate": 10.5,
      "placeRate": 27.2,
      "winRoi": 67.6
    },
    {
      "name": "幸英明",
      "rides": 361,
      "wins": 24,
      "winRate": 6.6,
      "placeRate": 25.5,
      "winRoi": 54.9
    },
    {
      "name": "武豊",
      "rides": 136,
      "wins": 19,
      "winRate": 14.0,
      "placeRate": 40.4,
      "winRoi": 95.4
    },
    {
      "name": "吉田隼人",
      "rides": 192,
      "wins": 17,
      "winRate": 8.9,
      "placeRate": 25.5,
      "winRoi": 59.4
    },
    {
      "name": "松若風馬",
      "rides": 217,
      "wins": 15,
      "winRate": 6.9,
      "placeRate": 20.3,
      "winRoi": 48.2
    },
    {
      "name": "富田暁",
      "rides": 209,
      "wins": 15,
      "winRate": 7.2,
      "placeRate": 20.1,
      "winRoi": 91.3
    },
    {
      "name": "団野大成",
      "rides": 233,
      "wins": 14,
      "winRate": 6.0,
      "placeRate": 23.6,
      "winRoi": 34.8
    },
    {
      "name": "酒井学",
      "rides": 179,
      "wins": 14,
      "winRate": 7.8,
      "placeRate": 16.2,
      "winRoi": 113.5
    },
    {
      "name": "角田大和",
      "rides": 210,
      "wins": 12,
      "winRate": 5.7,
      "placeRate": 21.9,
      "winRoi": 117.7
    },
    {
      "name": "菱田裕二",
      "rides": 164,
      "wins": 12,
      "winRate": 7.3,
      "placeRate": 17.7,
      "winRoi": 116.8
    },
    {
      "name": "高杉吏麒",
      "rides": 92,
      "wins": 12,
      "winRate": 13.0,
      "placeRate": 28.3,
      "winRoi": 161.1
    },
    {
      "name": "小沢大仁",
      "rides": 269,
      "wins": 11,
      "winRate": 4.1,
      "placeRate": 14.9,
      "winRoi": 142.9
    },
    {
      "name": "荻野極",
      "rides": 118,
      "wins": 10,
      "winRate": 8.5,
      "placeRate": 19.5,
      "winRoi": 150.3
    },
    {
      "name": "永島まな",
      "rides": 226,
      "wins": 9,
      "winRate": 4.0,
      "placeRate": 13.3,
      "winRoi": 43.4
    },
    {
      "name": "池添謙一",
      "rides": 115,
      "wins": 9,
      "winRate": 7.8,
      "placeRate": 20.0,
      "winRoi": 46.2
    }
  ],
  "chukyo-dirt-sprint": [
    {
      "name": "松山弘平",
      "rides": 171,
      "wins": 35,
      "winRate": 20.5,
      "placeRate": 40.4,
      "winRoi": 136.7
    },
    {
      "name": "川田将雅",
      "rides": 87,
      "wins": 26,
      "winRate": 29.9,
      "placeRate": 52.9,
      "winRoi": 84.5
    },
    {
      "name": "岩田望来",
      "rides": 147,
      "wins": 13,
      "winRate": 8.8,
      "placeRate": 32.7,
      "winRoi": 58.3
    },
    {
      "name": "鮫島克駿",
      "rides": 130,
      "wins": 13,
      "winRate": 10.0,
      "placeRate": 24.6,
      "winRoi": 74.6
    },
    {
      "name": "坂井瑠星",
      "rides": 107,
      "wins": 11,
      "winRate": 10.3,
      "placeRate": 33.6,
      "winRoi": 38.4
    },
    {
      "name": "幸英明",
      "rides": 171,
      "wins": 10,
      "winRate": 5.8,
      "placeRate": 21.6,
      "winRoi": 64.7
    },
    {
      "name": "西村淳也",
      "rides": 123,
      "wins": 10,
      "winRate": 8.1,
      "placeRate": 27.6,
      "winRoi": 92.5
    },
    {
      "name": "松若風馬",
      "rides": 118,
      "wins": 9,
      "winRate": 7.6,
      "placeRate": 20.3,
      "winRoi": 48.9
    },
    {
      "name": "武豊",
      "rides": 68,
      "wins": 8,
      "winRate": 11.8,
      "placeRate": 36.8,
      "winRoi": 114.1
    },
    {
      "name": "小沢大仁",
      "rides": 135,
      "wins": 6,
      "winRate": 4.4,
      "placeRate": 11.1,
      "winRoi": 229.9
    },
    {
      "name": "団野大成",
      "rides": 108,
      "wins": 6,
      "winRate": 5.6,
      "placeRate": 20.4,
      "winRoi": 34.5
    },
    {
      "name": "荻野極",
      "rides": 64,
      "wins": 6,
      "winRate": 9.4,
      "placeRate": 21.9,
      "winRoi": 244.8
    },
    {
      "name": "高杉吏麒",
      "rides": 51,
      "wins": 6,
      "winRate": 11.8,
      "placeRate": 29.4,
      "winRoi": 88.0
    },
    {
      "name": "富田暁",
      "rides": 99,
      "wins": 5,
      "winRate": 5.1,
      "placeRate": 15.2,
      "winRoi": 57.9
    },
    {
      "name": "酒井学",
      "rides": 98,
      "wins": 5,
      "winRate": 5.1,
      "placeRate": 14.3,
      "winRoi": 84.5
    },
    {
      "name": "菱田裕二",
      "rides": 82,
      "wins": 5,
      "winRate": 6.1,
      "placeRate": 14.6,
      "winRoi": 120.4
    },
    {
      "name": "吉田隼人",
      "rides": 96,
      "wins": 4,
      "winRate": 4.2,
      "placeRate": 18.8,
      "winRoi": 13.8
    },
    {
      "name": "斎藤新",
      "rides": 88,
      "wins": 4,
      "winRate": 4.5,
      "placeRate": 23.9,
      "winRoi": 73.3
    },
    {
      "name": "川須栄彦",
      "rides": 83,
      "wins": 4,
      "winRate": 4.8,
      "placeRate": 7.2,
      "winRoi": 35.9
    },
    {
      "name": "松本大輝",
      "rides": 73,
      "wins": 4,
      "winRate": 5.5,
      "placeRate": 16.4,
      "winRoi": 38.6
    }
  ],
  "chukyo-dirt-middle": [
    {
      "name": "松山弘平",
      "rides": 168,
      "wins": 25,
      "winRate": 14.9,
      "placeRate": 36.3,
      "winRoi": 93.9
    },
    {
      "name": "西村淳也",
      "rides": 120,
      "wins": 20,
      "winRate": 16.7,
      "placeRate": 38.3,
      "winRoi": 76.5
    },
    {
      "name": "川田将雅",
      "rides": 89,
      "wins": 20,
      "winRate": 22.5,
      "placeRate": 61.8,
      "winRoi": 83.7
    },
    {
      "name": "坂井瑠星",
      "rides": 119,
      "wins": 19,
      "winRate": 16.0,
      "placeRate": 38.7,
      "winRoi": 49.3
    },
    {
      "name": "岩田望来",
      "rides": 135,
      "wins": 16,
      "winRate": 11.9,
      "placeRate": 26.7,
      "winRoi": 92.7
    },
    {
      "name": "幸英明",
      "rides": 190,
      "wins": 14,
      "winRate": 7.4,
      "placeRate": 28.9,
      "winRoi": 46.1
    },
    {
      "name": "鮫島克駿",
      "rides": 127,
      "wins": 14,
      "winRate": 11.0,
      "placeRate": 29.9,
      "winRoi": 60.5
    },
    {
      "name": "吉田隼人",
      "rides": 96,
      "wins": 13,
      "winRate": 13.5,
      "placeRate": 32.3,
      "winRoi": 105.0
    },
    {
      "name": "武豊",
      "rides": 68,
      "wins": 11,
      "winRate": 16.2,
      "placeRate": 44.1,
      "winRoi": 76.6
    },
    {
      "name": "富田暁",
      "rides": 110,
      "wins": 10,
      "winRate": 9.1,
      "placeRate": 24.5,
      "winRoi": 121.5
    },
    {
      "name": "角田大和",
      "rides": 105,
      "wins": 9,
      "winRate": 8.6,
      "placeRate": 26.7,
      "winRoi": 204.4
    },
    {
      "name": "酒井学",
      "rides": 81,
      "wins": 9,
      "winRate": 11.1,
      "placeRate": 18.5,
      "winRoi": 148.6
    },
    {
      "name": "団野大成",
      "rides": 125,
      "wins": 8,
      "winRate": 6.4,
      "placeRate": 26.4,
      "winRoi": 35.0
    },
    {
      "name": "菱田裕二",
      "rides": 82,
      "wins": 7,
      "winRate": 8.5,
      "placeRate": 20.7,
      "winRoi": 113.2
    },
    {
      "name": "永島まな",
      "rides": 101,
      "wins": 6,
      "winRate": 5.9,
      "placeRate": 12.9,
      "winRoi": 68.8
    },
    {
      "name": "松若風馬",
      "rides": 99,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 20.2,
      "winRoi": 47.4
    },
    {
      "name": "小沢大仁",
      "rides": 134,
      "wins": 5,
      "winRate": 3.7,
      "placeRate": 18.7,
      "winRoi": 55.2
    },
    {
      "name": "池添謙一",
      "rides": 60,
      "wins": 5,
      "winRate": 8.3,
      "placeRate": 21.7,
      "winRoi": 53.3
    },
    {
      "name": "岩田康誠",
      "rides": 73,
      "wins": 4,
      "winRate": 5.5,
      "placeRate": 23.3,
      "winRoi": 31.9
    },
    {
      "name": "吉村誠之",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 22.2,
      "winRoi": 143.3
    }
  ],
  "kyoto-all-all": [
    {
      "name": "岩田望来",
      "rides": 575,
      "wins": 80,
      "winRate": 13.9,
      "placeRate": 33.4,
      "winRoi": 91.8
    },
    {
      "name": "川田将雅",
      "rides": 333,
      "wins": 79,
      "winRate": 23.7,
      "placeRate": 56.5,
      "winRoi": 71.6
    },
    {
      "name": "坂井瑠星",
      "rides": 450,
      "wins": 71,
      "winRate": 15.8,
      "placeRate": 35.3,
      "winRoi": 70.2
    },
    {
      "name": "松山弘平",
      "rides": 506,
      "wins": 59,
      "winRate": 11.7,
      "placeRate": 35.4,
      "winRoi": 58.4
    },
    {
      "name": "西村淳也",
      "rides": 478,
      "wins": 50,
      "winRate": 10.5,
      "placeRate": 30.5,
      "winRoi": 104.6
    },
    {
      "name": "武豊",
      "rides": 366,
      "wins": 49,
      "winRate": 13.4,
      "placeRate": 37.7,
      "winRoi": 60.8
    },
    {
      "name": "団野大成",
      "rides": 557,
      "wins": 45,
      "winRate": 8.1,
      "placeRate": 26.8,
      "winRoi": 84.3
    },
    {
      "name": "田口貫太",
      "rides": 635,
      "wins": 32,
      "winRate": 5.0,
      "placeRate": 20.6,
      "winRoi": 107.2
    },
    {
      "name": "北村友一",
      "rides": 342,
      "wins": 32,
      "winRate": 9.4,
      "placeRate": 23.4,
      "winRoi": 65.5
    },
    {
      "name": "鮫島克駿",
      "rides": 437,
      "wins": 30,
      "winRate": 6.9,
      "placeRate": 26.1,
      "winRoi": 41.4
    },
    {
      "name": "吉村誠之",
      "rides": 434,
      "wins": 28,
      "winRate": 6.5,
      "placeRate": 18.2,
      "winRoi": 84.2
    },
    {
      "name": "ルメール",
      "rides": 112,
      "wins": 27,
      "winRate": 24.1,
      "placeRate": 49.1,
      "winRoi": 87.4
    },
    {
      "name": "池添謙一",
      "rides": 328,
      "wins": 26,
      "winRate": 7.9,
      "placeRate": 22.3,
      "winRoi": 77.0
    },
    {
      "name": "幸英明",
      "rides": 533,
      "wins": 25,
      "winRate": 4.7,
      "placeRate": 19.9,
      "winRoi": 36.5
    },
    {
      "name": "藤岡佑介",
      "rides": 236,
      "wins": 25,
      "winRate": 10.6,
      "placeRate": 30.1,
      "winRoi": 60.9
    },
    {
      "name": "浜中俊",
      "rides": 228,
      "wins": 24,
      "winRate": 10.5,
      "placeRate": 28.5,
      "winRoi": 131.4
    },
    {
      "name": "松若風馬",
      "rides": 362,
      "wins": 22,
      "winRate": 6.1,
      "placeRate": 18.8,
      "winRoi": 59.7
    },
    {
      "name": "高杉吏麒",
      "rides": 319,
      "wins": 20,
      "winRate": 6.3,
      "placeRate": 24.8,
      "winRoi": 77.2
    },
    {
      "name": "岩田康誠",
      "rides": 213,
      "wins": 19,
      "winRate": 8.9,
      "placeRate": 23.0,
      "winRoi": 107.1
    },
    {
      "name": "酒井学",
      "rides": 320,
      "wins": 16,
      "winRate": 5.0,
      "placeRate": 15.3,
      "winRoi": 153.8
    }
  ],
  "kyoto-all-sprint": [
    {
      "name": "岩田望来",
      "rides": 220,
      "wins": 30,
      "winRate": 13.6,
      "placeRate": 30.5,
      "winRoi": 122.5
    },
    {
      "name": "坂井瑠星",
      "rides": 162,
      "wins": 26,
      "winRate": 16.0,
      "placeRate": 37.0,
      "winRoi": 86.1
    },
    {
      "name": "松山弘平",
      "rides": 191,
      "wins": 23,
      "winRate": 12.0,
      "placeRate": 33.0,
      "winRoi": 61.9
    },
    {
      "name": "団野大成",
      "rides": 240,
      "wins": 20,
      "winRate": 8.3,
      "placeRate": 23.8,
      "winRoi": 96.0
    },
    {
      "name": "西村淳也",
      "rides": 186,
      "wins": 20,
      "winRate": 10.8,
      "placeRate": 25.3,
      "winRoi": 137.7
    },
    {
      "name": "川田将雅",
      "rides": 110,
      "wins": 18,
      "winRate": 16.4,
      "placeRate": 48.2,
      "winRoi": 49.2
    },
    {
      "name": "田口貫太",
      "rides": 275,
      "wins": 16,
      "winRate": 5.8,
      "placeRate": 18.9,
      "winRoi": 71.7
    },
    {
      "name": "北村友一",
      "rides": 151,
      "wins": 16,
      "winRate": 10.6,
      "placeRate": 23.8,
      "winRoi": 54.2
    },
    {
      "name": "武豊",
      "rides": 142,
      "wins": 15,
      "winRate": 10.6,
      "placeRate": 35.9,
      "winRoi": 58.3
    },
    {
      "name": "鮫島克駿",
      "rides": 181,
      "wins": 12,
      "winRate": 6.6,
      "placeRate": 27.1,
      "winRoi": 36.5
    },
    {
      "name": "幸英明",
      "rides": 225,
      "wins": 11,
      "winRate": 4.9,
      "placeRate": 19.1,
      "winRoi": 47.6
    },
    {
      "name": "吉村誠之",
      "rides": 191,
      "wins": 11,
      "winRate": 5.8,
      "placeRate": 16.2,
      "winRoi": 106.1
    },
    {
      "name": "高杉吏麒",
      "rides": 141,
      "wins": 11,
      "winRate": 7.8,
      "placeRate": 26.2,
      "winRoi": 67.6
    },
    {
      "name": "松若風馬",
      "rides": 157,
      "wins": 10,
      "winRate": 6.4,
      "placeRate": 17.2,
      "winRoi": 69.9
    },
    {
      "name": "酒井学",
      "rides": 139,
      "wins": 10,
      "winRate": 7.2,
      "placeRate": 15.8,
      "winRoi": 210.3
    },
    {
      "name": "池添謙一",
      "rides": 134,
      "wins": 8,
      "winRate": 6.0,
      "placeRate": 16.4,
      "winRoi": 33.6
    },
    {
      "name": "浜中俊",
      "rides": 93,
      "wins": 7,
      "winRate": 7.5,
      "placeRate": 26.9,
      "winRoi": 47.4
    },
    {
      "name": "菱田裕二",
      "rides": 110,
      "wins": 6,
      "winRate": 5.5,
      "placeRate": 14.5,
      "winRoi": 53.6
    },
    {
      "name": "古川吉洋",
      "rides": 86,
      "wins": 6,
      "winRate": 7.0,
      "placeRate": 11.6,
      "winRoi": 65.8
    },
    {
      "name": "藤岡佑介",
      "rides": 78,
      "wins": 5,
      "winRate": 6.4,
      "placeRate": 26.9,
      "winRoi": 34.6
    }
  ],
  "kyoto-all-mile": [
    {
      "name": "岩田望来",
      "rides": 62,
      "wins": 9,
      "winRate": 14.5,
      "placeRate": 33.9,
      "winRoi": 90.5
    },
    {
      "name": "坂井瑠星",
      "rides": 58,
      "wins": 9,
      "winRate": 15.5,
      "placeRate": 32.8,
      "winRoi": 80.3
    },
    {
      "name": "松山弘平",
      "rides": 57,
      "wins": 6,
      "winRate": 10.5,
      "placeRate": 31.6,
      "winRoi": 81.9
    },
    {
      "name": "西村淳也",
      "rides": 57,
      "wins": 5,
      "winRate": 8.8,
      "placeRate": 43.9,
      "winRoi": 160.9
    },
    {
      "name": "団野大成",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 28.3,
      "winRoi": 162.6
    },
    {
      "name": "田口貫太",
      "rides": 59,
      "wins": 2,
      "winRate": 3.4,
      "placeRate": 28.8,
      "winRoi": 44.6
    },
    {
      "name": "幸英明",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 15.1,
      "winRoi": 6.4
    }
  ],
  "kyoto-all-middle": [
    {
      "name": "川田将雅",
      "rides": 163,
      "wins": 46,
      "winRate": 28.2,
      "placeRate": 61.3,
      "winRoi": 82.1
    },
    {
      "name": "岩田望来",
      "rides": 268,
      "wins": 40,
      "winRate": 14.9,
      "placeRate": 37.3,
      "winRoi": 74.8
    },
    {
      "name": "坂井瑠星",
      "rides": 207,
      "wins": 33,
      "winRate": 15.9,
      "placeRate": 35.7,
      "winRoi": 58.6
    },
    {
      "name": "松山弘平",
      "rides": 234,
      "wins": 29,
      "winRate": 12.4,
      "placeRate": 39.3,
      "winRoi": 54.0
    },
    {
      "name": "武豊",
      "rides": 161,
      "wins": 28,
      "winRate": 17.4,
      "placeRate": 38.5,
      "winRoi": 64.7
    },
    {
      "name": "西村淳也",
      "rides": 215,
      "wins": 23,
      "winRate": 10.7,
      "placeRate": 32.1,
      "winRoi": 65.3
    },
    {
      "name": "団野大成",
      "rides": 242,
      "wins": 20,
      "winRate": 8.3,
      "placeRate": 31.4,
      "winRoi": 63.1
    },
    {
      "name": "藤岡佑介",
      "rides": 107,
      "wins": 15,
      "winRate": 14.0,
      "placeRate": 34.6,
      "winRoi": 82.1
    },
    {
      "name": "田口貫太",
      "rides": 279,
      "wins": 14,
      "winRate": 5.0,
      "placeRate": 21.1,
      "winRoi": 163.9
    },
    {
      "name": "鮫島克駿",
      "rides": 198,
      "wins": 14,
      "winRate": 7.1,
      "placeRate": 28.3,
      "winRoi": 40.7
    },
    {
      "name": "吉村誠之",
      "rides": 180,
      "wins": 14,
      "winRate": 7.8,
      "placeRate": 20.0,
      "winRoi": 79.7
    },
    {
      "name": "幸英明",
      "rides": 232,
      "wins": 13,
      "winRate": 5.6,
      "placeRate": 20.7,
      "winRoi": 36.2
    },
    {
      "name": "池添謙一",
      "rides": 134,
      "wins": 13,
      "winRate": 9.7,
      "placeRate": 25.4,
      "winRoi": 125.8
    },
    {
      "name": "ルメール",
      "rides": 54,
      "wins": 13,
      "winRate": 24.1,
      "placeRate": 44.4,
      "winRoi": 78.3
    },
    {
      "name": "岩田康誠",
      "rides": 97,
      "wins": 12,
      "winRate": 12.4,
      "placeRate": 28.9,
      "winRoi": 175.5
    },
    {
      "name": "松若風馬",
      "rides": 151,
      "wins": 10,
      "winRate": 6.6,
      "placeRate": 22.5,
      "winRoi": 58.1
    },
    {
      "name": "北村友一",
      "rides": 127,
      "wins": 10,
      "winRate": 7.9,
      "placeRate": 25.2,
      "winRoi": 70.5
    },
    {
      "name": "浜中俊",
      "rides": 92,
      "wins": 8,
      "winRate": 8.7,
      "placeRate": 22.8,
      "winRoi": 107.6
    },
    {
      "name": "高杉吏麒",
      "rides": 133,
      "wins": 6,
      "winRate": 4.5,
      "placeRate": 22.6,
      "winRoi": 108.0
    },
    {
      "name": "Ｍ．デム",
      "rides": 107,
      "wins": 6,
      "winRate": 5.6,
      "placeRate": 22.4,
      "winRoi": 43.7
    }
  ],
  "kyoto-turf-all": [
    {
      "name": "川田将雅",
      "rides": 172,
      "wins": 46,
      "winRate": 26.7,
      "placeRate": 61.6,
      "winRoi": 83.8
    },
    {
      "name": "岩田望来",
      "rides": 282,
      "wins": 45,
      "winRate": 16.0,
      "placeRate": 35.8,
      "winRoi": 123.2
    },
    {
      "name": "坂井瑠星",
      "rides": 216,
      "wins": 30,
      "winRate": 13.9,
      "placeRate": 32.9,
      "winRoi": 63.2
    },
    {
      "name": "武豊",
      "rides": 186,
      "wins": 26,
      "winRate": 14.0,
      "placeRate": 38.7,
      "winRoi": 64.2
    },
    {
      "name": "西村淳也",
      "rides": 231,
      "wins": 24,
      "winRate": 10.4,
      "placeRate": 38.1,
      "winRoi": 83.3
    },
    {
      "name": "北村友一",
      "rides": 181,
      "wins": 23,
      "winRate": 12.7,
      "placeRate": 28.7,
      "winRoi": 90.2
    },
    {
      "name": "松山弘平",
      "rides": 243,
      "wins": 21,
      "winRate": 8.6,
      "placeRate": 32.5,
      "winRoi": 48.1
    },
    {
      "name": "団野大成",
      "rides": 258,
      "wins": 18,
      "winRate": 7.0,
      "placeRate": 24.4,
      "winRoi": 76.9
    },
    {
      "name": "ルメール",
      "rides": 67,
      "wins": 18,
      "winRate": 26.9,
      "placeRate": 47.8,
      "winRoi": 101.5
    },
    {
      "name": "浜中俊",
      "rides": 128,
      "wins": 17,
      "winRate": 13.3,
      "placeRate": 35.2,
      "winRoi": 169.1
    },
    {
      "name": "鮫島克駿",
      "rides": 214,
      "wins": 16,
      "winRate": 7.5,
      "placeRate": 23.4,
      "winRoi": 44.8
    },
    {
      "name": "池添謙一",
      "rides": 185,
      "wins": 15,
      "winRate": 8.1,
      "placeRate": 27.0,
      "winRoi": 82.6
    },
    {
      "name": "藤岡佑介",
      "rides": 124,
      "wins": 12,
      "winRate": 9.7,
      "placeRate": 30.6,
      "winRoi": 67.8
    },
    {
      "name": "吉村誠之",
      "rides": 189,
      "wins": 10,
      "winRate": 5.3,
      "placeRate": 18.5,
      "winRoi": 54.6
    },
    {
      "name": "菱田裕二",
      "rides": 99,
      "wins": 10,
      "winRate": 10.1,
      "placeRate": 17.2,
      "winRoi": 93.9
    },
    {
      "name": "幸英明",
      "rides": 222,
      "wins": 9,
      "winRate": 4.1,
      "placeRate": 19.8,
      "winRoi": 46.0
    },
    {
      "name": "田口貫太",
      "rides": 248,
      "wins": 8,
      "winRate": 3.2,
      "placeRate": 17.3,
      "winRoi": 69.6
    },
    {
      "name": "高杉吏麒",
      "rides": 139,
      "wins": 8,
      "winRate": 5.8,
      "placeRate": 24.5,
      "winRoi": 24.0
    },
    {
      "name": "松若風馬",
      "rides": 167,
      "wins": 7,
      "winRate": 4.2,
      "placeRate": 13.8,
      "winRoi": 32.8
    },
    {
      "name": "岩田康誠",
      "rides": 97,
      "wins": 7,
      "winRate": 7.2,
      "placeRate": 21.6,
      "winRoi": 69.1
    }
  ],
  "kyoto-turf-sprint": [
    {
      "name": "岩田望来",
      "rides": 79,
      "wins": 12,
      "winRate": 15.2,
      "placeRate": 31.6,
      "winRoi": 205.9
    },
    {
      "name": "北村友一",
      "rides": 59,
      "wins": 10,
      "winRate": 16.9,
      "placeRate": 33.9,
      "winRoi": 77.8
    },
    {
      "name": "幸英明",
      "rides": 75,
      "wins": 7,
      "winRate": 9.3,
      "placeRate": 24.0,
      "winRoi": 126.4
    },
    {
      "name": "松山弘平",
      "rides": 65,
      "wins": 7,
      "winRate": 10.8,
      "placeRate": 29.2,
      "winRoi": 54.3
    },
    {
      "name": "武豊",
      "rides": 55,
      "wins": 7,
      "winRate": 12.7,
      "placeRate": 40.0,
      "winRoi": 58.5
    },
    {
      "name": "団野大成",
      "rides": 89,
      "wins": 6,
      "winRate": 6.7,
      "placeRate": 21.3,
      "winRoi": 60.7
    },
    {
      "name": "鮫島克駿",
      "rides": 72,
      "wins": 6,
      "winRate": 8.3,
      "placeRate": 25.0,
      "winRoi": 37.9
    },
    {
      "name": "田口貫太",
      "rides": 86,
      "wins": 5,
      "winRate": 5.8,
      "placeRate": 15.1,
      "winRoi": 91.4
    },
    {
      "name": "西村淳也",
      "rides": 65,
      "wins": 5,
      "winRate": 7.7,
      "placeRate": 29.2,
      "winRoi": 52.3
    },
    {
      "name": "坂井瑠星",
      "rides": 52,
      "wins": 5,
      "winRate": 9.6,
      "placeRate": 34.6,
      "winRoi": 42.7
    },
    {
      "name": "池添謙一",
      "rides": 58,
      "wins": 4,
      "winRate": 6.9,
      "placeRate": 20.7,
      "winRoi": 60.2
    },
    {
      "name": "吉村誠之",
      "rides": 65,
      "wins": 2,
      "winRate": 3.1,
      "placeRate": 16.9,
      "winRoi": 34.3
    },
    {
      "name": "松若風馬",
      "rides": 61,
      "wins": 1,
      "winRate": 1.6,
      "placeRate": 8.2,
      "winRoi": 10.5
    }
  ],
  "kyoto-turf-mile": [
    {
      "name": "岩田望来",
      "rides": 62,
      "wins": 9,
      "winRate": 14.5,
      "placeRate": 33.9,
      "winRoi": 90.5
    },
    {
      "name": "坂井瑠星",
      "rides": 58,
      "wins": 9,
      "winRate": 15.5,
      "placeRate": 32.8,
      "winRoi": 80.3
    },
    {
      "name": "松山弘平",
      "rides": 57,
      "wins": 6,
      "winRate": 10.5,
      "placeRate": 31.6,
      "winRoi": 81.9
    },
    {
      "name": "西村淳也",
      "rides": 57,
      "wins": 5,
      "winRate": 8.8,
      "placeRate": 43.9,
      "winRoi": 160.9
    },
    {
      "name": "団野大成",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 28.3,
      "winRoi": 162.6
    },
    {
      "name": "田口貫太",
      "rides": 59,
      "wins": 2,
      "winRate": 3.4,
      "placeRate": 28.8,
      "winRoi": 44.6
    },
    {
      "name": "幸英明",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 15.1,
      "winRoi": 6.4
    }
  ],
  "kyoto-turf-middle": [
    {
      "name": "川田将雅",
      "rides": 82,
      "wins": 30,
      "winRate": 36.6,
      "placeRate": 74.4,
      "winRoi": 112.2
    },
    {
      "name": "岩田望来",
      "rides": 116,
      "wins": 23,
      "winRate": 19.8,
      "placeRate": 44.0,
      "winRoi": 109.6
    },
    {
      "name": "坂井瑠星",
      "rides": 83,
      "wins": 13,
      "winRate": 15.7,
      "placeRate": 33.7,
      "winRoi": 71.1
    },
    {
      "name": "武豊",
      "rides": 68,
      "wins": 13,
      "winRate": 19.1,
      "placeRate": 36.8,
      "winRoi": 75.9
    },
    {
      "name": "西村淳也",
      "rides": 89,
      "wins": 12,
      "winRate": 13.5,
      "placeRate": 43.8,
      "winRoi": 61.3
    },
    {
      "name": "松山弘平",
      "rides": 97,
      "wins": 7,
      "winRate": 7.2,
      "placeRate": 37.1,
      "winRoi": 31.5
    },
    {
      "name": "団野大成",
      "rides": 94,
      "wins": 7,
      "winRate": 7.4,
      "placeRate": 29.8,
      "winRoi": 61.8
    },
    {
      "name": "北村友一",
      "rides": 58,
      "wins": 7,
      "winRate": 12.1,
      "placeRate": 34.5,
      "winRoi": 111.7
    },
    {
      "name": "鮫島克駿",
      "rides": 84,
      "wins": 6,
      "winRate": 7.1,
      "placeRate": 27.4,
      "winRoi": 40.5
    },
    {
      "name": "池添謙一",
      "rides": 67,
      "wins": 6,
      "winRate": 9.0,
      "placeRate": 31.3,
      "winRoi": 117.8
    },
    {
      "name": "吉村誠之",
      "rides": 61,
      "wins": 5,
      "winRate": 8.2,
      "placeRate": 19.7,
      "winRoi": 100.8
    },
    {
      "name": "松若風馬",
      "rides": 52,
      "wins": 4,
      "winRate": 7.7,
      "placeRate": 21.2,
      "winRoi": 57.3
    },
    {
      "name": "田口貫太",
      "rides": 81,
      "wins": 1,
      "winRate": 1.2,
      "placeRate": 12.3,
      "winRoi": 83.7
    },
    {
      "name": "幸英明",
      "rides": 71,
      "wins": 1,
      "winRate": 1.4,
      "placeRate": 15.5,
      "winRoi": 5.6
    }
  ],
  "kyoto-dirt-all": [
    {
      "name": "坂井瑠星",
      "rides": 234,
      "wins": 41,
      "winRate": 17.5,
      "placeRate": 37.6,
      "winRoi": 76.7
    },
    {
      "name": "松山弘平",
      "rides": 263,
      "wins": 38,
      "winRate": 14.4,
      "placeRate": 38.0,
      "winRoi": 67.9
    },
    {
      "name": "岩田望来",
      "rides": 293,
      "wins": 35,
      "winRate": 11.9,
      "placeRate": 31.1,
      "winRoi": 61.5
    },
    {
      "name": "川田将雅",
      "rides": 161,
      "wins": 33,
      "winRate": 20.5,
      "placeRate": 50.9,
      "winRoi": 58.4
    },
    {
      "name": "団野大成",
      "rides": 299,
      "wins": 27,
      "winRate": 9.0,
      "placeRate": 28.8,
      "winRoi": 90.7
    },
    {
      "name": "西村淳也",
      "rides": 247,
      "wins": 26,
      "winRate": 10.5,
      "placeRate": 23.5,
      "winRoi": 124.6
    },
    {
      "name": "田口貫太",
      "rides": 387,
      "wins": 24,
      "winRate": 6.2,
      "placeRate": 22.7,
      "winRoi": 131.3
    },
    {
      "name": "武豊",
      "rides": 180,
      "wins": 23,
      "winRate": 12.8,
      "placeRate": 36.7,
      "winRoi": 57.3
    },
    {
      "name": "吉村誠之",
      "rides": 245,
      "wins": 18,
      "winRate": 7.3,
      "placeRate": 18.0,
      "winRoi": 107.1
    },
    {
      "name": "幸英明",
      "rides": 311,
      "wins": 16,
      "winRate": 5.1,
      "placeRate": 19.9,
      "winRoi": 29.7
    },
    {
      "name": "松若風馬",
      "rides": 195,
      "wins": 15,
      "winRate": 7.7,
      "placeRate": 23.1,
      "winRoi": 82.8
    },
    {
      "name": "鮫島克駿",
      "rides": 223,
      "wins": 14,
      "winRate": 6.3,
      "placeRate": 28.7,
      "winRoi": 38.3
    },
    {
      "name": "藤岡佑介",
      "rides": 112,
      "wins": 13,
      "winRate": 11.6,
      "placeRate": 29.5,
      "winRoi": 53.2
    },
    {
      "name": "高杉吏麒",
      "rides": 180,
      "wins": 12,
      "winRate": 6.7,
      "placeRate": 25.0,
      "winRoi": 118.4
    },
    {
      "name": "岩田康誠",
      "rides": 116,
      "wins": 12,
      "winRate": 10.3,
      "placeRate": 24.1,
      "winRoi": 139.0
    },
    {
      "name": "酒井学",
      "rides": 196,
      "wins": 11,
      "winRate": 5.6,
      "placeRate": 16.3,
      "winRoi": 192.0
    },
    {
      "name": "池添謙一",
      "rides": 143,
      "wins": 11,
      "winRate": 7.7,
      "placeRate": 16.1,
      "winRoi": 69.8
    },
    {
      "name": "北村友一",
      "rides": 161,
      "wins": 9,
      "winRate": 5.6,
      "placeRate": 17.4,
      "winRoi": 37.6
    },
    {
      "name": "古川吉洋",
      "rides": 122,
      "wins": 8,
      "winRate": 6.6,
      "placeRate": 14.8,
      "winRoi": 57.5
    },
    {
      "name": "Ｍ．デム",
      "rides": 119,
      "wins": 8,
      "winRate": 6.7,
      "placeRate": 21.0,
      "winRoi": 63.3
    }
  ],
  "kyoto-dirt-sprint": [
    {
      "name": "坂井瑠星",
      "rides": 110,
      "wins": 21,
      "winRate": 19.1,
      "placeRate": 38.2,
      "winRoi": 106.6
    },
    {
      "name": "岩田望来",
      "rides": 141,
      "wins": 18,
      "winRate": 12.8,
      "placeRate": 29.8,
      "winRoi": 75.8
    },
    {
      "name": "川田将雅",
      "rides": 80,
      "wins": 17,
      "winRate": 21.2,
      "placeRate": 53.8,
      "winRoi": 65.4
    },
    {
      "name": "松山弘平",
      "rides": 126,
      "wins": 16,
      "winRate": 12.7,
      "placeRate": 34.9,
      "winRoi": 65.8
    },
    {
      "name": "西村淳也",
      "rides": 121,
      "wins": 15,
      "winRate": 12.4,
      "placeRate": 23.1,
      "winRoi": 183.6
    },
    {
      "name": "団野大成",
      "rides": 151,
      "wins": 14,
      "winRate": 9.3,
      "placeRate": 25.2,
      "winRoi": 116.9
    },
    {
      "name": "田口貫太",
      "rides": 189,
      "wins": 11,
      "winRate": 5.8,
      "placeRate": 20.6,
      "winRoi": 62.7
    },
    {
      "name": "吉村誠之",
      "rides": 126,
      "wins": 9,
      "winRate": 7.1,
      "placeRate": 15.9,
      "winRoi": 143.1
    },
    {
      "name": "松若風馬",
      "rides": 96,
      "wins": 9,
      "winRate": 9.4,
      "placeRate": 22.9,
      "winRoi": 107.7
    },
    {
      "name": "武豊",
      "rides": 87,
      "wins": 8,
      "winRate": 9.2,
      "placeRate": 33.3,
      "winRoi": 58.2
    },
    {
      "name": "酒井学",
      "rides": 91,
      "wins": 7,
      "winRate": 7.7,
      "placeRate": 16.5,
      "winRoi": 205.5
    },
    {
      "name": "鮫島克駿",
      "rides": 109,
      "wins": 6,
      "winRate": 5.5,
      "placeRate": 28.4,
      "winRoi": 35.6
    },
    {
      "name": "北村友一",
      "rides": 92,
      "wins": 6,
      "winRate": 6.5,
      "placeRate": 17.4,
      "winRoi": 39.0
    },
    {
      "name": "高杉吏麒",
      "rides": 92,
      "wins": 6,
      "winRate": 6.5,
      "placeRate": 26.1,
      "winRoi": 75.4
    },
    {
      "name": "古川吉洋",
      "rides": 60,
      "wins": 6,
      "winRate": 10.0,
      "placeRate": 16.7,
      "winRoi": 94.3
    },
    {
      "name": "幸英明",
      "rides": 150,
      "wins": 4,
      "winRate": 2.7,
      "placeRate": 16.7,
      "winRoi": 8.3
    },
    {
      "name": "池添謙一",
      "rides": 76,
      "wins": 4,
      "winRate": 5.3,
      "placeRate": 13.2,
      "winRoi": 13.3
    },
    {
      "name": "浜中俊",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 24.5,
      "winRoi": 65.8
    },
    {
      "name": "藤岡佑介",
      "rides": 50,
      "wins": 4,
      "winRate": 8.0,
      "placeRate": 26.0,
      "winRoi": 31.6
    },
    {
      "name": "Ｍ．デム",
      "rides": 59,
      "wins": 3,
      "winRate": 5.1,
      "placeRate": 20.3,
      "winRoi": 75.9
    }
  ],
  "kyoto-dirt-middle": [
    {
      "name": "松山弘平",
      "rides": 137,
      "wins": 22,
      "winRate": 16.1,
      "placeRate": 40.9,
      "winRoi": 69.9
    },
    {
      "name": "坂井瑠星",
      "rides": 124,
      "wins": 20,
      "winRate": 16.1,
      "placeRate": 37.1,
      "winRoi": 50.2
    },
    {
      "name": "岩田望来",
      "rides": 152,
      "wins": 17,
      "winRate": 11.2,
      "placeRate": 32.2,
      "winRoi": 48.2
    },
    {
      "name": "川田将雅",
      "rides": 81,
      "wins": 16,
      "winRate": 19.8,
      "placeRate": 48.1,
      "winRoi": 51.6
    },
    {
      "name": "武豊",
      "rides": 93,
      "wins": 15,
      "winRate": 16.1,
      "placeRate": 39.8,
      "winRoi": 56.6
    },
    {
      "name": "田口貫太",
      "rides": 198,
      "wins": 13,
      "winRate": 6.6,
      "placeRate": 24.7,
      "winRoi": 196.7
    },
    {
      "name": "団野大成",
      "rides": 148,
      "wins": 13,
      "winRate": 8.8,
      "placeRate": 32.4,
      "winRoi": 64.0
    },
    {
      "name": "幸英明",
      "rides": 161,
      "wins": 12,
      "winRate": 7.5,
      "placeRate": 23.0,
      "winRoi": 49.8
    },
    {
      "name": "西村淳也",
      "rides": 126,
      "wins": 11,
      "winRate": 8.7,
      "placeRate": 23.8,
      "winRoi": 68.0
    },
    {
      "name": "吉村誠之",
      "rides": 119,
      "wins": 9,
      "winRate": 7.6,
      "placeRate": 20.2,
      "winRoi": 68.9
    },
    {
      "name": "岩田康誠",
      "rides": 66,
      "wins": 9,
      "winRate": 13.6,
      "placeRate": 31.8,
      "winRoi": 206.8
    },
    {
      "name": "藤岡佑介",
      "rides": 62,
      "wins": 9,
      "winRate": 14.5,
      "placeRate": 32.3,
      "winRoi": 70.6
    },
    {
      "name": "鮫島克駿",
      "rides": 114,
      "wins": 8,
      "winRate": 7.0,
      "placeRate": 28.9,
      "winRoi": 40.8
    },
    {
      "name": "池添謙一",
      "rides": 67,
      "wins": 7,
      "winRate": 10.4,
      "placeRate": 19.4,
      "winRoi": 133.9
    },
    {
      "name": "松若風馬",
      "rides": 99,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 23.2,
      "winRoi": 58.6
    },
    {
      "name": "高杉吏麒",
      "rides": 88,
      "wins": 6,
      "winRate": 6.8,
      "placeRate": 23.9,
      "winRoi": 163.3
    },
    {
      "name": "Ｍ．デム",
      "rides": 60,
      "wins": 5,
      "winRate": 8.3,
      "placeRate": 21.7,
      "winRoi": 50.8
    },
    {
      "name": "国分優作",
      "rides": 53,
      "wins": 5,
      "winRate": 9.4,
      "placeRate": 17.0,
      "winRoi": 356.8
    },
    {
      "name": "酒井学",
      "rides": 105,
      "wins": 4,
      "winRate": 3.8,
      "placeRate": 16.2,
      "winRoi": 180.3
    },
    {
      "name": "北村友一",
      "rides": 69,
      "wins": 3,
      "winRate": 4.3,
      "placeRate": 17.4,
      "winRoi": 35.8
    }
  ],
  "hanshin-all-all": [
    {
      "name": "岩田望来",
      "rides": 891,
      "wins": 130,
      "winRate": 14.6,
      "placeRate": 36.9,
      "winRoi": 87.0
    },
    {
      "name": "川田将雅",
      "rides": 483,
      "wins": 129,
      "winRate": 26.7,
      "placeRate": 57.3,
      "winRoi": 80.3
    },
    {
      "name": "松山弘平",
      "rides": 754,
      "wins": 93,
      "winRate": 12.3,
      "placeRate": 35.1,
      "winRoi": 64.3
    },
    {
      "name": "坂井瑠星",
      "rides": 622,
      "wins": 91,
      "winRate": 14.6,
      "placeRate": 37.1,
      "winRoi": 79.1
    },
    {
      "name": "幸英明",
      "rides": 826,
      "wins": 67,
      "winRate": 8.1,
      "placeRate": 22.6,
      "winRoi": 93.5
    },
    {
      "name": "武豊",
      "rides": 506,
      "wins": 66,
      "winRate": 13.0,
      "placeRate": 35.6,
      "winRoi": 76.7
    },
    {
      "name": "鮫島克駿",
      "rides": 646,
      "wins": 57,
      "winRate": 8.8,
      "placeRate": 24.9,
      "winRoi": 77.0
    },
    {
      "name": "団野大成",
      "rides": 594,
      "wins": 48,
      "winRate": 8.1,
      "placeRate": 26.1,
      "winRoi": 102.8
    },
    {
      "name": "岩田康誠",
      "rides": 379,
      "wins": 40,
      "winRate": 10.6,
      "placeRate": 27.4,
      "winRoi": 95.8
    },
    {
      "name": "池添謙一",
      "rides": 465,
      "wins": 38,
      "winRate": 8.2,
      "placeRate": 26.5,
      "winRoi": 102.5
    },
    {
      "name": "ルメール",
      "rides": 221,
      "wins": 38,
      "winRate": 17.2,
      "placeRate": 46.6,
      "winRoi": 54.8
    },
    {
      "name": "藤岡佑介",
      "rides": 365,
      "wins": 37,
      "winRate": 10.1,
      "placeRate": 28.8,
      "winRoi": 96.4
    },
    {
      "name": "北村友一",
      "rides": 325,
      "wins": 33,
      "winRate": 10.2,
      "placeRate": 29.5,
      "winRoi": 59.4
    },
    {
      "name": "西村淳也",
      "rides": 421,
      "wins": 27,
      "winRate": 6.4,
      "placeRate": 26.8,
      "winRoi": 51.2
    },
    {
      "name": "吉村誠之",
      "rides": 296,
      "wins": 26,
      "winRate": 8.8,
      "placeRate": 16.9,
      "winRoi": 62.1
    },
    {
      "name": "吉田隼人",
      "rides": 295,
      "wins": 26,
      "winRate": 8.8,
      "placeRate": 26.4,
      "winRoi": 77.1
    },
    {
      "name": "横山典弘",
      "rides": 237,
      "wins": 25,
      "winRate": 10.5,
      "placeRate": 30.4,
      "winRoi": 65.9
    },
    {
      "name": "酒井学",
      "rides": 528,
      "wins": 24,
      "winRate": 4.5,
      "placeRate": 14.0,
      "winRoi": 72.9
    },
    {
      "name": "松若風馬",
      "rides": 599,
      "wins": 22,
      "winRate": 3.7,
      "placeRate": 15.9,
      "winRoi": 39.2
    },
    {
      "name": "菱田裕二",
      "rides": 333,
      "wins": 21,
      "winRate": 6.3,
      "placeRate": 22.5,
      "winRoi": 49.8
    }
  ],
  "hanshin-all-sprint": [
    {
      "name": "川田将雅",
      "rides": 168,
      "wins": 46,
      "winRate": 27.4,
      "placeRate": 54.8,
      "winRoi": 98.5
    },
    {
      "name": "岩田望来",
      "rides": 354,
      "wins": 45,
      "winRate": 12.7,
      "placeRate": 33.1,
      "winRoi": 96.4
    },
    {
      "name": "松山弘平",
      "rides": 299,
      "wins": 38,
      "winRate": 12.7,
      "placeRate": 33.8,
      "winRoi": 79.1
    },
    {
      "name": "坂井瑠星",
      "rides": 245,
      "wins": 32,
      "winRate": 13.1,
      "placeRate": 33.5,
      "winRoi": 83.5
    },
    {
      "name": "団野大成",
      "rides": 262,
      "wins": 26,
      "winRate": 9.9,
      "placeRate": 27.1,
      "winRoi": 158.6
    },
    {
      "name": "幸英明",
      "rides": 326,
      "wins": 25,
      "winRate": 7.7,
      "placeRate": 20.9,
      "winRoi": 64.2
    },
    {
      "name": "鮫島克駿",
      "rides": 276,
      "wins": 23,
      "winRate": 8.3,
      "placeRate": 23.6,
      "winRoi": 42.2
    },
    {
      "name": "武豊",
      "rides": 204,
      "wins": 19,
      "winRate": 9.3,
      "placeRate": 31.4,
      "winRoi": 75.5
    },
    {
      "name": "岩田康誠",
      "rides": 167,
      "wins": 17,
      "winRate": 10.2,
      "placeRate": 28.1,
      "winRoi": 105.2
    },
    {
      "name": "北村友一",
      "rides": 128,
      "wins": 15,
      "winRate": 11.7,
      "placeRate": 31.2,
      "winRoi": 67.2
    },
    {
      "name": "酒井学",
      "rides": 251,
      "wins": 14,
      "winRate": 5.6,
      "placeRate": 14.3,
      "winRoi": 99.6
    },
    {
      "name": "藤岡佑介",
      "rides": 148,
      "wins": 13,
      "winRate": 8.8,
      "placeRate": 24.3,
      "winRoi": 119.1
    },
    {
      "name": "池添謙一",
      "rides": 192,
      "wins": 12,
      "winRate": 6.2,
      "placeRate": 20.8,
      "winRoi": 109.0
    },
    {
      "name": "田口貫太",
      "rides": 183,
      "wins": 10,
      "winRate": 5.5,
      "placeRate": 18.0,
      "winRoi": 76.1
    },
    {
      "name": "菱田裕二",
      "rides": 173,
      "wins": 10,
      "winRate": 5.8,
      "placeRate": 22.0,
      "winRoi": 29.5
    },
    {
      "name": "西村淳也",
      "rides": 172,
      "wins": 10,
      "winRate": 5.8,
      "placeRate": 20.9,
      "winRoi": 23.9
    },
    {
      "name": "吉村誠之",
      "rides": 126,
      "wins": 10,
      "winRate": 7.9,
      "placeRate": 15.9,
      "winRoi": 80.4
    },
    {
      "name": "高杉吏麒",
      "rides": 104,
      "wins": 10,
      "winRate": 9.6,
      "placeRate": 26.0,
      "winRoi": 53.1
    },
    {
      "name": "吉田隼人",
      "rides": 118,
      "wins": 9,
      "winRate": 7.6,
      "placeRate": 21.2,
      "winRoi": 85.8
    },
    {
      "name": "横山典弘",
      "rides": 89,
      "wins": 9,
      "winRate": 10.1,
      "placeRate": 25.8,
      "winRoi": 65.8
    }
  ],
  "hanshin-all-mile": [
    {
      "name": "岩田望来",
      "rides": 105,
      "wins": 18,
      "winRate": 17.1,
      "placeRate": 33.3,
      "winRoi": 63.2
    },
    {
      "name": "川田将雅",
      "rides": 65,
      "wins": 15,
      "winRate": 23.1,
      "placeRate": 52.3,
      "winRoi": 74.9
    },
    {
      "name": "坂井瑠星",
      "rides": 72,
      "wins": 13,
      "winRate": 18.1,
      "placeRate": 41.7,
      "winRoi": 104.2
    },
    {
      "name": "松山弘平",
      "rides": 85,
      "wins": 8,
      "winRate": 9.4,
      "placeRate": 27.1,
      "winRoi": 60.5
    },
    {
      "name": "鮫島克駿",
      "rides": 71,
      "wins": 7,
      "winRate": 9.9,
      "placeRate": 23.9,
      "winRoi": 171.5
    },
    {
      "name": "武豊",
      "rides": 62,
      "wins": 7,
      "winRate": 11.3,
      "placeRate": 35.5,
      "winRoi": 84.8
    },
    {
      "name": "幸英明",
      "rides": 94,
      "wins": 4,
      "winRate": 4.3,
      "placeRate": 21.3,
      "winRoi": 19.6
    },
    {
      "name": "池添謙一",
      "rides": 63,
      "wins": 4,
      "winRate": 6.3,
      "placeRate": 22.2,
      "winRoi": 63.8
    },
    {
      "name": "松若風馬",
      "rides": 60,
      "wins": 3,
      "winRate": 5.0,
      "placeRate": 20.0,
      "winRoi": 95.8
    },
    {
      "name": "酒井学",
      "rides": 51,
      "wins": 3,
      "winRate": 5.9,
      "placeRate": 9.8,
      "winRoi": 114.7
    },
    {
      "name": "団野大成",
      "rides": 58,
      "wins": 2,
      "winRate": 3.4,
      "placeRate": 31.0,
      "winRoi": 8.6
    }
  ],
  "hanshin-all-middle": [
    {
      "name": "川田将雅",
      "rides": 213,
      "wins": 57,
      "winRate": 26.8,
      "placeRate": 61.0,
      "winRoi": 68.7
    },
    {
      "name": "岩田望来",
      "rides": 376,
      "wins": 56,
      "winRate": 14.9,
      "placeRate": 41.2,
      "winRoi": 82.9
    },
    {
      "name": "松山弘平",
      "rides": 325,
      "wins": 40,
      "winRate": 12.3,
      "placeRate": 38.8,
      "winRoi": 51.8
    },
    {
      "name": "坂井瑠星",
      "rides": 268,
      "wins": 39,
      "winRate": 14.6,
      "placeRate": 38.4,
      "winRoi": 63.4
    },
    {
      "name": "武豊",
      "rides": 211,
      "wins": 37,
      "winRate": 17.5,
      "placeRate": 40.8,
      "winRoi": 81.8
    },
    {
      "name": "幸英明",
      "rides": 360,
      "wins": 34,
      "winRate": 9.4,
      "placeRate": 25.0,
      "winRoi": 120.6
    },
    {
      "name": "ルメール",
      "rides": 96,
      "wins": 20,
      "winRate": 20.8,
      "placeRate": 47.9,
      "winRoi": 59.5
    },
    {
      "name": "団野大成",
      "rides": 246,
      "wins": 19,
      "winRate": 7.7,
      "placeRate": 24.0,
      "winRoi": 70.4
    },
    {
      "name": "池添謙一",
      "rides": 181,
      "wins": 19,
      "winRate": 10.5,
      "placeRate": 32.0,
      "winRoi": 120.5
    },
    {
      "name": "岩田康誠",
      "rides": 148,
      "wins": 19,
      "winRate": 12.8,
      "placeRate": 30.4,
      "winRoi": 105.8
    },
    {
      "name": "鮫島克駿",
      "rides": 265,
      "wins": 17,
      "winRate": 6.4,
      "placeRate": 24.5,
      "winRoi": 58.2
    },
    {
      "name": "藤岡佑介",
      "rides": 144,
      "wins": 17,
      "winRate": 11.8,
      "placeRate": 31.9,
      "winRoi": 107.2
    },
    {
      "name": "北村友一",
      "rides": 130,
      "wins": 13,
      "winRate": 10.0,
      "placeRate": 30.8,
      "winRoi": 65.4
    },
    {
      "name": "吉田隼人",
      "rides": 122,
      "wins": 13,
      "winRate": 10.7,
      "placeRate": 30.3,
      "winRoi": 91.6
    },
    {
      "name": "西村淳也",
      "rides": 183,
      "wins": 12,
      "winRate": 6.6,
      "placeRate": 28.4,
      "winRoi": 38.5
    },
    {
      "name": "吉村誠之",
      "rides": 117,
      "wins": 12,
      "winRate": 10.3,
      "placeRate": 16.2,
      "winRoi": 46.8
    },
    {
      "name": "松若風馬",
      "rides": 228,
      "wins": 11,
      "winRate": 4.8,
      "placeRate": 18.9,
      "winRoi": 49.3
    },
    {
      "name": "横山典弘",
      "rides": 99,
      "wins": 10,
      "winRate": 10.1,
      "placeRate": 33.3,
      "winRoi": 76.0
    },
    {
      "name": "富田暁",
      "rides": 117,
      "wins": 9,
      "winRate": 7.7,
      "placeRate": 17.9,
      "winRoi": 136.3
    },
    {
      "name": "小沢大仁",
      "rides": 108,
      "wins": 9,
      "winRate": 8.3,
      "placeRate": 19.4,
      "winRoi": 71.8
    }
  ],
  "hanshin-all-long": [
    {
      "name": "岩田望来",
      "rides": 56,
      "wins": 11,
      "winRate": 19.6,
      "placeRate": 39.3,
      "winRoi": 100.4
    }
  ],
  "hanshin-turf-all": [
    {
      "name": "岩田望来",
      "rides": 429,
      "wins": 70,
      "winRate": 16.3,
      "placeRate": 38.5,
      "winRoi": 115.9
    },
    {
      "name": "川田将雅",
      "rides": 267,
      "wins": 67,
      "winRate": 25.1,
      "placeRate": 57.3,
      "winRoi": 77.9
    },
    {
      "name": "坂井瑠星",
      "rides": 297,
      "wins": 45,
      "winRate": 15.2,
      "placeRate": 39.1,
      "winRoi": 97.3
    },
    {
      "name": "松山弘平",
      "rides": 358,
      "wins": 39,
      "winRate": 10.9,
      "placeRate": 29.6,
      "winRoi": 54.7
    },
    {
      "name": "武豊",
      "rides": 272,
      "wins": 37,
      "winRate": 13.6,
      "placeRate": 33.1,
      "winRoi": 71.8
    },
    {
      "name": "ルメール",
      "rides": 131,
      "wins": 29,
      "winRate": 22.1,
      "placeRate": 52.7,
      "winRoi": 70.7
    },
    {
      "name": "鮫島克駿",
      "rides": 285,
      "wins": 27,
      "winRate": 9.5,
      "placeRate": 24.9,
      "winRoi": 99.1
    },
    {
      "name": "幸英明",
      "rides": 363,
      "wins": 25,
      "winRate": 6.9,
      "placeRate": 20.7,
      "winRoi": 85.6
    },
    {
      "name": "池添謙一",
      "rides": 246,
      "wins": 21,
      "winRate": 8.5,
      "placeRate": 29.3,
      "winRoi": 94.8
    },
    {
      "name": "北村友一",
      "rides": 184,
      "wins": 20,
      "winRate": 10.9,
      "placeRate": 31.0,
      "winRoi": 64.1
    },
    {
      "name": "藤岡佑介",
      "rides": 187,
      "wins": 19,
      "winRate": 10.2,
      "placeRate": 32.1,
      "winRoi": 82.4
    },
    {
      "name": "岩田康誠",
      "rides": 164,
      "wins": 19,
      "winRate": 11.6,
      "placeRate": 31.7,
      "winRoi": 79.4
    },
    {
      "name": "団野大成",
      "rides": 266,
      "wins": 16,
      "winRate": 6.0,
      "placeRate": 29.7,
      "winRoi": 47.8
    },
    {
      "name": "横山典弘",
      "rides": 142,
      "wins": 15,
      "winRate": 10.6,
      "placeRate": 31.0,
      "winRoi": 73.4
    },
    {
      "name": "西村淳也",
      "rides": 207,
      "wins": 14,
      "winRate": 6.8,
      "placeRate": 30.0,
      "winRoi": 74.2
    },
    {
      "name": "菱田裕二",
      "rides": 138,
      "wins": 12,
      "winRate": 8.7,
      "placeRate": 26.8,
      "winRoi": 67.2
    },
    {
      "name": "吉田隼人",
      "rides": 147,
      "wins": 11,
      "winRate": 7.5,
      "placeRate": 21.8,
      "winRoi": 71.5
    },
    {
      "name": "吉村誠之",
      "rides": 132,
      "wins": 11,
      "winRate": 8.3,
      "placeRate": 17.4,
      "winRoi": 53.3
    },
    {
      "name": "酒井学",
      "rides": 202,
      "wins": 10,
      "winRate": 5.0,
      "placeRate": 13.9,
      "winRoi": 68.8
    },
    {
      "name": "古川吉洋",
      "rides": 127,
      "wins": 10,
      "winRate": 7.9,
      "placeRate": 21.3,
      "winRoi": 210.8
    }
  ],
  "hanshin-turf-sprint": [
    {
      "name": "岩田望来",
      "rides": 119,
      "wins": 21,
      "winRate": 17.6,
      "placeRate": 42.0,
      "winRoi": 205.0
    },
    {
      "name": "坂井瑠星",
      "rides": 78,
      "wins": 12,
      "winRate": 15.4,
      "placeRate": 28.2,
      "winRoi": 154.4
    },
    {
      "name": "川田将雅",
      "rides": 55,
      "wins": 12,
      "winRate": 21.8,
      "placeRate": 49.1,
      "winRoi": 103.8
    },
    {
      "name": "松山弘平",
      "rides": 95,
      "wins": 9,
      "winRate": 9.5,
      "placeRate": 27.4,
      "winRoi": 64.9
    },
    {
      "name": "幸英明",
      "rides": 93,
      "wins": 8,
      "winRate": 8.6,
      "placeRate": 24.7,
      "winRoi": 75.4
    },
    {
      "name": "鮫島克駿",
      "rides": 91,
      "wins": 8,
      "winRate": 8.8,
      "placeRate": 22.0,
      "winRoi": 49.0
    },
    {
      "name": "武豊",
      "rides": 75,
      "wins": 8,
      "winRate": 10.7,
      "placeRate": 32.0,
      "winRoi": 68.7
    },
    {
      "name": "団野大成",
      "rides": 83,
      "wins": 6,
      "winRate": 7.2,
      "placeRate": 33.7,
      "winRoi": 35.9
    },
    {
      "name": "酒井学",
      "rides": 75,
      "wins": 5,
      "winRate": 6.7,
      "placeRate": 16.0,
      "winRoi": 87.1
    },
    {
      "name": "西村淳也",
      "rides": 65,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 24.6,
      "winRoi": 19.8
    },
    {
      "name": "池添謙一",
      "rides": 63,
      "wins": 4,
      "winRate": 6.3,
      "placeRate": 19.0,
      "winRoi": 226.8
    },
    {
      "name": "菱田裕二",
      "rides": 61,
      "wins": 4,
      "winRate": 6.6,
      "placeRate": 29.5,
      "winRoi": 22.6
    },
    {
      "name": "藤岡佑介",
      "rides": 54,
      "wins": 4,
      "winRate": 7.4,
      "placeRate": 25.9,
      "winRoi": 108.7
    },
    {
      "name": "松若風馬",
      "rides": 92,
      "wins": 2,
      "winRate": 2.2,
      "placeRate": 16.3,
      "winRoi": 23.8
    },
    {
      "name": "田口貫太",
      "rides": 53,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 7.5,
      "winRoi": 61.3
    }
  ],
  "hanshin-turf-mile": [
    {
      "name": "岩田望来",
      "rides": 105,
      "wins": 18,
      "winRate": 17.1,
      "placeRate": 33.3,
      "winRoi": 63.2
    },
    {
      "name": "川田将雅",
      "rides": 65,
      "wins": 15,
      "winRate": 23.1,
      "placeRate": 52.3,
      "winRoi": 74.9
    },
    {
      "name": "坂井瑠星",
      "rides": 72,
      "wins": 13,
      "winRate": 18.1,
      "placeRate": 41.7,
      "winRoi": 104.2
    },
    {
      "name": "松山弘平",
      "rides": 85,
      "wins": 8,
      "winRate": 9.4,
      "placeRate": 27.1,
      "winRoi": 60.5
    },
    {
      "name": "鮫島克駿",
      "rides": 71,
      "wins": 7,
      "winRate": 9.9,
      "placeRate": 23.9,
      "winRoi": 171.5
    },
    {
      "name": "武豊",
      "rides": 62,
      "wins": 7,
      "winRate": 11.3,
      "placeRate": 35.5,
      "winRoi": 84.8
    },
    {
      "name": "幸英明",
      "rides": 94,
      "wins": 4,
      "winRate": 4.3,
      "placeRate": 21.3,
      "winRoi": 19.6
    },
    {
      "name": "池添謙一",
      "rides": 63,
      "wins": 4,
      "winRate": 6.3,
      "placeRate": 22.2,
      "winRoi": 63.8
    },
    {
      "name": "松若風馬",
      "rides": 60,
      "wins": 3,
      "winRate": 5.0,
      "placeRate": 20.0,
      "winRoi": 95.8
    },
    {
      "name": "酒井学",
      "rides": 51,
      "wins": 3,
      "winRate": 5.9,
      "placeRate": 9.8,
      "winRoi": 114.7
    },
    {
      "name": "団野大成",
      "rides": 58,
      "wins": 2,
      "winRate": 3.4,
      "placeRate": 31.0,
      "winRoi": 8.6
    }
  ],
  "hanshin-turf-middle": [
    {
      "name": "川田将雅",
      "rides": 110,
      "wins": 29,
      "winRate": 26.4,
      "placeRate": 64.5,
      "winRoi": 67.8
    },
    {
      "name": "岩田望来",
      "rides": 149,
      "wins": 20,
      "winRate": 13.4,
      "placeRate": 38.9,
      "winRoi": 87.6
    },
    {
      "name": "武豊",
      "rides": 106,
      "wins": 19,
      "winRate": 17.9,
      "placeRate": 34.0,
      "winRoi": 77.5
    },
    {
      "name": "松山弘平",
      "rides": 133,
      "wins": 15,
      "winRate": 11.3,
      "placeRate": 31.6,
      "winRoi": 40.7
    },
    {
      "name": "ルメール",
      "rides": 54,
      "wins": 14,
      "winRate": 25.9,
      "placeRate": 51.9,
      "winRoi": 80.2
    },
    {
      "name": "坂井瑠星",
      "rides": 110,
      "wins": 13,
      "winRate": 11.8,
      "placeRate": 43.6,
      "winRoi": 46.5
    },
    {
      "name": "池添謙一",
      "rides": 91,
      "wins": 10,
      "winRate": 11.0,
      "placeRate": 38.5,
      "winRoi": 44.9
    },
    {
      "name": "北村友一",
      "rides": 69,
      "wins": 10,
      "winRate": 14.5,
      "placeRate": 39.1,
      "winRoi": 113.0
    },
    {
      "name": "幸英明",
      "rides": 130,
      "wins": 9,
      "winRate": 6.9,
      "placeRate": 17.7,
      "winRoi": 86.1
    },
    {
      "name": "藤岡佑介",
      "rides": 60,
      "wins": 8,
      "winRate": 13.3,
      "placeRate": 38.3,
      "winRoi": 123.5
    },
    {
      "name": "岩田康誠",
      "rides": 52,
      "wins": 8,
      "winRate": 15.4,
      "placeRate": 44.2,
      "winRoi": 96.5
    },
    {
      "name": "団野大成",
      "rides": 97,
      "wins": 7,
      "winRate": 7.2,
      "placeRate": 26.8,
      "winRoi": 77.5
    },
    {
      "name": "西村淳也",
      "rides": 76,
      "wins": 5,
      "winRate": 6.6,
      "placeRate": 27.6,
      "winRoi": 48.2
    },
    {
      "name": "吉田隼人",
      "rides": 55,
      "wins": 5,
      "winRate": 9.1,
      "placeRate": 21.8,
      "winRoi": 141.5
    },
    {
      "name": "横山典弘",
      "rides": 54,
      "wins": 5,
      "winRate": 9.3,
      "placeRate": 33.3,
      "winRoi": 88.7
    },
    {
      "name": "鮫島克駿",
      "rides": 89,
      "wins": 2,
      "winRate": 2.2,
      "placeRate": 22.5,
      "winRoi": 12.4
    },
    {
      "name": "松若風馬",
      "rides": 78,
      "wins": 2,
      "winRate": 2.6,
      "placeRate": 20.5,
      "winRoi": 60.1
    },
    {
      "name": "浜中俊",
      "rides": 63,
      "wins": 1,
      "winRate": 1.6,
      "placeRate": 25.4,
      "winRoi": 17.8
    },
    {
      "name": "酒井学",
      "rides": 51,
      "wins": 1,
      "winRate": 2.0,
      "placeRate": 9.8,
      "winRoi": 15.1
    }
  ],
  "hanshin-turf-long": [
    {
      "name": "岩田望来",
      "rides": 56,
      "wins": 11,
      "winRate": 19.6,
      "placeRate": 39.3,
      "winRoi": 100.4
    }
  ],
  "hanshin-dirt-all": [
    {
      "name": "川田将雅",
      "rides": 216,
      "wins": 62,
      "winRate": 28.7,
      "placeRate": 57.4,
      "winRoi": 83.3
    },
    {
      "name": "岩田望来",
      "rides": 462,
      "wins": 60,
      "winRate": 13.0,
      "placeRate": 35.5,
      "winRoi": 60.3
    },
    {
      "name": "松山弘平",
      "rides": 396,
      "wins": 54,
      "winRate": 13.6,
      "placeRate": 40.2,
      "winRoi": 73.0
    },
    {
      "name": "坂井瑠星",
      "rides": 325,
      "wins": 46,
      "winRate": 14.2,
      "placeRate": 35.4,
      "winRoi": 62.4
    },
    {
      "name": "幸英明",
      "rides": 463,
      "wins": 42,
      "winRate": 9.1,
      "placeRate": 24.2,
      "winRoi": 99.6
    },
    {
      "name": "団野大成",
      "rides": 328,
      "wins": 32,
      "winRate": 9.8,
      "placeRate": 23.2,
      "winRoi": 147.5
    },
    {
      "name": "鮫島克駿",
      "rides": 361,
      "wins": 30,
      "winRate": 8.3,
      "placeRate": 24.9,
      "winRoi": 59.6
    },
    {
      "name": "武豊",
      "rides": 234,
      "wins": 29,
      "winRate": 12.4,
      "placeRate": 38.5,
      "winRoi": 82.4
    },
    {
      "name": "岩田康誠",
      "rides": 215,
      "wins": 21,
      "winRate": 9.8,
      "placeRate": 24.2,
      "winRoi": 108.4
    },
    {
      "name": "藤岡佑介",
      "rides": 178,
      "wins": 18,
      "winRate": 10.1,
      "placeRate": 25.3,
      "winRoi": 111.1
    },
    {
      "name": "池添謙一",
      "rides": 219,
      "wins": 17,
      "winRate": 7.8,
      "placeRate": 23.3,
      "winRoi": 111.2
    },
    {
      "name": "松若風馬",
      "rides": 332,
      "wins": 15,
      "winRate": 4.5,
      "placeRate": 14.2,
      "winRoi": 32.7
    },
    {
      "name": "吉村誠之",
      "rides": 164,
      "wins": 15,
      "winRate": 9.1,
      "placeRate": 16.5,
      "winRoi": 69.1
    },
    {
      "name": "吉田隼人",
      "rides": 148,
      "wins": 15,
      "winRate": 10.1,
      "placeRate": 31.1,
      "winRoi": 82.7
    },
    {
      "name": "酒井学",
      "rides": 326,
      "wins": 14,
      "winRate": 4.3,
      "placeRate": 14.1,
      "winRoi": 75.4
    },
    {
      "name": "高杉吏麒",
      "rides": 118,
      "wins": 14,
      "winRate": 11.9,
      "placeRate": 28.8,
      "winRoi": 101.4
    },
    {
      "name": "西村淳也",
      "rides": 214,
      "wins": 13,
      "winRate": 6.1,
      "placeRate": 23.8,
      "winRoi": 29.0
    },
    {
      "name": "北村友一",
      "rides": 141,
      "wins": 13,
      "winRate": 9.2,
      "placeRate": 27.7,
      "winRoi": 53.3
    },
    {
      "name": "田口貫太",
      "rides": 244,
      "wins": 12,
      "winRate": 4.9,
      "placeRate": 18.9,
      "winRoi": 50.8
    },
    {
      "name": "浜中俊",
      "rides": 156,
      "wins": 12,
      "winRate": 7.7,
      "placeRate": 19.9,
      "winRoi": 95.7
    }
  ],
  "hanshin-dirt-sprint": [
    {
      "name": "川田将雅",
      "rides": 113,
      "wins": 34,
      "winRate": 30.1,
      "placeRate": 57.5,
      "winRoi": 95.8
    },
    {
      "name": "松山弘平",
      "rides": 204,
      "wins": 29,
      "winRate": 14.2,
      "placeRate": 36.8,
      "winRoi": 85.7
    },
    {
      "name": "岩田望来",
      "rides": 235,
      "wins": 24,
      "winRate": 10.2,
      "placeRate": 28.5,
      "winRoi": 41.3
    },
    {
      "name": "団野大成",
      "rides": 179,
      "wins": 20,
      "winRate": 11.2,
      "placeRate": 24.0,
      "winRoi": 215.5
    },
    {
      "name": "坂井瑠星",
      "rides": 167,
      "wins": 20,
      "winRate": 12.0,
      "placeRate": 35.9,
      "winRoi": 50.4
    },
    {
      "name": "幸英明",
      "rides": 233,
      "wins": 17,
      "winRate": 7.3,
      "placeRate": 19.3,
      "winRoi": 59.7
    },
    {
      "name": "鮫島克駿",
      "rides": 185,
      "wins": 15,
      "winRate": 8.1,
      "placeRate": 24.3,
      "winRoi": 38.9
    },
    {
      "name": "武豊",
      "rides": 129,
      "wins": 11,
      "winRate": 8.5,
      "placeRate": 31.0,
      "winRoi": 79.5
    },
    {
      "name": "岩田康誠",
      "rides": 119,
      "wins": 10,
      "winRate": 8.4,
      "placeRate": 25.2,
      "winRoi": 106.4
    },
    {
      "name": "北村友一",
      "rides": 80,
      "wins": 10,
      "winRate": 12.5,
      "placeRate": 32.5,
      "winRoi": 85.2
    },
    {
      "name": "高杉吏麒",
      "rides": 74,
      "wins": 10,
      "winRate": 13.5,
      "placeRate": 29.7,
      "winRoi": 74.6
    },
    {
      "name": "酒井学",
      "rides": 176,
      "wins": 9,
      "winRate": 5.1,
      "placeRate": 13.6,
      "winRoi": 104.9
    },
    {
      "name": "田口貫太",
      "rides": 130,
      "wins": 9,
      "winRate": 6.9,
      "placeRate": 22.3,
      "winRoi": 82.2
    },
    {
      "name": "藤岡佑介",
      "rides": 94,
      "wins": 9,
      "winRate": 9.6,
      "placeRate": 23.4,
      "winRoi": 125.1
    },
    {
      "name": "池添謙一",
      "rides": 129,
      "wins": 8,
      "winRate": 6.2,
      "placeRate": 21.7,
      "winRoi": 51.4
    },
    {
      "name": "吉田隼人",
      "rides": 81,
      "wins": 7,
      "winRate": 8.6,
      "placeRate": 25.9,
      "winRoi": 109.1
    },
    {
      "name": "松若風馬",
      "rides": 182,
      "wins": 6,
      "winRate": 3.3,
      "placeRate": 11.0,
      "winRoi": 23.6
    },
    {
      "name": "川須栄彦",
      "rides": 117,
      "wins": 6,
      "winRate": 5.1,
      "placeRate": 17.9,
      "winRoi": 61.5
    },
    {
      "name": "菱田裕二",
      "rides": 112,
      "wins": 6,
      "winRate": 5.4,
      "placeRate": 17.9,
      "winRoi": 33.2
    },
    {
      "name": "西村淳也",
      "rides": 107,
      "wins": 6,
      "winRate": 5.6,
      "placeRate": 18.7,
      "winRoi": 26.4
    }
  ],
  "hanshin-dirt-middle": [
    {
      "name": "岩田望来",
      "rides": 227,
      "wins": 36,
      "winRate": 15.9,
      "placeRate": 42.7,
      "winRoi": 79.9
    },
    {
      "name": "川田将雅",
      "rides": 103,
      "wins": 28,
      "winRate": 27.2,
      "placeRate": 57.3,
      "winRoi": 69.6
    },
    {
      "name": "坂井瑠星",
      "rides": 158,
      "wins": 26,
      "winRate": 16.5,
      "placeRate": 34.8,
      "winRoi": 75.2
    },
    {
      "name": "幸英明",
      "rides": 230,
      "wins": 25,
      "winRate": 10.9,
      "placeRate": 29.1,
      "winRoi": 140.0
    },
    {
      "name": "松山弘平",
      "rides": 192,
      "wins": 25,
      "winRate": 13.0,
      "placeRate": 43.8,
      "winRoi": 59.5
    },
    {
      "name": "武豊",
      "rides": 105,
      "wins": 18,
      "winRate": 17.1,
      "placeRate": 47.6,
      "winRoi": 86.1
    },
    {
      "name": "鮫島克駿",
      "rides": 176,
      "wins": 15,
      "winRate": 8.5,
      "placeRate": 25.6,
      "winRoi": 81.4
    },
    {
      "name": "団野大成",
      "rides": 149,
      "wins": 12,
      "winRate": 8.1,
      "placeRate": 22.1,
      "winRoi": 65.8
    },
    {
      "name": "岩田康誠",
      "rides": 96,
      "wins": 11,
      "winRate": 11.5,
      "placeRate": 22.9,
      "winRoi": 110.8
    },
    {
      "name": "吉村誠之",
      "rides": 75,
      "wins": 10,
      "winRate": 13.3,
      "placeRate": 20.0,
      "winRoi": 62.4
    },
    {
      "name": "松若風馬",
      "rides": 150,
      "wins": 9,
      "winRate": 6.0,
      "placeRate": 18.0,
      "winRoi": 43.7
    },
    {
      "name": "池添謙一",
      "rides": 90,
      "wins": 9,
      "winRate": 10.0,
      "placeRate": 25.6,
      "winRoi": 196.9
    },
    {
      "name": "藤岡佑介",
      "rides": 84,
      "wins": 9,
      "winRate": 10.7,
      "placeRate": 27.4,
      "winRoi": 95.5
    },
    {
      "name": "小沢大仁",
      "rides": 87,
      "wins": 8,
      "winRate": 9.2,
      "placeRate": 19.5,
      "winRoi": 75.5
    },
    {
      "name": "吉田隼人",
      "rides": 67,
      "wins": 8,
      "winRate": 11.9,
      "placeRate": 37.3,
      "winRoi": 50.7
    },
    {
      "name": "西村淳也",
      "rides": 107,
      "wins": 7,
      "winRate": 6.5,
      "placeRate": 29.0,
      "winRoi": 31.7
    },
    {
      "name": "浜中俊",
      "rides": 78,
      "wins": 7,
      "winRate": 9.0,
      "placeRate": 19.2,
      "winRoi": 151.9
    },
    {
      "name": "藤懸貴志",
      "rides": 73,
      "wins": 6,
      "winRate": 8.2,
      "placeRate": 20.5,
      "winRoi": 97.9
    },
    {
      "name": "酒井学",
      "rides": 150,
      "wins": 5,
      "winRate": 3.3,
      "placeRate": 14.7,
      "winRoi": 40.8
    },
    {
      "name": "富田暁",
      "rides": 83,
      "wins": 5,
      "winRate": 6.0,
      "placeRate": 18.1,
      "winRoi": 62.2
    }
  ],
  "kokura-all-all": [
    {
      "name": "松山弘平",
      "rides": 256,
      "wins": 48,
      "winRate": 18.8,
      "placeRate": 39.5,
      "winRoi": 93.9
    },
    {
      "name": "西村淳也",
      "rides": 379,
      "wins": 42,
      "winRate": 11.1,
      "placeRate": 28.5,
      "winRoi": 79.3
    },
    {
      "name": "丹内祐次",
      "rides": 437,
      "wins": 41,
      "winRate": 9.4,
      "placeRate": 30.0,
      "winRoi": 73.5
    },
    {
      "name": "川田将雅",
      "rides": 116,
      "wins": 34,
      "winRate": 29.3,
      "placeRate": 61.2,
      "winRoi": 100.3
    },
    {
      "name": "幸英明",
      "rides": 352,
      "wins": 33,
      "winRate": 9.4,
      "placeRate": 24.4,
      "winRoi": 78.8
    },
    {
      "name": "吉田隼人",
      "rides": 247,
      "wins": 32,
      "winRate": 13.0,
      "placeRate": 31.6,
      "winRoi": 95.9
    },
    {
      "name": "松若風馬",
      "rides": 330,
      "wins": 31,
      "winRate": 9.4,
      "placeRate": 23.3,
      "winRoi": 93.3
    },
    {
      "name": "鮫島克駿",
      "rides": 313,
      "wins": 26,
      "winRate": 8.3,
      "placeRate": 27.5,
      "winRoi": 94.6
    },
    {
      "name": "浜中俊",
      "rides": 194,
      "wins": 24,
      "winRate": 12.4,
      "placeRate": 33.0,
      "winRoi": 70.7
    },
    {
      "name": "団野大成",
      "rides": 235,
      "wins": 21,
      "winRate": 8.9,
      "placeRate": 28.5,
      "winRoi": 86.3
    },
    {
      "name": "斎藤新",
      "rides": 330,
      "wins": 20,
      "winRate": 6.1,
      "placeRate": 19.1,
      "winRoi": 72.1
    },
    {
      "name": "佐々木大",
      "rides": 173,
      "wins": 20,
      "winRate": 11.6,
      "placeRate": 26.6,
      "winRoi": 64.3
    },
    {
      "name": "藤岡佑介",
      "rides": 162,
      "wins": 20,
      "winRate": 12.3,
      "placeRate": 27.8,
      "winRoi": 129.9
    },
    {
      "name": "坂井瑠星",
      "rides": 116,
      "wins": 19,
      "winRate": 16.4,
      "placeRate": 39.7,
      "winRoi": 81.4
    },
    {
      "name": "菱田裕二",
      "rides": 240,
      "wins": 16,
      "winRate": 6.7,
      "placeRate": 22.5,
      "winRoi": 63.0
    },
    {
      "name": "西塚洸二",
      "rides": 145,
      "wins": 16,
      "winRate": 11.0,
      "placeRate": 19.3,
      "winRoi": 134.3
    },
    {
      "name": "富田暁",
      "rides": 354,
      "wins": 15,
      "winRate": 4.2,
      "placeRate": 16.4,
      "winRoi": 76.6
    },
    {
      "name": "小沢大仁",
      "rides": 287,
      "wins": 15,
      "winRate": 5.2,
      "placeRate": 17.8,
      "winRoi": 83.7
    },
    {
      "name": "横山和生",
      "rides": 104,
      "wins": 14,
      "winRate": 13.5,
      "placeRate": 32.7,
      "winRoi": 77.1
    },
    {
      "name": "丸山元気",
      "rides": 203,
      "wins": 13,
      "winRate": 6.4,
      "placeRate": 24.6,
      "winRoi": 64.3
    }
  ],
  "kokura-all-sprint": [
    {
      "name": "松山弘平",
      "rides": 95,
      "wins": 19,
      "winRate": 20.0,
      "placeRate": 37.9,
      "winRoi": 120.1
    },
    {
      "name": "松若風馬",
      "rides": 126,
      "wins": 15,
      "winRate": 11.9,
      "placeRate": 23.8,
      "winRoi": 139.4
    },
    {
      "name": "幸英明",
      "rides": 136,
      "wins": 14,
      "winRate": 10.3,
      "placeRate": 25.7,
      "winRoi": 113.5
    },
    {
      "name": "鮫島克駿",
      "rides": 109,
      "wins": 11,
      "winRate": 10.1,
      "placeRate": 26.6,
      "winRoi": 95.0
    },
    {
      "name": "団野大成",
      "rides": 88,
      "wins": 11,
      "winRate": 12.5,
      "placeRate": 28.4,
      "winRoi": 108.2
    },
    {
      "name": "丹内祐次",
      "rides": 159,
      "wins": 10,
      "winRate": 6.3,
      "placeRate": 30.2,
      "winRoi": 64.3
    },
    {
      "name": "西村淳也",
      "rides": 144,
      "wins": 9,
      "winRate": 6.2,
      "placeRate": 21.5,
      "winRoi": 40.9
    },
    {
      "name": "浜中俊",
      "rides": 66,
      "wins": 8,
      "winRate": 12.1,
      "placeRate": 27.3,
      "winRoi": 75.9
    },
    {
      "name": "吉田隼人",
      "rides": 87,
      "wins": 7,
      "winRate": 8.0,
      "placeRate": 23.0,
      "winRoi": 68.0
    },
    {
      "name": "富田暁",
      "rides": 133,
      "wins": 6,
      "winRate": 4.5,
      "placeRate": 12.8,
      "winRoi": 78.3
    },
    {
      "name": "小沢大仁",
      "rides": 112,
      "wins": 6,
      "winRate": 5.4,
      "placeRate": 19.6,
      "winRoi": 59.0
    },
    {
      "name": "秋山稔樹",
      "rides": 95,
      "wins": 6,
      "winRate": 6.3,
      "placeRate": 24.2,
      "winRoi": 140.7
    },
    {
      "name": "菊沢一樹",
      "rides": 92,
      "wins": 6,
      "winRate": 6.5,
      "placeRate": 19.6,
      "winRoi": 232.8
    },
    {
      "name": "丸山元気",
      "rides": 70,
      "wins": 6,
      "winRate": 8.6,
      "placeRate": 30.0,
      "winRoi": 68.0
    },
    {
      "name": "藤岡佑介",
      "rides": 53,
      "wins": 6,
      "winRate": 11.3,
      "placeRate": 30.2,
      "winRoi": 90.4
    },
    {
      "name": "斎藤新",
      "rides": 118,
      "wins": 5,
      "winRate": 4.2,
      "placeRate": 15.3,
      "winRoi": 83.4
    },
    {
      "name": "松本大輝",
      "rides": 108,
      "wins": 5,
      "winRate": 4.6,
      "placeRate": 17.6,
      "winRoi": 54.7
    },
    {
      "name": "亀田温心",
      "rides": 86,
      "wins": 5,
      "winRate": 5.8,
      "placeRate": 12.8,
      "winRoi": 90.6
    },
    {
      "name": "今村聖奈",
      "rides": 67,
      "wins": 5,
      "winRate": 7.5,
      "placeRate": 20.9,
      "winRoi": 42.4
    },
    {
      "name": "佐々木大",
      "rides": 64,
      "wins": 5,
      "winRate": 7.8,
      "placeRate": 14.1,
      "winRoi": 78.8
    }
  ],
  "kokura-all-middle": [
    {
      "name": "西村淳也",
      "rides": 206,
      "wins": 30,
      "winRate": 14.6,
      "placeRate": 34.5,
      "winRoi": 107.7
    },
    {
      "name": "松山弘平",
      "rides": 147,
      "wins": 27,
      "winRate": 18.4,
      "placeRate": 40.1,
      "winRoi": 81.2
    },
    {
      "name": "丹内祐次",
      "rides": 228,
      "wins": 25,
      "winRate": 11.0,
      "placeRate": 28.9,
      "winRoi": 79.5
    },
    {
      "name": "川田将雅",
      "rides": 76,
      "wins": 21,
      "winRate": 27.6,
      "placeRate": 60.5,
      "winRoi": 82.8
    },
    {
      "name": "吉田隼人",
      "rides": 139,
      "wins": 20,
      "winRate": 14.4,
      "placeRate": 35.3,
      "winRoi": 72.8
    },
    {
      "name": "幸英明",
      "rides": 195,
      "wins": 17,
      "winRate": 8.7,
      "placeRate": 23.6,
      "winRoi": 58.9
    },
    {
      "name": "斎藤新",
      "rides": 183,
      "wins": 15,
      "winRate": 8.2,
      "placeRate": 20.2,
      "winRoi": 76.3
    },
    {
      "name": "浜中俊",
      "rides": 111,
      "wins": 15,
      "winRate": 13.5,
      "placeRate": 37.8,
      "winRoi": 76.5
    },
    {
      "name": "松若風馬",
      "rides": 186,
      "wins": 14,
      "winRate": 7.5,
      "placeRate": 23.1,
      "winRoi": 63.2
    },
    {
      "name": "鮫島克駿",
      "rides": 177,
      "wins": 14,
      "winRate": 7.9,
      "placeRate": 27.7,
      "winRoi": 106.9
    },
    {
      "name": "西塚洸二",
      "rides": 85,
      "wins": 13,
      "winRate": 15.3,
      "placeRate": 25.9,
      "winRoi": 194.2
    },
    {
      "name": "佐々木大",
      "rides": 94,
      "wins": 12,
      "winRate": 12.8,
      "placeRate": 31.9,
      "winRoi": 48.0
    },
    {
      "name": "藤岡佑介",
      "rides": 90,
      "wins": 11,
      "winRate": 12.2,
      "placeRate": 26.7,
      "winRoi": 162.7
    },
    {
      "name": "菱田裕二",
      "rides": 132,
      "wins": 10,
      "winRate": 7.6,
      "placeRate": 22.7,
      "winRoi": 61.4
    },
    {
      "name": "小沢大仁",
      "rides": 158,
      "wins": 9,
      "winRate": 5.7,
      "placeRate": 16.5,
      "winRoi": 110.3
    },
    {
      "name": "富田暁",
      "rides": 189,
      "wins": 8,
      "winRate": 4.2,
      "placeRate": 18.0,
      "winRoi": 68.6
    },
    {
      "name": "団野大成",
      "rides": 135,
      "wins": 8,
      "winRate": 5.9,
      "placeRate": 28.1,
      "winRoi": 63.6
    },
    {
      "name": "坂井瑠星",
      "rides": 67,
      "wins": 8,
      "winRate": 11.9,
      "placeRate": 34.3,
      "winRoi": 75.7
    },
    {
      "name": "角田大和",
      "rides": 132,
      "wins": 7,
      "winRate": 5.3,
      "placeRate": 23.5,
      "winRoi": 48.9
    },
    {
      "name": "横山和生",
      "rides": 57,
      "wins": 7,
      "winRate": 12.3,
      "placeRate": 38.6,
      "winRoi": 44.9
    }
  ],
  "kokura-all-long": [
    {
      "name": "丹内祐次",
      "rides": 50,
      "wins": 6,
      "winRate": 12.0,
      "placeRate": 34.0,
      "winRoi": 75.4
    }
  ],
  "kokura-turf-all": [
    {
      "name": "丹内祐次",
      "rides": 286,
      "wins": 30,
      "winRate": 10.5,
      "placeRate": 34.6,
      "winRoi": 87.9
    },
    {
      "name": "松山弘平",
      "rides": 150,
      "wins": 30,
      "winRate": 20.0,
      "placeRate": 41.3,
      "winRoi": 88.4
    },
    {
      "name": "西村淳也",
      "rides": 229,
      "wins": 28,
      "winRate": 12.2,
      "placeRate": 28.4,
      "winRoi": 94.8
    },
    {
      "name": "川田将雅",
      "rides": 79,
      "wins": 26,
      "winRate": 32.9,
      "placeRate": 62.0,
      "winRoi": 106.2
    },
    {
      "name": "吉田隼人",
      "rides": 168,
      "wins": 22,
      "winRate": 13.1,
      "placeRate": 31.5,
      "winRoi": 121.7
    },
    {
      "name": "松若風馬",
      "rides": 190,
      "wins": 20,
      "winRate": 10.5,
      "placeRate": 20.5,
      "winRoi": 114.4
    },
    {
      "name": "藤岡佑介",
      "rides": 117,
      "wins": 18,
      "winRate": 15.4,
      "placeRate": 30.8,
      "winRoi": 165.6
    },
    {
      "name": "幸英明",
      "rides": 211,
      "wins": 16,
      "winRate": 7.6,
      "placeRate": 21.8,
      "winRoi": 66.6
    },
    {
      "name": "坂井瑠星",
      "rides": 76,
      "wins": 15,
      "winRate": 19.7,
      "placeRate": 47.4,
      "winRoi": 103.2
    },
    {
      "name": "鮫島克駿",
      "rides": 187,
      "wins": 13,
      "winRate": 7.0,
      "placeRate": 28.3,
      "winRoi": 121.8
    },
    {
      "name": "団野大成",
      "rides": 144,
      "wins": 13,
      "winRate": 9.0,
      "placeRate": 29.2,
      "winRoi": 89.0
    },
    {
      "name": "佐々木大",
      "rides": 101,
      "wins": 13,
      "winRate": 12.9,
      "placeRate": 25.7,
      "winRoi": 71.7
    },
    {
      "name": "浜中俊",
      "rides": 126,
      "wins": 12,
      "winRate": 9.5,
      "placeRate": 31.0,
      "winRoi": 53.7
    },
    {
      "name": "横山和生",
      "rides": 65,
      "wins": 11,
      "winRate": 16.9,
      "placeRate": 36.9,
      "winRoi": 103.8
    },
    {
      "name": "斎藤新",
      "rides": 199,
      "wins": 10,
      "winRate": 5.0,
      "placeRate": 19.6,
      "winRoi": 74.7
    },
    {
      "name": "丸山元気",
      "rides": 139,
      "wins": 10,
      "winRate": 7.2,
      "placeRate": 23.7,
      "winRoi": 85.0
    },
    {
      "name": "菱田裕二",
      "rides": 141,
      "wins": 9,
      "winRate": 6.4,
      "placeRate": 22.0,
      "winRoi": 73.9
    },
    {
      "name": "西塚洸二",
      "rides": 80,
      "wins": 8,
      "winRate": 10.0,
      "placeRate": 18.8,
      "winRoi": 137.6
    },
    {
      "name": "富田暁",
      "rides": 224,
      "wins": 7,
      "winRate": 3.1,
      "placeRate": 14.7,
      "winRoi": 47.3
    },
    {
      "name": "松本大輝",
      "rides": 114,
      "wins": 7,
      "winRate": 6.1,
      "placeRate": 15.8,
      "winRoi": 65.9
    }
  ],
  "kokura-turf-sprint": [
    {
      "name": "松山弘平",
      "rides": 69,
      "wins": 13,
      "winRate": 18.8,
      "placeRate": 37.7,
      "winRoi": 105.2
    },
    {
      "name": "松若風馬",
      "rides": 90,
      "wins": 12,
      "winRate": 13.3,
      "placeRate": 21.1,
      "winRoi": 173.9
    },
    {
      "name": "幸英明",
      "rides": 101,
      "wins": 10,
      "winRate": 9.9,
      "placeRate": 25.7,
      "winRoi": 107.0
    },
    {
      "name": "丹内祐次",
      "rides": 121,
      "wins": 8,
      "winRate": 6.6,
      "placeRate": 30.6,
      "winRoi": 66.3
    },
    {
      "name": "団野大成",
      "rides": 68,
      "wins": 8,
      "winRate": 11.8,
      "placeRate": 27.9,
      "winRoi": 119.0
    },
    {
      "name": "西村淳也",
      "rides": 104,
      "wins": 7,
      "winRate": 6.7,
      "placeRate": 19.2,
      "winRoi": 44.9
    },
    {
      "name": "鮫島克駿",
      "rides": 84,
      "wins": 7,
      "winRate": 8.3,
      "placeRate": 27.4,
      "winRoi": 80.0
    },
    {
      "name": "吉田隼人",
      "rides": 72,
      "wins": 7,
      "winRate": 9.7,
      "placeRate": 26.4,
      "winRoi": 82.2
    },
    {
      "name": "富田暁",
      "rides": 106,
      "wins": 5,
      "winRate": 4.7,
      "placeRate": 12.3,
      "winRoi": 94.3
    },
    {
      "name": "浜中俊",
      "rides": 54,
      "wins": 5,
      "winRate": 9.3,
      "placeRate": 25.9,
      "winRoi": 71.1
    },
    {
      "name": "小沢大仁",
      "rides": 79,
      "wins": 4,
      "winRate": 5.1,
      "placeRate": 12.7,
      "winRoi": 77.3
    },
    {
      "name": "秋山稔樹",
      "rides": 65,
      "wins": 4,
      "winRate": 6.2,
      "placeRate": 23.1,
      "winRoi": 191.4
    },
    {
      "name": "丸山元気",
      "rides": 53,
      "wins": 4,
      "winRate": 7.5,
      "placeRate": 28.3,
      "winRoi": 72.3
    },
    {
      "name": "国分恭介",
      "rides": 52,
      "wins": 4,
      "winRate": 7.7,
      "placeRate": 21.2,
      "winRoi": 70.8
    },
    {
      "name": "斎藤新",
      "rides": 89,
      "wins": 3,
      "winRate": 3.4,
      "placeRate": 16.9,
      "winRoi": 102.5
    },
    {
      "name": "角田大和",
      "rides": 77,
      "wins": 3,
      "winRate": 3.9,
      "placeRate": 9.1,
      "winRoi": 64.5
    },
    {
      "name": "亀田温心",
      "rides": 67,
      "wins": 3,
      "winRate": 4.5,
      "placeRate": 10.4,
      "winRoi": 49.4
    },
    {
      "name": "菱田裕二",
      "rides": 73,
      "wins": 2,
      "winRate": 2.7,
      "placeRate": 15.1,
      "winRoi": 60.4
    },
    {
      "name": "永島まな",
      "rides": 69,
      "wins": 2,
      "winRate": 2.9,
      "placeRate": 8.7,
      "winRoi": 14.9
    },
    {
      "name": "松本大輝",
      "rides": 67,
      "wins": 2,
      "winRate": 3.0,
      "placeRate": 11.9,
      "winRoi": 31.3
    }
  ],
  "kokura-turf-middle": [
    {
      "name": "西村淳也",
      "rides": 102,
      "wins": 19,
      "winRate": 18.6,
      "placeRate": 40.2,
      "winRoi": 149.8
    },
    {
      "name": "丹内祐次",
      "rides": 124,
      "wins": 18,
      "winRate": 14.5,
      "placeRate": 38.7,
      "winRoi": 117.4
    },
    {
      "name": "松山弘平",
      "rides": 67,
      "wins": 15,
      "winRate": 22.4,
      "placeRate": 44.8,
      "winRoi": 79.0
    },
    {
      "name": "吉田隼人",
      "rides": 77,
      "wins": 11,
      "winRate": 14.3,
      "placeRate": 33.8,
      "winRoi": 93.4
    },
    {
      "name": "藤岡佑介",
      "rides": 52,
      "wins": 9,
      "winRate": 17.3,
      "placeRate": 32.7,
      "winRoi": 249.4
    },
    {
      "name": "斎藤新",
      "rides": 88,
      "wins": 7,
      "winRate": 8.0,
      "placeRate": 21.6,
      "winRoi": 65.2
    },
    {
      "name": "松若風馬",
      "rides": 84,
      "wins": 7,
      "winRate": 8.3,
      "placeRate": 20.2,
      "winRoi": 63.2
    },
    {
      "name": "浜中俊",
      "rides": 59,
      "wins": 7,
      "winRate": 11.9,
      "placeRate": 39.0,
      "winRoi": 49.5
    },
    {
      "name": "菱田裕二",
      "rides": 56,
      "wins": 6,
      "winRate": 10.7,
      "placeRate": 26.8,
      "winRoi": 99.8
    },
    {
      "name": "幸英明",
      "rides": 92,
      "wins": 5,
      "winRate": 5.4,
      "placeRate": 18.5,
      "winRoi": 28.5
    },
    {
      "name": "鮫島克駿",
      "rides": 82,
      "wins": 5,
      "winRate": 6.1,
      "placeRate": 28.0,
      "winRoi": 191.6
    },
    {
      "name": "丸山元気",
      "rides": 65,
      "wins": 5,
      "winRate": 7.7,
      "placeRate": 23.1,
      "winRoi": 68.5
    },
    {
      "name": "団野大成",
      "rides": 66,
      "wins": 3,
      "winRate": 4.5,
      "placeRate": 30.3,
      "winRoi": 38.9
    },
    {
      "name": "富田暁",
      "rides": 91,
      "wins": 2,
      "winRate": 2.2,
      "placeRate": 16.5,
      "winRoi": 6.5
    },
    {
      "name": "小沢大仁",
      "rides": 62,
      "wins": 2,
      "winRate": 3.2,
      "placeRate": 16.1,
      "winRoi": 131.0
    },
    {
      "name": "荻野極",
      "rides": 58,
      "wins": 2,
      "winRate": 3.4,
      "placeRate": 6.9,
      "winRoi": 23.1
    },
    {
      "name": "黛弘人",
      "rides": 52,
      "wins": 1,
      "winRate": 1.9,
      "placeRate": 17.3,
      "winRoi": 10.6
    },
    {
      "name": "菊沢一樹",
      "rides": 50,
      "wins": 0,
      "winRate": 0.0,
      "placeRate": 16.0,
      "winRoi": 0.0
    }
  ],
  "kokura-dirt-all": [
    {
      "name": "松山弘平",
      "rides": 106,
      "wins": 18,
      "winRate": 17.0,
      "placeRate": 36.8,
      "winRoi": 101.8
    },
    {
      "name": "幸英明",
      "rides": 141,
      "wins": 17,
      "winRate": 12.1,
      "placeRate": 28.4,
      "winRoi": 96.9
    },
    {
      "name": "西村淳也",
      "rides": 150,
      "wins": 14,
      "winRate": 9.3,
      "placeRate": 28.7,
      "winRoi": 55.7
    },
    {
      "name": "鮫島克駿",
      "rides": 126,
      "wins": 13,
      "winRate": 10.3,
      "placeRate": 26.2,
      "winRoi": 54.4
    },
    {
      "name": "浜中俊",
      "rides": 68,
      "wins": 12,
      "winRate": 17.6,
      "placeRate": 36.8,
      "winRoi": 102.4
    },
    {
      "name": "丹内祐次",
      "rides": 151,
      "wins": 11,
      "winRate": 7.3,
      "placeRate": 21.2,
      "winRoi": 46.3
    },
    {
      "name": "松若風馬",
      "rides": 140,
      "wins": 11,
      "winRate": 7.9,
      "placeRate": 27.1,
      "winRoi": 64.7
    },
    {
      "name": "斎藤新",
      "rides": 131,
      "wins": 10,
      "winRate": 7.6,
      "placeRate": 18.3,
      "winRoi": 68.2
    },
    {
      "name": "吉田隼人",
      "rides": 79,
      "wins": 10,
      "winRate": 12.7,
      "placeRate": 31.6,
      "winRoi": 41.0
    },
    {
      "name": "小沢大仁",
      "rides": 133,
      "wins": 9,
      "winRate": 6.8,
      "placeRate": 21.1,
      "winRoi": 73.7
    },
    {
      "name": "富田暁",
      "rides": 130,
      "wins": 8,
      "winRate": 6.2,
      "placeRate": 19.2,
      "winRoi": 127.1
    },
    {
      "name": "団野大成",
      "rides": 91,
      "wins": 8,
      "winRate": 8.8,
      "placeRate": 27.5,
      "winRoi": 81.9
    },
    {
      "name": "西塚洸二",
      "rides": 65,
      "wins": 8,
      "winRate": 12.3,
      "placeRate": 20.0,
      "winRoi": 130.3
    },
    {
      "name": "菱田裕二",
      "rides": 99,
      "wins": 7,
      "winRate": 7.1,
      "placeRate": 23.2,
      "winRoi": 47.4
    },
    {
      "name": "菊沢一樹",
      "rides": 88,
      "wins": 7,
      "winRate": 8.0,
      "placeRate": 21.6,
      "winRoi": 254.3
    },
    {
      "name": "佐々木大",
      "rides": 72,
      "wins": 7,
      "winRate": 9.7,
      "placeRate": 27.8,
      "winRoi": 54.0
    },
    {
      "name": "角田大和",
      "rides": 112,
      "wins": 6,
      "winRate": 5.4,
      "placeRate": 25.9,
      "winRoi": 42.7
    },
    {
      "name": "秋山稔樹",
      "rides": 107,
      "wins": 6,
      "winRate": 5.6,
      "placeRate": 15.9,
      "winRoi": 120.7
    },
    {
      "name": "田口貫太",
      "rides": 51,
      "wins": 6,
      "winRate": 11.8,
      "placeRate": 25.5,
      "winRoi": 86.5
    },
    {
      "name": "永島まな",
      "rides": 109,
      "wins": 5,
      "winRate": 4.6,
      "placeRate": 17.4,
      "winRoi": 49.6
    }
  ],
  "kokura-dirt-middle": [
    {
      "name": "幸英明",
      "rides": 103,
      "wins": 12,
      "winRate": 11.7,
      "placeRate": 28.2,
      "winRoi": 86.1
    },
    {
      "name": "松山弘平",
      "rides": 80,
      "wins": 12,
      "winRate": 15.0,
      "placeRate": 36.2,
      "winRoi": 83.0
    },
    {
      "name": "西村淳也",
      "rides": 104,
      "wins": 11,
      "winRate": 10.6,
      "placeRate": 28.8,
      "winRoi": 66.4
    },
    {
      "name": "鮫島克駿",
      "rides": 95,
      "wins": 9,
      "winRate": 9.5,
      "placeRate": 27.4,
      "winRoi": 33.9
    },
    {
      "name": "吉田隼人",
      "rides": 62,
      "wins": 9,
      "winRate": 14.5,
      "placeRate": 37.1,
      "winRoi": 47.3
    },
    {
      "name": "斎藤新",
      "rides": 95,
      "wins": 8,
      "winRate": 8.4,
      "placeRate": 18.9,
      "winRoi": 86.5
    },
    {
      "name": "浜中俊",
      "rides": 52,
      "wins": 8,
      "winRate": 15.4,
      "placeRate": 36.5,
      "winRoi": 107.1
    },
    {
      "name": "丹内祐次",
      "rides": 104,
      "wins": 7,
      "winRate": 6.7,
      "placeRate": 17.3,
      "winRoi": 34.3
    },
    {
      "name": "松若風馬",
      "rides": 102,
      "wins": 7,
      "winRate": 6.9,
      "placeRate": 25.5,
      "winRoi": 63.2
    },
    {
      "name": "小沢大仁",
      "rides": 96,
      "wins": 7,
      "winRate": 7.3,
      "placeRate": 16.7,
      "winRoi": 96.9
    },
    {
      "name": "富田暁",
      "rides": 98,
      "wins": 6,
      "winRate": 6.1,
      "placeRate": 19.4,
      "winRoi": 126.2
    },
    {
      "name": "角田大和",
      "rides": 83,
      "wins": 6,
      "winRate": 7.2,
      "placeRate": 25.3,
      "winRoi": 57.6
    },
    {
      "name": "団野大成",
      "rides": 69,
      "wins": 5,
      "winRate": 7.2,
      "placeRate": 26.1,
      "winRoi": 87.2
    },
    {
      "name": "秋山稔樹",
      "rides": 77,
      "wins": 4,
      "winRate": 5.2,
      "placeRate": 11.7,
      "winRoi": 155.6
    },
    {
      "name": "菱田裕二",
      "rides": 76,
      "wins": 4,
      "winRate": 5.3,
      "placeRate": 19.7,
      "winRoi": 33.2
    },
    {
      "name": "藤懸貴志",
      "rides": 57,
      "wins": 4,
      "winRate": 7.0,
      "placeRate": 22.8,
      "winRoi": 321.4
    },
    {
      "name": "永島まな",
      "rides": 69,
      "wins": 3,
      "winRate": 4.3,
      "placeRate": 14.5,
      "winRoi": 71.9
    },
    {
      "name": "亀田温心",
      "rides": 64,
      "wins": 3,
      "winRate": 4.7,
      "placeRate": 14.1,
      "winRoi": 30.6
    },
    {
      "name": "菊沢一樹",
      "rides": 54,
      "wins": 3,
      "winRate": 5.6,
      "placeRate": 16.7,
      "winRoi": 47.2
    },
    {
      "name": "国分恭介",
      "rides": 60,
      "wins": 2,
      "winRate": 3.3,
      "placeRate": 18.3,
      "winRoi": 42.0
    }
  ]
}
