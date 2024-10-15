const features = {
  header: {
    templates: false,
  },
  home: {
    plan: true,
  },
  allNFTsMenu: {
    AllNFTs: true,
    Leaderboard: false,
    Marketplace: false,
    Trending: true,
  },
  profile: {
    Generated: true,
    Minted: true,
    OnSale: false,
    Bought: false,
    Favorite: true,
  },
  profileSettings: {
    verifyProfile: false,
    creditsBalance: true,
    purchaseHistory: true,
  },
  myNFTsMenu: {
    AllNFTs: true,
    Favourites: true,
    NotMinted: true,
    onSale: false,
  },
  Chatbot: false,
  NFTDetailPage: {
    onSale: false,
    views: false,
    opensea: false,
    rarible: false,
  },
  NFTCard: {
    views: false,
    onSale: false,
  },
  mintScreen: {
    showMarketPlace: false,
    allowMinting: true,
    pricingAndMintStages: false,
    revealMechanism: false,
    earning: false,
    links: false,
  },
  networks: {
    mainnet: true,
    bsc: true,
    polygon: true,
    avalanche: true,
    opBnbMainnet: true,
    opBnbTestnet: true,
    sepolia: true,
    bscTestnet: true,
    skaleTitanTestnet: true,
    scroll: true,
    scrollSepolia: true,
    polygonMumbai: true,
    avalancheFuji: true
  },
  credits: {
    paymentScreen: false
  }
}

export default features
