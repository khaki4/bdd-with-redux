import { FETCH_BITCOIN } from './constants'

export const fetchBitcoin = () => (dispatch) =>
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }))