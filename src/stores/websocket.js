import { writable, get } from 'svelte/store';

const tickerStoreMock = [
  {
    market: "RUNE/USDT",
    lowestAsk: {
      exchange: "poloniex",
      price: 5.3,
      fee: 0.0009
    },
    highestBid: {
      exchange: "binance",
      price: 10.43,
      fee: 0.001
    },
    profit: 1.966024528301887
  },
  {
    market: "KMD/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00001532,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000029902,
      fee: 0.0025
    },
    profit: 1.9483276762402089
  },
  {
    market: "ZIL/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0000015992,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.0000031208,
      fee: 0.0025
    },
    profit: 1.9464757378689344
  },
  {
    market: "TRX/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 9.3484e-7,
      fee: 0.0025
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.0000017956,
      fee: 0.0025
    },
    profit: 1.9157564930897268
  },
  {
    market: "SUB/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0036992,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitmart",
      price: 0.0067,
      fee: 0.0025
    },
    profit: 1.8062024221453288
  },
  {
    market: "BUY/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 0.02475,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitmart",
      price: 0.0443,
      fee: 0.0025
    },
    profit: 1.78539898989899
  },
  {
    market: "GRIN/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 0.3537,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.62078,
      fee: 0.0025
    },
    profit: 1.7506031947978513
  },
  {
    market: "GRIN/BTC",
    lowestAsk: {
      exchange: "gateio",
      price: 0.00000629,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.000011,
      fee: 0.0025
    },
    profit: 1.7443076311605723
  },
  {
    market: "EDG/ETH",
    lowestAsk: {
      exchange: "gateio",
      price: 0.000004225,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.00000732,
      fee: 0.0025
    },
    profit: 1.728044378698225
  },
  {
    market: "OMG/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.00010169,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.0001755,
      fee: 0.001
    },
    profit: 1.7223334152817387
  },
  {
    market: "GRIN/ETH",
    lowestAsk: {
      exchange: "gateio",
      price: 0.0000873,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.0001503,
      fee: 0.0025
    },
    profit: 1.7171494845360826
  },
  {
    market: "NULS/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00000868,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000014871,
      fee: 0.0025
    },
    profit: 1.7097488479262672
  },
  {
    market: "STMX/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 4.9999e-7,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 8.3447e-7,
      fee: 0.0025
    },
    profit: 1.6639733794675895
  },
  {
    market: "VET/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.000001428,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00000236,
      fee: 0.001
    },
    profit: 1.6491610644257702
  },
  {
    market: "XEM/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00000303,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000005002,
      fee: 0.0025
    },
    profit: 1.6473250825082508
  },
  {
    market: "RVN/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0000020884,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000003409,
      fee: 0.0025
    },
    profit: 1.6273501244972226
  },
  {
    market: "OKB/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 15.12708,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 23.744,
      fee: 0.002
    },
    profit: 1.565135382373862
  },
  {
    market: "AION/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.0000029,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.00000442,
      fee: 0.0025
    },
    profit: 1.5206379310344826
  },
  {
    market: "ETC/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 33.23844,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 49.88,
      fee: 0.001
    },
    profit: 1.4971721133723486
  },
  {
    market: "ADA/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.000021421,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00003188,
      fee: 0.001
    },
    profit: 1.484759184912002
  },
  {
    market: "DCR/BTC",
    lowestAsk: {
      exchange: "poloniex",
      price: 0.00185908,
      fee: 0.0009
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.0027602,
      fee: 0.0025
    },
    profit: 1.48131286873077
  },
  {
    market: "ETC/ETH",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0081614,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.01205,
      fee: 0.001
    },
    profit: 1.4729623716519225
  },
  {
    market: "ELF/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.0000061082,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00000895,
      fee: 0.001
    },
    profit: 1.4617434432402345
  },
  {
    market: "GAS/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.0001408,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.00020594,
      fee: 0.0025
    },
    profit: 1.4591420454545454
  },
  {
    market: "ONG/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.0000137,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00001985,
      fee: 0.001
    },
    profit: 1.4454051094890512
  },
  {
    market: "POWR/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.0000063843,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00000918,
      fee: 0.001
    },
    profit: 1.434402354212678
  },
  {
    market: "FET/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000009233,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00001312,
      fee: 0.001
    },
    profit: 1.4174899274342034
  },
  {
    market: "DGB/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 8.774e-7,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.0000012136,
      fee: 0.0025
    },
    profit: 1.378177570093458
  },
  {
    market: "TRU/USDT",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.319,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.4372,
      fee: 0.001
    },
    profit: 1.3670329153605014
  },
  {
    market: "ZRX/BTC",
    lowestAsk: {
      exchange: "gateio",
      price: 0.00001942,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000026568,
      fee: 0.0025
    },
    profit: 1.3635741503604533
  },
  {
    market: "MDA/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0000081,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00001106,
      fee: 0.001
    },
    profit: 1.361932098765432
  },
  {
    market: "SCRT/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00012827,
      fee: 0.001
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.000171998,
      fee: 0.0025
    },
    profit: 1.3374059016137836
  },
  {
    market: "KIN/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000060803,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.00008123,
      fee: 0.002
    },
    profit: 1.3314538180681876
  },
  {
    market: "ENJ/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.000043999,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00005654,
      fee: 0.001
    },
    profit: 1.2815292052092093
  },
  {
    market: "SCRT/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 7.358,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 9.38088,
      fee: 0.0025
    },
    profit: 1.2704225332970915
  },
  {
    market: "INK/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 0.0011382,
      fee: 0.002
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.00143001,
      fee: 0.0025
    },
    profit: 1.2518784923563522
  },
  {
    market: "ONT/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00001666,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000020687,
      fee: 0.0025
    },
    profit: 1.2382166866746698
  },
  {
    market: "ONG/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.909966,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 1.1265,
      fee: 0.001
    },
    profit: 1.234458341300664
  },
  {
    market: "OCN/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 1.142e-8,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 1.39e-8,
      fee: 0.002
    },
    profit: 1.2126628721541155
  },
  {
    market: "REQ/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.0000028426,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00000345,
      fee: 0.001
    },
    profit: 1.2101776190811229
  },
  {
    market: "REEF/USDT",
    lowestAsk: {
      exchange: "bitfinex",
      price: 0.022413,
      fee: 0.002
    },
    highestBid: {
      exchange: "binance",
      price: 0.02705,
      fee: 0.001
    },
    profit: 1.203888859144247
  },
  {
    market: "BTCST/USDT",
    lowestAsk: {
      exchange: "binance",
      price: 31.14,
      fee: 0.001
    },
    highestBid: {
      exchange: "poloniex",
      price: 37.51241285,
      fee: 0.0009
    },
    profit: 1.2027375353243415
  },
  {
    market: "XTZ/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.000072909,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.0000878,
      fee: 0.001
    },
    profit: 1.2007409030435199
  },
  {
    market: "XVG/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 4.57e-7,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 5.4953e-7,
      fee: 0.0025
    },
    profit: 1.1974726477024071
  },
  {
    market: "NIFT/USDT",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.3452,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.41336,
      fee: 0.002
    },
    profit: 1.1929507531865586
  },
  {
    market: "DEC/USDT",
    lowestAsk: {
      exchange: "poloniex",
      price: 0.11879745,
      fee: 0.0009
    },
    highestBid: {
      exchange: "ascendex",
      price: 0.1418,
      fee: 0.002
    },
    profit: 1.190728314412473
  },
  {
    market: "LSK/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.00005382,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.00006376,
      fee: 0.0025
    },
    profit: 1.179689706428837
  },
  {
    market: "ICX/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000031487,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00003708,
      fee: 0.001
    },
    profit: 1.1741288627052433
  },
  {
    market: "ICX/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 1.787643,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 2.104,
      fee: 0.001
    },
    profit: 1.173468779560572
  },
  {
    market: "ICX/ETH",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.00043221,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.0005082,
      fee: 0.001
    },
    profit: 1.1723173110293608
  },
  {
    market: "CTT/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 12.483,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitmart",
      price: 14.67,
      fee: 0.0025
    },
    profit: 1.1706982696467196
  },
  {
    market: "SNT/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.0000015,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.0000017491,
      fee: 0.0025
    },
    profit: 1.1625666666666665
  },
  {
    market: "STEEM/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000008784,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00001023,
      fee: 0.001
    },
    profit: 1.1611174863387979
  },
  {
    market: "DEXE/ETH",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0024404,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.002837,
      fee: 0.001
    },
    profit: 1.159014341911162
  },
  {
    market: "IOTA/USDT",
    lowestAsk: {
      exchange: "hitbtc",
      price: 1.209118,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 1.4045,
      fee: 0.002
    },
    profit: 1.1570905147388428
  },
  {
    market: "NFTX/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 103.8,
      fee: 0.002
    },
    highestBid: {
      exchange: "poloniex",
      price: 119.56250597,
      fee: 0.0009
    },
    profit: 1.148954585452794
  },
  {
    market: "REEF/USD",
    lowestAsk: {
      exchange: "bitfinex",
      price: 0.023497,
      fee: 0.002
    },
    highestBid: {
      exchange: "ftx",
      price: 0.02692,
      fee: 0.0007
    },
    profit: 1.1429781716814913
  },
  {
    market: "IOTA/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.00002127,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.00002421,
      fee: 0.002
    },
    profit: 1.1337228490832159
  },
  {
    market: "KEEP/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0000113559,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00001286,
      fee: 0.001
    },
    profit: 1.1289509726221612
  },
  {
    market: "BCVT/USDT",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.0352,
      fee: 0.0025
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.039785,
      fee: 0.0025
    },
    profit: 1.1252556818181818
  },
  {
    market: "XLM/BTC",
    lowestAsk: {
      exchange: "poloniex",
      price: 0.00000606,
      fee: 0.0009
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.0000068017,
      fee: 0.0025
    },
    profit: 1.1189927392739274
  },
  {
    market: "IOST/BTC",
    lowestAsk: {
      exchange: "bitmart",
      price: 7.485e-7,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 8.3881e-7,
      fee: 0.0025
    },
    profit: 1.1156546426185705
  },
  {
    market: "USDT/IDRT",
    lowestAsk: {
      exchange: "binance",
      price: 14338,
      fee: 0.001
    },
    highestBid: {
      exchange: "hitbtc",
      price: 15894.7,
      fee: 0.0025
    },
    profit: 1.105071627842098
  },
  {
    market: "GTC/USDT",
    lowestAsk: {
      exchange: "binance",
      price: 7.442,
      fee: 0.001
    },
    highestBid: {
      exchange: "hitbtc",
      price: 8.2,
      fee: 0.0025
    },
    profit: 1.0983543402311204
  },
  {
    market: "NAV/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000006931,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.00000763,
      fee: 0.001
    },
    profit: 1.0973512480161591
  },
  {
    market: "QI/USDT",
    lowestAsk: {
      exchange: "binance",
      price: 0.1727,
      fee: 0.001
    },
    highestBid: {
      exchange: "gateio",
      price: 0.18974,
      fee: 0.002
    },
    profit: 1.0956682107701217
  },
  {
    market: "NANO/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.000088494,
      fee: 0.0025
    },
    highestBid: {
      exchange: "binance",
      price: 0.000097,
      fee: 0.001
    },
    profit: 1.0926195109272945
  },
  {
    market: "SHILL/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 1.005603,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitmart",
      price: 1.097999,
      fee: 0.0025
    },
    profit: 1.0873811896941437
  },
  {
    market: "UFO/USDT",
    lowestAsk: {
      exchange: "gateio",
      price: 0.000024249,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitmart",
      price: 0.000026349,
      fee: 0.0025
    },
    profit: 1.0821015093405915
  },
  {
    market: "L3P/USDT",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.0112,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.01214,
      fee: 0.002
    },
    profit: 1.0794285714285714
  },
  {
    market: "VTC/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.000009865,
      fee: 0.0025
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000010691,
      fee: 0.0025
    },
    profit: 1.0787303598580842
  },
  {
    market: "BONDLY/ETH",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.00003952,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.00004268,
      fee: 0.002
    },
    profit: 1.0754595141700405
  },
  {
    market: "BCH/BTC",
    lowestAsk: {
      exchange: "bitvavo",
      price: 0.0091551,
      fee: 0.0025
    },
    highestBid: {
      exchange: "hitbtc",
      price: 0.009878,
      fee: 0.0025
    },
    profit: 1.0739614531791024
  },
  {
    market: "GT/BTC",
    lowestAsk: {
      exchange: "hitbtc",
      price: 0.0001,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.00010776,
      fee: 0.002
    },
    profit: 1.0731
  },
  {
    market: "BONDLY/USDT",
    lowestAsk: {
      exchange: "bitmart",
      price: 0.1658,
      fee: 0.0025
    },
    highestBid: {
      exchange: "gateio",
      price: 0.17722,
      fee: 0.002
    },
    profit: 1.0643781664656211
  },
  {
    market: "BAT/BTC",
    lowestAsk: {
      exchange: "binance",
      price: 0.00001916,
      fee: 0.001
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.000020418,
      fee: 0.0025
    },
    profit: 1.0621576200417535
  },
  {
    market: "NEO/BTC",
    lowestAsk: {
      exchange: "bitfinex",
      price: 0.00071677,
      fee: 0.002
    },
    highestBid: {
      exchange: "bitvavo",
      price: 0.00076305,
      fee: 0.0025
    },
    profit: 1.060067434462938
  }
];

