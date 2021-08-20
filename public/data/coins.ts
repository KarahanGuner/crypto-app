const coins = [
    {
        image: "/1/small/bitcoin.png?1547033579",
        name: "Bitcoin",
        symbol: "btc",
        id: "bitcoin"
    },
    {
        image: "/279/small/ethereum.png?1595348880",
        name: "Ethereum",
        symbol: "eth",
        id: "ethereum"
    },
    {
        image: "/975/small/cardano.png?1547034860",
        name: "Cardano",
        symbol: "ada",
        id: "cardano"
    },
    {
        image: "/825/small/binance-coin-logo.png?1547034615",
        name: "Binance Coin",
        symbol: "bnb",
        id: "binancecoin"
    },
    {
        image: "/325/small/Tether-logo.png?1598003707",
        name: "Tether",
        symbol: "usdt",
        id: "tether"
    },
    {
        image: "/44/small/xrp-symbol-white-128.png?1605778731",
        name: "XRP",
        symbol: "xrp",
        id: "ripple"
    },
    {
        image: "/5/small/dogecoin.png?1547792256",
        name: "Dogecoin",
        symbol: "doge",
        id: "dogecoin"
    },
    {
        image: "/6319/small/USD_Coin_icon.png?1547042389",
        name: "USD Coin",
        symbol: "usdc",
        id: "usd-coin"
    },
    {
        image: "/12171/small/aJGBjJFU_400x400.jpg?1597804776",
        name: "Polkadot",
        symbol: "dot",
        id: "polkadot"
    },
    {
        image: "/4128/small/coinmarketcap-solana-200.png?1616489452",
        name: "Solana",
        symbol: "sol",
        id: "solana"
    },
    {
        image: "/12504/small/uniswap-uni.png?1600306604",
        name: "Uniswap",
        symbol: "uni",
        id: "uniswap"
    },
    {
        image: "/8284/small/luna1557227471663.png?1567147072",
        name: "Terra",
        symbol: "luna",
        id: "terra-luna"
    },
    {
        image: "/9576/small/BUSD.png?1568947766",
        name: "Binance USD",
        symbol: "busd",
        id: "binance-usd"
    },
    {
        image: "/780/small/bitcoin-cash-circle.png?1594689492",
        name: "Bitcoin Cash",
        symbol: "bch",
        id: "bitcoin-cash"
    },
    {
        image: "/877/small/chainlink-new-logo.png?1547034700",
        name: "Chainlink",
        symbol: "link",
        id: "chainlink"
    },
    {
        image: "/2/small/litecoin.png?1547033580",
        name: "Litecoin",
        symbol: "ltc",
        id: "litecoin"
    },
    {
        image: "/14495/small/Internet_Computer_logo.png?1620703073",
        name: "Internet Computer",
        symbol: "icp",
        id: "internet-computer"
    },
    {
        image: "/7598/small/wrapped_bitcoin_wbtc.png?1548822744",
        name: "Wrapped Bitcoin",
        symbol: "wbtc",
        id: "wrapped-bitcoin"
    },
    {
        image: "/4713/small/matic-token-icon.png?1624446912",
        name: "Polygon",
        symbol: "matic",
        id: "matic-network"
    },
    {
        image: "/100/small/Stellar_symbol_black_RGB.png?1552356157",
        name: "Stellar",
        symbol: "xlm",
        id: "stellar"
    },
    {
        image: "/453/small/ethereum-classic-logo.png?1547034169",
        name: "Ethereum Classic",
        symbol: "etc",
        id: "ethereum-classic"
    },
    {
        image: "/1167/small/VeChain-Logo-768x725.png?1547035194",
        name: "VeChain",
        symbol: "vet",
        id: "vechain"
    },
    {
        image: "/2538/small/theta-token-logo.png?1548387191",
        name: "Theta Network",
        symbol: "theta",
        id: "theta-token"
    },
    {
        image: "/12817/small/filecoin.png?1602753933",
        name: "Filecoin",
        symbol: "fil",
        id: "filecoin"
    },
    {
        image: "/1094/small/tron-logo.png?1547035066",
        name: "TRON",
        symbol: "trx",
        id: "tron"
    },
    {
        image: "/9956/small/dai-multi-collateral-mcd.png?1574218774",
        name: "Dai",
        symbol: "dai",
        id: "dai"
    },
    {
        image: "/4463/small/okb_token.png?1548386209",
        name: "OKB",
        symbol: "okb",
        id: "okb"
    },
    {
        image: "/12559/small/coin-round-red.png?1604021818",
        name: "Avalanche",
        symbol: "AVAX",
        id: "avalanche-2"
    },
    {
        image: "/1481/small/cosmos_hub.png?1555657960",
        name: "Cosmos",
        symbol: "atom",
        id: "cosmos"
    },
    {
        image: "/9026/small/F.png?1609051564",
        name: "FTX Token",
        symbol: "ftt",
        id: "ftx-token"
    },
    {
        image: "/12645/small/AAVE.png?1601374110",
        name: "Aave",
        symbol: "aave",
        id: "aave"
    },
    {
        image: "/10643/small/ceth2.JPG?1581389598",
        name: "cETH",
        symbol: "ceth",
        id: "compound-ether"
    },
    {
        image: "/9442/small/Compound_USDC.png?1567581577",
        name: "cUSDC",
        symbol: "cusdc",
        id: "compound-usd-coin"
    },
    {
        image: "/738/small/eos-eos-logo.png?1547034481",
        name: "EOS",
        symbol: "eos",
        id: "eos"
    },
    {
        image: "/69/small/monero_logo.png?1547033729",
        name: "Monero",
        symbol: "xmr",
        id: "monero"
    },
    {
        image: "/12632/small/pancakeswap-cake-logo_%281%29.png?1629359065",
        name: "PancakeSwap",
        symbol: "cake",
        id: "pancakeswap-token"
    },
    {
        image: "/9672/small/CjbT82vP_400x400.jpg?1570548320",
        name: "Klaytn",
        symbol: "klay",
        id: "klay-token"
    },
    {
        image: "/9281/small/cDAI.png?1576467585",
        name: "cDAI",
        symbol: "cdai",
        id: "cdai"
    },
    {
        image: "/13397/small/Graph_Token.png?1608145566",
        name: "The Graph",
        symbol: "grt",
        id: "the-graph"
    },
    {
        image: "/13029/small/axie_infinity_logo.png?1604471082",
        name: "Axie Infinity",
        symbol: "axs",
        id: "axie-infinity"
    },
    {
        image: "/11939/small/shiba.png?1622619446",
        name: "Shiba Inu",
        symbol: "shib",
        id: "shiba-inu"
    },
    {
        image: "/7310/small/cypto.png?1547043960",
        name: "Crypto.com Coin",
        symbol: "cro",
        id: "crypto-com-chain"
    },
    {
        image: "/480/small/NEO_512_512.png?1594357361",
        name: "NEO",
        symbol: "neo",
        id: "neo"
    },
    {
        image: "/4380/small/download.png?1547039725",
        name: "Algorand",
        symbol: "algo",
        id: "algorand"
    },
    {
        image: "/1364/small/Mark_Maker.png?1585191826",
        name: "Maker",
        symbol: "mkr",
        id: "maker"
    },
    {
        image: "/6799/small/BSV.png?1558947902",
        name: "Bitcoin SV",
        symbol: "bsv",
        id: "bitcoin-cash-sv"
    },
    {
        image: "/976/small/Tezos-logo.png?1547034862",
        name: "Tezos",
        symbol: "xtz",
        id: "tezos"
    },
    {
        image: "/9568/small/m4zRhP5e_400x400.jpg?1576190080",
        name: "Kusama",
        symbol: "ksm",
        id: "kusama"
    },
    {
        image: "/12409/small/amp-200x200.png?1599625397",
        name: "Amp",
        symbol: "amp",
        id: "amp-token"
    },
    {
        image: "/8418/small/leo-token.png?1558326215",
        name: "LEO Token",
        symbol: "leo",
        id: "leo-token"
    },
    {
        image: "/12335/small/elrond3_360.png?1626341589",
        name: "Elrond",
        symbol: "egld",
        id: "elrond-erd-2"
    },
    {
        image: "/692/small/IOTA_Swirl.png?1604238557",
        name: "IOTA",
        symbol: "miota",
        id: "iota"
    },
    {
        image: "/7595/small/BTT_Token_Graphic.png?1555066995",
        name: "BitTorrent",
        symbol: "btt",
        id: "bittorrent-2"
    },
    {
        image: "/13442/small/steth_logo.png?1608607546",
        name: "Lido Staked Ether",
        symbol: "steth",
        id: "staked-ether"
    },
    {
        image: "/12271/small/512x512_Logo_no_chop.png?1606986688",
        name: "Sushi",
        symbol: "sushi",
        id: "sushi"
    },
    {
        image: "/3263/small/CEL_logo.png?1609598753",
        name: "Celsius Network",
        symbol: "cel",
        id: "celsius-degree-token"
    },
    {
        image: "/3370/small/5ZOu7brX_400x400.jpg?1612437252",
        name: "Quant",
        symbol: "qnt",
        id: "quant-network"
    },
    {
        image: "/2822/small/huobi-token-logo.png?1547036992",
        name: "Huobi Token",
        symbol: "ht",
        id: "huobi-token"
    },
    {
        image: "/10775/small/COMP.png?1592625425",
        name: "Compound",
        symbol: "comp",
        id: "compound-governance-token"
    },
    {
        image: "/425/small/waves.png?1548386117",
        name: "Waves",
        symbol: "waves",
        id: "waves"
    },
    {
        image: "/12681/small/UST.png?1601612407",
        name: "TerraUSD",
        symbol: "ust",
        id: "terrausd"
    },
    {
        image: "/6595/small/RUNE.png?1614160507",
        name: "THORChain",
        symbol: "rune",
        id: "thorchain"
    },
    {
        image: "/3688/small/mqTDGK7Q.png?1566256777",
        name: "Hedera Hashgraph",
        symbol: "hbar",
        id: "hedera-hashgraph"
    },
    {
        image: "/19/small/dash-logo.png?1548385930",
        name: "Dash",
        symbol: "dash",
        id: "dash"
    },
    {
        image: "/329/small/decred.png?1547034093",
        name: "Decred",
        symbol: "dcr",
        id: "decred"
    },
    {
        image: "/3406/small/SNX.png?1598631139",
        name: "Synthetix Network Token",
        symbol: "snx",
        id: "havven"
    },
    {
        image: "/4284/small/Helium_HNT.png?1612620071",
        name: "Helium",
        symbol: "hnt",
        id: "helium"
    },
    {
        image: "/10365/small/near_icon.png?1601359077",
        name: "Near",
        symbol: "near",
        id: "near"
    },
    {
        image: "/2912/small/xdc-logo.png?1589242157",
        name: "XDC Network",
        symbol: "xdc",
        id: "xdce-crowd-sale"
    },
    {
        image: "/3348/small/Holologo_Profile.png?1547037966",
        name: "Holo",
        symbol: "hot",
        id: "holotoken"
    },
    {
        image: "/12407/small/Unknown-5.png?1599624896",
        name: "Huobi BTC",
        symbol: "hbtc",
        id: "huobi-btc"
    },
    {
        image: "/8834/small/Chiliz.png?1561970540",
        name: "Chiliz",
        symbol: "chz",
        id: "chiliz"
    },
    {
        image: "/242/small/NEM_Logo_256x256.png?1598687029",
        name: "NEM",
        symbol: "xem",
        id: "nem"
    },
    {
        image: "/8029/small/1_0YusgngOrriVg4ZYx4wOFQ.png?1553483622",
        name: "Theta Fuel",
        symbol: "tfuel",
        id: "theta-fuel"
    },
    {
        image: "/486/small/circle-zcash-color.png?1547034197",
        name: "Zcash",
        symbol: "zec",
        id: "zcash"
    },
    {
        image: "/1102/small/enjin-coin-logo.png?1547035078",
        name: "Enjin Coin",
        symbol: "enj",
        id: "enjincoin"
    },
    {
        image: "/2069/small/Stacks_logo_full.png?1604112510",
        name: "Stacks",
        symbol: "stx",
        id: "blockstack"
    },
    {
        image: "/3449/small/tusd.png?1618395665",
        name: "TrueUSD",
        symbol: "tusd",
        id: "true-usd"
    },
    {
        image: "/12913/small/AudiusCoinLogo_2x.png?1603425727",
        name: "Audius",
        symbol: "audio",
        id: "audius"
    },
    {
        image: "/11849/small/yfi-192x192.png?1598325330",
        name: "yearn.finance",
        symbol: "yfi",
        id: "yearn-finance"
    },
    {
        image: "/684/small/qtum.png?1547034438",
        name: "Qtum",
        symbol: "qtum",
        id: "qtum"
    },
    {
        image: "/13446/small/flow_logo.jpg?1608631239",
        name: "Flow",
        symbol: "flow",
        id: "flow"
    },
    {
        image: "/3412/small/ravencoin.png?1548386057",
        name: "Ravencoin",
        symbol: "rvn",
        id: "ravencoin"
    },
    {
        image: "/4343/small/oRt6SiEN_400x400.jpg?1591059616",
        name: "Arweave",
        symbol: "ar",
        id: "arweave"
    },
    {
        image: "/2687/small/Zilliqa-logo.png?1547036894",
        name: "Zilliqa",
        symbol: "zil",
        id: "zilliqa"
    },
    {
        image: "/4001/small/Fantom.png?1558015016",
        name: "Fantom",
        symbol: "ftm",
        id: "fantom"
    },
    {
        image: "/794/small/Voyager-vgx.png?1575693595",
        name: "Voyager Token",
        symbol: "vgx",
        id: "ethos"
    },
    {
        image: "/13725/small/xsushi.png?1612538526",
        name: "xSUSHI",
        symbol: "xsushi",
        id: "xsushi"
    },
    {
        image: "/677/small/basic-attention-token.png?1547034427",
        name: "Basic Attention Token",
        symbol: "bat",
        id: "basic-attention-token"
    },
    {
        image: "/1043/small/bitcoin-gold-logo.png?1547034978",
        name: "Bitcoin Gold",
        symbol: "btg",
        id: "bitcoin-gold"
    },
    {
        image: "/13120/small/Logo_final-21.png?1624892810",
        name: "Bitcoin Cash ABC",
        symbol: "bcha",
        id: "bitcoin-cash-abc-2"
    },
    {
        image: "/16310/small/k-h6Wead_400x400.jpg?1623726134",
        name: "BitClout",
        symbol: "clout",
        id: "bitclout"
    },
    {
        image: "/878/small/decentraland-mana.png?1550108745",
        name: "Decentraland",
        symbol: "mana",
        id: "decentraland"
    },
    {
        image: "/4344/small/Y88JAze.png?1565065793",
        name: "Harmony",
        symbol: "one",
        id: "harmony"
    },
    {
        image: "/1899/small/tel.png?1547036203",
        name: "Telcoin",
        symbol: "tel",
        id: "telcoin"
    },
    {
        image: "/3695/small/nexo.png?1548086057",
        name: "NEXO",
        symbol: "nexo",
        id: "nexo"
    },
    {
        image: "/14362/small/174x174-white.png?1617174846",
        name: "SafeMoon",
        symbol: "safemoon",
        id: "safemoon"
    },
    {
        image: "/6013/small/paxos_standard.png?1548386291",
        name: "Paxos Standard",
        symbol: "pax",
        id: "paxos-standard"
    },
    {
        image: "/736/small/bancor-bnt.png?1628822309",
        name: "Bancor Network Token",
        symbol: "bnt",
        id: "bancor"
    },
    {
        image: "/63/small/digibyte.png?1547033717",
        name: "DigiByte",
        symbol: "dgb",
        id: "digibyte"
    },
    {
        image: "/2117/small/YJUrRy7r_400x400.png?1589794215",
        name: "SwissBorg",
        symbol: "chsb",
        id: "swissborg"
    },
    {
        image: "/3447/small/ONT.png?1583481820",
        name: "Ontology",
        symbol: "ont",
        id: "ontology"
    },
    {
        image: "/12381/small/60d18e06844a844ad75901a9_mark_only_03.png?1628674771",
        name: "Perpetual Protocol",
        symbol: "perp",
        id: "perpetual-protocol"
    },
    {
        image: "/289/small/siacoin.png?1548386465",
        name: "Siacoin",
        symbol: "sc",
        id: "siacoin"
    },
    {
        image: "/1047/small/sa9z79.png?1610678720",
        name: "KuCoin Token",
        symbol: "kcs",
        id: "kucoin-shares"
    },
    {
        image: "/13775/small/mdex.png?1611739676",
        name: "Mdex",
        symbol: "mdx",
        id: "mdex"
    },
    {
        image: "/863/small/0x.png?1547034672",
        name: "0x",
        symbol: "zrx",
        id: "0x"
    },
    {
        image: "/11810/small/nexus-mutual.jpg?1594547726",
        name: "Nexus Mutual",
        symbol: "nxm",
        id: "nxm"
    },
    {
        image: "/12606/small/nqGlQzdz_400x400.png?1601019805",
        name: "TitanSwap",
        symbol: "titan",
        id: "titanswap"
    },
    {
        image: "/756/small/nano-coin-logo.png?1547034501",
        name: "Nano",
        symbol: "nano",
        id: "nano"
    },
    {
        image: "/6905/small/Pirate_Chain.png?1560913844",
        name: "Pirate Chain",
        symbol: "arrr",
        id: "pirate-chain"
    },
    {
        image: "/12124/small/Curve.png?1597369484",
        name: "Curve DAO Token",
        symbol: "crv",
        id: "curve-dao-token"
    },
    {
        image: "/1060/small/icon-icx-logo.png?1547035003",
        name: "ICON",
        symbol: "icx",
        id: "icon"
    },
    {
        image: "/691/small/horizen.png?1555052241",
        name: "Horizen",
        symbol: "zen",
        id: "zencash"
    },
    {
        image: "/3334/small/iotex-logo.png?1547037941",
        name: "IoTeX",
        symbol: "iotx",
        id: "iotex"
    },
    {
        image: "/4324/small/U85xTl2.png?1608111978",
        name: "Ankr",
        symbol: "ankr",
        id: "ankr"
    },
    {
        image: "/10951/small/UMA.png?1586307916",
        name: "UMA",
        symbol: "uma",
        id: "uma"
    },
    {
        image: "/776/small/OMG_Network.jpg?1591167168",
        name: "OMG Network",
        symbol: "omg",
        id: "omisego"
    },
    {
        image: "/11621/small/cUSDT.png?1592113270",
        name: "cUSDT",
        symbol: "cusdt",
        id: "compound-usdt"
    },
    {
        image: "/8183/small/gt.png?1556085624",
        name: "GateToken",
        symbol: "gt",
        id: "gatechain-token"
    },
    {
        image: "/2523/small/IOST.png?1557555183",
        name: "IOST",
        symbol: "iost",
        id: "iostoken"
    },
    {
        image: "/385/small/Lisk_Symbol_-_Blue.png?1573444104",
        name: "Lisk",
        symbol: "lsk",
        id: "lisk"
    },
    {
        image: "/4645/small/DAG.png?1626339160",
        name: "Constellation",
        symbol: "dag",
        id: "constellation-labs"
    },
    {
        image: "/17358/small/Ygg_Icon_1.png?1627371846",
        name: "Yield Guild Games",
        symbol: "ygg",
        id: "yield-guild-games"
    },
    {
        image: "/11370/small/Bitcoin.jpg?1628072791",
        name: "renBTC",
        symbol: "renbtc",
        id: "renbtc"
    },
    {
        image: "/9368/small/swipe.png?1566792311",
        name: "Swipe",
        symbol: "sxp",
        id: "swipe"
    },
    {
        image: "/15628/small/JM4_vQ34_400x400.png?1621394004",
        name: "Mina Protocol",
        symbol: "mina",
        id: "mina-protocol"
    },
    {
        image: "/10547/small/WazirX.png?1580834330",
        name: "WazirX",
        symbol: "wrx",
        id: "wazirx"
    },
    {
        image: "/4428/small/ECOMI.png?1557928886",
        name: "ECOMI",
        symbol: "omi",
        id: "ecomi"
    },
    {
        image: "/14666/small/Group_3.png?1617631327",
        name: "Liquity USD",
        symbol: "lusd",
        id: "liquity-usd"
    },
    {
        image: "/13469/small/1inch-token.png?1608803028",
        name: "1inch",
        symbol: "1inch",
        id: "1inch"
    },
    {
        image: "/1152/small/gLCEA2G.png?1604543239",
        name: "Dent",
        symbol: "dent",
        id: "dent"
    },
    {
        image: "/203/small/verge-symbol-color_logo.png?1561543281",
        name: "Verge",
        symbol: "xvg",
        id: "verge"
    },
    {
        image: "/4480/small/Ultra.png?1563356418",
        name: "Ultra",
        symbol: "uos",
        id: "ultra"
    },
    {
        image: "/8365/small/Reserve_Rights.png?1557737411",
        name: "Reserve Rights Token",
        symbol: "rsr",
        id: "reserve-rights-token"
    },
    {
        image: "/4639/small/bifrost_32.png?1608520677",
        name: "Bifrost",
        symbol: "bfc",
        id: "bifrost"
    },
    {
        image: "/5230/small/vethor-token.png?1548760043",
        name: "VeThor Token",
        symbol: "vtho",
        id: "vethor-token"
    },
    {
        image: "/9761/small/Kava-icon.png?1585636197",
        name: "Kava.io",
        symbol: "kava",
        id: "kava"
    },
    {
        image: "/12129/small/sandbox_logo.jpg?1597397942",
        name: "The Sandbox",
        symbol: "sand",
        id: "the-sandbox"
    },
    {
        image: "/3139/small/REN.png?1589985807",
        name: "REN",
        symbol: "ren",
        id: "republic-protocol"
    },
    {
        image: "/9567/small/HUSD.jpg?1568889385",
        name: "HUSD",
        symbol: "husd",
        id: "husd"
    },
    {
        image: "/9129/small/WinK.png?1564624891",
        name: "WINkLink",
        symbol: "win",
        id: "wink"
    },
    {
        image: "/2484/small/Ergo.png?1574682618",
        name: "Ergo",
        symbol: "erg",
        id: "ergo"
    },
    {
        image: "/10117/small/78GWcZu.png?1600845716",
        name: "Neutrino USD",
        symbol: "usdn",
        id: "neutrino"
    },
    {
        image: "/1254/small/bitcoin-diamond.png?1547035280",
        name: "Bitcoin Diamond",
        symbol: "bcd",
        id: "bitcoin-diamond"
    },
    {
        image: "/12588/small/bakerytoken_logo.jpg?1600940032",
        name: "BakerySwap",
        symbol: "bake",
        id: "bakerytoken"
    },
    {
        image: "/7137/small/logo-circle-green.png?1619593365",
        name: "Livepeer",
        symbol: "lpt",
        id: "livepeer"
    },
    {
        image: "/10886/small/R9gQTJV__400x400.png?1585604557",
        name: "Energy Web Token",
        symbol: "ewt",
        id: "energy-web-token"
    },
    {
        image: "/13928/small/PSigc4ie_400x400.jpg?1612875614",
        name: "Raydium",
        symbol: "ray",
        id: "raydium"
    },
    {
        image: "/14571/small/vDyefsXq_400x400.jpg?1617085003",
        name: "Pundi X",
        symbol: "pundix",
        id: "pundi-x-2"
    },
    {
        image: "/14570/small/ZqsF51Re_400x400.png?1617082206",
        name: "Fei Protocol",
        symbol: "fei",
        id: "fei-protocol"
    },
    {
        image: "/16724/small/osmosis.jpeg?1624849879",
        name: "Osmosis",
        symbol: "osmo",
        id: "osmosis"
    },
    {
        image: "/542/small/Golem_Submark_Positive_RGB.png?1606392013",
        name: "Golem",
        symbol: "glm",
        id: "golem"
    },
    {
        image: "/11090/small/icon-celo-CELO-color-500.png?1592293590",
        name: "Celo",
        symbol: "celo",
        id: "celo"
    },
    {
        image: "/913/small/LRC.png?1572852344",
        name: "Loopring",
        symbol: "lrc",
        id: "loopring"
    },
    {
        image: "/11970/small/serum-logo.png?1597121577",
        name: "Serum",
        symbol: "srm",
        id: "serum"
    },
    {
        image: "/5681/small/Fetch.jpg?1572098136",
        name: "Fetch.ai",
        symbol: "fet",
        id: "fetch-ai"
    },
    {
        image: "/1374/small/medibloc_basic.png?1570607623",
        name: "Medibloc",
        symbol: "med",
        id: "medibloc"
    },
    {
        image: "/9566/small/Nervos_White.png?1608280856",
        name: "Nervos Network",
        symbol: "ckb",
        id: "nervos-network"
    },
    {
        image: "/13245/small/SKALE_token_300x300.png?1606789574",
        name: "SKALE",
        symbol: "skl",
        id: "skale"
    },
    {
        image: "/12677/small/venus.png?1618319812",
        name: "Venus",
        symbol: "xvs",
        id: "venus"
    },
    {
        image: "/14420/small/anchor_protocol_logo.jpg?1615965420",
        name: "Anchor Protocol",
        symbol: "anc",
        id: "anchor-protocol"
    },
    {
        image: "/15174/small/zV5K5y9f_400x400.png?1620024414",
        name: "Chia",
        symbol: "xch",
        id: "chia"
    },
    {
        image: "/13295/small/mirror_logo_transparent.png?1611554658",
        name: "Mirror Protocol",
        symbol: "mir",
        id: "mirror-protocol"
    },
    {
        image: "/12738/small/AlphaToken_256x256.png?1617160876",
        name: "Alpha Finance",
        symbol: "alpha",
        id: "alpha-finance"
    },
    {
        image: "/779/small/status.png?1548610778",
        name: "Status",
        symbol: "SNT",
        id: "status"
    },
    {
        image: "/13509/small/8DjBZ79V_400x400.jpg?1609236331",
        name: "Oxygen",
        symbol: "oxy",
        id: "oxygen"
    },
    {
        image: "/12921/small/w2UiemF__400x400.jpg?1603670367",
        name: "Wootrade Network",
        symbol: "woo",
        id: "wootrade-network"
    },
    {
        image: "/3687/small/ocean-protocol-logo.jpg?1547038686",
        name: "Ocean Protocol",
        symbol: "ocean",
        id: "ocean-protocol"
    },
    {
        image: "/2170/small/pundi-x.png?1548386366",
        name: "Pundi X [OLD]",
        symbol: "npxs",
        id: "pundi-x"
    },
    {
        image: "/8825/small/G2LY-Dg_.png?1591698270",
        name: "Prometeus",
        symbol: "prom",
        id: "prometeus"
    },
    {
        image: "/2707/small/UnibrightLogo_colorful_500x500_preview.png?1547036916",
        name: "Unibright",
        symbol: "ubt",
        id: "unibright"
    },
    {
        image: "/17117/small/logo.png?1626412904",
        name: "Coin98",
        symbol: "c98",
        id: "coin98"
    },
    {
        image: "/662/small/logo_square_simple_300px.png?1609402668",
        name: "Gnosis",
        symbol: "gno",
        id: "gnosis"
    },
    {
        image: "/9519/small/paxg.PNG?1568542565",
        name: "PAX Gold",
        symbol: "paxg",
        id: "pax-gold"
    },
    {
        image: "/14676/small/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg?1617700061",
        name: "Alien Worlds",
        symbol: "tlm",
        id: "alien-worlds"
    },
    {
        image: "/3296/small/op.jpg?1547037878",
        name: "Origin Protocol",
        symbol: "ogn",
        id: "origin-protocol"
    },
    {
        image: "/12882/small/Secondary_Symbol.png?1628233237",
        name: "Injective Protocol",
        symbol: "inj",
        id: "injective-protocol"
    },
    {
        image: "/5003/small/bitmax.png?1621310871",
        name: "AscendEx Token",
        symbol: "asd",
        id: "asd"
    },
    {
        image: "/14483/small/token_OHM_%281%29.png?1628311611",
        name: "Olympus",
        symbol: "ohm",
        id: "olympus"
    },
    {
        image: "/8843/small/sETH.png?1616150207",
        name: "sETH",
        symbol: "seth",
        id: "seth"
    },
    {
        image: "/959/small/kin.png?1586917032",
        name: "Kin",
        symbol: "kin",
        id: "kin"
    },
    {
        image: "/646/small/pL1VuXm.png?1604543202",
        name: "iExec RLC",
        symbol: "rlc",
        id: "iexec-rlc"
    },
    {
        image: "/12260/small/D919x5-s_400x400.png?1598568068",
        name: "Tokamak Network",
        symbol: "ton",
        id: "tokamak-network"
    },
    {
        image: "/5013/small/sUSD.png?1616150765",
        name: "sUSD",
        symbol: "susd",
        id: "nusd"
    },
    {
        image: "/14575/small/tribe.PNG?1617487954",
        name: "Tribe",
        symbol: "tribe",
        id: "tribe-2"
    },
    {
        image: "/1109/small/electroneum.png?1547224846",
        name: "Electroneum",
        symbol: "etn",
        id: "electroneum"
    },
    {
        image: "/11038/small/cartesi.png?1592288021",
        name: "Cartesi",
        symbol: "ctsi",
        id: "cartesi"
    },
    {
        image: "/14582/small/512_Light.png?1617149658",
        name: "Persistence",
        symbol: "xprt",
        id: "persistence"
    },
    {
        image: "/11683/small/Balancer.png?1592792958",
        name: "Balancer",
        symbol: "bal",
        id: "balancer"
    },
    {
        image: "/13422/small/frax_logo.png?1608476506",
        name: "Frax",
        symbol: "frax",
        id: "frax"
    },
    {
        image: "/13180/small/truefi_glyph_color.png?1617610941",
        name: "TrueFi",
        symbol: "tru",
        id: "truefi"
    },
    {
        image: "/14040/small/6YPdWn6.png?1613975899",
        name: "SuperFarm",
        symbol: "super",
        id: "superfarm"
    },
    {
        image: "/2090/small/rocket.png?1563781948",
        name: "Rocket Pool",
        symbol: "rpl",
        id: "rocket-pool"
    },
    {
        image: "/11841/small/orion_logo.png?1594943318",
        name: "Orion Protocol",
        symbol: "orn",
        id: "orion-protocol"
    },
    {
        image: "/9545/small/Band_token_blue_violet_token.png?1625881431",
        name: "Band Protocol",
        symbol: "band",
        id: "band-protocol"
    },
    {
        image: "/12651/small/dodo_logo.png?1601433025",
        name: "DODO",
        symbol: "dodo",
        id: "dodo"
    },
    {
        image: "/80/small/maidsafecoin.png?1547033750",
        name: "MaidSafeCoin",
        symbol: "maid",
        id: "maidsafecoin"
    },
    {
        image: "/14468/small/ILV.JPG?1617182121",
        name: "Illuvium",
        symbol: "ilv",
        id: "illuvium"
    },
    {
        image: "/12387/small/hbtc.jpg?1599529861",
        name: "HBTC Captain Token",
        symbol: "hbc",
        id: "hbtc-token"
    },
    {
        image: "/1372/small/WAX_Coin_Tickers_P_512px.png?1602812260",
        name: "WAX",
        symbol: "waxp",
        id: "wax"
    },
    {
        image: "/13079/small/iXocdNMF_400x400.png?1604974835",
        name: "Conflux",
        symbol: "cfx",
        id: "conflux-token"
    },
    {
        image: "/11085/small/Trust.png?1588062702",
        name: "Trust Wallet Token",
        symbol: "twt",
        id: "trust-wallet-token"
    },
    {
        image: "/11555/small/dawn_protocol.png?1591060256",
        name: "Dawn Protocol",
        symbol: "dawn",
        id: "dawn-protocol"
    },
    {
        image: "/761/small/funfair.png?1592404368",
        name: "FUNToken",
        symbol: "fun",
        id: "funfair"
    },
    {
        image: "/1369/small/StormX.png?1603113002",
        name: "StormX",
        symbol: "stmx",
        id: "storm"
    },
    {
        image: "/13504/small/Group_10572.png?1610534130",
        name: "Reef Finance",
        symbol: "reef",
        id: "reef-finance"
    },
    {
        image: "/14114/small/Alchemix_USD.png?1614410406",
        name: "Alchemix USD",
        symbol: "alusd",
        id: "alchemix-usd"
    },
    {
        image: "/525/small/Ardor_Vertical_1.png?1606797362",
        name: "Ardor",
        symbol: "ardr",
        id: "ardor"
    },
    {
        image: "/2784/small/inKkF01.png?1605007034",
        name: "Polymath",
        symbol: "poly",
        id: "polymath"
    },
    {
        image: "/4379/small/Celr.png?1554705437",
        name: "Celer Network",
        symbol: "celr",
        id: "celer-network"
    },
    {
        image: "/12696/small/compound-uni.png?1601789718",
        name: "cUNI",
        symbol: "cuni",
        id: "compound-uniswap"
    },
    {
        image: "/3416/small/Asset_59_2x.png?1582948925",
        name: "TomoChain",
        symbol: "tomo",
        id: "tomochain"
    },
    {
        image: "/3375/small/nkn.png?1548329212",
        name: "NKN",
        symbol: "nkn",
        id: "nkn"
    },
    {
        image: "/12783/small/96667603_115652523474502_6550262491509686272_n.png?1602885498",
        name: "TON Crystal",
        symbol: "ton",
        id: "ton-crystal"
    },
    {
        image: "/11871/small/Secret.png?1595520186",
        name: "Secret",
        symbol: "scrt",
        id: "secret"
    },
    {
        image: "/752/small/numeraire.png?1592538976",
        name: "Numeraire",
        symbol: "nmr",
        id: "numeraire"
    },
    {
        image: "/14498/small/ellipsis.png?1616556354",
        name: "Ellipsis",
        symbol: "eps",
        id: "ellipsis"
    },
    {
        image: "/12240/small/hIonpevN_400x400.jpg?1626616001",
        name: "Klever",
        symbol: "klv",
        id: "klever"
    },
    {
        image: "/13287/small/badger_dao_logo.jpg?1607054976",
        name: "Badger DAO",
        symbol: "badger",
        id: "badger-dao"
    },
    {
        image: "/10366/small/SLP.png?1578640057",
        name: "Smooth Love Potion",
        symbol: "slp",
        id: "smooth-love-potion"
    },
    {
        image: "/14773/small/token-mango.png?1628171237",
        name: "Mango Markets",
        symbol: "mngo",
        id: "mango-markets"
    },
    {
        image: "/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659",
        name: "Quickswap",
        symbol: "quick",
        id: "quick"
    },
    {
        image: "/12785/small/akash-logo.png?1615447676",
        name: "Akash Network",
        symbol: "akt",
        id: "akash-network"
    },
    {
        image: "/14375/small/alice_logo.jpg?1615782968",
        name: "My Neighbor Alice",
        symbol: "alice",
        id: "my-neighbor-alice"
    },
    {
        image: "/3916/small/download_%285%29.png?1576624060",
        name: "Orchid Protocol",
        symbol: "oxt",
        id: "orchid-protocol"
    },
    {
        image: "/15278/small/image_from_ios_%281%29.jpg?1626422737",
        name: "Clover Finance",
        symbol: "clv",
        id: "clover-finance"
    },
    {
        image: "/8478/small/Sapphire-logo-transparent-no-text.jpg?1614674409",
        name: "Sapphire",
        symbol: "sapp",
        id: "sapphire"
    },
    {
        image: "/14113/small/Alchemix.png?1614409874",
        name: "Alchemix",
        symbol: "alcx",
        id: "alchemix"
    },
    {
        image: "/4630/small/Orbs.jpg?1547039896",
        name: "Orbs",
        symbol: "orbs",
        id: "orbs"
    },
    {
        image: "/5000/small/Chromia.png?1559038018",
        name: "Chromia",
        symbol: "chr",
        id: "chromaway"
    },
    {
        image: "/14238/small/ethernity_logo.png?1615189750",
        name: "Ethernity Chain",
        symbol: "ern",
        id: "ethernity-chain"
    },
    {
        image: "/788/small/civic.png?1547034556",
        name: "Civic",
        symbol: "cvc",
        id: "civic"
    },
    {
        image: "/398/small/steem.png?1547034126",
        name: "Steem",
        symbol: "steem",
        id: "steem"
    },
    {
        image: "/14013/small/radicle.png?1614402918",
        name: "Radicle",
        symbol: "rad",
        id: "radicle"
    },
    {
        image: "/531/small/stratis.png?1547034209",
        name: "Stratis",
        symbol: "strax",
        id: "stratis"
    },
    {
        image: "/13932/small/Frame_63_2.png?1612936435",
        name: "Evolution Finance",
        symbol: "evn",
        id: "evolution-finance"
    },
    {
        image: "/14165/small/Logo200.png?1614748442",
        name: "Alpaca Finance",
        symbol: "alpaca",
        id: "alpaca-finance"
    },
    {
        image: "/1824/small/300x300_logo.png?1570520533",
        name: "UTRUST",
        symbol: "utk",
        id: "utrust"
    },
    {
        image: "/5247/small/META_Logo_black.png?1548833790",
        name: "Metadium",
        symbol: "meta",
        id: "metadium"
    },
    {
        image: "/3373/small/IuNzUb5b_400x400.jpg?1589526336",
        name: "Keep Network",
        symbol: "keep",
        id: "keep-network"
    },
    {
        image: "/613/small/ark.png?1547034308",
        name: "Ark",
        symbol: "ark",
        id: "ark"
    },
    {
        image: "/5992/small/gemini-dollar-gusd.png?1536745278",
        name: "Gemini Dollar",
        symbol: "gusd",
        id: "gemini-dollar"
    },
    {
        image: "/2138/small/singularitynet.png?1548609559",
        name: "SingularityNET",
        symbol: "agix",
        id: "singularitynet"
    },
    {
        image: "/12465/small/defi_pulse_index_set.png?1600051053",
        name: "DeFiPulse Index",
        symbol: "dpi",
        id: "defipulse-index"
    },
    {
        image: "/1031/small/Request_icon.png?1550832088",
        name: "Request",
        symbol: "req",
        id: "request-network"
    },
    {
        image: "/1365/small/ethlend.png?1547394586",
        name: "Aave [OLD]",
        symbol: "lend",
        id: "ethlend"
    },
    {
        image: "/13585/small/ZKSwap_logo-light.872a149.png?1622541728",
        name: "ZKSwap",
        symbol: "zks",
        id: "zkswap"
    },
    {
        image: "/11636/small/uTDd98ZN_400x400.jpg?1592200150",
        name: "Render Token",
        symbol: "rndr",
        id: "render-token"
    },
    {
        image: "/14899/small/RwdVsGcw_400x400.jpg?1618923851",
        name: "Kyber Network Crystal",
        symbol: "knc",
        id: "kyber-network-crystal"
    }
]

export default coins;