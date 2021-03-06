require('dotenv').config();

const config = new Map()

const BASE_DELAY = 30000 //30 seconds

config.set('API_KEY',process.env.API_KEY)
config.set('API_SECRET',process.env.API_SECRET)

config.set('DELAY_MAP',{
    //For every timeframe returns a suitable delay in ms for trader to wait before getting data again.
    '1m': BASE_DELAY,
    '5m': BASE_DELAY * 5,
    '15m': BASE_DELAY * 15,
    '30m': BASE_DELAY * 30,
    '1h': BASE_DELAY * 60,
    '1d': BASE_DELAY * 60 * 24
})

config.set('chainUrl','https://bsc-dataseed1.binance.org:443')

config.set('routerContractAddress','0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F')

config.set('botTutorial',`
/add <token address> to add a token to your token list.
/track <token symbol> <timeframe> to track token price in a certain timeframe.
/stop <token symbol> to stop bot tracking prices for a symbol.
/balance <token symbol> <wallet address> to get your wallet balance of a token, token must be in your token list first.
/price <token symbol> returns token price in BUSD.
`);




module.exports = config;