export const tickerStore = writable({ arbs: [], interval: 3 });
export const obStore = writable({ targets: [] });
const wsInitState = { wsOpen: false, subscriptions: [] };
export const wsStore = writable(wsInitState);

let socket = null;

const _compareTargets = (target, { market, lowestAsk, highestBid }) => {
  if (target.market !== market) return false;
  return target.exchanges.reduce((acc, exchange) => {
    if (exchange !== lowestAsk.exchange && exchange !== highestBid.exchange) acc = false;
    return acc;
  }, true);
};

const _tickerArbsListener = (response) => {
  const { targets } = get(obStore);
  const arbs = response.arbs.filter(arb => targets.reduce((acc, target) => {
    if (_compareTargets(target, arb)) acc = false;
    return acc;
  }, true));

  tickerStore.set({
    arbs,
    interval: response.interval,
  });
};

const _obArbsListener = (response) => {
  obStore.set({
    targets: response.targets
  });
};

const _initConnection = () => {
  if (!socket) return;
  socket.addEventListener('open', function () {
    socket.addEventListener('message', function (event) {
      let response = null;
      if (!!event.data) response = JSON.parse(event.data);
      if (response && response.channel === 'tickerArbs') {
        _tickerArbsListener(response);
      }
      if (response && response.channel === 'obArbs') {
        _obArbsListener(response);
      };
    });

    wsStore.update((prevData) => ({ ...prevData, wsOpen: true }));

    console.log('WS: connection opened');
  });

  socket.addEventListener('close', function () {
    console.log('WS: connection terminated');
    wsStore.set(wsInitState);
  });
};



