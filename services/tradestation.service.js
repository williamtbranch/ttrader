import axios from 'axios'

const liveUrl = 'https://api.tradestation.com/v2'
const simUrl = 'https://sim-api.tradestation.com/v2'

const TradestationService = {
    getSymbol(symbol) {
        return axios.get(simUrl + "symbol/" + symbol)
    }
}

export default TradestationService