export const openConnection = () => {
  socket = new WebSocket('ws://localhost:8080/');
  _initConnection();
};

export const closeConnection = () => {
  socket && socket.close();
  socket = null;
};

export const subscribeToChannel = (channel, params) => {
  const { subscriptions } = get(wsStore);
  if (socket && socket.readyState > 0 && !subscriptions.includes(channel)) {
    socket.send(
      JSON.stringify({
        request: 'SUB',
        channel,
        payload: { params }
      })
    );
    if (channel === 'tickerArbs') tickerStore.update((prevData) => ({ ...prevData, }));
    wsStore.update((prevData) => ({ ...prevData, subscriptions: [...subscriptions, channel] }));
  }
};

export const unsubscribeFromChannel = (channel) => {
  const { subscriptions } = get(wsStore);
  if (subscriptions.includes(channel)) {
    socket.send(
      JSON.stringify({
        request: 'UNSUB',
        channel,
      })
    );
    wsStore.update((prevData) => ({ ...prevData, subscriptions: subscriptions.filter(item => item !== channel) }));
  }
};

export const addTargetToOb = ({ market, exchanges }) => {
  if (!socket && socket.readyState < 1) return;
  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'obArbs',
      payload: {
        name: 'addTarget',
        params: {
          target: {
            market,
            exchanges
          }
        }
      }
    })
  );
  tickerStore.update((prevState) => ({ ...prevState, arbs: prevState.arbs.filter(arb => arb.market !== market) }));
};

export const clearTargets = () => {
  if (!socket && socket.readyState < 1) return;
  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'obArbs',
      payload: {
        name: 'clearTargets',
      }
    })
  );
};



// start app with open WS connection
socket = new WebSocket('ws://localhost:8080/');
_initConnection();